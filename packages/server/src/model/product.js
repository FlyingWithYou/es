const Sequelize = require('sequelize');
const sequelize = require('../db/cdb');

const Product = sequelize.define('product', {
    name: {
        type: Sequelize.STRING(20)
    },
    href: {
      type: Sequelize.STRING,
      validate: {
          isUrl: true
      }
    },
    price: {
        type: Sequelize.INTEGER
    },
    imageUrl: {
        type: Sequelize.STRING, validate: { isUrl: true }
    },
    categoryId: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});

Product.insertProduct = function (href,name, price, imageUrl,categoryId, description) {
    sequelize.sync().then(() => {
        Product.create({
            href,
            name,
            price,
            imageUrl,
            categoryId,
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

Product.findProductByCategoryId = async function (categoryId) {
    const product = await Product.findAll({
        where: {
            categoryId: categoryId
        }
    });
    return product;
}

Product.findAllProduct = async function () {
    const  product = await Product.findAll();
    return product;
}


module.exports = Product;
