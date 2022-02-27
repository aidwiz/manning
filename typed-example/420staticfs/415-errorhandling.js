var express = require('express');
var path = require('path');

var app = express();

/* write a simple midware that logs error BUT does not respond */
app.use(function (err, req, res, next) {
  console.log(err); // logs
  next(err); // cont. to next midware
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.send("Internal server error!"); // sends the error text
});


app.listen(3000, function () {
  console.log("App (example error handling) running on port 3000...");
});