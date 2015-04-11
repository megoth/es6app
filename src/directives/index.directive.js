import React from 'react';
import Index from './components/Index.jsx!';

class IndexDirective {
  constructor($rootScope, $state, slidesFactory) {
    return function (scope, element) {
      $rootScope.$on('$stateChangeSuccess', function () {
        var slides = slidesFactory.getAll($state.current);
        var indexElement = React.createElement(Index, { 
          slides: slides
        });
        React.render(indexElement, element[0]);
      });
    }
  }
}

export default IndexDirective;