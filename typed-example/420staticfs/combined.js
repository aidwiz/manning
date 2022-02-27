// Combines error handing code of 412 and 415

var express = require('express');
var path = require('path');

var app = express();
// straightaway send lagu.mp3 to the Internet (does not exists)
var filePath = path.join(__dirname, 'lagu.mp3');

app.use(function (req, res, next) {

  res.sendFile(filePath, function (err) {
    if (err) {
      next(new Error('Error sending file!'));
    }
  });

});

/* write a simple midware that logs error BUT does not respond */
app.use(function (err, req, res, next) {
  console.log(err); // logs
  next(err); // cont. to next midware
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.send("Internal server error... !"); // sends the error text
});


app.listen(3000, function () {
  console.log('App (example error handling) running on port 3000...');
});
