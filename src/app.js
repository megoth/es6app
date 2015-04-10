import angular from 'angular';
import 'angular-ui/ui-router';
import RouterConfig from './router.config';
import RouterService from './services/router.service';
import SlidesFactory from './factories/slides.factory';
import RouterController from './controllers/router.controller';
import HelpQueueDirective from './directives/helpQueue.directive';
import IndexDirective from './directives/index.directive';
import NavigationDirective from './directives/navigation.directive';

angular.module('workshop', ['ui.router']);
angular.module('workshop').config(RouterConfig);
angular.module('workshop').service('routerService', RouterService);
angular.module('workshop').factory('slidesFactory', SlidesFactory);
angular.module('workshop').controller('router', RouterController);
angular.module('workshop').directive('helpQueue', HelpQueueDirective);
angular.module('workshop').directive('presentationIndex', IndexDirective);
angular.module('workshop').directive('presentationNavigation', NavigationDirective);