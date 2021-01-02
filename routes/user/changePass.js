var express = require('express');
var router = express.Router();
const changePassController = require('../../controller/user/changePassController');
const sendform = changePassController.senform;

router.get('/', sendform);

router.post('/confirmChange', changePassController.changePass);

module.exports = router;