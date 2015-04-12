import React from 'react';
import HelpQueue from './components/HelpQueue.jsx!';
import HelpQueueService from '../services/helpQueue.service';

class HelpQueueDirective {
  constructor() {
    return function (scope, element) {
      render(element[0], HelpQueueService.users);
      HelpQueueService.onUpdate(function (users) {
        render(element[0], users);
      });
    };
  }
}

function render(element, users) {
  var helpQueueElement = React.createElement(HelpQueue, {
    users: users
  });
  React.render(helpQueueElement, element);
}

export default HelpQueueDirective;