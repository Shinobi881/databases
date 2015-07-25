var app   = require('express')(); // Express App include
var http = require('http').Server(app); // http server
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data
var model = require('../models');
// var sql = "SELECT * FROM ?? WHERE ?? = ?";
// var inserts = ['username', 'message', 'roomname'];
// sql = mysql.format(sql, inserts);

var dbConnection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'chat'
});

dbConnection.connect();
model.messages.post(request);





exports.dbConnection = dbConnection;
dbConnection.end();
