
const express = require('express');
const route = express.Router();
const checkController = require('../app/controllers/check')

route.get('', checkController.check);

module.exports = route;