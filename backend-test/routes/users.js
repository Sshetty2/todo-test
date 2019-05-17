var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
	const options = {
		host: 'localhost',
		port: '3306',
		user: 'root',
		password: 'password',
		database: 'mydb'
	};
	const connection = mysql.createConnection(options);
	connection.query('SELECT * FROM user', (err, rows, fields) => {
		res.json(rows);
	});
});

router.post('/', function(req, res, next) {
	const options = {
		host: 'localhost',
		port: '3306',
		user: 'root',
		password: 'password',
		database: 'mydb'
	};
	const connection = mysql.createConnection(options);
	console.log(req.body);
	const sqlString = `INSERT INTO user
		(username,
		email,
		password)
		VALUES
		('${req.body.userid}',
		'${req.body.email}',
		'${req.body.pw_hash}')`;
	console.log(sqlString);
	connection.query(sqlString, result => {
		console.log(result);
	});
	res('we good');
});

module.exports = router;
