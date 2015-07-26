var db = require('../db');

module.exports = {

  messages: {
    get: function (data, callback) {
      db.query('SELECT * text FROM messages WHERE roomname = ' + '"' + data.roomname + '"', callback);
    }, 

    post: function (data, callback) {
      
     db.query('INSERT INTO messages (username, text, roomname) VALUES ("' + data.username + '", "' + data.text + '", "' + data.roomname + '"' + ')', callback);
  },

  users: {
    get: function () {},
    post: function () {}
  }
}
};

