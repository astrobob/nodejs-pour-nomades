var express = require('express');
var utils = require('util');
var bcrypt = require('bcrypt');
var ObjectId = require('mongodb').ObjectID;

var router = express.Router();

var UserSerializer = require('../serializers/user-serializer');
var authentication = require('../authentication.js');
var User = require('../models/user');

/* GET users listing. */
router.get('/', authentication.authenticatedRoute, function(req, res, next) {
  User.find().then(function(users) {
    //we browse through them all :
    var jsonMessage = UserSerializer.serialize(users);
    res.json(jsonMessage);
  }, function (err) {
    throw err;
  });
});
router.get('/:id', authentication.authenticatedRoute, function(req, res, next) {
  req.checkParams('id', 'not a valid ObjectId').isMongoId();
  var errors = req.validationErrors();
  if (errors) {
    res.status(403).json({ success: false, errors: errors });
    return;
  }
  var id = ObjectId(req.params.id);
  User.findOne(id, function (err, user) {
    if (err) throw err;
    if (user) {
      res.json(UserSerializer.serialize(user));
    } else {
      res.json(UserSerializer.serialize(null));
    }
  });
});

router.post('/', function(req, res, next) {
  //validate incoming data:
  //we need a user name of min 6 char long
  req.checkBody('data.type', 'not a user record').equals('users');
  req.checkBody('data.attributes.name', 'not alphanumeric').isAlphanumeric();
  req.checkBody('data.attributes.name', 'too short (6 char min)').isLength({
    min: 6,
    max: undefined
  });
  //we need an email that is a proper email
  req.checkBody('data.attributes.email', 'invalid email').isEmail();
  //we need a password that is at least 6 char long
  req.checkBody('data.attributes.password', 'password too short  (6 char min)').isLength({
    min: 6,
    max: undefined
  });

  var errors = req.validationErrors(true);
  // if any of these parameter does not fit the criteria
  if (errors) {
    res.status(403).json({ success: false, errors: errors });
    return;
  }
  //now we have valid parameters
  var name = req.body.data.attributes.name,
    email = req.body.data.attributes.email,
    password = req.body.data.attributes.password;
  //check with the database if name and email are unique
  User.findOne(
    { $or: [{ name: name }, { email: email }] },
    function(err, user) {
      if (err) throw err;
      if (user) {
        var whichParam = (doc.name === name) ? 'name' : 'email';
        res.status(400).json({
          success: false,
          errors: {
            param: whichParam,
            error: 'non unique field'
          }
        });
      } else {
        //hash password
        bcrypt.hash(password, 10, function(err, hash) {
          if (err) {
            throw err;
          }
          //create new user and insert it
          var newUser = new User({
            name: name,
            email: email,
            password: hash
          });
          newUser.save(function(err, user) {
            if (err) {
              res.status(500).json({ success: false, error: err });
            } else {
              var jsonMessage = UserSerializer.serialize(user);
              res.json(jsonMessage);
            }
          });
        });
      }
    }
  );


});

module.exports = router;
