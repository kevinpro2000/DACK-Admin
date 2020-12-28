const userModel = require('../models/userModel');

exports.index = async (req, res, next) => {
    let users = await userModel.list();
    res.render('/users',{users});
}

exports.searchbyName = async(req, res, next) => {
    const returnObject = await userModel.searchName(req.query.page, req.query.searchName);
    res.render('users', {users: returnObject.users,
        first: returnObject.first,
        prev: returnObject.prev,
        prevPage: returnObject.prevPage,
        page: returnObject.Page,
        next: returnObject.next,
        nextPage: returnObject.nextPage,
        last: returnObject.last,
        pages: returnObject.pages,
        searchName: req.query.searchName});
}