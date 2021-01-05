const adminModel = require('../../models/adminModel')
const swal = require('sweetalert');

exports.senform = (req, res, next) => {
    if (!req.user)
    {
        res.redirect('/login');
    }
    res.render('user/changePass', {name: req.user.username});
}

exports.changePass = async(req, res, next) => {
    let flag = await adminModel.changePass(req.body.old_password, req.body.password, req.user, req.body.user_name);
    if (flag === true)
    {
        res.send('<script>alert("Thay đổi thành công"); window.location.href = "/"; </script>');
    }
    else{
        res.send('<script>alert("Sai mật khẩu"); window.location.href = "/changePass";</script>');
    }
}