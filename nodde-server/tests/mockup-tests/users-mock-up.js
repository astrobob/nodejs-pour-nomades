/**
 * Created by leojpod on 2/25/16.
 */

var supertest = require('supertest');
var should = require('should');
var async = require('async');

var mockupData = require('../../mock-up-data');
var normalizer = require('./normalizer.js');

var server = supertest.agent('http://localhost:8888');

describe('specify the user resource management with this API', function () {
  var token;
  before(function (done) {
    //authenticate:
    server.post('/authenticate')
      .send({identifier: 'joe', password: 'password'})
      .end(function (err, res) {
        if(err) { throw err; }
        token = res.body.token;
        done();
      });
  });

  it('should return the list of all the users available on GET /users', function (done) {
    server.get('/users')
      .set('x-access-token', token)
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        should.not.exists(res.body.error);
        res.body.data.should.eql(normalizer.normalizeArray([mockupData.users.john, mockupData.users.joe, mockupData.users.anders], normalizer.normalizeUser));
        done();
      });
  });

  it('should return specific information on a user when doing GET /user/:number', function (done) {
    async.parallel([
      function (cb) {
        server.get('/users/0')
          .set('x-access-token', token)
          .expect('Content-type', /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) throw err;
            should.not.exists(res.body.error);
            res.body.data.should.eql(normalizer.normalizeUser(mockupData.users.john));
            cb();
          });
      },
      function (cb) {
        server.get('/users/3')
          .set('x-access-token', token)
          .expect('Content-type', /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) { throw err; }
            should.not.exists(res.body.error);
            res.body.data.should.eql(normalizer.normalizeUser(mockupData.users.joe));
            cb();
          });
      }
    ], done);
  });

  it('should return an empty resources message if GET /user/:number is looking for a non existing number or a malformed number', function (done) {
    async.parallel([
      function (cb) {
        server.get('/users/asd')
          .set('x-access-token', token)
          .expect('Content-type', /json/)
          .expect(400)
          .end(function (err, res) {
            if (err) { throw err; }
            res.body.error.should.be.type('string');
            should.not.exists(res.body.data);
            should.not.exists(res.body.included);
            cb();
          });
      },
      function (cb) {
        server.get('/users/1')
          .set('x-access-token', token)
          .expect('Content-type', /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) { throw err; }
            should.not.exists(res.body.error);
            should.equal(res.body.data, null);
            should.equal(res.body.included, null);
            cb();
          });
      }
    ], done);
  });
});
