const homepage = require('./homepage');

function route(app) {
    app.use('/homepage', homepage);

    app.get('/check', (req, res, next) => {
        res.render('slider');
    });
}

module.exports = route;
