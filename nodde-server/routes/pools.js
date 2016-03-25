/**
 * Created by leojpod on 3/2/16.
 */

var async = require('async');
var express = require('express');
var JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
var ObjectId = require('mongodb').ObjectID;

var router = express.Router();

var PoolSerializer = require('../serializers/pool-serializer');
var authentication = require('../authentication.js');
var Pool = require('../models/pool');

router.use(authentication.authenticatedRoute);

router.get('/', function (req, res, next) {
  Pool.find().populate('author').exec(function (err, pools) {
    if (err) throw err;
    async.map(pools,
      function (pool, callback) {
        callback(null, pool.toObject());
      }, function (err, poolsObjects) {
        if (err) throw err;
        res.json(PoolSerializer.serialize(poolsObjects));
      }
    );
  });
});

router.post('/', function (req, res, next) {
  //validate the incomming data:
  req.checkBody('data.type', 'not a pool record').equals('pools');
  req.checkBody('data.attributes.title', 'missing').isLength({min: 1});
  req.checkBody('data.attributes.questions', 'missing').notEmpty();
  new JSONAPIDeserializer({
    users: {
      valueForRelationship: function (relationship) {
        return ObjectId(relationship.id);
      }
    }
  }).deserialize(req.body, function (err, pool) {
    if (err) {
      res.status(400).json({errors: 'malformed JSON-API resource'});
    }
    console.log('pool', pool);
    var newPool = new Pool(pool);
    newPool.save(function (err, pool) {
      if (err) throw err;
      res.json(PoolSerializer.serialize(pool));
    });
  });
});

router.get('/:id', function (req, res, next) {
  req.checkParams('id', 'not a valid ObjectId').isMongoId();
  var errors = req.validationErrors();
  if (errors) {
    res.status(403).json({ success: false, errors: errors });
    return;
  }
  var id = ObjectId(req.params.id);
  Pool.findOne(id).populate('author').exec(function(err, pool) {
    if (err) throw err;
    if (pool) {
      //fetch its user:
        res.json(PoolSerializer.serialize(pool.toObject()));
    } else {
      res.json(PoolSerializer.serialize(null));
    }
  });
});
router.get('/:id/answers', function (req, res, next) {
  res.status(500).json({ error: 'unimplemented'}).end();
});
router.post('/:id/answers', function (req, res, next) {
  res.status(500).json({ error: 'unimplemented'}).end();
});
router.get('/:id/results', function (req, res, next) {
  res.status(500).json({ error: 'unimplemented'}).end();
});

module.exports = router;
