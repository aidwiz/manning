var Mustache = require('mustache');
var object1 = { first: 'syahid', last: 'ali' };

var result = Mustache.render("hi, {{first}} {{last}} !", {
  first: "syahid",
  last: "ali"
});


console.log(result);