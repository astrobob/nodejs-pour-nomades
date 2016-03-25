/**
 * Created by leojpod on 2/24/16.
 */
var url = require('url');
var authentication = require('./routes/authenticate');
var pools = require('./routes/pools.js');
var users = require('./routes/users.js');

var routing = {
  routeRequest: function(req, res) {
    var reqUrl = url.parse(req.url);
    var segments = reqUrl.pathname.split('/');
    switch (segments[1]) {
      case 'authenticate':
        authentication.handleRequest(req, res);
        break;
      case 'pools':
        pools.handleRequest(req, res);
        break;
      case 'users':
        users.handleRequest(req, res);
        break;
      default:
        //unknown route:
        res.writeHead(404, { 'content-type': 'application/json' });
        res.write('{ "error": "unknown route"}');
        res.end();
    }
  }
};

module.exports.routing = routing;
