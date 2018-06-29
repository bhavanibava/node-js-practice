var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = new Schema({
    userId : {
        type : Number,
        index : true
    },
    Id : {
        type : Number,
        index : true
    }
    // body : {
    //     type : String
    // }
});
module.exports =mongoose.model('Post',Post);

//"postId":"10", "userId":"1", "dob":"24th"


