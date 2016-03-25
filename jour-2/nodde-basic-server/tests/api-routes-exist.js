/**
 * Created by leojpod on 2/24/16.
 */

var supertest = require('supertest');
var should = require('should');

//get the API server
var server = supertest.agent('http://localhost:8888');

//start describing the API
describe('check that routes are defined', function() {
  //routes:
  // - POST GET /authenticate
  // - GET POST /pools
  // - GET /pools/0
  // - POST /pools/0/answers
  // - ...

  it('should be possible to access /authenticate with GET', function(done) {

    server.get('/authenticate').end(function(err, res) {
      if (err) { throw err; }
      res.status.should.not.equal(404);
      done();
    });
  });
  it('should be possible to access /authenticate with POST', function(done) {
    server.post('/authenticate').end(function(err, res) {
      if (err) { throw err; }
      res.status.should.not.equal(404);
      done();
    });
  });

  it('should be possible to access /pools with GET', function(done) {
    server.get('/pools').end(function(err, res) {
      if (err) { throw err; }
      res.status.should.not.equal(404);
      done();
    });
  });
  it('should be possible to access /pools with POST', function(done) {
    server.post('/pools').end(function(err, res) {
      if (err) { throw err; }
      res.status.should.not.equal(404);
      done();
    });
  });

  it('should be possible to access /pools/0 with GET', function(done) {
    server.get('/pools/0').end(function(err, res) {
      if (err) { throw err; }
      res.status.should.not.equal(404);
      done();
    });
  });

  it('should be possible to access /pools/0/answers with POST', function(done) {
    server.post('/pools/0').end(function(err, res) {
      if (err) { throw err; }
      res.status.should.not.equal(404);
      done();
    });
  });

  it('should be possible to access /pools/0/results with GET', function(done) {
    server.get('/pools/0/results').end(function(err, res) {
      if (err) { throw err; }
      res.status.should.not.equal(404);
      done();
    });
  });
});
