const express = require('express');
const path = require('path');

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index.pug', {
		title: 'bobo',
		vv: '<i>This is an excellent day</i>',
		arr: [
			{ title: 'orange', price: 100 },
			{ title: 'brocolie', price: 200 },
			{ title: 'montana', price: 150 },
			{ title: 'cucumber', price: 500 }
		]
	});
});

app.listen(3000, () => {
	console.log('The server is running on the port 3000');
});
