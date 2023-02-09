const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/kynangmem');
        console.log('Done!');
    } catch (error) {
        console.log('Connect failure');
    }
}
