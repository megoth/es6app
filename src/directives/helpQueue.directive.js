import React from 'react';
import HelpQueue from './components/HelpQueue.jsx!';

class HelpQueueDirective {
  constructor(socketService) {
    return function (scope, element) {
      socketService.onPleadsUpdate(function (users) {
        var helpQueueElement = React.createElement(HelpQueue, {
          users: users,
          handleUserInput: function (username, isAskingForHelp) {
            socketService.emitAskingForHelp(username, isAskingForHelp);
          }
        });
        React.render(helpQueueElement, element[0]);
      });
    };
  }
}

export default HelpQueueDirective;