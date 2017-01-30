var con = require('../controller/userController.js')
var express = require('express');
var router = express.Router();

router.get('/users', con.findAllUsers)

router.get('/users/:id', con.findUser)


module.exports = router;
