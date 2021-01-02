const passport = require('passport')
 , LocalStrategy = require('passport-local').Strategy;
 const adminService = require('../models/adminModel');

passport.use(new LocalStrategy(
    async function(username, password, done) {
        const user = await adminService.checkCredential(username,password);
        if(!user)
        {
            return done(null, false, {message: 'Incorect username or password'});
        }
        return done(null, user); 
    }
));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    adminService.get(id).then((user) => {
        done(null, user);
    });
});

module.exports = passport;
