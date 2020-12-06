const laptopModel = require('../models/laptopModel');

exports.index = async (req, res, next) => {
    let laptops = await laptopModel.list();
    res.render('laptops/product', {laptops});
}

exports.delete = async (req, res, next) => {
    let id = req.query.product;
    console.log(id);
    await laptopModel.delete(id);
    res.redirect('/');
}

exports.paginate = async (req, res, next) => {
    const laptops = await laptopModel.getPerPage(req.params.page);
    res.render('laptops/product', {laptops});
}

exports.paginate = async (req, res, next) => {
    const returnObject = await laptopModel.getPerPage(req.query.page);
    console.log(returnObject);
    res.render('laptops/product', {laptops: returnObject.laptops,
        first: returnObject.first,
        prev: returnObject.prev,
        prevPage: returnObject.prevPage,
        page: returnObject.Page,
        next: returnObject.next,
        nextPage: returnObject.nextPage,
        last: returnObject.last,
        pages: returnObject.pages});
}

exports.searchbyName = async (req, res, next) => {
    let laptops = await laptopModel.searchName(req.query.searchName);
    console.log(laptops);
    res.render('laptops/product', {laptops});
}