var express = require('express');
var router = express.Router();

const productController = require('../controller/productController');
const product = productController.index;

router.get('/', product);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('product', { title: 'Express' });
// });
router.get('/detail-action', (req, res) => {
    let id = req.query.product;
    res.redirect('/detail/?product=' + id);
});

router.get('/update-action', (req, res) => {
    let id = req.query.product;
    res.redirect('/update/?product=' + id);
});

router.get('/delete', productController.delete);

module.exports = router;