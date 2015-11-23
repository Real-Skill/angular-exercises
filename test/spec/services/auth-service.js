'use strict';

describe('Service: authService', function () {

  var $httpBackend, $cookies, $rootScope, AuthService;

  // load the service's module
  beforeEach(module('authExerciseApp', function() {
  }));
  // instantiate service
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    AuthService = $injector.get('AuthService');
    $cookies = $injector.get('$cookies');
    $rootScope = $injector.get('$rootScope');

    $cookies.remove('token');
  }));

  it('should AuthService be available', function () {
    expect(!!AuthService).toBe(true);
  });

  it('should login user provided correct credentials', function () {
    $httpBackend.expectPOST('/auth/login').respond(200, {login: true});
    var promise = AuthService.login('admin', 'admin').then(function (data) {
      expect(data.login).toBe(true);
    });
    $httpBackend.flush();
    $rootScope.$digest();
    return promise;
  });

  it('should isAuthenticated true if user authenticated', function () {
    $httpBackend.expectPOST('/auth/login').respond(200, {login: true});
    var promise = AuthService.login('admin', 'admin').then(function (data) {
      expect(data.login).toBe(true);
      expect(AuthService.isAuthenticated()).toBe(true);
    });
    $httpBackend.flush();
    $rootScope.$digest();
    return promise;
  });

  it('should isAuthenticated false if user not authenticated', function () {
    $httpBackend.expectPOST('/auth/login').respond(401, {login: false});
    var promise = AuthService.login('admin', 'admin').catch(function (res) {
      expect(res.data.login).toBe(false);
      expect(AuthService.isAuthenticated()).toBe(false);
    });
    $httpBackend.flush();
    $rootScope.$digest();

    return promise;
  });

  it('should not login user provided incorrect credentials', function () {
    $httpBackend.expectPOST('/auth/login').respond(401, {login: false});
    var promise = AuthService.login('admin', 'superadmin').catch(function (res) {
      expect(res.data.login).toBe(false);
    });
    $httpBackend.flush();
    $rootScope.$digest();
    return promise;
  });

  it('should logout current user', function () {
    $httpBackend.expectPOST('/auth/logout').respond(200, {logout: true});
    var promise = AuthService.logout().then(function (data) {
      expect(data.logout).toBe(true);
    });
    $httpBackend.flush();
    $rootScope.$digest();
    return promise;
  });

  it('should login set token cookie', function () {
    $httpBackend.expectPOST('/auth/login').respond(200, {token: 'g5Xfe2hk'});
    var promise = AuthService.login('admin', 'admin').then(function () {
      expect($cookies.get('token')).toBe('Bearer g5Xfe2hk');
    });
    $httpBackend.flush();
    $rootScope.$digest();
    return promise;
  });

  it('should logout remove cookie', function () {
    $cookies.put('token', 'g5Xfe2hk');
    $httpBackend.expectPOST('/auth/logout').respond(200, {});
    var promise = AuthService.logout().then(function () {
      expect($cookies.get('token')).toBeFalsy();
    });
    $httpBackend.flush();
    $rootScope.$digest();
    return promise;
  });

});
