const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require('koa-body');
const loginRoutes = require('./routes/login');
const bannerRoutes = require('./routes/banner');
const menuRoutes = require('./routes/menu');
const cors = require('koa-cors');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(koaBody());


router.get('/', (ctx, next) => {
	ctx.body = "es server";
});

app.use(loginRoutes.routes());
app.use(bannerRoutes.routes());
app.use(menuRoutes.routes());

app.use(router.routes());

app.on("error", (error, ctx) => {
    console.error("server error ", error.message, ctx);
});
app.listen(PORT);


console.log(`server runing on localhost:${PORT}`);

module.exports = app;


/*

app.use(serve(path.join(__dirname, '/public')));
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


async function token(ctx, next) {
	ctx.body = ctx.csrf;
	await next();
}

 async function post(ctx,next) {
	ctx.body = {ok: true};
	await next();
}

app.use(async function(ctx, next) {
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


router.get('/index.js', streamFile);

router.get('/jss', streamJSON);

router.post('/upload', koaBody({ multipart: true}), uploadFile);

async function uploadFile(ctx, next) {
	if('POST' != ctx.method) {
		return await next();
	}

	const tmpdir = path.join(os.tmpdir(), uid());
	await fs.mkdir(tmpdir);
	const filePaths  = [];
	const files = ctx.request.body.files || {};

	for(let key in files) {
		const file = files[key];
		const filePath = path.join(tmpdir, file.name);
		const reader = fs.createReadStream(file.path);
		const  writer = fs.createWriteStream(filePath);
		reader.pipe(writer);
		filePaths.push(filePath);
		console.log("uploading %s -> %s", file.name, writer.path);
	}
	ctx.body = filePaths;
	await next();
}

function uid() {
	return Math.random().toString(36).slice(2);
}

async function streamFile (ctx, next) {
	const fpath = path.join(__dirname, ctx.path);
	const fstat = await fs.stat(fpath);
	if(fstat.isFile()) {
		ctx.type = path.extname(fpath);
		ctx.body = fs.createReadStream(fpath);
	}
	await next();
}

async function streamJSON(ctx, next) {
	ctx.type = 'json';
	const stream = ctx.body = JSONStream();

	stream.on('error', ctx.onerror);

	setImmediate(function() {
		stream.write({
			id: 1
		});
	});

	setImmediate(function () {
		stream.write({
			id: 2
		});
	});

	setImmediate(function () {
		stream.end();
	});

}*/