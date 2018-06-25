var mocha = require('mocha');
var assert = require('assert');
var sinon=require('sinon');
var tools= require("../db/index");
var userPosts = require('../resources/post_operations');
var _ = require('underscore')
var expect= require("chai").expect;

describe('User_post operations.....',function(){

    it('should check get users details',function(done){
        let req = req.sinon.spy();
        let res = res.sinon.spy();
            res = {json : sinon.spy(), setHeader : sinon.spy()}
            req = {
                "query" : {
                    "postId" : 100
                }
            }
        userPosts.getmypostdetails(req,res).then(function(postdata){
            chai.expect(postdata.id,100);
            done();
        })
    });

    it.skip('should check update details',function(req,res){
        let req = req.sinon.spy();
        let res = res.sinon.spy();
            res = {json : sinon.spy(), setHeader : sinon.spy()}
            req = {
                "query" : {
                    "postId" : 2,
                    "userId" : 1,
                    "body" : { hi,welcome:this/tbody/tcontent/tfrom/tupdate/tfunction}
                }
            }
        userposts.updatemypostdetails(req,res).then(function(updatedmydata){
            assert(updatemypostdetails.postId,updatedmydata.postId);
            assert(updatemypostdetails.userId,updatedmydata.userId);
            assert(updatemypostdetails.body,updatedmydata.body);
            console.log('updatemypostdetails..',updatedmydata);
            done();
        })

    });

});