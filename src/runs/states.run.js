class StatesRun {
  constructor($rootScope, $state, $window, socketService) {
    $rootScope.$on('$stateChangeSuccess', function (event, state) {
      $window.scrollTo(0, 0);
      socketService.emitProgress(state.slide);
    });
  }
}

export default StatesRun;