import angular from 'angular';
import 'angular-ui/ui-router';
import RouterConfig from './router.config';
import RouterRun from './router.run';
import SlidesFactory from './factories/slides.factory';
import HelpQueueDirective from './directives/helpQueue.directive';
import IndexDirective from './directives/index.directive';
import NavigationDirective from './directives/navigation.directive';

angular.module('workshop', ['ui.router']);
angular.module('workshop').config(RouterConfig);
angular.module('workshop').run(RouterRun);
angular.module('workshop').factory('slidesFactory', SlidesFactory);
angular.module('workshop').directive('helpQueue', HelpQueueDirective);
angular.module('workshop').directive('presentationIndex', IndexDirective);
angular.module('workshop').directive('presentationNavigation', NavigationDirective);