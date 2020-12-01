const laptopModel = require('../models/laptopModel');

exports.index = async (req, res, next) => {
    let product = {name: req.body.name, 
                   cpu: req.body.cpu,
                   image: req.body.Image,
                   ram: req.body.ram,
                   monitor: req.body.monitor,
                   vga: req.body.vga,
                   memory: req.body.memory,
                   detail: req.body.detail,
                   price: req.body.price};
    await laptopModel.add(product);               
    res.redirect('/');
}
