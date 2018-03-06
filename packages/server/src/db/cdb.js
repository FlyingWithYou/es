const  Sequelize = require('sequelize');

const sequelize = new Sequelize("users", 'root', '2d3k12', {
    host: '47.100.53.48',
    port: 8306,
    dialect: 'mysql',
    pool: {
        max: 6,
        min: 0,
        accuire: 3000,
        idle: 10000
    }
});

module.exports = sequelize;