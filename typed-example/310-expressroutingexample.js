var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get('/', function (request, response) {
  response.end("welcome to the home page!");
})

app.get('/about', function (request, response) {
  response.end('the ABOUT page!');
});

// grabbing data from routes, try enter https://mywebsite.com/users/ExpressSuperHero in request

app.get('/hello/:who', function (request, response) {
  response.end("Hello, " + request.params.who + ".");
}); // will output "Hello, syahid."

// redirection
app.get('/redirectme', function (request, response) {
  response.redirect("http://www.google.com");
  // response.sendFile("NEEDS CHECKING");
});

app.use(function (request, response) {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000);