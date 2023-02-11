const product = require('../models/productdetail');

class producDetailController {
    async product(req, res, next) {
        const [products, product_ac] = await Promise.all([
            product.find({}),
            product.findOne({ slug: req.params.slug }),
        ]);

        const product_temp = products.map((product) => product.toObject());
        const groupProducts = [];
        var temp = [];
        for (let i = 0; i < product_temp.length; i++) {
            temp.push(product_temp[i]);
            if (temp.length === 4) {
                groupProducts.push(temp);
                temp = [];
            }
        }

        if (temp.length > 0) {
            groupProducts.push(temp);
        }

        // console.log(temp);
        // res.json(groupProducts)

        const data = {
            products: groupProducts,
            product_ac: product_ac.toObject(),
        };
        res.render('productDetail', { data });
    }
}

module.exports = new producDetailController();
