var User = require('../model/user');
var logger = require('../logger/index');

var getAllUserDetails = function(req,res){
    logger.info("GET - /users");
    return User.find(function(err,user){
        if(!err){
            return res.json({
				statuscode : 200,
				message : user
			});
        }
        else{
            res.statuscode = 500;
            logger.error('Internal eerror(%d):%s',res.statusCode,err.message);
            return res.send({
                error:'server error'
            });
        }
    });
}

var getOneUserDetails = function (req, res) {
	return User.findById(req.params.id, function (err, user) {
		if (!err) {
			logger.info('User info has been retrieved successfully');
			return res.json({
				statusCode : 200,
				user : user
			});
		} 
		else {
			if (err.name == 'ValidationError') {
				res.json({
					statusCode : 400,
					error : 'Validation error'
				});
			} else {
				res.json({
					statusCode : 500,
					error : 'Server error'
				});
			}
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
}

var createUserDetails = function (req, res) {
	var user = new User({
		first_name:req.body.first_name,
		email_id : req.body.email_id,
		dob : req.body.dob,
		last_name:req.body.last_name
	});	
	return user.save(function (err) {
		if (!err) {
			logger.info("User created");
			return res.json({
				stausCode : 200,
				User : user
			});
		} else {
			logger.error(err);
			if (err.name == 'ValidationError') {
				res.json({
					statusCode : 400,
					error : 'Validation error'
				});
			} else {
				res.json({
					statusCode : 500,
					error : 'API Server error'
					});
				}
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
}

var updateUserDetails = function (req, res) {
	return User.findById( req.params.id, function (err, user) {
		console.log('update function: user details',user);
		if (!user && user.length == 0) {
			return res.json({
				statusCode : 404,
				error : 'Not found'
			});
		}
		if (req.body.first_name != null)
			user.first_name = req.body.first_name;
		if (req.body.email_id != null)
			user.email_id = req.body.email_id;
		if (req.body.dob != null)
			user.dob = req.body.dob;
		if (req.body.last_name != null)
			user.last_name = req.body.last_name;	
		return user.save(function (err) {
			if (!err) {
				logger.info('User info has been updated');
				return res.json({
					statusCode : 200,
					user : user
				});
			} 
			else {
				if (err.name == 'ValidationError') {
					res.json({
						statusCode : 400,
						error : 'Validation error'
					});
				} else {
					res.json({
						statusCode : 500,
						error : 'Server error'
					});
				}
				logger.error('Internal error(%d): %s', res.statusCode, err.message);
			}
		});
	});
}

var removeUserDetails = function (req, res) {
	return User.findById(req.params.id, function (err, user) {
		if (!user) {
			return res.json({
				statusCode : 404,
				error : 'Not found'
			});
		}

		return user.remove(function (err) {
			if (!err) {
				logger.info('Removed user successfully');
				 return res.json({
					statusCode : 200
				});
			} else {
				logger.error('Internal error(%d): %s', res.statusCode, err.message);
				 return res.json({
					statusCode : 500,
					error : 'Server error'
				});
			}
		})
	});
}
exports.getAllUserDetails = getAllUserDetails;
exports.getOneUserDetails = getOneUserDetails;
exports.createUserDetails = createUserDetails;
exports.updateUserDetails = updateUserDetails;
exports.removeUserDetails = removeUserDetails;
