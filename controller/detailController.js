const laptopModel = require('../models/laptopModel');

exports.index = async (req, res, next) => {
    let laptop = await laptopModel.get(req.query.product);
    //console.log(laptop);
    res.render('detail', {laptop});
}

exports.delete = async (req, res, next) => {
    let id = req.query.product;
    console.log(id);
    await laptopModel.delete(id);
    res.redirect('/');
}
