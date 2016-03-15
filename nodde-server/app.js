var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var mongoose = require('mongoose');
var User = require('./models/user');

var routes = require('./routes/index');
var authenticate = require('./routes/authenticate');
var pools = require('./routes/pools');
var users = require('./routes/users');
var privateApi = require('./routes/private');
var config = require('./config.js');
var async = require('async');
var bcrypt = require('bcrypt');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// use bodyParser middleware to decode json parameters
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// use bodyParser middleware to decode urlencoded parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
// use cookieParser to extract cookie information from request
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// connect to the database
//console.log('about to connect to the db');
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {

  var hasCreator = false;
  async.series([
    function(cb) {
      User.find({ isCreator: true }, function(err, users) {
        if (err) throw err;
        if (users.length > 0) {
          hasCreator = true;
        }
        cb();
      });
    },
    function (cb) {
      if (hasCreator) {
        cb();
      } else {
        bcrypt.hash('password', 10, function(err, hash) {
          if (err) throw err;
          var creator = new User({
            name: 'john',
            email: 'john@smith.com',
            password: hash,
            isAdmin: true,
            isCreator: true
          });
          creator.save(function (err, user) {
            if (err) throw err;
            cb();
          });
        });
      }
    }
  ]);
});

// use a middleware to place the db access on the request
app.use(function(req, res, next) {
  //console.log('setup the database in the request');
  //req.db = db;
  next();
});
var corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:4200",
  "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Max-Age": '86400', // 24 hours
  "Access-Control-Allow-Headers": "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept, x-access-token"
};
app.options('*', function(req, res, next) {
  res.set(corsHeaders).end();
});
app.use(function(req, res, next) {
  res.set(corsHeaders);
  next();
});

app.use('/', routes);
app.use('/authenticate', authenticate);
app.use('/pools', pools);
app.use('/users', users);
app.use('/private', privateApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
