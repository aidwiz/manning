// defining own modules

let Max = 100;

function randomInteger() {
  return Math.floor((Math.random()) * Max);
}

module.exports = randomInteger;