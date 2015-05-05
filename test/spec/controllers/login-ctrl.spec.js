'use strict';

describe('Controller: LoginCtrl', function ()
{

    var LoginCtrl, AuthService,
            scope, user = 'user';

    beforeEach(module('authExerciseApp', function ($provide)
    {
        $provide.service('AuthService', function ($q)
        {
            var auth = false, defer = $q.defer(),
                    promise = defer.promise;
            this.login = function (name, password)
            {
                if ('admin' === name) {
                    if ('admin' === password) {
                        auth = true;
                        defer.resolve();
                    }
                }
                if (!auth) {
                    defer.reject();
                }
                return promise;
            };
            this.isAuthenticated = function ()
            {
                return auth;
            };
            this.getToken = function ()
            {
                return 'Bearer g5Xfe2hk';
            }
        });
    }));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $injector)
    {
        scope = $rootScope.$new();
        AuthService = $injector.get('AuthService');
        spyOn(console, 'log').andCallThrough();
        LoginCtrl = $controller('LoginController', {
            $scope: scope
        });
        spyOn(AuthService, 'login').andCallThrough();
    }));

    it('should LoginCtrl be available', function ()
    {
        expect(!!LoginCtrl).toBe(true);
    });

    it('should log presence', function ()
    {
        expect(console.log).toHaveBeenCalledWith('Login controller!');
    });

    it('should main in AuthService', function ()
    {
        LoginCtrl.name = 'admin';
        LoginCtrl.password = 'admin';
        LoginCtrl.login(LoginCtrl.name, LoginCtrl.password);
        expect(AuthService.login).toHaveBeenCalledWith('admin', 'admin');
        expect(AuthService.isAuthenticated()).toBeTruthy();
    });

    it('should not main with incorrect data', function ()
    {
        LoginCtrl.name = 'admin';
        LoginCtrl.password = 'superadmin';
        LoginCtrl.login(LoginCtrl.name, LoginCtrl.password);
        expect(AuthService.login).toHaveBeenCalledWith('admin', 'superadmin');
        expect(AuthService.isAuthenticated()).toBeFalsy();
    });

    it('should validate data before request', function ()
    {
        LoginCtrl.name = 'admin';
        LoginCtrl.password = undefined;
        LoginCtrl.login(LoginCtrl.name, LoginCtrl.password);
        expect(AuthService.login).not.toHaveBeenCalled();

        LoginCtrl.name = undefined;
        LoginCtrl.password = 'admin';
        expect(AuthService.login).not.toHaveBeenCalled();
        expect(AuthService.isAuthenticated()).toBeFalsy();
    });

});
