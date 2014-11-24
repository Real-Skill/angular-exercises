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
      it('should throw error', inject(function ($controller) {
        var throwError = {$scope: scope, $routeParams: routeParamsMock};
        expect(angular.bind(null, $controller, 'TestErrorCtrl', throwError)).toThrow('ID must be defined in $routeParams')
      }));
    });
    describe('when id in route params is defined', function () {
      it('should NOT throw error', inject(function ($controller) {
        var throwError = {$scope: scope, $routeParams: {id: 23}};
        expect(angular.bind(null, $controller, 'TestError', throwError)).not.toThrow('ID must be defined in $routeParams')
      }));
    });
    describe('when id in route params is defined', function () {
      beforeEach(inject(function ($controller) {
        routeParamsMock = {id: 123};
        createController($controller);
      }));
      it('should set user id', function () {
        expect(scope.userId).toBe(123);
      });
    });
  });
  describe('$on(\'someEvent\')', function () {
    beforeEach(inject(function ($controller) {
      routeParamsMock = {id: 23};
      createController($controller);
    }));
    describe('when message is NOT defined', function () {
      it('should throw error', function () {
        expect(angular.bind(scope, scope.$emit, 'someEvent')).toThrow('You must emit some message');
        expect(angular.bind(scope, scope.$emit, 'someEvent')).not.toThrow('Message must be string');
      });
      it('should NOT change msg', function () {
        expect(controller.msg).toBe(null);
      });
    });
    describe('when message is NOT string', function () {
      it('should throw error', function () {
        expect(angular.bind(scope, scope.$emit, 'someEvent', {})).not.toThrow('You must emit some message');
        expect(angular.bind(scope, scope.$emit, 'someEvent', {})).toThrow('Message must be string');
      });
      it('should NOT change msg', function () {
        expect(controller.msg).toBe(null);
      });
    });
    describe('when message is string', function () {
      beforeEach(function () {
        scope.$emit('someEvent', 'Good job!')
      });
      it('should set message', function () {
        expect(controller.msg).toBe('Good job!')
      });
    });
  });
});