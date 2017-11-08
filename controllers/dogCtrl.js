'use strict';

module.exports.getSelectedDogs = (req, res, next) => {
	res.render('select-dogs');
};

module.exports.getAllDogs = (req, res, next) => {
	res.render('all-dogs');
};

module.exports.getSingleDog = (req, res, next) => {
	res.render('single-dog');
};

module.exports.updateDogStatus = (req, res, next) => {
	res.render('ride-list');
};

