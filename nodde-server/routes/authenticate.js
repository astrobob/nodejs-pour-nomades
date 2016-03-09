var express = require('express');
var jwt = require('jsonwebtoken');

var auth = require('../authentication');
var mockUpData = require('../mock-up-data');
var config = require('../config.js');

var router = express.Router();


/* GET authenticate listing. */
router.get('/', function(req, res, next) {
  auth
  res.status(500).send({'error' : 'not implemented yet'});
});

/* POST authenticate listing. */
router.post('/', function(req, res, next) {
	var nameOrEmail = req.body.identifier;
	var candidatePassword = req.body.password;
    if (mockUpData.users.john.name !== nameOrEmail
      && mockUpData.users.john.email !== nameOrEmail) {
	  res.status(500).send({'error' : 'wrong id'});
    }
    //check the password:
    if (mockUpData.users.john.password === candidatePassword) {
      var token = jwt.sign({id: mockUpData.users.john.id}, config.secret, {
        expiresIn: 86400 // = 24h * 60m * 60s
      });
      res.status(200).send({'success' : true, 'token' : token});
    }
    else {
      res.send({'error' : 'wrong password'});
    }
});

module.exports = router;
