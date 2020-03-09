const express = require('express');
const jwt = require('jsonwebtoken');
let app = express();

const secret = 'TopSecret';

app.get('/gener', (req, res) => {
	let token = jwt.sign({ name: 'vasya', lastname: 'kiki' }, secret, { expiresIn: '1d' });
	res.json(token);
});

app.get('/auth', (req, res) => {
	let auth = req.get('Authorization');
	console.log(auth);
	if (!auth) return res.status(400).json('NO TOKEN');
	jwt.verify(auth, secret, (err, data) => {
		if (err) return res.status(200).json(err);
		return res.json(data);
	});
});

app.listen(3000, () => {
	console.log('on port 3000');
});
