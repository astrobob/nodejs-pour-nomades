/**
 * Created by leojpod on 2/29/16.
 */

var url = require('url');
var normalizer = require('../normalizer.js');
var mockUpData = require('../mock-up-data.js');

var users = {
  //TODO faire comme avec pools.js !
  handleRequest: function(req, res) {
	res.writeHead(404);
	res.end();
  }
};

module.exports = users;
