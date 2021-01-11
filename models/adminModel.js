const {db} = require('../database/db');
const { ObjectId} = require('mongodb');

exports.list = async(page) => {
    const adminCollection = await db().collection("admin");
    
    let perPage = 4;
    let Page = +page || 1;
    let pages;
    let admins;

    pages = Math.ceil(await adminCollection.find({}).count() / perPage);
    admins = await adminCollection.find({}) // find tất cả các data
        .skip((perPage * Page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage).toArray();

    const prev = Page > 1;
    const first = Page > 2;
    const prevPage = Page - 1;
    const nextPage = Page + 1;
    const next = Page < pages;
    const last = Page < (pages - 1);

    const ret = {admins: admins, first:first, prev: prev, prevPage:prevPage, Page: Page, nextPage: nextPage, next: next, last: last, pages:pages};
    return ret;
}

exports.checkCredential = async(username, pass) => {
    const adminCollection = await db().collection("admin");
    const acc = await adminCollection.findOne({username:username});

    if (!acc)
    {
        return false;
    }
    if (pass == acc.password && acc.isLock == false)
    {
        return acc;
    }
    return false;
}

exports.get = async(id) => {
    const adminCollection = await db().collection("admin");
    const admin = await adminCollection.findOne({_id: ObjectId(id)});
    return admin;
}

exports.changePass = async(oldPass, newPass, oldPassCheck, new_name) => {
    let flag;
    const adminCollection = await db().collection("admin");
    if (oldPass === oldPassCheck.password)
    {
        if (oldPassCheck.username !== new_name)
        {
            await adminCollection.updateOne({_id: ObjectId(oldPassCheck._id)}, {$set: {username: new_name}});
        }
        await adminCollection.updateOne({_id: ObjectId(oldPassCheck._id)}, {$set: {password: newPass}});
        flag = true;
    }
    else{
        flag = false;
    }
    return flag;
}

exports.block = async(id) => {
    const adminCollection = db().collection('admin');
    const admin = await adminCollection.findOne({_id: ObjectId(id)});
    let temp = false;
    if (admin.isLock == false)
    {
        temp = true;
    }
    await adminCollection.updateOne({_id: ObjectId(id)}, {$set: {isLock: temp}});
    return temp;
}

