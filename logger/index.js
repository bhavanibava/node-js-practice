var winston = require('winston');
var options = {
    file : {
        level : 'debug',
        filename :'log/app.log',
        json : true,
        maxsize : 2097152,  //2mb in bytes(binary) or 1mb = 1048576 bytes//
        maxfiles : 2,
        colorize : true
    },
    console : {
        level : 'debug',
        json : false,
        colorize : true
    }
};
var logger = new winston.Logger({
    transports : [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError : false,
    //this is used to exit while some typeof error//
});
logger.stream = {
    write : function(msg,encoding){
        logger.info(msg);
    },
};

module.exports = logger;

// var winston = require('winston');
// winston.level('info');
// winston.format('json');

//transport is essentially a storage device for our logs.....//
//winston is a logging library with support for multiple transports//
//winston used to create ur own loggers.....using this syntax: winston.createLogger()//
