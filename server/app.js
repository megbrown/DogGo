'use strict';

const express = require('express');
const methodOverride = require('method-override');
const app = express();
let bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('models', require('./models'));

app.set('view engine', 'pug');

//static assets
app.use('/public', express.static(__dirname + '/static'));

let routes = require('./routes/');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
<<<<<<< HEAD:app.js
// Begin middleware stack
=======
app.use(flash());

// validation - must be after bodyParser as it uses bodyParser to access parameters
app.use(expressValidator());

// note that this needs to be after the above stuff
>>>>>>> master:server/app.js
app.use(routes);

// allows delete and put function in forms by overiding the post method
app.use(methodOverride('_method'));

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
