const laptopModel = require('../models/laptopModel');

exports.index = async (req, res, next) => {
    let price = req.body.price.replace('.','');
    let priceCal = parseInt(price);
    let temp = price.length;
    const len = Math.ceil(Math.log10(priceCal + 1));
    priceCal = priceCal * Math.pow(10,temp - len - 1);
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
                   type: req.body.type,
                   view: 0,
                   priceCal: priceCal};
    await laptopModel.add(product);               
    res.redirect('/');
}
