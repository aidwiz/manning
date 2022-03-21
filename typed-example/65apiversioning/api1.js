let express = require('express');

let api = express.Router();

api.get('/timezone', function (req, res) {
  res.send("sample response for the request /timezone");
});

api.get('/alltimezones', function (req, res) {
  res.send("sample response for the request /alltimezones");
});

module.exports = api;

