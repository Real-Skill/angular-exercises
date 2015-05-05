'use strict';

describe('Service: userService', function () {

  var $httpBackend, UserService, AuthService;

  // load the service's module
  beforeEach(module('authExerciseApp'));

  // instantiate service
  beforeEach(inject(function ($injector, $templateCache) {
    $httpBackend = $injector.get('$httpBackend');
    UserService = $injector.get('UserService');
    AuthService = $injector.get('AuthService');

    $templateCache.put('views/site/site.html', '');
    $templateCache.put('/views/site/auth/login/login.html', '');
    $templateCache.put('/views/site/auth/menu/menu.html', '');
    $templateCache.put('/views/site/auth/about/about.html', '');
    $templateCache.put('/views/site/auth/login/home/home.html', '');
    $templateCache.put('views/site/auth/register/register.html', '');
  }));

  it('should UserService be available', function () {
    expect(!!UserService).toBe(true);
  });

  it('should getCurrent retrieve current user', function () {
    $httpBackend.expectGET('/user/current').respond(200, {name: 'user'});
    UserService.getCurrent().then(function (data) {
      expect(data.name).toBe('user');
    });
    $httpBackend.flush();
  });

  it('should register new user', function () {
    $httpBackend.expectPOST('/user/register').respond(200, {register: 'registered'});
    UserService.register('user', 'user').then(function (data) {
      expect(data.register).toBe('registered');
      expect($cookies.get('token')).toBeTruthy();
      expect(AuthService.isAuthenticated()).toBe(true);
    });
    $httpBackend.flush();
  });

});
