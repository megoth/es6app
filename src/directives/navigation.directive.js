import React from 'react';
import Navigation from './components/Navigation.jsx!';

class NavigationDirective {
  constructor() {
    return function (scope, element) {
      scope.$on('$stateChangeSuccess', function (event, state) {
        var slide = state.slide;
        var navigationElement = React.createElement(Navigation, {
          previous: slide.previous,
          next: slide.next
        });
        React.render(navigationElement, element[0]);
      });
    }
  }
}

export default NavigationDirective;