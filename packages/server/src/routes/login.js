const login = require('../login');
const loginRouters = require("koa-router")({
    prefix: "/login"
});

loginRouters.post("/", login);

module.exports = loginRouters;