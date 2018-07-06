var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Task = new Schema({
    firstName : {
        type : String,
        index : true
    },
    lastName : {
        type : String,
        index : true
    },
    emailId : {
        type : String,
        index : true
    },
    password : {
        type : String
    },
    regStatus : {
        type : String
    },
    title : {
        type : String,
        required : true
    }

});
module.exports =mongoose.model('Task',Task);
