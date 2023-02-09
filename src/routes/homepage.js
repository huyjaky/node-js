const express = require('express');
const route = express.Router();
const homepageController = require('../app/controllers/homepageController');

route.get('', homepageController.homepage);

module.exports = route;
