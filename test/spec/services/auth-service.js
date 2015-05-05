(function ()
{
    'use strict';

    describe('Service: authService', function ()
    {

        var $httpBackend, AuthService;

        // load the service's module
        beforeEach(module('authExerciseApp', function ()
        {
        }));
        // instantiate service
        beforeEach(inject(function ($injector)
        {
            $httpBackend = $injector.get('$httpBackend');
            AuthService = $injector.get('AuthService');
        }));

        it('should AuthService be available', function ()
        {
            expect(!!AuthService).toBe(true);
        });

        it('should login user provided correct credentials', function ()
        {
            $httpBackend.expectPOST('/auth/login').respond(200, {login: true});
            return AuthService.login('admin', 'admin').then(function (data)
            {
                expect(data.login).toBe(true);
            });
            $httpBackend.flush();
        });

        it('should isAuthenticated return true if user authenticated', function ()
        {
            var randToken = Math.random();
            $httpBackend.expectPOST('/auth/login').respond(200, {login: true, token: randToken});
            return AuthService.login('admin', 'admin').then(function (data)
            {
                expect(data.login).toBe(true);
                expect(AuthService.isAuthenticated()).toBe(true);
                expect(AuthService.getToken()).toBe('Bearer ' + randToken);
            });
            $httpBackend.flush();
        });

        it('should isAuthenticated return false if user not authenticated', function ()
        {
            $httpBackend.expectPOST('/auth/login').respond(401, {login: false});
            return AuthService.login('admin', 'admin').then(function (data)
            {
                expect(data.login).toBe(false);
                expect(AuthService.isAuthenticated()).toBe(false);
            });
            $httpBackend.flush();
        });

        it('should not login user provided incorrect credentials', function ()
        {
            $httpBackend.expectPOST('/auth/login').respond(401, {login: false});
            return AuthService.login('admin', 'superadmin').then(function (data)
            {
                expect(data.login).toBe(false);
            });
            $httpBackend.flush();
        });

        it('should logout current user', function ()
        {
            $httpBackend.expectPOST('/auth/logout').respond(200, {logout: true});
            return AuthService.logout().then(function (data)
            {
                expect(data.logout).toBe(true);
            });
            $httpBackend.flush();
        });

        it('should set token cookie', inject(function ($cookies)
        {
            var randToken = Math.random();
            $httpBackend.expectPOST('/auth/login').respond(200, {token: randToken});
            return AuthService.login('admin', 'admin').then(function ()
            {
                expect($cookies.get('token')).toBe('Bearer ' + randToken);
            });
            $httpBackend.flush();
        }));

        it('should remove cookie', inject(function ($cookies)
        {
            $cookies.put('token', 'g5Xfe2hk');
            $httpBackend.expectPOST('/auth/logout').respond(200, {});
            return AuthService.logout().then(function ()
            {
                expect($cookies.get('token')).toBeFalsy();
            });
            $httpBackend.flush();
        }));

    });
})();
