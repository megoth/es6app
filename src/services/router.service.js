class RouterService {
  constructor($rootScope) {
    console.log('state start');
    $rootScope.$on('$stateChangeSuccess', function () {
      console.log('state changed');
    });
  }
}

export default RouterService;