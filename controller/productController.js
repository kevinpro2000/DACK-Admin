const laptopModel = require('../models/laptopModel');

exports.index = async (req, res, next) => {
    let laptops = await laptopModel.list();
    res.render('laptops/product', {laptops});
}
