class RouterService {
  constructor($rootScope, $state, $window, slidesFactory) {
    console.log('state start');
    $rootScope.$on('$stateChangeSuccess', function () {
      console.log('state changed');
    });
    $window.document.addEventListener('keydown', function (e) {
      if(e.keyCode === 39) {
        slidesFactory.fromState($state.current).goNext();
      } else if (e.keyCode === 37) {
        slidesFactory.fromState($state.current).goPrevious();
      }
    });
  }
}

export default RouterService;