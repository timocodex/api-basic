'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      createUser: function(name,user_name,password){
        this.create({name:nama,user_name:user_name,password:password})
      },
      getAllUser: function(){
        this.findAll()
      }
    },
    instanceMethods:{
      getUser: function(){

      }
    }
  });
  return User;
};
