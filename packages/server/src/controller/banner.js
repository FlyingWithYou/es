const bannerModel = require('../model/banner');
async function showAll(ctx, next) {
    const banners = await bannerModel.findAllBanner();
    ctx.body = banners;
    await next();
}

async function add(ctx, next) {
    const { color,
        href,
        html,
        img,
        imgRetina,
        name,
        theme,
        useHtml,
        order
     } = ctx.request.body;

    let banner = {
        color,
        href,
        html,
        img,
        imgRetina,
        name, 
        theme,
        useHtml,
        order
    };
    const rbanner = await bannerModel.addBanner(banner);
    ctx.body = rbanner;
    await next();
}

module.exports = {
    showAll,
    add
};