var db = require('../db');

module.exports = {

  messages: {
    get: function (request, response) {
      
    }, 
    post: function (request, response) {
      console.log('Logging request', request.body.message);
//       var post  = {message: request.body.message,
//                   username: request.body.username,
//                   roomname: request.body.roomname
//                 };
//       var query = db.dbConnection.query('INSERT INTO messages SET ?', post, function(err, result) {
// });
// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
    // db.dbConnection.query('UPDATE messages SET message=',request);
    }, 
  },
  users: {
    get: function () {},
    post: function () {}
  }
};

