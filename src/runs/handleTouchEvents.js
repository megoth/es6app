import Hammer from 'hammerjs/hammer.js';

class HandleTouchEvents {
  constructor($rootScope, $state, $window) {
    // touch events
    var hammertime = new Hammer($window.document.getElementsByTagName('body')[0]);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammertime.on('swipeleft', function () {
      $state.current.slide.goNext($state);
    });
    hammertime.on('swiperight', function () {
      $state.current.slide.goPrevious($state);
    });
  }
}

export default HandleTouchEvents;