/*Exercise 3: Joining up the data, part 1

Write a program that fetches all the accounts and their addressbooks.
Output one line for each account as in Exercise 4, followed by a listing of all the address book names for that account, one per line

Make the output look nice in any way you like
Here is an example:

#1: john@smith.com
  business contacts
  friends
#2: jane@smith.com
  ...
*/

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'somaba',
    database: 'addressbook'
});

connection.query('select * from Account join AddressBook on Account.id=AddressBook.accountId', function(err, results) {
    results.forEach(function(results){
   console.log('#' + results.id + ': ' + results.email + '\n' + results.name);
    });
});
connection.end();

