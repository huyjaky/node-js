class producDetailController {
    producDetailController(req, res, next) {
        res.render('productDetail');
    }
}

module.exports = new producDetailController();
