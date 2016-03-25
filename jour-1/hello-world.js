// let's start
var http = require('http');

function handleRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello world!');
  response.end();
}

var server = http.createServer(handleRequest);
server.listen(8888);

console.log('server started');
