const product = require('../models/productdetail');
class homepageController {
    homepage(req, res, next) {
        // res.send('check')
        product
            .find({})
            .limit(4)
            .then((product) => {
                product = product.map((products) => products.toObject());
                res.render('homepage', { product });
            })
            .catch(next);
    }
}

module.exports = new homepageController();
