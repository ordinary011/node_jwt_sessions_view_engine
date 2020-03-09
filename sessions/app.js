const express = require('express');
const session = require('express-session');

const app = express();

app.use(
	session({
		secret: 'qwertyuiop71',
		resave: false,
		saveUninitialized: false
	})
);

app.get('/', (req, res) => {
	res.send('Welcome');
});

app.get('/set-value', (req, res) => {
	req.session.key = req.query.name;
	res.end('the key has been added');
});

app.get('/get-value', (req, res) => {
	res.send(req.session.key);
});

app.listen(3000, () => {
	console.log('server is running on port 3000');
});
