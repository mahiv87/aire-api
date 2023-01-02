const connection = require('../config/connection');
const { Trail } = require('../models');
const { trails } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
	console.log('connected');

	await Trail.deleteMany({});

	await Trail.collection.insertMany(trails);

	console.table(trails);
	console.info('Seeding complete! 🌱');
	process.exit(0);
});
