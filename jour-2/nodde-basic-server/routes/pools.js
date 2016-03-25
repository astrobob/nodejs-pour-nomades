/**
 * Created by leojpod on 2/26/16.
 */
var url = require('url');
var mockupData = require('./../mock-up-data.js');
var normalizer = require('../normalizer.js');

var pools = {
    handleRequest: function(req, res) {
      var segments = url.parse(req.url).pathname.split('/');
      switch (segments.length) {
        case 2:
          //collection request
          switch (req.method) {
            case 'GET':
              this.getAllPools(function(err, pools, users) {
                if (err) {
                  res.writeHead(500, { 'Content-type': 'application/json' });
                  res.write(JSON.stringify({ 'error': err }));
                  res.end();
                } else {
                  res.writeHead(200, { 'Content-type': 'application/json' });

                  var jsonMessage = {
                    data: [],
                    included: []
                  };

                  jsonMessage.data = normalizer.normalizeArray(pools, normalizer.normalizePool);
                  jsonMessage.included = normalizer.normalizeArray(users, normalizer.normalizeUser);

                  res.write(JSON.stringify(jsonMessage));
                  res.end();
                }
              });
              break;
            default:
              res.writeHead(405, { 'content-type': 'application/json' });
              res.write('{ "error": "method unavailable for given url"}');
              res.end();
          }
          break;
        case 3:
          switch (req.method) {
            case 'GET':
              this.getPoolById(segments[2], function(err, pool, author) {
                if (err) {
                  res.writeHead(500, { 'content-type': 'application/json' });
                  res.write(JSON.stringify({ 'error': err }));
                  res.end();
                } else {
                  console.log('user -> ', author);
                  console.log('pool -> ', pool);
                  res.writeHead(200, { 'content-type': 'application/json' });
                  var message = {
                    data: pool ? normalizer.normalizePool(pool): null,
                    included: author ? normalizer.normalizeUser(author) : null
                  };
                  res.write(JSON.stringify(message));
                  res.end();
                }
              });
              break;
            default:
              res.writeHead(405, { 'content-type': 'application/json' });
              res.write('{"error": "method unavailable for given url"}');
              res.end();
          }
          break;
        case 4:
          res.writeHead(500, { 'content-type': 'application/json' });
          res.write('{ "error": "not implemented yet"}');
          res.end();
          break;
        default:
          res.writeHead(404, { 'content-type': 'application/json' });
          res.write('{ "error": "unknown route"}');
          res.end();
      }
    },

    getAllPools: function(cb) {
      var pools = mockupData.pools;
      var authorsByIds = {};
      pools.forEach(function(pool) {
        authorsByIds[pool.userId] = null;
      });
      var user;
      for (var name in mockupData.users) {
        if (mockupData.users.hasOwnProperty(name)) {
          user = mockupData.users[name];
          if (authorsByIds.hasOwnProperty(user.id)) {
            authorsByIds[user.id] = user;
          }
        }
      }
      var authors = [];
      var author;
      for (var id in authorsByIds) {
        if (authorsByIds.hasOwnProperty(id)) {
          author = authorsByIds[id];
          if (author == null) {
            cb('data corrupted');
            return;
          } else {
            authors.push(author);
          }
        }
      }
      cb(false, mockupData.pools, authors);
    },

    getPoolById: function(id, cb) {

      var pools = mockupData.pools;
      var pool;
      for (var i in pools) {
        if (pools.hasOwnProperty(i)) {
          if (pools[i].id.toString() === id) {
            pool = pools[i];
            break;
          }
        }
      }
      if (pool === undefined) {
        // pool not found
        cb(false, null, null);
      } else {
        var users = mockupData.users;
        for (var name in users) {
          if (users.hasOwnProperty(name)) {
            if (users[name].id == pool.userId) {
              //we found the matching user!
              cb(false, pool, users[name]);
              return;
            }
          }
        }
        //we have a pool but no user: i.e. data corrupt
        cb('data corrupted', null, null);
      }

    }
  }
  ;

module.exports = pools;
