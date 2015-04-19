import React from 'react';
import Index from './components/Index.jsx!';

class IndexDirective {
  constructor(slidesService) {
    return function (scope, element) {
      scope.$on('$stateChangeSuccess', function () {
        var indexElement = React.createElement(Index, { 
          slides: slidesService.get()
        });
        React.render(indexElement, element[0]);
      });
    }
  }
}

export default IndexDirective;