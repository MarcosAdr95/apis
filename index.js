const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Ta ai');
});

app.listen(9999, () => console.log('Estamos On-line!'));