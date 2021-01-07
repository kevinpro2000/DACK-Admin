var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController');
const loginform = loginController.sendform;
const passport = require('../passport');

router.get('/', loginform);

// router.post('/login-action', 
//     passport.authenticate('local'),
//     function(req,res){
//         res.redirect('/');
//     });

router.get('/failedLogin', (req, res) => {
    res.render('failedLogin.hbs');
})

router.post('/login-action',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login/failedLogin'})
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;