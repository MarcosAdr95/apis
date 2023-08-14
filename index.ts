import express from 'express';

import apis from './src/apis';

const app = express();

app.get(/bancocentral\/[^/]+/, (req, res) => {
	/*
	 * DEIXAR DINAMICA AS CHAMADAS
	*/
	res.json(apis.bancoCentral)
});

app.listen(3000, () => console.log('Ambiente Inicializado'))