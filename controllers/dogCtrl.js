'use strict';

module.exports.getSelectedDogs = (req, res, next) => {
	const { Dog } = req.app.get('models');
	Dog
		.findAll({
			where: { status: "selected" }
		})
		.then(results => {
			res.json(results);
			// res.render('select-dogs');
		})
		.catch(err => {
			next(err);
		})
};

module.exports.getAllDogs = (req, res, next) => {
	const { Dog } = req.app.get('models');
	Dog
		.findAll()
		.then(results => {
			// res.json(results);
			res.render('all-dogs');
		})
		.catch(err => {
			next(err);
		})
};

module.exports.getSingleDog = (req, res, next) => {
	const { Dog } = req.app.get('models');
	Dog
		.findById(req.params.id)
		.then(results => {
			res.json(results);
			// res.render('single-dog');
		})
		.catch(err => {
			next(err);
		})
};

module.exports.updateDogStatus = (req, res, next) => {
	res.render('ride-list');
};

