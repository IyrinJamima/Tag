var mysql = require('mysql');
var connection = mysql.createConnection({
				  host: 'localhost',
				  user: 'drole',
				  password: 'admin',
				  database: 'tag'
				});

connection.connect(function(err) {
    if(!err) {
    	console.log("Database is connected");
    }
    else {
    	console.log("Error connecting to database");
    }
});

module.exports = connection;