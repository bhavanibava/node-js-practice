var mocha = require('mocha');
var assert = require('assert');
var sinon = require('sinon');
var tools = require('../db/index');
var User = require('../resources/user_operations');
var expect = require('chai').expect;
var _ = require('underscore');
var idOperation;
var arrayval=[];

describe('perform user crud operations.....',function(){
   
    it('should create an user with provided details', function (done) {
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json : sinon.spy() }
            req = {
              "body":{
                "first_name":"bhavani v",
                "email_id":"bava123@gmail.com",
                "dob": new Date(),
                "last_name":"sai"
              }
            }
        User.createUserDetails(req,res).then(function(createdUserData){
            console.log('create operation:');
          assert(createdUserData.first_name, req.body.first_name);
          assert(createdUserData.email_id, req.body.email_id);
          assert(createdUserData.last_name, req.body.last_name);
          console.log('createUserDetails',createdUserData);
          idOperation = createdUserData._id;
          done();
        })
    });

    it.skip('should check one user details with provided Id', function (done) {
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json : sinon.spy(), send: sinon.spy()}
            req = {
              "params":{
                "id": idOperation
              }
            }
        User.getOneUserDetails(req,res).then(function(getOneUserData){
          console.log('getOneUserDetails', getOneUserData);
          done();
        })
    });

    it.skip('should check all user details', function(done){
        let req=sinon.spy();
        let res=sinon.spy();
            res={json:sinon.spy(), send: sinon.spy()}
        User.getAllUserDetails(req,res).then(function(getAllUserData){
            arrayval = getAllUserData;
            console.log('array length : ',arrayval.length);
            if(arrayval.length>1){
            //    console.log('getAllUserDetails',getAllUserData);
                console.log('aarrayval[0]:',arrayval[0].email_id);
                // expect(arrayval[0].first_name).to.be.a('string');
                // expect(arrayval[0].email_id).to.be.a('string');
                // expect(arrayval[0].dob).to.be.a('string');
                // expect(arrayval[0].last_name).to.be.a('string');
            }
            console.log('getAllUserDetails....', getAllUserData);
            done();
        })        
    });

    it.skip('should Update user details with provided data', function (done) {
        let req = sinon.spy();
        let res = sinon.spy();
            res = { send : sinon.spy(), json: sinon.spy() }
            req = {
              "params":{
                "id": idOperation
              },
              "body":{
                "first_name":"bava",
                "email_id":"abc@gmail.com",
                "dob": new Date(),
                "last_name":"v",
              } 
            }
        User.updateUserDetails(req, res).then(function(updateUserData){
           assert(updateUserData.first_name, req.body.first_name);
           assert(updateUserData.email_id, req.body.email_id);
           assert(updateUserData.last_name, req.body.last_name);
           console.log('updateUserDetails....',updateUserData);
         done();
        })
    });

    it.skip('should delete an user details from db',function(done){
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json:sinon.spy(), send : sinon.spy() };
            req = {
                "params":{
                    "id" : idoperation
                }
            }
            User.removeUserDetails(req, res).then(function(removeUserData){
                // assert(removeUserData.first_name, tools.first_name);
                // assert(removeUserData.email_id, tools.email_id);
                // assert(removeUserData.dob, tools.dob);
                // assert(removeUserData.last_name, tools.last_name);
                console.log('removeUserDetails...',removeUserData);
                  done();
            })
    });

});