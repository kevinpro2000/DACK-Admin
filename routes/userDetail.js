var express = require('express');
var router = express.Router();
const userDetailController = require('../controller/userDetailController');

router.get('/',userDetailController.index);

module.exports = router;