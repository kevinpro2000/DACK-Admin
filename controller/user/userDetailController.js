const userModel = require('../../models/userModel');

exports.index = async (req, res, next) => {
    let info = await userModel.get(req.query.userID);
    res.render('user/userDetail.hbs',{info: info});
}