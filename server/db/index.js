var mysql = require('mysql'); // Mysql include



var dbConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

dbConnection.connect();
// model.messages.post(request);





module.exports = dbConnection;

