import Hammer from 'hammerjs/hammer.js';

class RouterRun {
  constructor($rootScope, $state, $window) {
    // keypress event
    $window.document.addEventListener('keydown', function (e) {
      if(e.keyCode === 39) {
        go($state.current.slide.next);
      } else if (e.keyCode === 37) {
        go($state.current.slide.previous);
      }
    });
    // touch events
    var hammertime = new Hammer($window.document.getElementsByTagName('body')[0]);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammertime.on('swipeleft', function () {
      go($state.current.slide.next);
    });
    hammertime.on('swiperight', function () {
      go($state.current.slide.previous);
    });
    // helper method
    function go(state) {
      $state.go(state ? state.name : $state.current.name);
    }
  }
}

export default RouterRun;