const sequelize = require('../db/cdb');
const Sequelize = require('sequelize');
const Category = sequelize.define('category', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    parentId: Sequelize.INTEGER,
    href: {
      type: Sequelize.STRING,
      validate: {
          isUrl: true
      }
    },
    level: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});

Category.findAllCategory = async function () {
    return  await Category.findAll({order: ["id"]});
}

module.exports = Category;