const { Trail } = require('../models');

module.exports = {
	//GET ALL TRAILS
	getTrails(req, res) {
		Trail.find()
			.then((trails) => res.json(trails))
			.catch((err) => res.status(500).json(err));
	}
};
