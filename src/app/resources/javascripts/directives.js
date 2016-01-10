'use strict';

angular.module('catalogHome')

	.directive('changeLayout', function(){
		return {
			restrict: 'A',
			scope: {
				changeLayout: '='
			},

			link: function(scope, element, attr) {

				//Default State
				if(scope.changeLayout === '1') {
					element.prop('checked', true);
				}

				//Change State
				element.on('change', function(){
					if(element.is(':checked')) {
						localStorage.setItem('ma-layout-status', 1);
						scope.$apply(function(){
							scope.changeLayout = '1';
						})
					}
					else {
						localStorage.setItem('ma-layout-status', 0);
						scope.$apply(function(){
							scope.changeLayout = '0';
						})
					}
				})
			}
		}
	})

	// =========================================================================
	// MAINMENU COLLAPSE
	// =========================================================================

	.directive('toggleSidebar', function($window){

		return {
			restrict: 'A',
			scope: {
				modelLeft: '=',
				modelRight: '=',
				modelLayoutType: '='
			},

			link: function(scope, element, attr) {
				element.on('click', function(){

					if (element.data('target') === 'mainmenu') {
						if (scope.modelLayoutType === true && scope.modelLeft === true) {
							scope.$apply(function(){
								scope.modelLayoutType = false;
								scope.modelLeft = false;
							})
						} else if (scope.modelLayoutType === false && scope.modelLeft === false) {
							scope.$apply(function(){
								scope.modelLayoutType = true;
								scope.modelLeft = true;
							})
						}
					}
					/*if (element.data('target') === 'mainmenu') {
						if (scope.modelLeft === false) {
							scope.$apply(function(){
								scope.modelLeft = true;
							})
						}
						else {
							scope.$apply(function(){
								scope.modelLeft = false;
							})
						}
					}

					if($window.innerWidth < 1200) {
						scope.modelLayoutType = false
					} else {
						scope.modelLayoutType = true
					}

					console.log(scope.modelLayoutType);*/

					// Future chat sidebar
					/*if (element.data('target') === 'chat') {
						if (scope.modelRight === false) {
							scope.$apply(function(){
								scope.modelRight = true;
							})
						}
						else {
							scope.$apply(function(){
								scope.modelRight = false;
							})
						}
					}*/

				})
			}
		}

	});
