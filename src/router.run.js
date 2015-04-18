import Hammer from 'hammerjs/hammer.js';

class RouterRun {
  constructor($rootScope, $state, slidesService, $window) {
    $rootScope.$on('$stateChangeSuccess', function () {
      $window.scrollTo(0, 0);
    });
    // keypress event
    $window.document.addEventListener('keydown', function (e) {
      if(e.keyCode === 39) {
        go(slidesService.get($state.current.name).next);
      } else if (e.keyCode === 37) {
        go(slidesService.get($state.current.name).previous);
      }
    });
    // touch events
    var hammertime = new Hammer($window.document.getElementsByTagName('body')[0]);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammertime.on('swipeleft', function () {
      go(slidesService.get($state.current.name).next);
    });
    hammertime.on('swiperight', function () {
      go(slidesService.get($state.current.name).previous);
    });
    // helper method
    function go(state) {
      $state.go(state ? state.name : $state.current.name);
    }
  }
}

export default RouterRun;