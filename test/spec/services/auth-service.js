'use strict';

describe('Service: authService', function () {

  var $httpBackend, $state, AuthService;

  // load the service's module
  beforeEach(module('authExerciseApp', function($provide) {
  }));
  // instantiate service
  beforeEach(inject(function ($injector, $templateCache) {
    $httpBackend = $injector.get('$httpBackend');
    $state = $injector.get('$state');
    AuthService = $injector.get('AuthService');

    $templateCache.put('views/site/site.html', '');
    $templateCache.put('/views/site/auth/login/login.html', '');
    $templateCache.put('/views/site/auth/menu/menu.html', '');
    $templateCache.put('/views/site/auth/about/about.html', '');
    $templateCache.put('/views/site/auth/login/home/home.html', '');
    $templateCache.put('views/site/auth/register/register.html', '');
  }));

  it('should AuthService be available', function () {
    expect(!!AuthService).toBe(true);
  });

  it('should login user provided correct credentials', function () {
    $httpBackend.expectPOST('/auth/login').respond(200, {login: true});
    AuthService.login('admin', 'admin').then(function (data) {
      expect(data.login).toBe(true);
    });
    $httpBackend.flush();
  });

  it('should isAuthenticated return true if user authenticated', function () {
    $httpBackend.expectPOST('/auth/login').respond(200, {login: true});
    AuthService.login('admin', 'admin').then(function (data) {
      expect(data.login).toBe(true);
      expect(AuthService.isAuthenticated()).toBe(true);
    });
    $httpBackend.flush();
  });

  it('should isAuthenticated return false if user not authenticated', function () {
    $httpBackend.expectPOST('/auth/login').respond(401, {login: false});
    AuthService.login('admin', 'admin').then(function (data) {
      expect(data.login).toBe(false);
      expect(AuthService.isAuthenticated()).toBe(false);
    });
    $httpBackend.flush();
  });

  it('should not login user provided incorrect credentials', function () {
    $httpBackend.expectPOST('/auth/login').respond(401, {login: false});
    AuthService.login('admin', 'superadmin').then(function (data) {
      expect(data.login).toBe(false);
    });
    $httpBackend.flush();
  });

  it('should logout current user', function () {
    $httpBackend.expectPOST('/auth/logout').respond(200, {logout: true});
    AuthService.logout().then(function (data) {
      expect(data.logout).toBe(true);
    });
    $httpBackend.flush();
  });

  it('should login set token cookie', inject(function ($cookies) {
    $httpBackend.expectPOST('/auth/login').respond(200, {token: 'g5Xfe2hk'});
    AuthService.login('admin', 'admin').then(function () {
      expect($cookies.get('token')).toBe('Bearer g5Xfe2hk');
    });
    $httpBackend.flush();
  }));

  it('should logout remove cookie', inject(function ($cookies) {
    $cookies.put('token', 'g5Xfe2hk');
    $httpBackend.expectPOST('/auth/logout').respond(200, {});
    AuthService.logout().then(function () {
      expect($cookies.get('token')).toBeFalsy();
    });
    $httpBackend.flush();
  }));

});
