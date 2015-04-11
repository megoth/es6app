import Hammer from 'hammerjs/hammer.js';

class RouterRun {
  constructor($rootScope, $state, slidesFactory, $window) {
    $rootScope.$on('$stateChangeSuccess', function () {
      $window.scrollTo(0, 0);
    });
    // keypress event
    $window.document.addEventListener('keydown', function (e) {
      if(e.keyCode === 39) {
        go(slidesFactory.fromState($state.current).next);
      } else if (e.keyCode === 37) {
        go(slidesFactory.fromState($state.current).previous);
      }

      function go(state) {
        $state.go(state ? state.name : $state.current.name);
      }
    });
    // touch events
    var hammertime = new Hammer($window.document.getElementsByTagName('body')[0]);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammertime.on('swipeleft', function () {
      slidesFactory.fromState($state.current).goNext();
    });
    hammertime.on('swiperight', function () {
      slidesFactory.fromState($state.current).goPrevious();
    });
  }
}

export default RouterRun;