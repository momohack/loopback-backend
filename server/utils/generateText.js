'use strict';

function generateTextFromTweets(arr) {
  var result = '';
  for (var i = 0; i < arr.length; i += 1) {
    result += arr[i].text;
    result += i === arr.length - 1 ? '' : ' ';
  }
  return result;
}

module.exports = {
  generateTextFromTweets,
};
