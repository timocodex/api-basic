var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next) {
  res.send('respond with a resource eaaaa');
});

router.get('/users/:id', function(req, res, next) {
  res.send('respond with a resource eaaaa');
});

router.post('/users', function(req, res, next) {
  res.send('respond with a resource eaaaa');
});

router.put('/users/:id', function(req, res, next) {
  res.send('respond with a resource eaaaa');
});

router.delete('/users/:id', function(req, res, next) {
  res.send('respond with a resource eaaaa');
});

module.exports = router;
