var Task = require('../model/task');
var logger = require('../logger/index');

var getalltastdetails = function(req,res){
    logger.info('GET-task');
    return Task.find(function(error,tasks){
        if(!error){
            res.send(tasks);
            console.log('get task details successfully');
        }
        else{
            res.send({
                statusCode : 500,
                error : "internal server error"
            });
        }
    }) 
}

var createtaskdetails = function(req,res){
    var task = new Task({ 
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        emailId : req.body.emailId,
        password : req.body.password,
        regStatus : req.body.regStatus,
        title : req.body.title
    })
    return task.save(function(error){
        if(!error){
            logger.info('created');
            res.json({
                statusCode : 200,
                task : Task
            });
        }
        else{
            res.send({
                statusCode : 500,
                error : 'internal error'
            });
        }
    })
}

var updatetaskdetails = function(req,res){
    return Task.findById(req.params.id,function(error,task){
        console.log('id....',req.params.id);
        console.log('task details...',task);
        if(error){
            res.send({
                statusCode : 400,
                error : 'not found data'
            })
        }
        if(req.body.firstName!=null){
            task.firstName = req.body.firstName;
        }
        if(req.body.lastName!=null){
            task.lastName = req.body.lastName;
        }
        if(req.body.emailId!=null){
            task.emailId = req.body.emailId;
        }
        if(req.body.password!=null){
            task.password = req.body.password;
        }
        if(req.body.regStatus!=null){
            task.regStatus = req.body.regStatus;
        }
        if(req.body.title!=null){
            task.title = req.body.title;
        }
        return task.save(function(error,task){
            if(!error){
                logger.info('updated successfully');
                res.json({
                    statusCode : 200,
                    task : Task
                });
            }
            else{
                res.send('error while save this function');
            }
        })
    })
}

var removetaskdetails = function(req,res){
    return Task.findById(req.params.id,function(error,task){
        console.log('id....',req.params.id);
        if(error){
            res.send('error while get input id');
        }
        return task.remove(function(error){
            if(!error){
                logger.info('deleted details : ',task);
                res.send({
                    statusCode : 200,
                    message : 'successfully deleted'
                });
            }
            else{
                res.send('error while remove that data');
            }
        })
    })
}

exports.getalltastdetails = getalltastdetails;
exports.createtaskdetails = createtaskdetails;
exports.updatetaskdetails = updatetaskdetails;
exports.removetaskdetails = removetaskdetails;



    // {
    //     "firstName":"banu",
    //     "lastName":"priya",
    //     "emailId":"banu123@gmail.com",
    //     "password":"banu123",
    //     "regStatus":"true",
    //     "title":"addtask"
    // }