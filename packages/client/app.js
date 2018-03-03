/*const Koa = require('koa');
const Router = require("koa-router");
const path = require('path');
const fs = require('fs');
const staticServer = require("koa-static");
const app = new Koa();
const router = new Router();

const PORT = 10000;
app.use(staticServer(path.resolve(__dirname,'dist/index.html'), { extensions: 'html' }));

router.get('/*', async (ctx, next) => {
	fs.readFile(path.resolve(__dirname,'dist/index.html'), 'utf-8', (error, html) => {
		if(error){
			ctx.response.redirect('/');
		} else {
			ctx.body = html;
		}
	});
	await next();
});

app.use(router.routes());
app.listen(PORT);
console.log(`app running on ${PORT}`);*/

const http = require("http");
const fs = require("fs");
const path = require("path");
const httpPort = 8090;

http.createServer((req, res) => {
	fs.readFile(path.resolve(__dirname, "dist/index.html"), "utf-8", (err, content) => {
  	console.log(path.resolve(__dirname, "dist/index.html"),"fusksks");
		if (err) {
			console.log("We cannot open 'index.htm' file.");
		}

		res.writeHead(200, {
			"Content-Type": "text/html; charset=utf-8"
		});

		res.end(content);
	});
}).listen(httpPort, () => {
	console.log("Server listening on: http://localhost:%s", httpPort);
});