import Hammer from 'hammerjs/hammer.js';

class RouterService {
  constructor($rootScope, $state, $window, slidesFactory) {
    console.log('state start');
    $rootScope.$on('$stateChangeSuccess', function () {
      console.log('state changed');
    });
    // keypress event
    $window.document.addEventListener('keydown', function (e) {
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