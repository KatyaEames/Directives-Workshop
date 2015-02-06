var app = angular.module('myDirective', []);

app.directive('pendingDiv', function() {
	return {
		restrict: 'A',
		scope: {
			request: '&'
		},
		link: function(scope, elem, attr) {
			var spinner = angular.element('<span class="fa fa-spinner"></span>');
			spinnerIcon.hide();
			elem.after(spinnerIcon);

			var invokeRequest = function() {
				var dfd = $q.defer();

				dfd.resolve(scope.request());

				return dfd.promise;
			}

			elem.on('click', function() {
				elem.hide();
				spinnerIcon.show();
				invokeRequest().then(function() {
					setTimeout(function() {
						elem.show();
					spinnerIcon.hide();
					}, 3000);
				})
			})
		}
	}
})