var mocha = require('mocha');
var assert = require('assert');
var sinon=require('sinon');
var tools= require("../db/index");
var userPosts = require('../resources/post_operations');
var expect= require("chai").expect;

describe('Userpost operations.....',function(){
    it('should check get users details',function(done){
        console.log('get operations.......')
        var req = sinon.spy();
        var res = sinon.spy();
            res = {setHeader : sinon.spy(), send:sinon.spy()}
            req = {
                "params":{
                    "postId" : 100
                }
            }
            console.log('get id : ',req.postId);
        userPosts.getmypostdetails(req,res).then(function(postUserdata){
            
            chai.expect(postUserdata.id,100);
            console.log('getmypostdetails',postUserdata);
            done();
        })
    });

    it.skip('should create an post-user details',function(done){
        var req = sinon.spy();
        var res = sinon.spy();
            res = { send : sinon.spy() };    
            req = {
                "body":{
                    "userId" : "101",
	                "postvalue" : "102",
                    "title" : "post-user details while creating"
                }
            }
            userPosts.createmypostDetails(req, res).then(function(createdUserData){
               assert(createdUserData.userId, req.body.userId);
               assert(createdUserData.postvalue, req.body.postvalue);
               assert(createdUserData.title, req.body.title);
               console.log('createmypostDetails',createdUserData);
               done();
            })
    });
    it.skip('should check update details',function(req,res){
        var req = sinon.spy();
        var res = sinon.spy();
            res = {setHeader : sinon.spy(),send : sinon.spy()}
            req = {
                "params" : {
                    "postId" : 100
                },
                "body" : {
                    "userId" : "101",
	                "postvalue" : "104",
                    "title" : "post-user details while updating"
                }
            }
        userPosts.updatemypostdetails(req,res).then(function(updatedmydata){
            assert(updatedmydata.userId,req.body.userId);
            assert(updatedmydata.postvalue,req.body.postvalue);
            assert(updatedmydata.title,req.body.title);
            console.log('updatemypostdetails..',updatedmydata);
            done();
        })

    });

    it.skip('delete post-user details',function(req,res){
        var req = sinon.spy();
        var res = sinon.spy();
            res = {send : sinon.spy()}
            req = {
                "params" : {
                    "postId" : 100 
                }
            }
        userPosts.removemypostDetails(req,res).then(function(removeData){
            chai.expect(removeData.id,100);
            console.log('removemypostDetails..',removeData);
            done();
        })
    });
});