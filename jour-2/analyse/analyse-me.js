/**
 * Created by leojpod on 3/7/16.
 */
var http = require('http');
var url = require('url');
var qs = require('querystring');
var Analysis = require('./analysis');

function handleRequest(request, response) {
  var bodyString = '';
  //TODO récupérer les informations sur la requete et remplir l'objet suivant:
  var analysisData = {
    method: null,
    url: null,
    path: null,
    params: {
      query: null,
      body: null
    }
  };
  //extraire les paramètres de l'URL
  analysisData.method = request.method;
  analysisData.url = request.url;
  var reqUrl = url.parse(request.url, true);
  analysisData.path = reqUrl.pathname;
  analysisData.params.query = reqUrl.query;

  request.on('data', function (chunk) {
    bodyString += chunk;
    if (bodyString.length > 1e6) {
      // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
      request.connection.destroy();
    }
  });
  request.on('end', function () {
    var decodedBody;
    if (bodyString.length >= 0) {
      //there was a body string
      switch (request.headers['content-type']) {
        case 'application/x-www-form-urlencoded':
          decodedBody = qs.parse(bodyString);
          break;
        case 'application/json':
          decodedBody = JSON.parse(bodyString);
          break;
        default:
          decodedBody = bodyString;
      }
    }
    analysisData.params.body = decodedBody;
    /*TODO
     Une fois le tableau rempli, créer un Object Analysis (new Analysis(analysisData)
     et appeler la méthode displayJSON sur cet objet (il prend en paramètre
     l'objet response

     !! - vous devrez surement placer cet appel dans un callback!
     */
    var analysis = new Analysis();
    //analysis.displayJSON(response);
    request.url = reqUrl;
    request.query = reqUrl.query;
    request.body = decodedBody;
    analysis.analyseRequest(request).displayJSON(response);
  });
  /*TODO
  changer ensuite le code pour que ces informations soient disponible dans
  l'object request directement (ajouter/modifier dynamiquement des propriétés)
  utiliser analysis comme ceci une fois que votre objet request est surchargé:
  var analysis = new Analysis().analyseRequest(request).displayJSON(response);
  */
}

var server = http.createServer(handleRequest);
server.listen(8888);

console.log('server started');
