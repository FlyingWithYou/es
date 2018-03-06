const sequelize = require('../db/cdb');

async function login2(ctx, next) {
    sequelize.authenticate()
        .then(() => {
            console.log('connect mysql successfully');
        }).catch(err => {
            console.log("connect mysql failed", err);
        });

        await next();
}


module.exports = login2;