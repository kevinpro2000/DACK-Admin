const laptopModel = require('../models/laptopModel');
const commentModel = require('../models/commentModel')

exports.index = async (req, res, next) => {
    let laptop = await laptopModel.get(req.query.product);
    let comments = await commentModel.listComment(laptop._id, 1);
    res.render('laptops/detail', {laptop: laptop, comment: comments.comments, pages: comments.totalPages});
}

exports.delete = async (req, res, next) => {
    let id = req.query.product;
    console.log(id);
    await laptopModel.delete(id);
    res.redirect('/');
}
