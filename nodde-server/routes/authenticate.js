/**
 * Created by leojpod on 3/2/16.
 */

var bcrypt = require('bcrypt');
var express = require('express');
var jwt = require('jsonwebtoken');

var authentication = require('../authentication.js');
var config = require('../config.js');
var User = require('../models/user');

var router = express.Router();

router.get('/', function(req, res, next) {
  authentication.checkAuthentication(req, function(isAuth) {
    if (isAuth === false) {
      res.json({ success: false, message: "you are not authenticated" });
    } else {
      res.json({ success: true });
    }
  });
});

router.post('/', function(req, res, next) {
  req.checkBody('identifier', 'required').notEmpty();
  req.checkBody('password', 'required').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    res.status(400).json({error: errors});
    return;
  }
  var userIdentifier = req.body.identifier;
  var password = req.body.password;

  //browse users and try finding the good one
  User.findOne({
    $or: [
      { name: userIdentifier },
      { email: userIdentifier }
    ]
  }, 'password', function (err, user) {
    if (err) throw err;
    if (user) {
      bcrypt.compare(password, user.password, function(err, wasMatch) {
        if (err) throw err;
        if (wasMatch === true) {
          //correct password
          var token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });
          res.json({ success: true, token: token });
        } else {
          // wrong password
          //kick them out
          res.status(403).json({
            success: false,
            message: "wrong combination of password/identification"
          });
        }
      });
    } else {
      // did not find the user
      // kick them out
      res.status(403).json({
        success: false,
        message: "wrong combination of password/identification"
      });
    }
  });
});

module.exports = router;
