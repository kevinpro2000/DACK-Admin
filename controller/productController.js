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