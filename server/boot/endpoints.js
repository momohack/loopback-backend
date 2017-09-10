'use strict';

var twitterFunctions = require('./twitter-endpoints');
var watsonFunctions = require('./watson-endpoints');
var generateText = require('../utils/generateText');

function getPersonalityInsightsByTwitter(req, res) {
  console.log(req.params);
  twitterFunctions.getTweets(req.body.screenName, function(err, tweets) {
    if (err) {
      res.send(err);
    }
    var text = generateText.generateTextFromTweets(tweets);
    watsonFunctions.determinePersonalityInsights(text, function(err, response) {
      if (err) {
        res.send(err);
      }
      res.send(response);
    });
  });
}

module.exports = {
  getPersonalityInsightsByTwitter,
};
