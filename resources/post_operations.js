var logger = require('../logger/index');
var request = require('request');

var getmypostdetails = function(req, res){
	var postId = req.params.postId;
	var url = "https://jsonplaceholder.typicode.com/posts/"+postId;
	return request.get(url, function(error, responsePostDetails){
		if(!error){
			res.setHeader("content-type", "application/json");
			logger.info('postuser get details successfully');
			return res.send({
				statusCode:200,
				message:"get details successfully",
				body:responsePostDetails.body
			});
		}		
	})			
} 

var createmypostDetails = function(req,res){
	var postUserCreateDetails = {
			userId : req.body.userId,
			postvalue : req.body.postvalue,
			title : req.body.title
	};
	var url = "https://jsonplaceholder.typicode.com/posts";
		return request.post(url, postUserCreateDetails, function(error,response,body){
			if(!error){
				return res.send({
					statusCode: 200,
					message :'create details successfully',
					body : response.body
				});
				logger.info('postuser details are created')
			}
		}) 
}

var updatemypostdetails = function(req, res){
		var postId=req.params.postId;
		var postUserUpdateDetails = {
			userId : req.body.userId,
			postvalue : req.body.postvalue,
			title : req.body.title
		}
		var url = "https://jsonplaceholder.typicode.com/posts/"+postId;
			return request.put(url,postUserUpdateDetails,function(error,responseData){
			if(!error){
				if (req.body.userId != null)
					responseData.body.userId = req.body.userId;
				if(req.body.postvalue !=null)
					responseData.body.postvalue = req.body.postvalue;
				if(req.body.title != null)
					responseData.body.title = req.body.title;

				res.setHeader("content-type","application/json");
				logger.info('postuser details are updated');
				return res.send({
						statusCode:200,
						message:'updated details successfully',
						body:responseData.body
					});
				}			
		})
} 
var removemypostDetails = function(req,res){
	var postId = req.params.postId;
	var url = "https://jsonplaceholder.typicode.com/posts/"+postId;
	// console.log('remove func:',url);
	return request.delete(url,function(error,responseData){
		if(!error){
			res.send({
				statusCode : 200,
				message : "deleted successfully",
				body : responseData.body
			})
			logger.info('deleted');
		}
	})
}

exports.getmypostdetails = getmypostdetails;
exports.updatemypostdetails = updatemypostdetails;
exports.createmypostDetails = createmypostDetails;
exports.removemypostDetails = removemypostDetails;