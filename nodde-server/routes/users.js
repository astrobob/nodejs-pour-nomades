var express = require('express');

var mockUpData = require('../mock-up-data');
var auth = require('../authentication');
var userSerializer = require('../serializers/user-serializer');

var router = express.Router();

/* Check authentification */
router.use(auth.authenticatedRoute);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(500).send({'error' : 'not implemented yet'});
});

router.get('/:id', function(req, res, next) {
  var user = mockUpData.users.john;
  var message = userSerializer.serialize(user);

  res.status(200).send(message);
});

module.exports = router;
