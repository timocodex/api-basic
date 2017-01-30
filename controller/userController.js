var db = require('../models')
var express = require('express');
var router = express.Router();

module.exports = {

  createUser: function(req,res){
    db.User.create({name:req.body.name,user_name:req.body.username,password:req.body.pass}).then(function(){
      res.send(' create new user success')
    })
  },

  findAllUsers :function(req,res){
    db.User.findAll().then(function(users){
      res.json(users)
    })
  },

  findUser: function(req,res){
    db.User.find({where:{id:req.params.id}}).then(function(user){
      res.json(user)
    })
  },

  updateUser: function(req,res){
    db.User.findOne({where:{id:req.params.id}}).then(function(user){
      user.update({name:req.body.name,user_name:req.body.username,password:req.body.pass}).then(function(){
        res.send('update user success')
      })
    })
  },

  deleteUser: function(req,res){
    db.User.findOne({where:{id:req.params.id}}).then(function(user){
      user.destroy().then(function(){
        res.send('delete user success')
      })
    })
  }


}
