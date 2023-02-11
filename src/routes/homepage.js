const express = require('express');
const route = express.Router();
const homepageController = require('../app/controllers/homepageController');
const productDetail = require('../app/controllers/productDetailController');

route.get('/:slug', productDetail.product);
route.get('', homepageController.homepage);

module.exports = route;
