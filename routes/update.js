var express = require('express');
var router = express.Router();

const updateController = require('../controller/updateController');

router.get('/', updateController.index);

router.get('/turn-back', (req, res) => {
    res.redirect('/');
});

module.exports = router;