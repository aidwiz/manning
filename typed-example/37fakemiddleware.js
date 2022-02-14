var express = require('express');
var http = require('http');
var app = express();

app.use(function (request, response, next) {
  console.log('In comes a ' + request.method + ' to ' + request.url);
  next();
});


app.use(function (request, response, next) {
  var seconds = (new Date()).getSeconds();
  if ((seconds % 2) === 0) {
    next();
  } else {
    // console.log("Not Authorized!");
    response.statusCode = 403;
    response.end("Not Authorized!");
  }
});

app.use(function (request, response) { 
  response.end('Secret info: password is "password!"');
});

http.createServer(app).listen(3000);
