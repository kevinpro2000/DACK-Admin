const {db} = require('../database/db');
const { ObjectId} = require('mongodb');

exports.checkCredential = async(username, pass) => {
    const adminCollection = await db().collection("admin");
    const acc = await adminCollection.findOne({username:username});

    if (!acc)
    {
        return false;
    }
    if (pass == acc.password)
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

exports.changePass = async(oldPass, newPass, oldPassCheck) => {
    console.log(oldPassCheck.password);
    if (oldPass === oldPassCheck.password)
    {
        const adminCollection = await db().collection("admin");
        await adminCollection.updateOne({_id: ObjectId(oldPassCheck._id)}, {$set: {password: newPass}});
        return true;
    }
    return false;
}