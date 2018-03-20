require('should');
const app = require('./index');
const server = app.listen();
const request = require('supertest').agent(server);

describe("test index.js", function() {
    it("get  home page", function(done){
        request
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});