var express = require('express');
var router = express.Router();

const searchController = require('../controller/searchController');

router.get('/', searchController.index);

router.get('/turn-back', (req, res) => {
    res.redirect('/');
});

module.exports = router;