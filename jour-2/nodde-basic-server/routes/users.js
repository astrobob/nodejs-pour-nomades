/**
 * Created by leojpod on 2/29/16.
 */

var url = require('url');
var normalizer = require('../normalizer.js');
var mockUpData = require('../mock-up-data.js');

var users = {
  handleRequest: function(req, res) {
    var segments = url.parse(req.url).pathname.split('/');
    switch (segments.length) {
      case 2:
        //collection request
        switch (req.method) {
          case 'GET':
            this.getAllUsers(function(err, users) {
              if (err) {
                res.writeHead(500, { 'Content-type': 'application/json' });
                res.write(JSON.stringify({ 'error': err }));
                res.end();
              } else {
                res.writeHead(200, { 'Content-type': 'application/json' });

                var jsonMessage = {
                  data: []
                };

                jsonMessage.data = normalizer.normalizeArray(users, normalizer.normalizeUser);

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
            this.getUserById(segments[2], function(err, user) {
              if (err) {
                res.writeHead(500, { 'content-type': 'application/json' });
                res.write(JSON.stringify({ 'error': err }));
                res.end();
              } else {
                res.writeHead(200, { 'content-type': 'application/json' });
                var message = {
                  data: user ? normalizer.normalizeUser(user): null
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

  getAllUsers: function (cb) {
    var users = [];
    for (var name in mockUpData.users) {
      if (mockUpData.users.hasOwnProperty(name)) {
        users.push(mockUpData.users[name]);
      }
    }
    cb(false, users);
  },

  getUserById: function (id, cb) {
    var users = mockUpData.users;
    var user = null;
    for (var name in users) {
      if (users.hasOwnProperty(name)) {
        if (users[name].id.toString() === id) {
          user = users[name];
          break;
        }
      }
    }
    cb(false, user);
  }

};

module.exports = users;
