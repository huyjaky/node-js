const homepage = require('./homepage');

function route(app) {
    app.use('/homepage', homepage);
}

module.exports = route;
