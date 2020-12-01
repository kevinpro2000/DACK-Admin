var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', null);
});

router.get('/turn-back', (req, res) => {
  res.redirect('/');
});

module.exports = router;