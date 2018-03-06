const  Product = require('../model/product');

exports.show =  async function(id) {
    const  product = await Product.findById(id);
    return product.dataValues;
}