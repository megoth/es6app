class SlidesFactory {
  constructor($state) {
    return {
      fromState: function (state) {
        return new Slide(state.name, state.data.title, state.data.short, state.url);
      }
    }
  }
}

class Slide {
  constructor(name, title, short, url) {
    this.name = name;
    this.title = title;
    this.short = short;
    this.url = '#'+url;
    this.active = false;
    this.step = -1;
    this.next = null;
    this.previous = null;
  }

  goNext($state) {
    $state.go(this.next ? this.next.name : this.name);
  }

  goPrevious($state) {
    $state.go(this.previous ? this.previous.name : this.name);
  }
}

export default SlidesFactory;