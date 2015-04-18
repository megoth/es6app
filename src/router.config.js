import slides from './slides.env';

class RouterConfig {
	constructor($stateProvider, $urlRouterProvider) {
		slides.forEach(function (slide) {
			$stateProvider.state(slide.name, {
				url: '/'+slide.name,
				templateUrl: 'slides/'+slide.name+'.html',
				controller: 'router',
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