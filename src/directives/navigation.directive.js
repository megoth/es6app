import React from 'react';
import Navigation from './components/Navigation.jsx!';

class NavigationDirective {
  constructor($state) {
    return function (scope, element) {
      var navigationElement = React.createElement(Navigation);
      React.render(navigationElement, element[0]);
    }
  }
}

export default NavigationDirective;