class homepageController {
    homepage(req, res, next) {
        // res.send('check')
        res.render('homepage');
    }
}

module.exports = new homepageController();
