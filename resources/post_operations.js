var Post= require('../model/post');
var logger = require('../logger/index');
var request = require('request');
var getmypostdetails = function(req, res){
	//console.log('posts-user get operation');
	var postId = req.query.postId;
	var url = "https://jsonplaceholder.typicode.com/posts/" + postId;
	return request(url, function(error, responsePostDetails){
		res.setHeader("content-type", "application/json");
		logger.info('postuser get details successfully');
		return res.send(responsePostDetails.body);
	})
}
var updatemypostDetails = function(req, res){
	//console.log('......put_operation');
	return Post.findById(req.query.postId,function(error,post){
		console.log('......request id.....',req.query.postId);
		if (req.body.postId != null)
		  post.postId = req.body.postId;
		  console.log('......no error.....',posts.postId);
		if(req.body.userId !=null)
		  post.userId = req.body.userId;
		if(req.body.dob !=null)
		  post.dob = req.body.dob;  
		// if(req.body.body !=null)
		//   post.body = req.body.body;
		return res.save(function(error){
			console.log('....console log save fun.......');
			if(!error){
				res.setHeader("content-type","application/json");
				logger.info('postuser details are updated',data);
				return res.send({
					statusCode : 200,
					Post : post
				});
			}
		});
	});
}
exports.getmypostdetails = getmypostdetails
exports.updatemypostDetails = updatemypostDetails