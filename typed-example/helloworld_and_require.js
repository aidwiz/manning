var url = require('url'); //returns an object with methods
var parsedUrl = url.parse('http://www.example.com/profile?name=barry');

// console.log('hello world!');
console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.query);

