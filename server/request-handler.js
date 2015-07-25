var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var messages = [];
var rooms = [];
var requestHandler = function(request, response) {
  
  var headers = defaultCorsHeaders;

  headers['Content-Type'] = "text/plain";

  if (request.method === 'GET') {
    if (request.url === "/classes/messages") {
      sendEnd(response, 200, JSON.stringify({results:messages}), headers);
    }else if (request.url === "/classes/room1"){
      sendEnd(response, 200, JSON.stringify({results:rooms}), headers);
    }else{
      sendEnd(response, 404, "Error 404, File Not Found!", headers)
    }
  }else if (request.method === 'POST') {
    if (request.url === "/classes/messages") {
      request.on('data', function(chunks) {
        messages.push(JSON.parse(chunks));
      });

      request.on('end', function() {
        sendEnd(response, 201, 'OK', headers);
      })
    }else if(request.url === "/classes/room1"){
      request.on('data', function(chunks) {
        rooms.push(JSON.parse(chunks));
      });

      request.on('end', function() {
        sendEnd(response, 201, 'OK', headers);
      })
    }
  }
};

var sendEnd = function(response, statusCode, responseData, headers) {
  response.writeHead(statusCode, headers);
  response.end(responseData);
};

exports.requestHandler = requestHandler;