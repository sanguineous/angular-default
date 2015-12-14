var app = angular.module('demo', ['ngSanitize', 'es.default']);

app.controller('demoController', ['$scope', function($scope){
	$scope.getDefName = function(){
		return "Lisa";
	}
}]);