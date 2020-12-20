var express = require('express');
var router = express.Router();

const detailController = require('../controller/detailController');
const productController = require('../controller/productController');

router.get('/', detailController.index);

router.get('/turn-back', (req, res) => {
    res.redirect('/');
});

router.get('/delete', productController.delete);

module.exports = router;