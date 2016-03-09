var express = require('express');

var mockUpData = require('../mock-up-data');
var poolSerializer = require('../serializers/pool-serializer');
var auth = require('../authentication');

var router = express.Router();

/* Check authentification */
router.use(auth.authenticatedRoute);

/* GET pools listing. */
router.get('/', function(req, res, next) {
  var pools = mockUpData.pools;
  
  var message = poolSerializer.serialize(pools);

  res.status(200).send(message);
});



router.get('/:id', function(req, res, next) {
  res.status(500).send({'error' : 'not implemented yet'});
});

router.get('/:id/answers', function(req, res, next) {
  res.status(500).send({'error' : 'not implemented yet'});
});

router.get('/:id/results', function(req, res, next) {
  res.status(500).send({'error' : 'not implemented yet'});
});

/* POST pools listing. */
router.post('/', function(req, res, next) {
  res.status(500).send({'error' : 'not implemented yet'});
});

router.post('/:id/answers', function(req, res, next) {
  res.status(500).send({'error' : 'not implemented yet'});
});

module.exports = router;
