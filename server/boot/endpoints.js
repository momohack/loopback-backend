'use strict';

var twitterFunctions = require('./twitter-endpoints');
var watsonFunctions = require('./watson-endpoints');
var generateText = require('../utils/generateText');

function getPersonalityInsightsByTwitter(req, res) {
  twitterFunctions.getTweets(req.body.screenName, function(err, tweets) {
    if (err) {
      res.send(err);
    } else {
      var text = generateText.generateTextFromTweets(tweets);
      watsonFunctions.determinePersonalityInsights(text, function(err, response) {
        if (err) {
          res.send(err);
        } else {
          var result = {
            personalityInsights: response,
          };
          watsonFunctions.determineToneAnalysis(text, function(err, response) {
            if (err) {
              res.send(err);
            } else if (result) {
              result.toneAnalysis = response;
              res.send(result);
            }
          });
        }
      });
    }
  });
}

module.exports = {
  getPersonalityInsightsByTwitter,
};
