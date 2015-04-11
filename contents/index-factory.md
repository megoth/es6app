---
title: Extend the slides factory for the index directive
short: Index (factory)
template: slide.jade
---

To allow the Slide class to know whether or not it is the active slide, we need to supply it with current state:

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

In addition we need to extend the slidesFactory with a method that get all slides. We already have gotten all available states from UI Router, so we only need to transform that array to an array of slides:

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

For this reason we've made use of ```Array.prototype.map```, which iterates over the array it is called upon, and returns a new list of array.