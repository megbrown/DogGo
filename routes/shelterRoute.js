'use strict';

const { Router } = require('express');
const router = Router();

const {
	getAllShelters,
	getSingleShelter,
	showNewShelterForm,
	showEditShelterForm,
	addNewShelter,
	editShelter,
	deleteShelter
} = require('../controllers/shelterCtrl');

router.get('/shelters', getAllShelters);
router.get('/shelters/:id', getSingleShelter);
router.get('/new-shelter', showNewShelterForm);
router.get('/edit-shelter/:id', showEditShelterForm);
router.post('/new-shelter', addNewShelter);
router.post('/edit-Shelter/:id', editShelter);
router.post('/sheters/:id', deleteShelter);

module.exports = router;