var express = require('express');
var router = express.Router();
var request = require('request');
router.get('/',function(req,res,next){
    res.send('welcome bava');
});
var users = require('../resources/user_operations');

router.get('/all',function(req,res,next){
    users.getAllUserDetails(req, res)
});
router.get('/:userId', function(req, res, next) {
  users.getOneUserDetails(req, res)
});
router.post('/',function(req,res,next){
    users.createUserDetails(req,res)
});
router.put('/:userId',function(req,res,next){
    users.updateAllUserDetails(req,res)
});
router.delete('/:userId',function(req,res,next){
    users.removeUserDetails(req,res)
});

module.exports = router;