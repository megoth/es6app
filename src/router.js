class Router {
	constructor($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('start', {
				url: '/start',
				templateUrl: 'slides/start.html',
				data: {
					step: 0,
					title: 'Start'
				}
			})
			.state('intro', {
				url: '/intro',
				templateUrl: 'slides/intro.html',
				data: {
					step: 1,
					title: 'Introduction'
				}
			});

		$urlRouterProvider.otherwise('/start');
	}
}

export { Router }