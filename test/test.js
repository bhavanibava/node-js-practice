var mocha = require('mocha');
var assert = require('assert');
var sinon = require('sinon');
var tools = require('../db/index');
var User = require('../resources/user_operations');
var expect = require('chai').expect;
var _ = require('underscore');
var idoperation;
var arrayval=[];

describe('perform user crud operations.....',function(){
   
    it('should create an user with provided details',function(done){
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json : sinon.spy() };    
            req = {
                "body":{
                    "first_name" : "bavani",
                    "email_id" : "bava1@gmail.com",
                    "dob" : new Date(),
                    "last_name" : "sai"
                }
            }
            User.createUserDetails(req, res).then(function(createUserData){
               assert(createUserData.first_name, req.body.first_name);
               assert(createUserData.email_id, req.body.email_id);
               assert(createUserData.dob, req.body.dob);
               assert(createUserData.last_name, req.body.last_name);
               id=createUserData.id;
               console.log('createUserDetails....idoperation :',idoperation);
               console.log('createUserDetails',createUserData);
                 done();
            })    
    });

    it('should check one user detail based on id',function(done){
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json:sinon.spy() };
            req = {
                "params" : {
                    "id" : idoperation
                }
            }
            User.getOneUserDetails(req, res).then(function(getOneUserData){
                console.log('getOneUserDetails',getOneUserData);
                done();
            })
    });

    it('should check all user details',function(done){
        let req = sinon.spy();
        let res = sinon.spy();
            res = { send:sinon.spy() };

            User.getAllUserDetails(req, res).then(function(getAllUserData){
                arrayval = getAllUserData;
                console.log('array length : ',arrayval.length);
                if(arrayval.length>1)
                {
                    console.log('getAllUserDetails',getAllUserData);
                    console.log('aarrayval[0]:',arrayval[0].email_id);
                    expect(arrayval[0].first_name).to.be.a('string');
                    expect(arrayval[0].email_id).to.be.a('string');
                   // expect(arrayval[0].dob).to.be.a('string');
                    expect(arrayval[0].last_name).to.be.a('string');
                    console.log();
                }
                // check the length of the array getAllUserData > 1
                // check if one of the doc will have all the required fields  getAllUserData[0]
                  done();
            })
    });

    it.skip('should update the user details',function(done){
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json:sinon.spy() }
            req = {
                "params" : {
                    "id" : idoperation
                },
                "body": {
                    "first_name" : "bavasai",
                    "email_id" : "bava1@gmail.com",
                    "dob" : new Date(),
                    "last_name" : "v"
                }
            }
            User.updateAllUserDetails(req, res).then(function(updateUserData){
                // assert(updateUserData.first_name, req.body.first_name);
                // assert(updateUserData.email_id, req.body.email_id);
                // assert(updateUserData.dob, req.body.dob);
                // assert(updateUserData.last_name, req.body.last_name);
                console.log('checking2....',req.body);
                console.log('updateAllUserDetails',updateUserData);
                    done();
                })
    });

    it.skip('should delete an user details from db',function(done){
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json:sinon.spy() };
            req = {
                "params":{
                    "id" : idoperation
                }
            }
            User.removeUserDetails(req, res).then(function(removeUserData){
                //assert(removeUserData.first_name, tools.first_name);
                // assert(removeUserData.email_id, tools.email_id);
                // assert(removeUserData.dob, tools.dob);
                // assert(removeUserData.last_name, tools.last_name);
                console.log('removeUserDetails',removeUserData);
                  done();
            })
    });

});
