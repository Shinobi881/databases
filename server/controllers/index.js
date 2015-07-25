var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {

    get: function (req, res) {
      
    }, 
    
    post: function (req, res) {
      var username = data.username;
      var message = data.message;
      var roomname = req.body.roomname;
        models.messages.post(req.body, function(err, rows) {
          
        });
     
    },

    users: {
    
    get: function (req, res) {},
    post: function (req, res) {
      models.messages.post(req.body, function(err, rows) {
        res.json(req.body);
        });
    }
    }
  }
};

