---
title: Planning the navigation component
short: Navigation (planning)
template: slide.jade
---

For our navigation component we want to create an **Angular directive**. Directives are how Angular interacts with the DOM, and allows us to tie logic into events, services, and factories exposed to the Angular environment.

In addition, we want the component to be rendered with **React**. React excels at rendering large and complex views, so in truth it might be a bit overkill for this component. But hey, always fun to learn new things!

The purpose of the navigation component is to present links to the next and previous slide, if available. In that case, it would be really nice to have an object that exposes these properties. In Angular, the preferred way of handling the creation of the objects are by factories, which is a design pattern for producing objects one way or another.

As slides actually refer to the states expressed by UI Router, we want to make use of a couple of methods:

* ```$state.get()```: Gets either one specific state by name or object, or if no parameter is given, the whole list of states.
* ```$state.current```: Object that referes to the active state.
* The event ```$stateChangeSuccess```: This can be used with the ```(scope).$on()```-function, which serves as an event listener on whatever scope we apply it to.

Now, lets start implementing the navigation component.