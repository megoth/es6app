class SlidesFactory {
  constructor($state) {
    var states = $state.get().filter(function (state) {
      return !state.abstract;
    });
    return {
      fromState: function (currentState) {
        return new Slide($state, currentState, states);
      },
      getAll: function (currentState) {
        return states.map(function (state) {
          return new Slide($state, state, states, currentState);
        });
      }
    }
  }
}

class Slide {
  constructor($state, state, states, currentState) {
    this.$state = $state;
    this.name = state.name;
    this.title = state.data.title;
    this.short = state.data.short;
    this.url = '#'+state.url;
    // for navigation purposes
    this.active = state === currentState;
    var index = states.indexOf(state);
    this.next = states[index + 1];
    this.previous = states[index - 1];
  }

  goNext() {
    if (this.next) {
      this.$state.go(this.next.name);
    }
  }

  goPrevious() {
    if (this.previous) {
      this.$state.go(this.previous.name);
    }
  }
}

export default SlidesFactory;