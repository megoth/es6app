class RouterConfig {
	constructor($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('start', {
				controller: 'router',
				url: '/start',
				templateUrl: 'slides/start.html',
				data: {
					title: 'Start'
				}
			})
			.state('intro', {
				controller: 'router',
				url: '/intro',
				templateUrl: 'slides/intro.html',
				data: {
					title: 'Introduction'
				}
			})
			.state('git', {
				controller: 'router',
				url: '/git',
				templateUrl: 'slides/git.html',
				data: {
					title: 'Git'
				}
			});

		$urlRouterProvider.otherwise('/start');
	}
}

export default RouterConfig;