const categoryModel = require('../model/category');
const productModel = require('../model/product');

async function menu(ctx, next) {
    const menu = await categoryModel.findAllCategory();
    let withProductCategoryList = await generateMenu(menu);
    ctx.body = withProductCategoryList;
    await next();
}

async function generateMenu(categoryList){
    let i = 0, len = categoryList.length || 0;
    let list = [];
    for(; i < len; i++ ) {
        let product = await productModel.findProductByCategoryId(categoryList[i].id);
        let item = Object.assign({},categoryList[i].dataValues,{ product: product || []});
        list.push(item);
    }
    return list;
}

module.exports ={
    menu
};

