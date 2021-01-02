const adminModel = require('../../models/adminModel')

exports.senform = (req, res, next) => {
    res.render('user/changePass', null);
}

exports.changePass = (req, res, next) => {
    if (adminModel.changePass(req.body.old_password, req.body.password, req.user) == true)
    {
        res.send('<script>alert("Thay đổi thành công"); window.location.href = "/"; </script>');
    }
    else{
        res.send('<script>alert("Sai mật khẩu"); window.location.href = "/changePass"; </script>');
        // swal ( "Oops" ,  "Something went wrong!" ,  "error" );
    }
}