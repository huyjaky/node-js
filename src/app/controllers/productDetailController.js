const product = require('../models/productdetail');

class producDetailController {
    producDetailController(req, res, next) {
        product
            .find({})
            .then((product) => {
                product = product.map((products) => products.toObject());
                console.log(product.length);

                res.render('productDetail', { product });
            })
            .catch(next);
    }

    async product(req, res, next) {
        const [products, product_ac] = await Promise.all([
            product.find({}),
            product.findOne({slug: req.params.slug})
        ])
        
        const data = {
            products: products.map((product) => product.toObject()),
            product_ac: product_ac.toObject()
        }
        res.render('productDetail', {data})
    }
}

module.exports = new producDetailController();
