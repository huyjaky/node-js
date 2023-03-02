const product = require('../models/productdetail');
const user = require('../models/user');
const fil = require('./filter/fil');

class homepageController {
    async homepage(req, res, next) {
        // res.send('check')
        const [products_hp, products_kb, products_mn, user_dt] = await Promise.all([
            product.find({ descript: 'headphone' }),
            product.find({
                $or: [{ descript: 'keyboard' }, { descript: 'keycap' }],
            }),
            product.find({ descript: 'monitor' }),
            user.findOne({userName: 'Admin'})
        ]);

        const products_hp_temp = fil.filter(products_hp);
        const products_kb_temp = fil.filter(products_kb);
        const products_mn_temp = fil.filter(products_mn);
        const user_temp = user_dt.toObject();
        const cart = user_dt.cart;


        const data = {
            products_hp: products_hp_temp,
            products_kb: products_kb_temp,
            products_mn: products_mn_temp,
            user: user_temp,
            cart: cart.length
        };

        res.render('homepage', {data})
    }
}

module.exports = new homepageController();
