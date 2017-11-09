'use strict';

module.exports.getSelectedDogs = (req, res, next) => {
	const { Dog, Shelter } = req.app.get('models');
	// const selectedDogs = {}
	Dog
		.findAll({
			where: { status: "selected" },
		})
		.then(results => {
			let selectedDogs = results;
			Shelter
			.findAll()
			.then(results => {
			assignSheltersToDogs(selectedDogs, results)
			.then(selectedDogs => {
				// res.json(selectedDogs);
				res.render('select-dogs', { selectedDogs });
				})
			})
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
			res.render('all-dogs', { results });
		})
		.catch(err => {
			next(err);
		})
};

module.exports.getSingleDog = (req, res, next) => {
	const { Dog } = req.app.get('models');
	Dog
		.findById(req.params.id)
		.then(result => {
			// res.json(result);
			res.render('single-dog', { result });
		})
		.catch(err => {
			next(err);
		})
};

module.exports.updateDogStatus = (req, res, next) => {
	res.render('ride-list');
};

function assignSheltersToDogs(selectedDogs, results) {
	return new Promise((resolve, reject) => {
		selectedDogs.forEach(dog => {
			results.forEach(shelter => {
				if (shelter.id == dog.sourceShelterId) {
					dog.sourceShelterName = shelter.shelterName;
				}
				else if (shelter.id == dog.destinationShelterId) {
					dog.destinationShelterName = shelter.shelterName;
				}
			})
		})
		resolve(selectedDogs);
	});
}

