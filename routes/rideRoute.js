'use strict';

const { Router } = require('express');
const router = Router();

const {
	getAllRides,
	getCurrentRide
} = require('../controllers/rideCtrl');

router.get('/ride-list', getCurrentRide);
router.get('/ride-history', getAllRides);

module.exports = router;