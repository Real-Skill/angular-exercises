describe('Factory: authInterceptor', function () {

  var authInterceptor, AuthService, UserService, $httpBackend, token = 'Bearer g5Xfe2hk', tokenAvailable = true;

  // load the controller's module
  beforeEach(module('authExerciseApp', function ($provide) {
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, $templateCache) {
    authInterceptor = $injector.get('authInterceptor');
    AuthService = $injector.get('AuthService');
    UserService = $injector.get('UserService');
    $httpBackend = $injector.get('$httpBackend');
    spyOn(AuthService, 'getToken').and.callThrough();

    $templateCache.put('views/site/site.html', '');
    $templateCache.put('/views/site/auth/login/login.html', '');
    $templateCache.put('/views/site/auth/menu/menu.html', '');
    $templateCache.put('/views/site/auth/about/about.html', '');
    $templateCache.put('/views/site/auth/login/home/home.html', '');
    $templateCache.put('views/site/auth/register/register.html', '');
  }));

  it('should authInterceptor be available', function () {
    expect(!!authInterceptor).toBe(true);
  });

  it('should config request', function () {
    expect(typeof authInterceptor.request).toBe('function');
  });

  it('should set token from AuthService', function () {
    AuthService.login('admin', 'admin').then(function (data) {
      expect(data.login).toBe(true);
      expect(AuthService.isAuthenticated()).toBe(true);
    });
  });

  it('should not set token from AuthService if not available', function () {
    tokenAvailable = false;
    var header = authInterceptor.request({});
    expect(header.headers.Authorization).toBeFalsy();
    expect(AuthService.getToken).toHaveBeenCalled();
  });

  it('should getCurrent be authenticated on login', function () {
    AuthService.login('admin', 'admin').then(function (data) {
      expect(data.login).toBe(true);
      expect(AuthService.isAuthenticated()).toBe(true);
    });
    UserService.getCurrent().then( function (data) {
      expect(data.user).toBe({name: 'admin'});
    });
  });

});
