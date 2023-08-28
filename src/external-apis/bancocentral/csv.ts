// ENTENDER declaração
import * as csvString from 'csv-string';
import search from '../../services/search/search';
import Mongo from '../../services/db/mongo/mongo';

import {CsvApi, csv, Sgs} from './interface';

class CsvApis {
	private search:any;
	private mongodb:any;

	constructor() {
		this.search = search;
		this.mongodb = new Mongo();
	}

	private reportError({endpoint, status, body}:any) {
		throw `Banco Central CSV ${endpoint} status: ${status}, response: ${body}`;
	}

	private getDateString():string {
		return new Date().toLocaleDateString().replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3$2$1')
	}

	// ENTENDER E AJUSTAR TIPAGEM COM RECORD<T>
	private parserCSV(csv:string, labels:string=''):Array<CsvApi> {
		return csvString.parse(`${labels}${csv}`, { comma: ';', output: 'objects' });
	}

	private async closure(date:any, registerMongoDB:any) {
		const {status, data:body} = await this.search.get(`https://www4.bcb.gov.br/Download/fechamento/${date}.csv`);

		if(status != 200)
			this.reportError({endpoint: 'fechamento', status, body});

		const parsed = this.parserCSV(body, 'data;codigo-interno-da-moeda;moeda-tipo;codigo-iso-moeda;taxa-bid-contra-BRL;taxa-ask-contra-BRL;paridade-bid-contra-USD;paridade-ask-contra-USD\n');

		if(registerMongoDB && parsed.length)
			await this.mongodb.register({
				database: 'bancocentral',
				collection: 'csv-fechamento',
				input: parsed,
				prompts: {
					findOne: {
						data: 'data',
						'codigo-iso-moeda': 'codigo-iso-moeda'
					}
				}
			})

		return parsed;
	}

	private sgsSources({idSerie, length, startDate, endDate}:Sgs):string {
		if(startDate && endDate)
			return `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${idSerie}/dados?formato=csv&dataInicial=${startDate}&dataFinal=${endDate}`;

		if(length)
			return `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${idSerie}/dados/ultimos/${length}?formato=csv`;

		return `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${idSerie}/dados?formato=csv`;
	}

	private async sgs({idSerie, length, startDate, endDate, registerMongoDB}:Sgs) {
		const {status, data:body}  = await this.search.get(this.sgsSources({idSerie, length, startDate,  endDate}))

		if(status != 200)
			this.reportError({endpoint: 'últimos', status, body});

			const parsed = this.parserCSV(body);

			if(registerMongoDB && parsed.length)
				await this.mongodb.register({
					database: 'bancocentral',
					collection: `csv-${idSerie}`,
					input: parsed,
					prompts: {
						findOne: {
							data: 'data',
							'valor': 'valor'
						}
					}
				})

		return parsed;
	}

	private async csv(config:csv) {
		const {
			endpoint,
			query:{
				date=this.getDateString(),
				registerMongoDB,
				idSerie,
				length,
				startDate,
				endDate
			}
		} = config;

		switch(endpoint) {
			case 'fechamento':
				return await this.closure(date, registerMongoDB);
				break;
			case 'ultimos':
				if(!idSerie) throw 'Paramêtro "idSerie" inexistente';
				return await this.sgs({idSerie, length, startDate, endDate, registerMongoDB});
				break;
			default:
				throw 'Nenhum endpoint encontrado';
		}
	}
}

export default CsvApis;