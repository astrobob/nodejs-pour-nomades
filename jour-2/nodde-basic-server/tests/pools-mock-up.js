/**
 * Created by leojpod on 2/25/16.
 */

var supertest = require('supertest');
var should = require('should');
var async = require('async');

var mockupData = require('../mock-up-data');
var normalizer = require('../normalizer.js');

var server = supertest.agent('http://localhost:8888');

describe('specify the pools resource management with this API', function () {

  it('should return the list of all the pools available on GET /pools', function (done) {
    server.get('/pools')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        should.not.exists(res.body.error);
        res.body.data.should.eql(normalizer.normalizeArray(mockupData.pools, normalizer.normalizePool));
        res.body.included.should.eql(normalizer.normalizeArray([mockupData.users.john, mockupData.users.joe], normalizer.normalizeUser));
        done();
      });
  });

  it('should return specific information on a pool when doing GET /pools/:number', function (done) {
    async.parallel([
      function (cb) {
        server.get('/pools/1')
          .expect('Content-type', /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) throw err;
            should.not.exists(res.body.error);
            res.body.data.should.eql(normalizer.normalizePool(mockupData.pools[0]));
            res.body.included.should.eql(normalizer.normalizeUser(mockupData.users.john));
            cb();
          });
      },
      function (cb) {
        server.get('/pools/2')
          .expect('Content-type', /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) { throw err; }
            should.not.exists(res.body.error);
            res.body.data.should.eql(normalizer.normalizePool(mockupData.pools[1]));
            res.body.included.should.eql(normalizer.normalizeUser(mockupData.users.john));
            cb();
          });
      }
    ], done);
  });

  it('should return an empty resources message if GET /pools/:number is looking for a non existing number or a malformed number', function (done) {
    async.parallel([
      function (cb) {
        server.get('/pools/asd')
          .expect('Content-type', /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) { throw err; }
            should.not.exists(res.body.error);
            should.equal(res.body.data, null);
            should.equal(res.body.included, null);
            cb();
          });
      },
      function (cb) {
        server.get('/pools/0')
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
