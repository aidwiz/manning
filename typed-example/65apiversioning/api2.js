let express = require('express');

let api = express.Router();

api.get('/newtimezone', function (req, res) {
  res.send('sample response for the request /newtimezone');
});

api.get('/newalltimezones', function (req, res) {
  res.send('sample response for the request /newalltimezones');
});

module.exports = api;
