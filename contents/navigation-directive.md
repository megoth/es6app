---
title: Creating the navigation directive
short: Navigation (directive)
template: slide.jade
---

Now that we've created our factory and our React component, lets tie it all together as an Angular directive. Lets put the following into ```src/directives/navigation.directive.js```:

    import React from 'react';
    import Navigation from './components/Navigation.jsx!';

    class NavigationDirective {
      constructor($state, slidesFactory) {
        return function (scope, element) {
          scope.$on('$stateChangeSuccess', function () {
            var slide = slidesFactory.fromState($state.current);
            var navigationElement = React.createElement(Navigation, {
              previousState: slide.previous,
              nextState: slide.next
            });
            React.render(navigationElement, element[0]);
          });
        }
      }
    }

    export default NavigationDirective;

Lets look at what the above code does:

1. It imports the React library and the navigation component.
2. Sets up the class ```NavigationDirective``` and exposes it as a module.
3. Makes use of ```$state``` and ```slidesFactory```, which are injected by Angular.
4. Returns an anonymous function (the easiest way to define an Angular directive, [read here if you want to learn more](https://docs.angularjs.org/guide/directive)), this function brings ```scope``` and ```element``` into use, which respectively refers to the scope the directive hinges on, and the element on which it is implemented.
5. We add an event listener to the scope, namely ```$stateChangeSuccess```, which triggers every time a state is changed.
6. A slide-object is created using the slidesFactory, from whatever state that is currently active.
7. It creates a React element from our navigation component. It also applies two properties to the element, namely ```previousState``` and ```nextState```.
8. Finally it renders the element onto the directive element. Angular makes use of simplified implementation of [jQuery](http://jquery.com/), namely [jQuery Lite](https://docs.angularjs.org/api/ng/function/angular.element), or just jqLite for short, so to get the actual DOM-element we need to pass ```element[0]```.

With all of this in place, we can now navigate between our slides.

But it would be nice to be able to jump to specific parts of our presentation. Lets look at the index component next!