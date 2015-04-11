---
title: Creating the index directive
short: Index (directive)
template: slide.jade
---

With everything set up, we can implement our index directive in ```src/directives/index.directive.js```:

    import React from 'react';
    import Index from './components/Index.jsx!';

    class IndexDirective {
      constructor($state, slidesFactory) {
        return function (scope, element) {
          scope.$on('$stateChangeSuccess', function () {
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

As you see, it doesn't do much more then the navigation directive, besides tying in other parts of our application.