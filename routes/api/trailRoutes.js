const router = require('express').Router();
const {
	getTrails,
	getSingleTrail,
	createTrail,
	deleteTrail,
	updateTrail
} = require('../../controllers/trailController');

router.route('/').get(getTrails).post(createTrail);

router
	.route('/:trailId')
	.get(getSingleTrail)
	.put(updateTrail)
	.delete(deleteTrail);

module.exports = router;
