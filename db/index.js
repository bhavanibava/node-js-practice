var mongoose = require('mongoose');
var config = require('../configure/default');
// var config2 = require('../configure/production');
var URL = config.dbServer.protocol + config.dbServer.host+":"+config.dbServer.port+"/"+config.dbServer.dbName
// var productURL = config2.productDB.protocol + config2.productDB.host+":"+config2.productDB.dbPort+"/"+config2.productDB.dbName
// console.log('..product URL: ',productURL);
mongoose.connect(URL, function(err, res) {
    if(err){
        console.log('ERROR : Database connection error' +err);
    }
    else
    {
        console.log('Database connected : run restlet client');
    }
});