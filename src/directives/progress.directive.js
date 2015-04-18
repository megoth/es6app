import React from 'react';
import Progress from './components/Progress.jsx!';

class ProgressDirective {
  constructor(slidesService, socketService) {
    var slides = slidesService.get();
    return function (scope, element) {
      socketService.onProgressUpdate(function (list) {
        var progressElement = React.createElement(Progress, {
          steps: list,
          slides: slides
        });
        React.render(progressElement, element[0]);
      });
    }
  }
}

export default ProgressDirective;