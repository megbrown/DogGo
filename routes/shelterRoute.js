'use strict';

const { Router } = require('express');
const router = Router();

const {
	getAllShelters,
	getSingeShelter,
	addNewShelter,
	editShelter,
	deleteShelter
} = require('../controllers/shelterCtrl');

router.get('/shelters', getAllShelters);
router.get('/shelters/:id', getSingleShelter);
router.post('/new-shelter', addNewShelter);
router.post('/edit-Shelter', editShelter);
router.post('/sheters/:id', deleteShelter);

module.exports = router;