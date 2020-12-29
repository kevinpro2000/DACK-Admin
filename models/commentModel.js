const {db} = require('../database/db');
const { ObjectID } = require('mongodb');

exports.listComment = async (id, page) => {
    const commentCollection = db().collection("comments");
    let perPage = 3;
    let pages =  Math.ceil(await commentCollection.find({id_product: id}).count() / perPage);
    let comments = await commentCollection.find({id_product: id}).sort({_id:-1}).skip((page - 1) * perPage).limit(perPage).toArray();
    let ObRet = {
        comments: comments,
        totalPages: pages
    }
    return ObRet;
}