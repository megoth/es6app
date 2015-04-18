import angular from 'angular';
import 'angular-ui/ui-router';
// src files
import HandleKeypressEvents from './runs/handleKeypressEvents';
import HandleTouchEvents from './runs/handleTouchEvents'
import HelpQueueDirective from './directives/helpQueue.directive';
import IndexDirective from './directives/index.directive';
import NavigationDirective from './directives/navigation.directive';
import ProgressDirective from './directives/progress.directive';
import RouterConfig from './router.config';
import SlidesFactory from './factories/slides.factory';
import SlidesService from './services/slides.service';
import SocketService from './services/socket.service';

angular.module('workshop', ['ui.router']);
angular.module('workshop').config(RouterConfig);
angular.module('workshop').run(HandleKeypressEvents);
angular.module('workshop').run(HandleTouchEvents);
angular.module('workshop').service('slidesService', SlidesService);
angular.module('workshop').service('socketService', SocketService);
angular.module('workshop').factory('slidesFactory', SlidesFactory);
angular.module('workshop').directive('helpQueue', HelpQueueDirective);
angular.module('workshop').directive('presentationIndex', IndexDirective);
angular.module('workshop').directive('presentationNavigation', NavigationDirective);
angular.module('workshop').directive('progressList', ProgressDirective);
