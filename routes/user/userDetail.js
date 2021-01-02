var express = require('express');
var router = express.Router();
const userDetailController = require('../../controller/user/userDetailController');

router.get('/',userDetailController.index);

module.exports = router;