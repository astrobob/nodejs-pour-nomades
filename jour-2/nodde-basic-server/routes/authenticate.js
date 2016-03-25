/**
 * Created by leojpod on 2/23/16.
 */
var jwt = require('jsonwebtoken');

var mockUpData = require('./../mock-up-data');
var config = require('./../config');

var authentication = {
  authenticateUser: function(nameOrEmail, candidatePassword) {
    //fake DATA for now:
    console.log('authenticate user with %s and %s', nameOrEmail, candidatePassword);
    if (mockUpData.users.john.name !== nameOrEmail
      && mockUpData.users.john.email !== nameOrEmail) {
      console.log('wrong id');
      return false;
    }
    //check the password:
    return (mockUpData.users.john.password === candidatePassword);
  },

  /**
   *
   * @param {ClientRequest} req
   * @param {function} next
     */
  isRequestAuthenticated: function(req, next) {
    var params = req.post || req.query;
    var token = params.token || req.headers['x-access-token'] || undefined;
    if (token === undefined) {
      next(false);
    } else {
      jwt.verify(token, config.secretTokenKey, function(err, decoded) {
        console.log('err -> ', err);
        console.log('decoded -> ', decoded);
        next(err == null, decoded, err);
      });
    }
  },

  handleRequest: function(req, res) {
    console.log('request for authentication');
    switch (req.method) {
      case 'GET':
        //return authentication status
        //i.e. check for authentication token in the request and check it's validity
        this.isRequestAuthenticated(req, function (isAuth) {
          res.writeHead(200);
          if (isAuth) {
            //then return success message
            res.write('{ "success": true, "message": "you are authenticated"}');
          } else {
            //then return failure message
            res.write('{ "success": false, "message": "you are not authenticated"}');
          }
          res.end();
        });
        break;
      case 'POST':
        // extract authentication parameter, check if they are correct and return a token if they are
        if (req.post === undefined) {
          res.writeHead(403);
          res.write('{ "success": false, "error": "missing parameters" }');
          res.end(0);
          return;
        }
        if (this.authenticateUser(req.post.identifier, req.post.password)) {
          //use jwt to generate a token and send it
          var token = jwt.sign({id: mockUpData.users.john.id}, config.secretTokenKey, {
            expiresIn: 86400 // = 24h * 60m * 60s
          });
          res.writeHead(200);
          res.write('{ "success": true, "token": "' + token + '"}');
          //res.write('{ "token": "' + token + '" }');
          //res.write('{ "toktoken": "' + token + '" }');
          res.end();
        } else {
          res.writeHead(403);
          res.write('{ "success": false, "message": "wrong combination of password/identification"}');
          res.end();
        }
        break;
      default:
        res.writeHead(405);
        res.write('{ "error": "method unavailable for given url"}');
        res.end();
    }
  }
};

module.exports = authentication;
