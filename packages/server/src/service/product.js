const  Product = require('../model/product');

exports.show =  async function(id) {
    return Product.findProductById(id);
}

exports.list = async function() {
	return Product.findAllProduct();
}

exports.add = async function(name, price, description) {
	return Product.insertProduct(name, price, description);
} 