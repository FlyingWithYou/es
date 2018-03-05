const Koa = require("koa");
const Router = require("koa-router");
const body = require('koa-better-body');
const login = require('./src/login');

const app = new Koa();
const router = new Router();


const PORT = 3000;

app.use(body({
	encoding: 'utf-8',
	multipar: true
}));

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Respones-Time',`${ms} ms`);
});

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} ${ms} ms`);
});

router.get('/', (ctx, next) => {
	ctx.body = "Hello koa-router";
});

router.post("/login", login);

app.use(router.routes());

app.on("error", (error, ctx) => {
	console.error("server error ", error, ctx);
});

app.listen(PORT);

console.log(`server runing on localhost:${PORT}`);