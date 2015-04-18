class ScrollToTopUponNavigation {
  constructor($rootScope, $window) {
    $rootScope.$on('$stateChangeSuccess', function () {
      $window.scrollTo(0, 0);
    });
  }
}

export default ScrollToTopUponNavigation;