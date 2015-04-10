---
title: Setting up Angular
short: Setup - Angular
template: slide.jade
---

First off, we need to bootstrap Angular. If we want to create an app of somewhat size, it's recommended that we include our code in a given namespace. Lets call ours ```workshop```.

Open ```src/app.js``` and include the following:

    import angular from 'angular';
    angular.module('workshop', []);

Also, change ```<body>``` in ```index.html``` to ```<body ng-app="workshop">```. This is all we need to change in index.html to make Angular start doing its work.