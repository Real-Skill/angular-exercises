(function () {
  'use strict';
  function TestErrorCtrl($scope, $routeParams) {
    var ctrl = this;
    ctrl.msg = null;
    if (!$routeParams.id) {
      throw new Error('ID must be defined in $routeParams');
    } else {
      $scope.userId = $routeParams.id;
    }

    $scope.$on('someEvent', function ($event, message) {
      if (!message) {
        throw new Error('You must emit some message');
      } else if ('string' === typeof message) {
        ctrl.msg = message;
      } else {
        throw Error('Message must be string')
      }
    });


  }

  var module = angular.module("exerciseApp");
  module.controller('TestErrorCtrl', ['$scope', '$routeParams', TestErrorCtrl]);
})();