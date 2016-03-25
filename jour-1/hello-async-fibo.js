// let's start
var http = require('http');
var fibo = require('async-fibo');

var clientCount = 0;

function handleRequest(request, response) {
  clientCount ++;
  console.log('incoming request #'+clientCount);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  //generate an integer between 50 and 100
  var randInt = Math.ceil(Math.random() * 5 + 40);
  var currentClient = clientCount;
  console.log('picked %s for client %s', randInt, currentClient);
  fibo(randInt, function (value) {
    response.write('Hello client #'+currentClient+' did you know that fibonacci\'s ' + randInt + 'th element is ' + value);
    response.end();
  });
}

var server = http.createServer(handleRequest);
server.listen(8888);

console.log('server started');
