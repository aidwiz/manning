var path = require('path');
var express = require('express');
var zipdb = require('zippity-do-dah');
var weatherJs = require('weather-js');

var app = express();
// var weather = MISSING

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get(/^\/(\d{5})$/, function (req, res, next) {
  var zipcode = req.params[0];
  console.log(zipcode);

  // grabs location data with the ZIP code
  var location = zipdb.zipcode(zipcode);
  console.log(location);

  // returns {} when no results are found. Continues if the object is not empty
  if (!location.zipcode) {
    next();
    return;
  }

  weatherJs.find({search: zipcode, degreeType: 'C'}, function (err, data) {
    if (err) {
      next();
      return;
    }

    //const result = JSON.stringify(data, null, 2);
    //res.json(result);
    res.json({
      zipcode: zipcode,
      city: data[0].location.name,
    });
  });
});

app.use(function (req, res) {
  res.status(404).render("404");
});

app.listen(3000);