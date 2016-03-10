/**
 * Created by leojpod on 3/10/16.
 */
var async = require('async');
var express = require('express');

var MongoClient= require('mongodb').MongoClient;
var ObjectID = require("mongodb").ObjectID;
var _ = require('lodash');
var jsonapi = require('jsonapi-serializer');
var Serializer = jsonapi.Serializer;

var app = express();

var url = 'mongodb://localhost:27017/neko_test';

app.get('/search', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    
    // Input request
    var input = {
      competence : '56e15777b8bcff01588ce578', // Graphisme
      semaine: [{lu: ['am']}, {ve: ['am']}], // Semaine
      from: 1464732000, // 1er juin 2016
      to: 1472680800	// 1er septembre 2016,
      //to: 1469916000  // 31 juillet
    };
    
    // Get all linked competences match
    db.collection('linked_competences').find({ 'competences' : input.competence}).toArray().then(function (results) {
      var competences = [];
      var users = [];
      
      // Get all linked competences
      for (var item in results) { 
        competences = competences.concat(results[item].competences);
      }
      var competenceQuery = { 'competences.id' : {$in : competences}};
      
      // Get all semaine match
      var semaineQuery = { semaine : { $all : []} };
      for (var s in input.semaine) {
        semaineQuery.semaine.$all.push({ "$elemMatch" : input.semaine[s] })
      }
      
      // Paul est en vacances du 1er janvier (1451602800) au 31 mars (1459375200) et du 15 septembre (1473890400) au 30 septembre (1475186400)
      // Anne est en vacances du 1er août (1470002400) au 1er septembre (1472680800)
      var availabilityQuery = {"unavailable.from" : {$gte: 1464732000}, "unavailable.to" : {$lt: 1472680800}};

      // Get availability match
      //var availabilityQuery = {unavailable : {$gte: input.from,  $lt: input.to}}
      //var availabilityQuery = { $or: [{'unavailable': { $exists: false}}, {$not: {"unavailable.from" : {$gte: 1464732000}, "unavailable.to" : {$lt: 1472680801}}}]};
      //var availabilityQuery = {$and: [{"unavailable.from" : {$gte: 1464732000}, "unavailable.to" : {$lt: 1472680801}}]};
      //var availabilityQuery = {'unavailable': { $exists: false}}
      
  //    var availabilityQuery = { $or: [{'unavailable': { $exists: false}}, {"unavailable.from" : {$gte: 1464732000}, "unavailable.to" : {$lt: 1472680800}}]}
     
      // Get all users match
  /*
      db.collection('users').find( { $and: [
        competenceQuery,
        semaineQuery,
        
        ]}
        */
      db.collection('users').find( 
        availabilityQuery
        ).toArray().then(function (results) {
          for (var item in results) {
            users.push(results[item].firstname + ' ' + results[item].lastname);
          }
          
          var jsonMessage = new Serializer('users', users);
          res.json(jsonMessage);
      });
    });  
  });
});  
  
app.get('/competences', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    db.collection('competences').find().toArray().then(function (results) {
      var jsonMessage = new Serializer('competences', results);
      res.json(jsonMessage);
    });
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
  
app.listen(3000);