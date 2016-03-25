// let's start
var http = require('http');
var randomName = require('./random/name');

function handleRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello ' + randomName() +'!');
  response.end();
}

var server = http.createServer(handleRequest);
server.listen(8888);

console.log('server started');
