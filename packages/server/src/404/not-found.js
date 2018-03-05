async function pageNotFound(ctx, next) {
	ctx.status = 404;
	switch(ctx.accepts('html', 'json')) {
		case 'html':
			ctx.type = 'html';
			ctx.body = '<p>Page Not Found</p>';
			break;
		case 'json':
			ctx.body = {
				message: 'Page Not Found'
			};
			break;
		default:
			ctx.type = 'text';
			ctx.body = 'Page Not Found';		
	}
	await next();
};

module.exports = pageNotFound;