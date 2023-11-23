const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/public')));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

db.once('open', () => {
	app.listen(port, () => {
		console.log(`API server running on port ${port}`);
	});
});
