var db = require('../db');
var handler = require('../request-handler.js');

module.exports = {

  messages: {
    get: function (request, response) {
      exports.requestHandler(request, response);
    }, 
    post: function (request, response) {
      exports.requestHandler(request, response);
    }, 
  },
  users: {
    get: function () {},
    post: function () {}
  }
};

