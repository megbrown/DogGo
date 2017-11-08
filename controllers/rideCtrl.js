'use strict';

module.exports.getAllRides = (req, res, next) => {
	res.render('ride-history');
};

module.exports.getCurrentRide = (req, res, next) => {
	res.render('ride-list');
};