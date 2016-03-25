/**
 * Created by leojpod on 3/3/16.
 */
var express = require('express');

var authentication = require('../authentication.js');
var mockupData = require('../mock-up-data.js');

var router = express.Router();

router.use(authentication.authenticatedRoute);

router.all('/', function(req, res, next) {
  var userId = req.decoded.id;

  var user = null;
  for (var name in mockupData.users) {
    if (mockupData.users.hasOwnProperty(name)) {
      if (mockupData.users[name].id == userId) {
        user = mockupData.users[name];
        break;
      }
    }
  }
  res.json({
    success: true,
    message: 'Hello ' + user.name + ' you are authenticated',
    userId: userId
  });
});

module.exports = router;
