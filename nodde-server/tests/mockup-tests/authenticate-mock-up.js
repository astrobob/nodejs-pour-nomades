/**
 * Created by leojpod on 2/24/16.
 */

var supertest = require('supertest');
var should = require('should');
var async = require('async');

var server = supertest.agent('http://localhost:8888');

describe('specify the authentication message that should be returned by the application', function() {

  it('should return a failure JSON message with a 403 status if the authentication is not successful', function(done) {
    async.parallel(
      [
        function(cb) {
          server.post('/authenticate')
            .send('identifier=i do not exist!')
            .send('password=password')
            .expect("Content-type", /json/)
            .expect(403)
            .end(function(err, res) {
              res.status.should.equal(403);
              res.body.success.should.equal(false);
              cb();
            });
        },
        function(cb) {
          server.post('/authenticate')
            .send('identifier=john')
            .send('password=that is not the password')
            .expect("Content-type", /json/)
            .expect(403)
            .end(function(err, res) {
              res.status.should.equal(403);
              res.body.success.should.equal(false);
              cb();
            });
        },
        function(cb) {
          server.post('/authenticate')
            .send('identifier=john@smith.com')
            .send('password=that is not the password')
            .expect("Content-type", /json/)
            .expect(403)
            .end(function(err, res) {
              res.status.should.equal(403);
              res.body.success.should.equal(false);
              cb();
            });
        }
      ],
      done
    );

  });

  it('should return a success JSON message and a token if the authentication is successful', function(done) {
    async.parallel(
      [
        function(cb) {
          server.post('/authenticate')
            .send('identifier=john')
            .send('password=password')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
              res.status.should.equal(200);
              res.body.success.should.equal(true);
              res.body.token.should.match(/^[\w\-]+\.[\w\-]+\.[\w\-]+$/);
              cb();
            });
        },
        function(cb) {
          server.post('/authenticate')
            .send('identifier=john@smith.com')
            .send('password=password')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
              res.status.should.equal(200);
              res.body.success.should.equal(true);
              res.body.token.should.match(/^[\w\-]+\.[\w\-]+\.[\w\-]+$/);
              cb();
            });
        }
      ],
      done
    );
  });

  it('should tell whether or not the incoming request is duly authenticated: if it IS', function(done) {
    var token;
    async.series([
      function(cb) {
        //authenticate first
        server.post('/authenticate')
          .send('identifier=john')
          .send('password=password')
          .expect(200)
          .expect('Content-type', /json/)
          .end(function(err, res) {
            if (err) { throw err; }
            res.body.success.should.equal(true);
            token = res.body.token;
            cb();
          });
      },
      function(cb) {
        //GET request with token as query param
        server.get('/authenticate')
          .query('token=' + token)
          .expect(200)
          .expect('Content-type', /json/)
          .end(function(err, res) {
            if (err) { throw err; }
            res.body.success.should.equal(true);
            cb();
          })
      },
      function(cb) {
        //GET request with token as header
        server.get('/authenticate')
          .set('x-access-token', token)
          .expect(200)
          .expect('Content-type', /json/)
          .end(function(err, res) {
            if (err) { throw err; }
            res.body.success.should.equal(true);
            cb();
          })
      }
    ], done);
  });

  it('should tell whether or not the incoming request is duly authenticated: if it use a BOGUS token', function(done) {
    var token = 'aaaa.bbbb.cccc';
    async.series([
      function(cb) {
        //GET request with token as query param
        server.get('/authenticate')
          .query('token=' + token)
          .expect(200)
          .expect('Content-type', /json/)
          .end(function(err, res) {
            if (err) { throw err; }
            res.body.success.should.equal(false);
            cb();
          })
      },
      function(cb) {
        //GET request with token as header
        server.get('/authenticate')
          .set('x-access-token', token)
          .expect(200)
          .expect('Content-type', /json/)
          .end(function(err, res) {
            if (err) { throw err; }
            res.body.success.should.equal(false);
            cb();
          })
      }
    ], done);
  });

  it('should tell whether or not the incoming request is duly authenticated: if it IS NOT', function(done) {
    async.series([
      function(cb) {
        //GET request with token as query param
        server.get('/authenticate')
          .expect(200)
          .expect('Content-type', /json/)
          .end(function(err, res) {
            if (err) { throw err; }
            res.body.success.should.equal(false);
            cb();
          })
      }
    ], done);
  });
});
