var express = require('express');
var router = express.Router();
const adminController = require('../../controller/admin/adminController');

router.get('/', adminController.getList);

router.get('/block-action', adminController.block);

router.get('/checkIdentity', adminController.checkIdentity);

module.exports = router;