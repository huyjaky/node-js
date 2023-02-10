const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

// tao ra mot slug random
const schema = mongoose.Schema;
const product_detail = new schema(
    {
        id: { type: Number, require: true },
        name: { type: String, require: true },
        descript: { type: String, require: true },
        img: { type: String, require: true },
        slug: { type: String, slug: 'name', unique: true },
        sale: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('products', product_detail);
