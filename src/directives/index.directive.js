import React from 'react';
import Index from './components/Index.jsx!';

class IndexDirective {
  constructor($rootScope, $state, slidesFactory) {
    return function (scope, element) {
      $rootScope.$on('$stateChangeSuccess', function () {
        var slides = slidesFactory.getAll($state.current);
        render(element[0], slides);
      });
    }
  }
}

function render (element, slides) {
  var indexElement = React.createElement(Index, { 
    slides: slides
  });
  React.render(indexElement, element);
}

export default IndexDirective;