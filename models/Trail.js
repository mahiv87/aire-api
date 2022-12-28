const { Schema, model } = require('mongoose');

const trailSchema = new Schema({
	trailName: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	description: {
		type: String,
		required: true
	},
	length: {
		type: Number,
		required: true
	},
	elevationGain: {
		type: Number,
		required: true
	},
	routeType: {
		type: String,
		required: true
	},
	difficulty: {
		type: String,
		require: true
	},
	image: {
		type: String
	}
});

const Trail = model('trail', trailSchema);

module.exports = Trail;
