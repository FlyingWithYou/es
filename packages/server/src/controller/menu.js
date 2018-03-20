const  categoryModel = require('../model/category');
async function menu(ctx, next) {
    const menu = await categoryModel.findAllCategory();
    ctx.body = menu;
    await next();
}

module.exports ={
    menu
};