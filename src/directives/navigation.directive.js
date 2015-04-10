import React from 'react';
import Navigation from './components/Navigation.jsx!';

class NavigationDirective {
  constructor($state, slidesFactory) {
    return function (scope, element) {
      scope.$on('$stateChangeSuccess', function () {
        var slide = slidesFactory.fromState($state.current);
        render(element[0], slide);
      });
    }
  }
}

function render(element, slide) {
  var navigationElement = React.createElement(Navigation, {
    previousState: slide.previous,
    nextState: slide.next
  });
  React.render(navigationElement, element);
}

export default NavigationDirective;