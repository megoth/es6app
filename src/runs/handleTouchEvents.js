import Hammer from 'hammerjs/hammer.js';

class HandleTouchEvents {
  constructor($rootScope, $state, $window) {
    // touch events
    delete Hammer.defaults.cssProps.userSelect;
    var mainElement = $window.document.getElementsByTagName('body')[0];
    var hammertime = new Hammer(mainElement);
    hammertime.on('swipeleft', function () {
      $state.current.slide.goNext($state);
    });
    hammertime.on('swiperight', function () {
      $state.current.slide.goPrevious($state);
    });
  }
}

export default HandleTouchEvents;