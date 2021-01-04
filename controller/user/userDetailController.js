const userModel = require('../../models/userModel');

exports.index = async (req, res, next) => {
    if (!req.user)
    {
        res.redirect('/login');
    }
    let info = await userModel.get(req.query.userID);
    res.render('user/userDetail.hbs',{info: info});
}