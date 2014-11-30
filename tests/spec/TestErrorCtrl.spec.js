describe('TestError', function () {
  'use strict';

  beforeEach(module('exerciseApp'));
  var scope, routeParamsMock;
  var controller;

  function createController($controller) {
    controller = $controller('TestErrorCtrl', {$scope: scope, $routeParams: routeParamsMock});
  }

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    routeParamsMock = {};
  }));

  describe('constructor', function () {
    describe('when id in route params is NOT defined', function () {

    });
    describe('when id in route params is defined', function () {

    });
    describe('when id in route params is defined', function () {

    });
  });
  describe('$on(\'someEvent\')', function () {

    describe('when message is NOT defined', function () {

    });
    describe('when message is NOT string', function () {

    });
    describe('when message is string', function () {

    });
  });
});