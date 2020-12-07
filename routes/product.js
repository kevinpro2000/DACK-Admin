var express = require('express');
var router = express.Router();

const productController = require('../controller/productController');

router.get('/', productController.searchbyName);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('product', { title: 'Express' });
// });
router.get('/search-action', (req, res) => {
    res.redirect('/product/?page=' + req.query.page + '&searchName=' + req.query.searchName + '&laptop_type=' + req.query.laptop_type + '&laptop_brand=' + req.query.laptop_brand);
});


router.get('/detail-action', (req, res) => {
    let id = req.query.product;
    res.redirect('/detail/?product=' + id);
});

router.get('/update-action', (req, res) => {
    let id = req.query.product;
    res.redirect('/update/?product=' + id);
});

router.get('/delete', productController.delete);

/*router.get('/:page', productController.paginate);*/

module.exports = router;