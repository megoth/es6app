import React from 'react';
import Navigation from './components/Navigation.jsx!';

class NavigationDirective {
  constructor($state, slidesService) {
    return function (scope, element) {
      scope.$on('$stateChangeSuccess', function () {
        var slide = slidesService.get($state.current.name);
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