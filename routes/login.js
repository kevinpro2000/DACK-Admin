var express = require('express');
var router = express.Router();

const loginController = require('../controller/loginController');

router.get('/', loginController.sendform);

module.exports = router;