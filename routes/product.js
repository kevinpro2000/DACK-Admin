var express = require('express');
var router = express.Router();

const productController = require('../controller/productController');
const product = productController.index;

router.get('/', productController.paginate);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('product', { title: 'Express' });
// });
router.get('/search-action', (req, res) => {
    let searchName = req.query.searchName;
    if(searchName == '')
    {
        res.redirect('/');
    }
    else
    {
        res.redirect('/search/?searchName=' + searchName );
    }
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