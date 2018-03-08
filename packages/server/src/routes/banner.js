const { showAll, add } = require('../controller/banner');
const bannerRoutes = require('koa-router')({
    prefix: "/banner"
});
bannerRoutes
    .get('/', showAll)
    .post('/', add);

module.exports = bannerRoutes;    
