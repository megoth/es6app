'use strict';

import angular from 'angular';
import 'angular-ui/ui-router';
import Router from './router.config';
import IndexDirective from './directives/index.directive';
import NavigationDirective from './directives/navigation.directive';

angular.module('workshop', ['ui.router']);
angular.module('workshop').config(Router);
angular.module('workshop').directive('presentationIndex', IndexDirective);
angular.module('workshop').directive('presentationNavigation', NavigationDirective);
