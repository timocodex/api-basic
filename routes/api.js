var con = require('../controller/userController.js')
var express = require('express');
var router = express.Router();

router.get('/users', con.findAllUsers)

router.get('/users/:id', con.findUser)

router.post('/users', con.createUser)

router.put('/users/:id', con.updateUser)

router.delete('/users/:id',con.deleteUser)

module.exports = router;
