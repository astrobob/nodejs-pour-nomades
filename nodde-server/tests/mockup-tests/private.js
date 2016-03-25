/**
 * Created by leojpod on 3/3/16.
 */

var supertest = require('supertest');
var should = require('should');
var async = require('async');

var mockupData = require('../../mock-up-data');

var server = supertest.agent('http://localhost:8888');

describe('the /private url should be accessible only for authenticated users', function() {
  it('should send 403 response to unauthenticated attempts', function (done) {
    async.parallel([
      function (cb) {
        server.get('/private')
          .expect('Content-type', /json/)
          .expect(403)
          .end(function(err, res) {
            if (err) throw err;
            res.status.should.equal(403);
            res.body.success.should.equal(false);
            cb()
          });
      },
      function (cb) {
        server.put('/private')
          .expect('Content-type', /json/)
          .expect(403)
          .end(function(err, res) {
            if (err) throw err;
            res.status.should.equal(403);
            res.body.success.should.equal(false);
            cb()
          });
      },
      function (cb) {
        server.post('/private')
          .expect('Content-type', /json/)
          .expect(403)
          .end(function(err, res) {
            if (err) throw err;
            res.status.should.equal(403);
            res.body.success.should.equal(false);
            cb()
          });
      },
      function (cb) {
        server.patch('/private')
          .expect('Content-type', /json/)
          .expect(403)
          .end(function(err, res) {
            if (err) throw err;
            res.status.should.equal(403);
            res.body.success.should.equal(false);
            cb()
          });
      },
      function (cb) {
        server.delete('/private')
          .expect('Content-type', /json/)
          .expect(403)
          .end(function(err, res) {
            if (err) throw err;
            res.status.should.equal(403);
            res.body.success.should.equal(false);
            cb()
          });
      }
    ], done);
  });

  it('should be fine once authenticated', function(done) {
    var token;
    async.series([
      function(cb) {
        server.post('/authenticate')
          .send({identifier: 'john', password: 'password'})
          .expect("Content-type", /json/)
          .expect(200)
          .end(function(err, res) {
            res.status.should.equal(200);
            res.body.success.should.equal(true);
            res.body.token.should.match(/^[\w\-]+\.[\w\-]+\.[\w\-]+$/);
            token = res.body.token;
            cb();
          });
      },
      function (callback) {
        async.parallel([
          function (cb) {
            server.get('/private')
              .set('x-access-token', token)
              .expect('Content-type', /json/)
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                cb()
              });
          },
          function (cb) {
            server.put('/private')
              .set('x-access-token', token)
              .expect('Content-type', /json/)
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                cb()
              });
          },
          function (cb) {
            server.post('/private')
              .set('x-access-token', token)
              .expect('Content-type', /json/)
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                cb()
              });
          },
          function (cb) {
            server.patch('/private')
              .set('x-access-token', token)
              .expect('Content-type', /json/)
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                cb()
              });
          },
          function (cb) {
            server.delete('/private')
              .set('x-access-token', token)
              .expect('Content-type', /json/)
              .expect(200)
              .end(function(err, res) {
                if (err) throw err;
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                cb()
              });
          }
        ], callback);
      }
    ], done)
  });
});
