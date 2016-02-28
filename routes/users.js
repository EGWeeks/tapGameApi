'use strict';

var express = require('express');
var router = express.Router();

var Table = require('../db/knex'),
  Users = Table('users');

  var crypto = require('../utilities/crypto');

router.get('/highscores', function(req, res) {
  Users()
    // .where({high_score: !null})
    .select('user_name', 'high_score')
    .orderBy('high_score', 'desc')
    .limit(10)
    .then(function(users) {
      res.send(users);
    })
    .catch(function(err) {
      res.send(err);
    });
});
/* GET user by ID. */
router.get('/:id', function(req, res) {

	Users()
		.where({id: Number(req.params.id)})
		.then(function(users) {
			delete users[0].password;
			console.log(users);
			res.send(users);
		})
		.catch(function(err) {
			console.log(err);
			res.send(err);
		});
});

/* POST new user. */
router.post('/', function(req, res) {

	var user = {
		email : req.body.email,
		password : req.body.password,
		user_name : req.body.user_name,
		high_score : req.body.high_score
	};

	crypto.hashPassword(user, function() {
		Users()
			.insert(user)
			.then(function(numRows) {
				res.send(numRows);
			})
			.catch(function(err) {
				res.send(err);
			});
	});

});

/* Delete user by ID. */
router.delete('/:id', function(req, res) {

	Users()
		.where({ id: Number(req.params.id)})
		.delete()
		.then(function() {
			res.send('User deleted');
		})
		.catch(function(err) {
			res.send(err);
		});

});

/* GET user by ID. */
router.put('/:id', function(req, res) {

	var score = {
		high_score : req.body.high_score
	};

	Users()
		.where({ id: Number(req.params.id)})
		.update(score)
		.then(function(numRows) {
			res.send(numRows);
		})
		.catch(function(err) {
			console.log(err);
			res.send(err);
		});
});

 /* POST user sign in */
 router.post('/signin', function(req, res) {
  Users()
    .where('email', req.body.email)
    .first()
    .then(function(user) {
      crypto.comparePassword(req.body.password, user, function(isEqual) {
        if(isEqual) {
          delete user.password;
          console.log(true);
          res.send(user);
        }
        else {
          res.send('Something is wrong');
        }
      });
    })
    .catch(function(err) {
      res.send('FUCK!'+ err);
    });
});

module.exports = router;
