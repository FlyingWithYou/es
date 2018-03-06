const Sequelize = require('sequelize');
const sequelize = require('../db/cdb');

const Product = sequelize.define('product', {
    name: {
        type: Sequelize.STRING(20)
    },
    price: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    }
});

Product.insertProduct = function (name, price, description) {
    sequelize.sync().then(() => {
        Product.create({
            name,
            price,
            description
        }).then( product => {
            return product;
        })
    });
}

Product.findProductById = async function (id) {
    const  product = await Product.findById(id);
    return product && product.dataValues;
}

Product.findAllProduct = async function () {
    const  product = await Product.findAll();
    return product;
}


module.exports = Product;
