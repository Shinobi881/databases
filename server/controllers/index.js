var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {

    get: function (req, res) {
      models.messages.get(function(data){ 
        console.log(data);
        res.json(data);
      });
      
    }, 
    
    post: function (req, res) {
      var message = { 
        username : req.body.username,
        text     : req.body.text,
        roomname : req.body.roomname
      };
      
        models.messages.post(message, function(err, result) {
          if(err){
            console.log('Post', err);
          }
          res.json(result);
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

