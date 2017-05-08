'use strict';

describe('Controller: Menu', function ()
{

    var MenuCtrl, $state, AuthService, UserService, $rootScope, scope, user = {name: 'user'};

    // load the controller's module
    beforeEach(module('authExerciseApp', function ($provide)
    {
        $provide.service('AuthService', function ()
        {
            var auth = true;
            this.isAuthenticated = function ()
            {
                return auth;
            };
            this.logout = function ()
            {
                auth = false;
            };
            this.getToken = function () {
                return 'Bearer g5Xfe2hk';
            };
        });

        $provide.decorator('UserService', function ($q)
        {
            return {
                getCurrent: function ()
                {
                    var defer = $q.defer();
                    defer.resolve(user);
                    return defer.promise;
                }
            };
        });
    }));

    beforeEach(module('templates'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($injector, $controller)
    {
        $state = $injector.get('$state');
        AuthService = $injector.get('AuthService');
        UserService = $injector.get('UserService');
        $rootScope = $injector.get('$rootScope');

        spyOn(AuthService, 'logout').andCallThrough();
        spyOn(AuthService, 'getToken').andCallThrough();
        spyOn(UserService, 'getCurrent').andCallThrough();

        scope = $rootScope.$new();
        MenuCtrl = $controller('MenuController', {
            $scope: scope,
            User: user
        });
    }));

    it('should MenuCtrl be available', function ()
    {
        expect(!!MenuCtrl).toBe(true);
    });

    it('should assign user if authenticated', function ()
    {
        expect(UserService.getCurrent).toHaveBeenCalled();
        scope.$apply();
        expect(MenuCtrl.user.name).toBe('user');
    });

    it('should logout on demand', function ()
    {
        MenuCtrl.logout();
        expect(AuthService.logout).toHaveBeenCalled();
        expect(AuthService.isAuthenticated()).toBeFalsy();
    });

});
