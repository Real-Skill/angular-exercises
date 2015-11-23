'use strict';

describe('Service: userService', function () {

  var $httpBackend, $cookies, $rootScope, UserService, AuthService;

  // load the service's module
  beforeEach(module('authExerciseApp'));

  // instantiate service
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    UserService = $injector.get('UserService');
    AuthService = $injector.get('AuthService');
    $rootScope = $injector.get('$rootScope');
    $cookies = $injector.get('$cookies');

    $cookies.remove('token');
  }));

  it('should UserService be available', function () {
    expect(!!UserService).toBe(true);
  });

  it('should getCurrent retrieve current user', function () {
    $httpBackend.expectGET('/user/current').respond(200, {name: 'user'});
    var promise = UserService.getCurrent().then(function (data) {
      expect(data.name).toBe('user');
    });
    $httpBackend.flush();
    $rootScope.$digest();

    return promise;
  });

  it('should register new user', function () {
    $httpBackend.expectPOST('/user/register').respond(200, {register: 'registered'});
    var promise = UserService.register('user', 'user').then(function (data) {
      expect(data.register).toBe('registered');
      expect($cookies.get('token')).toBeTruthy();
      expect(AuthService.isAuthenticated()).toBe(true);
    });
    $httpBackend.flush();
    $rootScope.$digest();

    return promise;
  });

});
