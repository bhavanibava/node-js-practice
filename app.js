var express = require('express');
var bodyParser = require('body-parser');
var users = require('./routes/user');
var task = require('./routes/task');
var app = express();
app.use(bodyParser.json());
app.use('/users', users);
app.use('/task',task);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
var db = require('./db/index')
module.exports = app;
  