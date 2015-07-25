var db = require('../db');

module.exports = {

  messages: {
    get: function (request, response) {
      
    }, 

    post: function (data, callback) {
//       var post  = {message: request.body.message,
//                   username: request.body.username,
//                   roomname: request.body.roomname
//                 };
      db.query('INSERT INTO messages (username text roomname) VALUES (' + data.username + data.text + data.roomname + ')', callback);
  },

  users: {
    get: function () {},
    post: function () {

    }
  }
}
};

