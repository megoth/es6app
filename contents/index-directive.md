---
title: Creating the index directive
short: Index (directive)
template: slide.jade
---

With everything set up, we can implement our index directive in ```src/directives/index.directive.js```:

    import React from 'react';
    import Index from './components/Index.jsx!';

    class IndexDirective {
      constructor(slidesService) {
        return function (scope, element) {
          scope.$on('$stateChangeSuccess', function (event, state) {
            var indexElement = React.createElement(Index, { 
              slides: slidesService.get()
            });
            React.render(indexElement, element[0]);
          });
        }
      }
    }

    export default IndexDirective;

As previously noted, this code doesn't do much more then the navigation directive, it simply ties together other pieces.