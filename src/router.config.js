import slides from './slides.env';

class RouterConfig {
	constructor($stateProvider, $urlRouterProvider) {
		slides.forEach(function (slide) {
			$stateProvider.state(slide.name, {
				controller: 'router',
				url: '/'+slide.name,
				templateUrl: 'slides/'+slide.name+'.html',
				data: {
					title: slide.title,
					short: slide.short
				}
			});
		});

		$urlRouterProvider.otherwise('/start');
	}
}

export default RouterConfig;