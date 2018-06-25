var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/index');
var users = require('./routes/user');
var posts = require('./routes/post');
var app = express();
app.use(bodyParser.json());
app.use('/', router);
app.use('/users', users);
app.use('/posts',posts);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
var db = require('./db/index')
module.exports = app;
  