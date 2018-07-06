var express = require("express");
var router = express.Router();
var task = require("../public/task-operation");
router.get('/',function(req,res){
    res.send('welcome');
})
router.get('/all',function(req,res,next){
  task.getalltastdetails(req,res);  
})
router.post('/',function(req,res,next){
    task.createtaskdetails(req,res);
})
router.put('/:id',function(req,res){
    task.updatetaskdetails(req,res);
})
router.delete('/:id',function(req,res){
    task.removetaskdetails(req,res);
})
module.exports = router;