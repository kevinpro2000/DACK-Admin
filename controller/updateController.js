const laptopModel = require('../models/laptopModel');

exports.index = async (req, res, next) => {
    if (!req.user)
    {
        res.redirect('/login');
    }
    let laptop = await laptopModel.get(req.query.product);
    console.log(laptop);
    res.render('update', {laptop});
}

exports.update = async (req, res, next) => {
    await laptopModel.update(req.body.id, req.body.name, req.body.cpu, req.body.Image, req.body.ram, req.body.monitor, req.body.vga, req.body.memory, req.body.detail, req.body.price);
    res.redirect('/');
}