var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */
router.get('/', userController.searchbyName);

router.get('/detail-action', (req,res) => {
    let id = req.query.userID;
    res.redirect('/userDetail/?userID=' + id);
});
router.get('/block-action', userController.block);

module.exports = router;
