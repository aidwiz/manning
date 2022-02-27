// just an example of Express request.ip showing request properties and methods

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var evilIP = "10.10.10.100";

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use(function (request, response, next) {
  if (request.IP === evilIP) {
    response.status(401).send("not allowed!");
  } else {
    console.log(request.ip);
    next();
  }
});

app.use(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end("Looks like you don't find a static file!");
});

http.createServer(app).listen(3000);