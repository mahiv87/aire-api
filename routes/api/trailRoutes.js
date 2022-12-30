const router = require('express').Router();
const {
	getTrails,
	getSingleTrail,
	createTrail,
	deleteTrail
} = require('../../controllers/trailController');

router.route('/').get(getTrails).post(createTrail);

router.route('/trailId').get(getSingleTrail).delete(deleteTrail);

module.exports = router;
