import React from 'react';
import Index from './components/Index.jsx!';

class IndexDirective {
  constructor($state) {
    return function (scope, element) {
      var states = $state.get().filter(function (state) {
        return !state.abstract;
      });
      states.forEach(function (state) {
        state.stateUrl = $state.href(state);
      });
      var indexElement = React.createElement(Index, { 
        states: states
      });
      React.render(indexElement, element[0]);
    }
  }
}

export default IndexDirective;