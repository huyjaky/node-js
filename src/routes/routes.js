const check = require('./check');


function route (app) {
    app.use('/check', check);
}

module.exports = route;