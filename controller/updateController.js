const laptopModel = require('../models/laptopModel');

exports.
index = async (req, res, next) => {
    if (!req.user)
    {
        res.redirect('/login');
    }
    let laptop = await laptopModel.get(req.query.product);
    console.log(laptop);
    res.render('update', {laptop});
}

exports.update = async (req, res, next) => {
    let price = req.body.price.replace('.','');
    let priceCal = parseInt(price);
    let temp = price.length;
    const len = Math.ceil(Math.log10(priceCal + 1));
    priceCal = priceCal * Math.pow(10,temp - len - 1);
    await laptopModel.update(req.body.id, req.body.name, req.body.cpu, req.body.Image, req.body.ram, req.body.monitor, req.body.vga, req.body.memory, req.body.detail, req.body.price, priceCal);
    res.redirect('/');
}