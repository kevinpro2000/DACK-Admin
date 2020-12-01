var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('update', null);
});

module.exports = router;