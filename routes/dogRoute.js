'use strict';

const { Router } = require('express');
const router = Router();

const {
	getSelectedDogs,
	getAllDogs,
	getSingleDog,
	updateDogStatus
} = require('../controllers/dogCtrl');

router.get('/select', getSelectedDogs);
router.get('/dogs', getAllDogs);
router.get('/dogs/:id', getSingleDog);
router.post('/select', updateDogStatus);

module.exports = router;