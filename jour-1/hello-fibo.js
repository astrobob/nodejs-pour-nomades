// let's start
var http = require('http');

/**
 * A very naive and bad implementation of the fibonacci serie
 * @param {int} n
 * @return {int}
 */
function fibo(n) {
  if (n < 1) {
    throw 'huston we have a problem';
  }
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}

var clientCount = 0;

function handleRequest(request, response) {
  clientCount ++;
  console.log('incoming request #'+clientCount);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  //generate an integer between 50 and 100
  var randInt = Math.ceil(Math.random() * 5 + 35);
  console.log('picked %s for client %s', randInt, clientCount);
  response.write('Hello client #'+clientCount+' did you know that fibonacci\'s ' + randInt + 'th element is ' + fibo(randInt));
  response.end();
}

var server = http.createServer(handleRequest);
server.listen(8888);

console.log('server started');
