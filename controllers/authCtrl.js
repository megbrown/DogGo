'use strict';
const passport = require('passport');

/** @module Authentication Controller */

// logging in existing users
/**
 * Controller method to render the login form page
 */
module.exports.displayLogin = (req, res, next) => {
	res.render('login');
};

/**
 * Controller method to handle the login form post
 */
module.exports.login = (req, res, next) => {
	// Note we're using different strategy, this time for logging in
	passport.authenticate('local-signin', (err, user, msgObj) => {
		// If login fails, the error is sent back by the passport strategy as { message: "some msg"}
		// console.log('error msg?', msgObj);

		if (err) {
			next(err);
		} //or return next(err) once handler set up in app.js
		if (!user) {
			return res.render('login', msgObj);
		}

		req.logIn(user, err => {
			if (err) {
				return next(err);
			}
			// console.log('authenticated. Rerouting to welcome!', user);
			req.flash('welcomeBackMsg', `Welcome back, `);
			res.redirect('/');
		});
	})(req, res, next);
};

module.exports.welcome = (req, res, next) => {
	res.render('home');
};

/**
 * Controller method to handle the logout click, destroy the session, and redirect users to the home page
 */
module.exports.logout = (req, res) => {
	req.session.destroy(function(err) {
		res.redirect('/');
	});
};