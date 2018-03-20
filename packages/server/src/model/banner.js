const  sequelize = require('../db/cdb');
const Sequelize = require('sequelize');
const Banner = sequelize.define('banner', {
    href: Sequelize.STRING,
    imgUrl: { type: Sequelize.STRING, validate: { isUrl: true } },
    name: Sequelize.STRING,
    theme: Sequelize.STRING,
    order: Sequelize.INTEGER
}, {freezeTableName: true});

Banner.addBanner = function(banner) {
    sequelize.sync().then(() => {
        Banner.create(banner).then( rbanner => {
            return rbanner;
        });
    });
}

Banner.findAllBanner = async function() {
    return  await Banner.findAll({ order: ["order"]});
}

module.exports = Banner;