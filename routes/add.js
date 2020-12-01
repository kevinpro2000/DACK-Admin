var express = require('express');
var router = express.Router();

const addController = require('../controller/addController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', null);
});

router.get('/turn-back', (req, res) => {
  res.redirect('/');
});

router.post('/add-database', addController.index);

module.exports = router;