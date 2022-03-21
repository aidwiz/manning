let express = require('express');

var apiVersion1 = require('./api1');
var apiVersion2 = require('./api2');

var app = express();

// app shows the power of router module for version purposes
// test with http://localhost:3000/v1/timezone for example of v1

app.use('/v1', apiVersion1);
app.use('/v2', apiVersion2);


app.use(function (req, res) {
  // String response?
  // res.status(404);
  // res.send('File not found! hahaha....');
  
  // JSON response?
  res.status(404).json({ error: 'Resource not found! Wakaka...' });
  /* This is equivalent to:
  res.status(404);
  res.json({ error: 'Resource not found!' });
  */
});

app.listen(3000, function() {
  console.log("app started on port 3000...");
});