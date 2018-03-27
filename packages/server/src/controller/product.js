const productService = require('../service/product');
async function showAll(ctx, next) {
	const product = await productService.list();
    ctx.body = product;
    await next();
}

async function show(ctx, next) {
	const id = ctx.params.id
	const product = await productService.show(id);
    ctx.body = product;
    await next();
}

async function add(ctx, next) {
	const { href,name, categoryId, price, description } = ctx.request.body;
	const product = await productService.add(href, name, categoryId, price, description)
}

module.exports = {
	showAll,
	show,
	add
};