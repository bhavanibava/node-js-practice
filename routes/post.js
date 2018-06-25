var express = require('express');
var router = express.Router();
var request = require('request');
router.get('/',function(req,res,next){
    res.send('welcome bava');
});
var posts = require('../resources/post_operations');

router.get('/post/my',function(req,res,next){
    posts.getmypostdetails(req,res)
});
router.post('/post/my',function(req,res,next){
    posts.createmypostDetails(req,res)
});
router.put('/post/my?:postId',function(req,res,next){
    posts.updatemypostDetails(req,res)
});
router.delete('/post/my',function(req,res,next){
    posts.removemypostDetails(req,res)
});
module.exports = router;