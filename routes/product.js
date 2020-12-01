var express = require('express');
var router = express.Router();

const productController = require('../controller/productController');
const product = productController.index;

router.get('/', product);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('product', { title: 'Express' });
// });
router.get('/detail-update', (req, res) => {
    let Uri = 'update?product=' + req.query.product; 
    res.redirect(Uri);
});

module.exports = router;