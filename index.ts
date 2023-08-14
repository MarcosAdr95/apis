import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.json({name: 'api'})
});

app.listen(3000, () => console.log('Ambiente Inicializado'))