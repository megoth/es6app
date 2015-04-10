import Hammer from 'hammerjs/hammer.js';

class RouterService {
  constructor($rootScope, $state, slidesFactory) {
    $rootScope.$on('$stateChangeSuccess', function () {
    });
    // keypress event
    document.addEventListener('keydown', function (e) {
      if(e.keyCode === 39) {
        slidesFactory.fromState($state.current).goNext();
      } else if (e.keyCode === 37) {
        slidesFactory.fromState($state.current).goPrevious();
      }
    });
    // var hammertime = new Hammer(document.getElementsByTagName('body')[0]);
    // hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    // hammertime.on('swipeleft', function () {
    //   slidesFactory.fromState($state.current).goNext();
    // });
    // hammertime.on('swiperight', function () {
    //   slidesFactory.fromState($state.current).goPrevious();
    // });
  }
}

export default RouterService;