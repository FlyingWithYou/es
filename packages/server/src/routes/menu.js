const { menu } = require('../controller/menu');
const  menuRoute = require("koa-router") ({
    prefix: "/menu"
});

menuRoute.get("/", menu);

module.exports  = menuRoute;