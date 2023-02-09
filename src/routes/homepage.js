const express = require('express');
const route = express.Router();
const homepageController = require('../app/controllers/homepageController');
const productDetail = require('../app/controllers/productDetailController');

route.get('/product-detail', productDetail.producDetailController);
route.get('', homepageController.homepage);

module.exports = route;
