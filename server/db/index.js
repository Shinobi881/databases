

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var app   = require('express')(); // Express App include
var http = require('http').Server(app); // http server
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data



var db = mysql.createConnection({ // Mysql Connection
 
        user     : 'root',
        password : '',
        database : 'chat',
    });
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Body parser use JSON data
 


app.get('/fetchdata',function(req,res){
    var data = {
        "Data":""
    };
    
    db.query("SELECT * from testing",function(err, rows, fields){
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = 'No data Found..';
            res.json(data);
        }
    });

    console.log('Console logging the data', data);
});


// app.post('/login',function(req,res){
//     var email = req.body.email;
//     var pass = req.body.password;
//     var data = {
//         "Data":""
//     };
//     connection.query("SELECT * from messages",[email,pass],function(err, rows, fields){
//         if(rows.length != 0){
//             data["Data"] = "Successfully logged in..";
//             res.json(data);
//         }else{
//             data["Data"] = "Email or password is incorrect.";
//             res.json(data);
//         }
//     });
// });





























































// var connection = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "chat"
// });

// connection.connect(function(err){
//   if(err){
//     console.error('error connecting', + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// exports.connection = connection;