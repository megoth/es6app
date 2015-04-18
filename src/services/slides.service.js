class SlidesService {
  constructor($state, slidesFactory) {
    var states = $state.get().filter(function (state) {
      return !state.abstract;
    });
    var slides = this.slides = states.map(function (state) {
      return slidesFactory.fromState(state);
    });
    this.slides.forEach(function (slide, index) {
      slide.previous = slides[index - 1];
      slide.next = slides[index + 1];
    });
  }

  get(stateName) {
    return stateName ? this.slides.reduce(function (memo, slide) {
      return memo ? memo : (slide.name === stateName ? slide : memo);
    }, null) : this.slides;
  }

  setActive(activeStateName) {
    this.slides.forEach(function (slide) {
      slide.active = slide.name === activeStateName;
    });
  }
}

export default SlidesService;