'use strict';

var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
  username: process.env.PERSONALITY_INSIGHTS_USER,
  password: process.env.PERSONALITY_INSIGHTS_PASS,
  version_date: '2016-10-19',
});

function determinePersonalityInsightsTest(req, res) {
  personality_insights.profile({
    text: 'Well, thank you very much, Jim, for this opportunity. I want to thank Governor Romney and the University of Denver for your hospitality. There are a lot of points I want to make tonight, but the most important one is that 20 years ago I became the luckiest man on Earth because Michelle Obama agreed to marry me. And so I just want to wish, Sweetie, you happy anniversary and let you know that a year from now we will not be celebrating it in front of 40 million people. You know, four years ago we went through the worst financial crisis since the Great Depression. Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system had frozen up. And because of the resilience and the determination of the American people, we\'ve begun to fight our way back. Over the last 30 months, we\'ve seen 5 million jobs in the private sector created. The auto industry has come roaring back. And housing has begun to rise. But we all know that we\'ve still got a lot of work to do. And so the question here tonight is no where we\'ve been, but where we\'re going. Governor Romney has a perspective that says if we cut taxes, skewed towards the wealthy, and roll back regulations, that we\'ll be better off. I\'ve got a different view. I think we\'ve got to invest in education and training. I think it\'s important for us to develop new sources of energy here in America, that we change our tax code to make sure that we\'re helping small businesses and companies that are investing here in the United States, that we take some of the money that we\'re saving as we wind down two wars to rebuild America and that we reduce our deficit in a balanced way that allows us to make these critical investments. Now, it ultimately is going to be up to the voters — to you — which path we should take. Are we going to double on top-down economic policies that helped to get us into this mess or do we embrace a new economic patriotism that says America does best when the middle class does best? And I\'m looking forward to having that debate. Well, let me talk specifically about what I think we need to do. First, we\'ve got to improve our education system and we\'ve made enormous progress drawing on ideas both from Democrats and Republicans that are already starting to show gains in some of the toughest to deal with schools. We\'ve got a program called Race to the Top that has prompted reforms in 46 states around the country, raising standards, improving how we train teachers.',
    consumption_preferences: true,
  },
  function(err, response) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(response, null, 2));
      res.send(response);
    }
  });
}

function determinePersonalityInsights(text, callback) {
  personality_insights.profile({
    text: text,
    consumption_preferences: true,
  },
  function(err, response) {
    if (err) {
      console.log('error:', err);
      callback(err);
    }
    console.log(JSON.stringify(response, null, 2));
    callback(null, response);
  });
}

module.exports = {
  determinePersonalityInsightsTest,
  determinePersonalityInsights,
};
