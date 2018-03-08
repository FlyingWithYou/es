const  sequelize = require('../db/cdb');
const Sequelize = require('sequelize');
const Banner = sequelize.define('banner', {
    color: { type: Sequelize.STRING, defaultValue: ''},
    href: Sequelize.STRING,
    html: { type: Sequelize.STRING },
    img: { type: Sequelize.STRING, validate: { isUrl: true } },
    imgRetina: { type: Sequelize.STRING, validate: { isUrl: true } },
    name: Sequelize.STRING,
    theme: Sequelize.STRING,
    useHtml: Sequelize.STRING,
    order: Sequelize.INTEGER
});

Banner.addBanner = function(banner) {
    sequelize.sync().then(() => {
        Banner.create(banner).then( rbanner => {
            return rbanner;
        })
    });
}

Banner.findAllBanner = async function() {
    return  await Banner.findAll();
}

module.exports = Banner;