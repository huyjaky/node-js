const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://jajajajau:huyhuyhuy12@jajajajau.itforiw.mongodb.net/kynangmem');
        console.log('Done!');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };
