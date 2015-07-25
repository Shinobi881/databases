var models = require('../models');
var bluebird = require('bluebird');

// Handlers go here



module.exports = {
  messages: {

    get: function (req, res) {
      
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      // if(err){
      //   throw err;
      // } else {
        models.messages.post(req, res);
      //   res.end();
      // }

      // if there is an error
        //send a response 
      // else
        // call post in models
      
      
    },

    users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
    }
  }
};

