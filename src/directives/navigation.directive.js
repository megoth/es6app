import React from 'react';
import Navigation from './components/Navigation.jsx!';

class NavigationDirective {
  constructor($state) {
    return function (scope, element) {
      var states = $state.get().filter(function (state) {
        return !state.abstract;
      });
      scope.$on('$stateChangeSuccess', function () {
        render(element[0], $state.current, states);
      });
    }
  }
}

function render(element, currentState, states) {
  var index = states.indexOf(currentState);
  var navigationElement = React.createElement(Navigation, {
    previousState: states[index - 1],
    nextState: states[index + 1]
  });
  React.render(navigationElement, element);
}

export default NavigationDirective;