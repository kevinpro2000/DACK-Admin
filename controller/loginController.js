exports.sendform = (req, res, next) => {
    if(req.user)
    {
        req.logout();
    }
    res.render('login.hbs', null);
}