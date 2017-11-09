'use strict';

module.exports.getAllRides = (req, res, next) => {
	const { Ride, Dog, Shelter } = req.app.get('models');
	Ride
		.findAll({
			where: { complete: true },
			include: [
				{
					model: Dog
				}
			]
		})
		.then(results => {
			// res.json(results);
			res.render('ride-history', { results });
		})
		.catch(err => {
			next(err);
		})
};

module.exports.getCurrentRide = (req, res, next) => {
	const {Ride, Dog } = req.app.get('models');
	Ride
		.findAll({
			where: {complete: false },
			include: [
				{
					model: Dog,
				}

			]
		})
		.then(results => {
			let currentRide = results[0];
			res.render('ride-list', { currentRide });
		})
};