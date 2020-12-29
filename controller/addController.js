const laptopModel = require('../models/laptopModel');

exports.index = async (req, res, next) => {
    let temp = "1";
    let product = {name: req.body.name, 
                   cpu: req.body.cpu,
                   image: req.body.Image,
                   ram: req.body.ram,
                   monitor: req.body.monitor,
                   vga: req.body.vga,
                   memory: req.body.memory,
                   detail: req.body.detail,
                   price: req.body.price,
                   brand: req.body.brand,
                   delete_flag: true,
                   type: req.body.type};
    await laptopModel.add(product);               
    res.redirect('/');
}
