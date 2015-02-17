'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'MGT 656, the place 2 be ',
    'tagline': 'You are doomed (just kidding).',
     'events':events.all
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};