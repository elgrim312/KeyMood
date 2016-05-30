var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);
describe('Data', function () {
    it('devrait lister TOUS les mots sur /api/data en GET', function (done) {
        chai.request(server)
            .get('/api/data')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.render;
                done();
            });
    });
    it('devrait Ajouter 3 Mots en Post', function (done) {
        chai.request(server)
            .post('/api/data')
            .send({'mot1': 'Java', 'mot2': 'Script', 'mot3': 'FTW'})
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});