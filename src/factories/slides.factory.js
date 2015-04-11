class SlidesFactory {
  constructor($state) {
    var states = $state.get().filter(function (state) {
      return !state.abstract;
    });
    return {
      fromState: function (state) {
        return new Slide(state, states);
      },
      getAll: function (currentState) {
        return states.map(function (state) {
          return new Slide(state, states, currentState);
        });
      }
    }
  }
}

class Slide {
  constructor(state, states, currentState) {
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
}

export default SlidesFactory;