class SlidesService {
  constructor($state, slidesFactory, $rootScope, socketService, $window) {
    var states = $state.get().filter(function (state) {
      return !state.abstract;
    });
    var slides = this.slides = states.map(function (state) {
      var slide = slidesFactory.fromState(state);
      state.slide = slide;
      return slide;
    });
    this.slides.forEach(function (slide, index) {
      slide.step = index;
      slide.previous = slides[index - 1];
      slide.next = slides[index + 1];
    });
    $rootScope.$on('$stateChangeSuccess', function (event, state) {
      slides.forEach(function (slide) {
        slide.active = slide.name === state.name;
      });
      socketService.emitProgress(state.slide);
      $window.scrollTo(0, 0);
    });
  }

  get(stateName) {
    return stateName ? this.slides.reduce(function (memo, slide) {
      return memo ? memo : (slide.name === stateName ? slide : memo);
    }, null) : this.slides;
  }
}

export default SlidesService;