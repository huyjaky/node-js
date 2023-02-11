const product = require('../models/productdetail');
const fil = require('./filter/fil');
class homepageController {

    async homepage(req, res, next) {
        // res.send('check')
        const [products_hp, products_kb] = await Promise.all([
            product.find({descript: 'headphone'}),
            product.find({$or: [{descript: 'keyboard'}, {descript:'keycap'}]}),
        ])

        const products_hp_temp = fil.filter(products_hp);
        const products_kb_temp = fil.filter(products_kb)

        const data = {
            products_hp: products_hp_temp,
            products_kb: products_kb_temp,
        }

        res.render('homepage', {data});
    }
}

module.exports = new homepageController();
