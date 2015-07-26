var db = require('../db');

module.exports = {

  messages: {
    get: function (request, response) {
      
    }, 

    post: function (data, callback) {
      console.log('Escaped text', escape(data.text));
     db.query('INSERT INTO messages (username, text, roomname) VALUES ("' + data.username + '", "' + data.text + '", "' + data.roomname + '"' + ')', callback);

     // console.log('query', query);
  },

  users: {
    get: function () {},
    post: function () {}
  }
}
};

