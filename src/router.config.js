class Router {
	constructor($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('start', {
				url: '/start',
				templateUrl: 'slides/start.html',
				data: {
					title: 'Start'
				}
			})
			.state('intro', {
				url: '/intro',
				templateUrl: 'slides/intro.html',
				data: {
					title: 'Introduction'
				}
			})
			.state('git', {
				url: '/git',
				templateUrl: 'slides/git.html',
				data: {
					title: 'Git'
				}
			});

		$urlRouterProvider.otherwise('/start');
	}
}

export default Router;