'use strict';

var Twitter = require('twit');
var generateText = require('../utils/generateText');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function getTweets(screenName, callback) {
  client.get('statuses/user_timeline', {screen_name: screenName}, function(error, tweets) {
    if (error) {
      console.log('there was an error:', error);
      callback(error);
    }
    console.log('tweets');
    console.log(tweets);
    return callback(null, tweets);
  });
}

module.exports = {
  getTweets,
};
