var express = require('express');
var path = require('path');

var app = express();
// straightaway send lagu.mp3 to the Internet (does not exists)
var filePath = path.join(__dirname, "lagu.mp3");

app.use(function (req, res, next) {
  
  //this has no error handling (no next above)
  //res.sendFile(filePath);

  // this send error to the console (no next above)
  // res.sendFile(filePath, function (err) {
  //   if (err) {
  //     console.log('File failed to send...');
  //   } else {
  //     console.log('File sent!');
  //   }
  // });

  // this enter error mode with next with an argument in case of error (with next); so it can be handled
  res.sendFile(filePath, function (err) {
    if (err) {
      next(new Error("Error sending file!"));
    } 
  });


});

app.listen(3000, function () {
  console.log("App (example error handling) running on port 3000...");
});