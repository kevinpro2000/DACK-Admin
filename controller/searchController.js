const laptopModel = require('../models/laptopModel');

exports.index = async (req, res, next) => {
    console.log(req.query.searchName);
    if (req.query.searchName !== undefined)  
    {
        laptop = await laptopModel.searchName(req.query.searchName);
        console.log(laptop);
    }
    res.render('laptops/search', {laptop});
}