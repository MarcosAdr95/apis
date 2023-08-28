export interface Sgs {
	idSerie:string;
	length?:string;
	startDate?:string;
	endDate?:string;
	registerMongoDB?:any;
}

export interface csv {
	endpoint:string;
	query: {
		date?:string;
		registerMongoDB?:boolean;
		idSerie?:string | undefined;
		length?:string | undefined;
		startDate?:string | undefined;
		endDate?:string | undefined;
	}
}

export interface Query {
	idSerie:number;
	startDate?:string;
	endDate?:string;
	date?:string;
	length?:number;
	page?:number;
}

export interface Constructor {
	service:string;
	endpoint:string;
	query:Query;
}

export interface CsvApi {
	[key:string]:string;
	// data: string;
	// 'codigo-interno-da-moeda': string;
	// 'moeda-tipo': string;
	// 'codigo-ISO-moeda': string;
	// 'taxa-bid-contra-BRL': string;
	// 'taxa-ask-contra-BRL': string;
	// 'paridade-bid-contra-USD': string;
	// 'paridade-ask-contra-USD': string;
}