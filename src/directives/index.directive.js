import React from 'react';
import Index from './components/Index.jsx!';

class IndexDirective {
  constructor(slidesFactory) {
    return function (scope, element) {
      var indexElement = React.createElement(Index, { 
        slides: slidesFactory.getAll()
      });
      React.render(indexElement, element[0]);
    }
  }
}

export default IndexDirective;