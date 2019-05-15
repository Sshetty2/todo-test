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

module.exports = router;
