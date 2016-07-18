'use strict';

angular.module('compare').run(['Menus',
	function(Menus) {
		Menus.addMenuItem('topbar', 'Fuel Savings Calculator', 'cont', '/cont');
		Menus.addMenuItem('topbar', 'Order CARFAX Report', 'ddd', '/ddd');

		}
]);