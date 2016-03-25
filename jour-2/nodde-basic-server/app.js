/**
 * Created by leojpod on 2/22/16.
 */

var http = require('http');
var qs = require('querystring');
var url = require('url');
var routing = require('./routing.js').routing;

http.createServer(function(request, response) {
  var corsHeaders = {
    "Access-Control-Allow-Origin": "http://localhost:4200",
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Max-Age": '86400', // 24 hours
    "Access-Control-Allow-Headers": "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept, x-access-token"
  };
  for (var header in corsHeaders) {
    if (corsHeaders.hasOwnProperty(header)) {
      response.setHeader(header, corsHeaders[header]);
    }
  }
  response.setHeader('Content-Type', 'application/json');
  switch (request.method) {
    case 'GET':
      var reqUrl = url.parse(request.url, true);
      request.query = reqUrl.query;
      routing.routeRequest(request, response);
      break;
    case 'POST':
      var bodyString = '';
      request.on('data', function(data) {
        bodyString += data;
        if (bodyString.length > 1e6) {
          // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
          request.connection.destroy();
        }
      });
      request.on('end', function() {
        if (request.headers['content-type'] == 'application/x-www-form-urlencoded') {
          request.post = qs.parse(bodyString);
        } else if (request.headers['content-type'] == 'application/json') {
          request.post = JSON.parse(bodyString);
        }
        routing.routeRequest(request, response);
      });
      break;
    case 'OPTIONS':
      console.log('OPTIONS call!');
      response.writeHead(200);
      response.end();
      break;
    default:
      routing.routeRequest(request, response);
  }
}).listen(8888);
