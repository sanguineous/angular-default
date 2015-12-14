'use strict';
/* globals console: false */
angular.module('es.default', []).directive('esDefault', ['$parse', function ($parse) {
  
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, iElement, iAttrs, ngModelCtl){
      scope.$watch(iAttrs.ngModel, function(newValue){
        if(!angular.isDefined(newValue)){
          ngModelCtl.$setViewValue($parse(iAttrs.esDefault)(scope));
          ngModelCtl.$render();
        }
      });
    }
  };

}]);