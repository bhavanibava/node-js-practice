var Post= require('../model/post');
var logger = require('../logger/index');
var request = require('request');

var getmypostdetails = function(req, res){
	console.log('post-user get operation:');
	//var postId = req.query.postId;
	//var url = "https://jsonplaceholder.typicode.com/posts/100";
	//return request(url, function(error, responsePostDetails)
	return Post.find(function(err,data){
		if(!err){
			res.setHeader("content-type", "application/json");
			logger.info('postuser get details successfully');
			return res.send(data);
		}		
	})										///users/post/mine?postId=100//
} 
var createmypostDetails = function(req,res){
	console.log('post-user create operation:')
	//return request(url, function(error, responsePostDetails)
	var post = new Post({
			userId : req.body.userId,
			Id : req.body.Id
	});
	return post.save(function (err) {
	if (!err) {
		logger.info("post-User details created");
		return res.json({
			stausCode : 200,
			Post : post
		});
		//console.log('created details successfully');
		var Idvalue = post.Id;
		console.log('id value:',Idvalue);
	// 	var url = "https://jsonplaceholder.typicode.com/posts/"+Idvalue;
	// 	return request(url, function(error, res){
	// 		res.send('post-user details created successfully ');
	// })
}
}) 
}
var updatemypostdetails = function(req, res){
	console.log('......put_operation');
	return Post.findById(req.params.Id,function(error,post){
		if(error){
			res.send(500,'error in update function');
		}
	//	console.log('......request id.....',req.params.Id);
		if (req.body.userId != null)
		  post.userId = req.body.userId;
		  console.log('......userId.....',post.userId);
		if(req.body.Id !=null)
		  post.Id = req.body.Id;  
		  console.log('.....Id.....',post.Id);
		return res.save(function(error){
			console.log('....console log save fun.......');
			if(!error){
				//res.setHeader("content-type","application/json");
				logger.info('postuser details are updated');
				return res.send({
					statusCode : 200,
					Post : post
				});
			}
		});
	});
}
var removemypostDetails = function(req,res){
	console.log('delete operation');
	return Post.findById(req.params.Id,function(error,post){
		// if(!post){
		// 	res.send('error found');
		// }
		return post.remove(function(error){
			if(!error){
				res.send({
					statusCode : 200
				})
				logger.info('post-user details are deleted successfully');
			}
		})
	})
}
exports.getmypostdetails = getmypostdetails;
exports.updatemypostdetails = updatemypostdetails;
exports.createmypostDetails = createmypostDetails;
exports.removemypostDetails = removemypostDetails;
