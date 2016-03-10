/**
 * Created by leojpod on 3/10/16.
 */
var async = require('async');
var MongoClient= require('mongodb').MongoClient;
var ObjectID = require("mongodb").ObjectID;

var url = 'mongodb://localhost:27017/nekotest';

MongoClient.connect(url, function (err, db) {
	/*
	db.collection('cf.roms')
	.insertOne({
		"titre" : "hello", 
		"artiste": [{"name" : "john"}, {"name" : 'mister P', "pseudo": "Prince"}]
	}, function(err, results) {
		if (err) throw err;
		console.log(results);
	});
	*/
	var comp = ["56e15766b8bcff01588ce576", "56e15956b8bcff01588ce586"];
	db.collection('users').find({ 'competences.id' : {$in : comp}}).toArray().then(function (results) {
		console.log(results);
	});
});
