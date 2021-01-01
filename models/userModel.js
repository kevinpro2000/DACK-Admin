const {db} = require('../database/db');
const { ObjectId} = require('mongodb');

exports.list = async() => {
    const userCollection = db().collection("user");
    const users = await userCollection.find({}).toArray();
    return users;
}

exports.get = async(id) => {
    const userCollection = db().collection('user');
    const user = await userCollection.findOne({_id: ObjectId(id)});
    return user;
}

exports.searchName = async(page, name) =>{
    const userCollection = db().collection('user');

    let perPage = 10;
    let Page = +page || 1;
    let pages;
    let users;

    if(name)
    {
        pages = Math.ceil(await userCollection.find({"user.username": {$regex : ".*" + name + ".*"}}).count()/perPage);
        users = await userCollection.find({"user.username": {$regex : ".*" + name + ".*"}})
        .skip((perPage * Page) - perPage)
        .limit(perPage).toArray();
    }
    else {
        pages = Math.ceil(await userCollection.find({}).count() / perPage);

        users = await userCollection.find({}) // find tất cả các data
        .skip((perPage * Page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage).toArray();
    }

    const prev = Page > 1;
    const first = Page > 2;
    const prevPage = Page - 1;
    const nextPage = Page + 1;
    const next = Page < pages;
    const last = Page < (pages - 1);

    const ret = {users: users, first:first, prev: prev, prevPage:prevPage, Page: Page, nextPage: nextPage, next: next, last: last, pages:pages}
    return ret;
}

exports.block = async(id) => {
    const userCollection = db().collection('user');
    const user = await userCollection.findOne({_id: ObjectId(id)});
    let temp = false;
    if (user.isLock == false)
    {
        temp = true;
    }
    await userCollection.updateOne({_id: ObjectId(id)}, {$set: {isLock: temp}});
}