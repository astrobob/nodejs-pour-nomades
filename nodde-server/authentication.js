var jwt = require('jsonwebtoken');
var config = require('./config.js');
/**
 * Created by leojpod on 3/3/16.
 */

var authentication = {
  checkAuthentication: function (req, cb){
    // look for the token in the incoming request:
    var token = req.body.token || req.query.token ||
      req.headers['x-access-token'];

    if (token === undefined) {
      //there is no token!
      cb(false);
    } else {
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          cb(false);
        } else {
          req.decoded = decoded;
          cb(true);
        }
      });
    }
  },
  authenticatedRoute: function (req, res, next) {
    authentication.checkAuthentication(req, function (isAuth) {
      if (isAuth) {
        // the user has a proper token: let's call next
        next();
      } else {
        res.json(403, { success: false, message: 'you need to authenticate to access this part of the API'});
      }
    });
  }
};


module.exports = authentication;
