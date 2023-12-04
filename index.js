const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('ok');
})

app.listen(5173, () => {
	console.log('5173');
});

