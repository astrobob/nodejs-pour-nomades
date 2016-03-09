/**
 * Created by leojpod on 2/23/16.
 */
var jwt = require('jsonwebtoken');

var mockUpData = require('./../mock-up-data');
var config = require('./../config');

var authentication = {
  authenticateUser: function(nameOrEmail, candidatePassword) {
    //TODO utiliser le contenu de mockup data pour valider ou refuser
    // l'authentification d'un utilisateur
    for (user in mockUpData.users) {
      if (mockUpData.users[user].email == nameOrEmail && mockUpData.users[user].password == candidatePassword) {
        jwt.sign({id: mockUpData.users[user].id}, config.secretTokenKey, function (token));
      }
    }
    return false;
  },

  isRequestAuthenticated: function(req, next) {
    //TODO chercher la présence du token d'authentification dans :
    // - body, query et headers (x-access-token)
    // utiliser jwt.verify pour s'assurer de la validité du token
    jwt.verify({id: 0}, config.secretTokenKey, function(err, decoded) {
      token
    });
  },

  handleRequest: function(req, res) {
    console.log('request for authentication');
    //TODO chercher la méthode de la requête et déterminer que faire:
    // - tenter d'authentifier l'utilisateur
    // - vérifier si la requête est authentifiée
    this.authenticateUser(req.body.identifier, req.body.password);
    res.writeHead(500);
    res.write('{ "error": "unimplemented"}');
    res.end();
  }
};

module.exports = authentication;
