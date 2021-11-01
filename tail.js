const assertEqual = require('./assertEqual');

const tail = function(array) {
  let tailArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) {
      tailArr.push(array[i]);
    }
  }
  return tailArr;
};

module.exports = tail;

