import React from 'react';
import Index from './components/Index.jsx!';

class IndexDirective {
  constructor(slidesService) {
    return function (scope, element) {
      scope.$on('$stateChangeSuccess', function (event, state) {
        slidesService.setActive(state.name);
        var slides = slidesService.get();
        var indexElement = React.createElement(Index, { 
          slides: slides
        });
        React.render(indexElement, element[0]);
      });
    }
  }
}

export default IndexDirective;