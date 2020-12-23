var express = require('express');
var router = express.Router();

const detailController = require('../controller/detailController');

router.get('/', detailController.index);

router.get('/turn-back', (req, res) => {
    res.redirect('/');
});

router.get('/delete', detailController.delete);

module.exports = router;