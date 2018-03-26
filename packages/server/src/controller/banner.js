const bannerModel = require('../model/banner');
async function showAll(ctx, next) {
    const banners = await bannerModel.findAllBanner();
    ctx.body = banners;
    await next();
}

async function add(ctx, next) {

    console.error(JSON.stringify(ctx.request.body), ">>>>>>>>>>>>>>>");
    const { color,
        href,
        imgUrl,
        name,
        theme,
        order
     } = ctx.request.body;

    let banner = {
        color,
        href,
        imgUrl,
        name, 
        theme,
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