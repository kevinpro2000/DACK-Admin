const adminModel = require('../../models/adminModel')

exports.getList = async(req, res) => {
    if (!req.user)
    {
        res.redirect('/login');
    }
    const returnObject = await adminModel.list(req.query.page);
    res.render('admin/admin', {admins: returnObject.admins,
        first: returnObject.first,
        prev: returnObject.prev,
        prevPage: returnObject.prevPage,
        page: returnObject.Page,
        next: returnObject.next,
        nextPage: returnObject.nextPage,
        last: returnObject.last,
        pages: returnObject.pages});
}

exports.block = async(req, res, next) => {
    let id = req.query.adminID;
    res.json(await adminModel.block(id));
}

exports.checkIdentity = async(req, res, next) => {
    let id = req.query.adminID;
    if (id == req.user._id){
        res.json(true);
    }
    else{
        res.json(false);
    }
}