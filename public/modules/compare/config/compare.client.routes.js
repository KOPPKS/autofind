'use strict';

angular.module('compare').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state('compare', {
			url: '/compare',
			templateUrl: 'modules/compare/views/compare-car-client.view.html'
		}).
		state('cont', {
			url: '/cont',
			templateUrl: 'modules/cont/views/cont-calc.client.view.html'
		}).
		state('ddd', {
			url: '/ddd',
			templateUrl: 'modules/ddd/views/ddd-one.client.view.html'
		});
	}
]);