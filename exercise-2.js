var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'somaba',
    database: 'addressbook'
});

connection.query('select id, email from Account limit 5', function(err, results) {
   results.forEach(function(results){
   console.log('#' + results.id + ': ' + results.email);
    });
    console.log(typeof results);
});
connection.end();
