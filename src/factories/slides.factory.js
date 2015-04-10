class SlidesFactory {
  constructor($state) {
    var states = $state.get().filter(function (state) {
      return !state.abstract;
    });
    return {
      fromCurrentState: function (currentState) {
        return new Slide(currentState, states);
      },
      getAll: function () {
        return states.map(function (state) {
          return new Slide(state, states);
        });
      }
    }
  }
}

class Slide {
  constructor(state, states) {
    this.name = state.name;
    this.title = state.data.title;
    this.url = '#'+state.url;
    // for navigation purposes
    var index = states.indexOf(state);
    this.next = states[index + 1];
    this.previous = states[index - 1];
  }
}

export default SlidesFactory;