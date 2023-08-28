import CsvApis from './csv';
import {Query, Constructor} from './interface';

class BancoCentral extends CsvApis {
	private service:string;
	private endpoint:string;
	private query:Query;


	constructor({service, endpoint, query}:Constructor) {
		super();

		this.service = service;
		this.endpoint = endpoint;
		this.query = query;
	}

	public async init() {
		return await (this as any)[this.service]({
			endpoint: this.endpoint,
			query: this.query
		});
	}
}

export default BancoCentral;