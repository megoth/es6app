---
title: Handling the slides with a factory
short: Navigation (factory)
template: slide.jade
---

We`ll create our SlidesFactory in ```src/factories/slides.factory.js```. First, let us express the _Slide_ as a class:

    class Slide {
      constructor(state) {
        this.name = state.name;
        this.title = state.data.title;
        this.short = state.data.short;
        this.url = '#'+state.url;
      }
    }

This class basicly maps the state-object, and is very simple at this point. But we want to expand it with more functionality later on. But for now, lets stick with this.

Next, lets look at a very simple implementation of the _SlidesFactory_:

    class SlidesFactory {
      constructor() {
        return {
          fromState: function (state) {
            return new Slide(state);
          }
        }
      }
    }

Important to note in this is that the constructor returns a new object that contains one method for creating a slide from a given state. This kind of nullifies the use of class, but is a constraint when creating Angular factories.

To expose this we add the following to ```src/factories/slides.factory.js```:

    export default SlidesFactory;

Next we'll need to expose the factory the Angular environment. We do that by adding the following to ```src/app.js```:

    import SlidesFactory from './factories/slides.factory';
    angular.module('workshop').factory('slidesFactory', SlidesFactory);

We now have the slidesFactory available for other Angular components. But we also want the Slide-object to point to its siblings, and for that to work, we need to expand our code a bit:

    class SlidesFactory {
      constructor($state) {
        var states = $state.get().filter(function (state) {
          return !state.abstract;
        });
        return {
          fromState: function (state) {
            return new Slide(state, states);
          }
        }
      }
    }

    class Slide {
      constructor(state, states) {
        this.name = state.name;
        this.title = state.data.title;
        this.short = state.data.short;
        this.url = '#'+state.url;
        var index = states.indexOf(state);
        this.next = states[index + 1];
        this.previous = states[index - 1];
      }
    }

We've added two blocks of code to the file: 

1. In the constructor of the SlidesFactory we've assigned variables ```states``` with an array. This array represents the states assigned to UI Router, minus the abstract state (as this doesn't represent an actual slide, but only is a product of the inner working of UI Router). We've excluded the abstract root state by calling ```filter()``` on the list of states returned by ```$state.get()```. Filter takes a function that returns a boolean; if the function returns true, the element checked is included in the resulting list, if it returns false, it excludes the checked element from the resulting list.
2. In the Slide class we've added two properties, ```next``` and ```previous```, that refers to the neighboring slides. If there isn't a next or a previous slide available, they will be undefined, which is OK.

Now, lets move on the React component.