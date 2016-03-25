// let's start
var http = require('http');
var url = require('url');
var qs = require('querystring');

function handleRequest(request, response) {
  var bodyString = '';
  request.on('data', function(chunk) {
    bodyString += chunk;
  });
  request.on('end', function() {
    //analyse
    var reqUrl = url.parse(request.url, true);
    var analysis = {
      method: request.method,
      url: request.url,
      path: reqUrl.pathname,
      params: {
        query: reqUrl.query,
        body: null
      }
    };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if (bodyString.length >= 0) {
      //there was a body string
      switch (request.headers['content-type']) {
        case 'application/x-www-form-urlencoded':
          analysis.params.body = qs.parse(bodyString);
          break;
        case 'application/json':
          analysis.params.body = JSON.parse(bodyString);
          break;
        default:
          analysis.params.body = bodyString;
      }
    }
    response.write(JSON.stringify(analysis, null, 2));
    response.end();
  });

}

var server = http.createServer(handleRequest);
server.listen(8888);

console.log('server started');
