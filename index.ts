import express from 'express';
import timeout from 'connect-timeout';

import apis from './src/external-apis/apis';
import { Apis } from './src/external-apis/interface';

const app = express();

app.use(timeout(10000));

// http://HOSTNAME/API-NOME/SERVICE/ENDPOINT
app.get('*', (req, res) => {
	const query:{[key:string]:any} = req.query;
	const [,name, service, endpoint]:Array<string> = req.path.split('/');

	new (apis as Apis)[name]({service, endpoint, query})
		.init()
		.then((response:any) => res.json(response))
		.catch((error:any) => res.json({ errorServer:true, message: error }));
});

app.listen(3000, () => console.log('Server start'))