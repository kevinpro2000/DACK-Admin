const {db} = require('../database/db');
const { ObjectId} = require('mongodb');

exports.list = async () => {
    const laptopsCollection = db().collection("laptops");
    const laptops = await laptopsCollection.find({}).toArray();
    //console.log(books);
    //console.dir(laptops);
    return laptops;
}

exports.get = async (id) => {
    const laptopCollection = db().collection('laptops');
    const laptop = await laptopCollection.findOne({_id: ObjectId(id)})
    return laptop;
}

exports.delete = async (id) => {
    const laptopCollection = db().collection('laptops');
    await laptopCollection.deleteOne({_id: ObjectId(id)})
}

exports.add = async (product) => {
    const laptopCollection = db().collection('laptops');
    await laptopCollection.insert(product);
}

exports.update = async (id, name, cpu, image, ram, monitor, vga, memory, detail, price) => {
    const laptopCollection = db().collection('laptops');
    console.log(id);
    const laptop = await laptopCollection.findOne({_id: ObjectId(id)})
    console.log(laptop);
    await laptopCollection.updateOne({_id: ObjectId(id)}, {$set: {name: name, 
                                                                  cpu: cpu, 
                                                                  image: image, 
                                                                  ram: ram, 
                                                                  monitor: monitor, 
                                                                  vga: vga, 
                                                                  memory: memory, 
                                                                  detail: detail, 
                                                                  price: price}}
                                                                  );
}

exports.getPerPage = async (page) => {
    const laptopCollection = db().collection('laptops');
    let perPage = 5;
    let Page = +page || 1;
    console.log(Page);

    // const temp = await laptopCollection.find({}).toArray();
    // console.log(temp);

    const ret = await laptopCollection.find({}) // find tất cả các data
    .skip((perPage * Page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
    .limit(perPage).toArray();
    console.log(ret);
    return ret;
};