const router = require('express').Router();
const trailRoutes = require('./trailRoutes');

router.use('/trails', trailRoutes);

module.exports = router;
