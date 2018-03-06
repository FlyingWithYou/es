const productService = require('../service/product');
async function show(ctx, next) {
      ctx.body = await productService.show(1); 
    await next();
}

module.exports = show;