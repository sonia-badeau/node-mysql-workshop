var mysql = require('mysql');
var Table = require('cli-table');
var colour = require('colour');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'somaba',
    database: 'addressbook'
});

connection.query('show databases', function(err, results) {
/*var table = new Table();
 
table.push(
    ['Database', 'information_schema']
  , ['Database', 'addressbook']
  , ['Database', 'c9']
  , ['Database', 'mysql']
  , ['Database', 'performance_schema']
  
);

console.log(table.toString());*/
   
    console.log(results);

    connection.end(); // closes the connection. this is the same as writing "exit" in the mysql CLI
});


