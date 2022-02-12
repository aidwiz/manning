var fs = require('fs');

var options = { encoding: 'utf-8' };
fs.readFile('myfile.txt', options, function (err,data) {
  if (err) {
    console.log('error reading the file!');
    return;
  }
  console.log(data.match(/x/gi).length + " letter X's" );
});

console.log("this will print earlier due to async nature!");

// function content is the callback!