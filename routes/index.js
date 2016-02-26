'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
	res.send('Implement create new high score');
});

router.del('/:id', function(req, res) {
	res.send('Implement delete high score');
});

router.put('/:id', function(req, res) {
	res.send('Implement update high score');
});

module.exports = router;