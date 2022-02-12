var http = require('http');

// this function takes two arguments: request object, response object
// req -> has things like URL that the browser requested (e.g. about or homepage?). 
// req -> you call methods on the response object and Node will send them across the Internet
function requestHandler (req, res) {
  console.log("In comes the request to: " + req.url);
  if (req.url === "/") {
    res.end("this is the front page!");
  } else if (req.url === "/about") {
    res.end("this is the about page");
  } else {
    res.end("you are requesting an unknown page!");
  }
}

// points Node's built in http server at the request handler function
var server = http.createServer(requestHandler);

server.listen(3000);