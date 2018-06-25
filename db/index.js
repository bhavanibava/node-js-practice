var mongoose = require('mongoose');
var config = require('../configure/default');
var URL = config.dbServer.protocol + config.dbServer.host+":"+config.dbServer.port+"/"+config.dbServer.dbName
//console.log('........',URL);
mongoose.connect(URL, function(err, res) {
    if(err){
        console.log('ERROR : Database connection error' +err);
    }
    else
    {
        console.log('Database connected : run restlet client');
    }
});