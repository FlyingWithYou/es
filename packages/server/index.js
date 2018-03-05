const Koa = require("koa");
const Router = require("koa-router");
const session = require('koa-session');
const CSRF = require('koa-csrf');
const rawBody = require('raw-body');
const compose = require('koa-compose');
const auth = require('koa-basic-auth');

const koaBody = require('koa-body');
const login = require('./src/login');
const pageNotFound = require('./src/404/not-found');

const app = new Koa();
const router = new Router();

const PORT = 3000;

// app.use(koaBody({
// 	encoding: 'utf-8',
// 	multipar: true
// }));


async function responseTime(ctx, next) {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Respones-Time',`${ms} ms`);
}

async function logger(ctx, next) {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	if('test' != process.env.NODE_ENV) {
		console.log('%s %s  %sms', ctx.method, ctx.url, ms);
	}
}
 // compose middleware
const all = compose([ responseTime, logger]);
app.use(all);

app.use(async function(ctx, next) {
	try {
		await next();
	} catch(error) {
		ctx.status = error.status || 500;
		ctx.type = 'html';
		ctx.body = '<p>Some Error occured</p>';
		ctx.app.emit('error', error, ctx);
	}
});

app.use(async (ctx, next) => {
	try {
		await next();
	} catch(err) {
		if(err.status === 401) {
			ctx.status = 401;
			ctx.set('WWW-Authenticate', 'Basic');
			ctx.body = 'cant has thant';
		} else {
			throw err;
		}
	}
});

app.use(async function(ctx, next) {
	const n = ~~ctx.cookies.get('view') + 1;
	ctx.cookies.set('view', n);
	await next();
});

app.use(auth({ name: 'tj', pass: 'tobi'}));

// app.use(async ctx => ctx.body = 'secrect');

app.keys = ['session key', 'csrf example'];

app.use(session(app));
app.use(koaBody());
app.use(new CSRF());

router.get('/token', token)
	  .post('/post', post);


async function token(ctx, next) {
	ctx.body = ctx.csrf;
	await next();
}		

async function post(ctx,next) {
	ctx.body = {ok: true};
	await next();
}

app.use(async function(ctx, next) {
	console.log(ctx, ">>>>>>>>>>>>>>>>>>>>>>>");
	if(ctx.method !== 'GET' || ctx.path !== '/message') {
		return await next();
	}
	const messages = ctx.session.messages || [];
	ctx.body = messages;
	delete ctx.session.messages;
});

app.use(async function(ctx, next) {
	if(ctx.method !== 'POST' || ctx.path !== 'messages') {
		return await next();
	}
	const messages = await rawBody(ctx.req, {
		encoding: 'utf8'
	});
	ctx.session.message = ctx.session.messages || [];
	ctx.session.message.push(message);
	ctx.status = 204;
});

router.get('/', (ctx, next) => {
	ctx.body = "Hello koa-router";
});

router.post("/login", koaBody(), login);



app.use(router.routes());

app.on("error", (error, ctx) => {
	if(process.env.NODE_ENV != 'test') {
		console.error("server error ", error.message, ctx);
	}
});
// 404处理
// app.use(pageNotFound);
app.listen(PORT);

console.log(`server runing on localhost:${PORT}`);