'use strict';
var endpoints = require('./endpoints');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();

  router.get('/', server.loopback.status());

  // router.post('/getInsightsTest', endpoints.);

  router.post('/getInsights', endpoints.getPersonalityInsightsByTwitter);

  server.use(router);
};
