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

Product.sync({ force: true }).then(() => {
    return Product.create({
        name: 'John',
        price: 12,
        description: "Haaa4666"
    });
});

module.exports = Product;
