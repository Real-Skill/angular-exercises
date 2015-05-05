(function ()
{
    'use strict';

    describe('Factory: AuthInterceptor', function ()
    {

        var AuthInterceptor, AuthService, UserService, httpProvider, $httpBackend;

        // load the controller's module
        beforeEach(module('authExerciseApp', function ($httpProvider)
        {
            httpProvider = $httpProvider;
        }));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($injector)
        {
            AuthInterceptor = $injector.get('AuthInterceptor');
            AuthService = $injector.get('AuthService');
            UserService = $injector.get('UserService');
            $httpBackend = $injector.get('$httpBackend');
            spyOn(AuthService, 'getToken').andCallThrough();
        }));

        it('should AuthInterceptor be available', function ()
        {
            expect(!!AuthInterceptor).toBe(true);
        });

        it('should AuthInterceptor be used as interceptor', function ()
        {
            expect(httpProvider.interceptors).toContain('AuthInterceptor');
        });

        it('should config request', function ()
        {
            expect(typeof AuthInterceptor.request).toBe('function');
        });

        it('should set token from AuthService', function ()
        {
            return AuthService.login('admin', 'admin').then(function (data)
            {
                expect(data.login).toBe(true);
                expect(AuthService.isAuthenticated()).toBe(true);
            });
        });

        it('should not set token from AuthService if not available', function ()
        {
            var header = AuthInterceptor.request({});
            expect(header.headers).toBeFalsy();
            expect(AuthService.getToken).toHaveBeenCalled();
        });

        it('should getCurrent be authenticated on login', function ()
        {
            return AuthService.login('admin', 'admin').then(function (data)
            {
                expect(data.login).toBe(true);
                expect(AuthService.isAuthenticated()).toBe(true);
            }).then(function () {
                return UserService.getCurrent().then(function (data)
                {
                    expect(data.user).toBe({name: 'admin'});
                });
            });
        });

    });
})();
