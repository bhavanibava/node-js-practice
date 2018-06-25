var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    first_name:{
        type:String,
        index:true
    },
    email_id:{
        type:String,
        index:true,
        required:true
    },
    dob:{
        type:Date,
        default:Date.now
    },
    last_name:{
        type:String,
        index:true
    }
});
module.exports=mongoose.model('User',User);