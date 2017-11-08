'use strict';

module.exports.getAllShelters = (req, res, next) => {
	res.render('all-shelters');
};

module.exports.getSingleShelter = (req, res, next) => {
	res.render('single-shelter');
};

module.exports.showNewShelterForm = (req, res, next) => {
	res.render('add-shelter');
}

module.exports.showEditShelterForm = (req, res, next) => {
	res.render('edit-shelter');
}

module.exports.addNewShelter = (req, res, next) => {
	res.render('all-shelters');
};

module.exports.editShelter = (req, res, next) => {
	res.render('all-shelters');
};

module.exports.deleteShelter = (req, res, next) => {
	res.render('all-shelters');
};