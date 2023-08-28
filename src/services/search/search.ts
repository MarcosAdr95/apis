import axios from 'axios';

class Search {
	private axios = axios;

	constructor() {}

	// mudar para sempre enviar um objeto
	private async get(url:string, config={}) {
		try {
			const {status, data} = await this.axios.get(url, config);

			return { status, data };
		} catch(e:any) {
			return  {
				status: e?.response?.status,
				data: e?.response?.data
			};
		}

	}
}

export default new Search();