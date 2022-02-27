var express = require('express');
var path = require('path');
var fs = require('fs');
var logger = require("morgan");

var app = express();
// use morgan instead of standard logger
app.use(logger("short")); // or combined / tiny

// app.use add function to middleware stack
app.use(function (req, res, next) {
  console.log("Request IP :" + req.url);
  console.log("Request Date :" + new Date());
  next();
});

// standard static file middleware (replaced by express.static below)
// app.use(function (req, res, next) {
//   var filePath = path.join(__dirname, "static", req.url);
//   fs.stat(filePath, function(err, fileInfo) {
//     if (err) {
//       next();
//       return;
//     }

//     if (fileInfo.isFile()) {
//       res.sendFile(filePath);
//     } else {
//       next();
//     }
//   });
// });

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use(function (req, res) {
  res.status(404);
  res.send("File not found!");
});

app.listen(3000, function() {
  console.log("App start on port 3000...");
});