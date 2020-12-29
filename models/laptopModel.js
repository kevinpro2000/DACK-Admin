const {db} = require('../database/db');
const { ObjectId} = require('mongodb');

exports.list = async () => {
    const laptopsCollection = db().collection("laptops");
    const laptops = await laptopsCollection.find({}).toArray();
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
    await laptopCollection.insertOne(product);
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

/*Search By Name*/
exports.searchName = async(page, nameV, typeV, brandV) => {
    const laptopCollection = db().collection('laptops');

    let perPage = 5;
    let Page = +page || 1;
    let pages;
    let laptops

    if(nameV){
        pages = Math.ceil(await laptopCollection.find({name: {$regex : ".*" + nameV + ".*"}, type: {$regex : ".*" + typeV + ".*"}, brand: {$regex : ".*" + brandV + ".*"}}).count() / perPage);
        laptops = await laptopCollection.find({name: {$regex : ".*" + nameV + ".*"}, type: {$regex : ".*" + typeV + ".*"}, brand: {$regex : ".*" + brandV + ".*"}}) // find tất cả các data
        .skip((perPage * Page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage).toArray();
    }
    else if (!nameV && (brandV || typeV))
    {
        pages = Math.ceil(await laptopCollection.find({type: {$regex : ".*" + typeV + ".*"}, brand: {$regex : ".*" + brandV + ".*"}}).count() / perPage);
        laptops = await laptopCollection.find({type: {$regex : ".*" + typeV + ".*"}, brand: {$regex : ".*" + brandV + ".*"}}) // find tất cả các data
        .skip((perPage * Page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage).toArray();
    }
    else{
        pages = Math.ceil(await laptopCollection.find({}).count() / perPage);

        laptops = await laptopCollection.find({}) // find tất cả các data
        .skip((perPage * Page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage).toArray();
    }
    
    
    const prev = Page > 1;
    const first = Page > 2;
    const prevPage = Page - 1;
    const nextPage = Page + 1;
    const next = Page < pages;
    const last = Page < (pages - 1);

    const ret = {laptops: laptops, first:first, prev: prev, prevPage:prevPage, Page: Page, nextPage: nextPage, next: next, last: last, pages:pages}
    return ret;
}

exports.hide = async (id) => {
    const laptopCollection = await db().collection('laptops');
    const laptop = await laptopCollection.findOne({_id: ObjectId(id)});
    let temp = 0;
    if (laptop.delete_flag == 0)
    {
        temp = 1;
    }
    await laptopCollection.updateOne({_id: ObjectId(id)},{$set: {delete_flag: temp}});
}