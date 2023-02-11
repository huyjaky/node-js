const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

// tao ra mot slug random
const schema = mongoose.Schema;
const user = new schema(
    {
        id: { type: Number, require: true },
        userName: { type: String, require: true },
        password: { type: String, require: true },
        cart: { type: String },
        history: { type: String },
        avar:{ type: String, require: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('users', user);

