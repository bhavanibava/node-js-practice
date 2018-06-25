var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = new Schema({
    postId : {
        type : Number,
        index : true
    },
    userId : {
        type : Number,
        index : true
    },
    dob : {
        type:Date,
        default:Date.now
    }
    // body : {
    //     type : String
    // }
});
module.exports =mongoose.model('Post',Post);