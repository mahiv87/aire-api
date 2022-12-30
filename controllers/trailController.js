const { Trail } = require('../models/Trail');

module.exports = {
	//GET ALL TRAILS
	getTrails(req, res) {
		Trail.find()
			.then((trails) => res.json(trails))
			.catch((err) => res.status(500).json(err));
	},

	// GET A SINGLE TRAIL BY ID
	getSingleTrail(req, res) {
		Trail.findOne({ _id: req.params.trailId })
			.select('-__v')
			.then((trail) =>
				!trail
					? res.status(404).json({ message: 'No trail found with that Id' })
					: res.json(trail)
			);
	},

	// ADD A TRAIL TO DATABASE
	createTrail(req, res) {
		Trail.create(req.body)
			.then((trail) => res.json(trail))
			.catch((err) => res.status(500).json(err));
	},

	// UPDATE THE DATA OF A TRAIL BY USING ID
	updateTrail(req, res) {
		Trail.findOneAndUpdate(
			{ _id: req.params.trailId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((trail) =>
				!trail
					? res.status(404).json({ message: 'No trail found with that Id' })
					: res.json(trail)
			)
			.catch((err) => res.status(500).json(err));
	},

	// DELETE A TRAIL BY ID
	deleteTrail(req, res) {
		Trail.findOneAndDelete({ _id: req.params.trailId })
			.then((trail) =>
				!trail
					? res.status(404).json({ message: 'No trail found with that Id' })
					: res.json(trail)
			)
			.catch((err) => res.status(500).json(err));
	}
};
