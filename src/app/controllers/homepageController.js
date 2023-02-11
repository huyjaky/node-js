const product = require('../models/productdetail');
const user = require('../models/user');
const fil = require('./filter/fil');

class homepageController {
    async homepage(req, res, next) {
        // res.send('check')
        const [products_hp, products_kb, user_dt] = await Promise.all([
            product.find({ descript: 'headphone' }),
            product.find({
                $or: [{ descript: 'keyboard' }, { descript: 'keycap' }],
            }),
            user.findOne({userName: 'Admin'})
        ]);

        const products_hp_temp = fil.filter(products_hp);
        const products_kb_temp = fil.filter(products_kb);
        const user_temp = user_dt.toObject();

        const data = {
            products_hp: products_hp_temp,
            products_kb: products_kb_temp,
            user: user_temp,
        };

        res.render('homepage', {data})
    }
}

module.exports = new homepageController();
