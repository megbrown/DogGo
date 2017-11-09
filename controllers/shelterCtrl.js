'use strict';

module.exports.getAllShelters = (req, res, next) => {
	const { Shelter } = req.app.get('models');
	Shelter
		.findAll()
		.then(results => {
			// res.json(results);
			res.render('all-shelters', { results });
		})
		.catch(err => {
			next(err);
		})
};

module.exports.getSingleShelter = (req, res, next) => {
	const { Shelter } = req.app.get('models');
	Shelter
		.findById(req.params.id)
		.then(result => {
			// res.json(result);
			res.render('single-shelter', { result });
		})
		.catch(err => {
			next(err);
		})
};

module.exports.showNewShelterForm = (req, res, next) => {
	res.render('add-shelter');
}

module.exports.showEditShelterForm = (req, res, next) => {
	const { Shelter } = req.app.get('models');
	Shelter
		.findById(req.params.id)
		.then(result => {
			// res.json(result);
			res.render('edit-shelter', { result });
		})
		.catch(err => {
			next(err);
		})
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