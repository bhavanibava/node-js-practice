var mocha = require('mocha');
var assert = require('assert');
var sinon=require('sinon');
var tools= require("../db/index");
var Posts = require('../resources/post_operations');
var expect= require("chai").expect;

describe('User_post operations.....',function(){
    it('should check get users details',function(done){
        var req = sinon.spy();
        var res = sinon.spy();
            res = {json : sinon.spy(), setHeader : sinon.spy(), send:sinon.spy()}
        Posts.getmypostdetails(req,res).then(function(postdata){
           // chai.expect(postdata.id,100);
            console.log('getmypostdetails...',postdata);
            done();
        })
    });

    it('should create an post-user details',function(done){
        var req = sinon.spy();
        var res = sinon.spy();
            res = { json : sinon.spy() };    
            req = {
                "body":{
                    "userId" : 20,
                    "Id" : 5
                }
            }
            Posts.createmypostDetails(req, res).then(function(createData){
               assert(createdUserData.userId, req.body.userId);
               assert(createdUserData.Id, req.body.Id);
               console.log('createmypostDetails...',createData);
               done();
            })
    });
    it('should check update details',function(req,res){
        var req = sinon.spy();
        var res = sinon.spy();
            res = {json : sinon.spy(), setHeader : sinon.spy(),send : sinon.spy()}
            req = {
                "params" : {
                    "Id" : 5
                },
                "body" : {
                    "userId" : 2,
                    "Id": 5
                }
            }
        Posts.updatemypostdetails(req,res).then(function(updatedmydata){
            assert(updatemypostdetails.userId,updatedmydata.userId);
            assert(updatemypostdetails.Id,updatedmydata.Id);
            console.log('updatemypostdetails..',updatedmydata);
            done();
        })

    });

    it('delete post-user details',function(req,res){
        var req = sinon.spy();
        var res = sinon.spy();
            res = {json : sinon.spy(),send : sinon.spy()}
            req = {
                "params" : {
                    "id" : 5 
                }
            }
        Posts.removemypostDetails(req,res).then(function(removeData){
            console.log('removemypostDetails..',removeData);
            done();
        })
    });
});