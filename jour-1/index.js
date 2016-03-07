var randomName = require('./random/name');

var http = require('http');
var fibo = require('async-fibo');
var url = require('url');
var querystring = require('querystring');


var clientCount = 0;

function handleRequest(request, response) {
	clientCount++;
	var currentClient = clientCount;
	console.log('La fonction ' + currentClient + ' a été appelée')
	var rand = Math.ceil(Math.random() * 5 + 35);
	//response.write("" + fibonacci(40));
	fibo(rand, function(v) {
		response.writeHead(200, {'Content-Type' : 'text/plain'});
		response.write("" + v);
		console.log('La fonction ' + currentClient + ' est terminée, le résultat est renvoyé')
		response.end();
	});
}

var fibonacci = function(n) {
   if (n < 2) {
     return 1;
   } else {
     return fibonacci(n-2) + fibonacci(n-1);
   }
}

function handleRequestName(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write(randomName.getRandomName());
	response.end();
}

function handleRequestUrl(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	var output = '';
	switch(request.method) {
		case 'GET' :
			var u = url.parse(request.url);
			var res = querystring.parse(u.query);
			output = JSON.stringify(res);
			break;
	}
	response.write(output);
	response.end();
}

var server = http.createServer(handleRequestUrl);
server.listen(8888);
