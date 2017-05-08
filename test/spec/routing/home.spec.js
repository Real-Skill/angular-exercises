'use strict';

describe('Route: Home', function ()
{

    var $state, $location, AuthService, UserService, $rootScope;

    // load the controller's module
    beforeEach(module('authExerciseApp', function ($provide)
    {
        $provide.service('AuthService', function ()
        {
            var auth = false;
            this.login = function ()
            {
                auth = true;
            };
            this.isAuthenticated = function ()
            {
                return auth;
            };
            this.getToken = function ()
            {
                return 'Bearer g5Xfe2hk';
            };
        });

        $provide.service('UserService', function ()
        {
            var wasFired = true;
            this.getCurrent = function ()
            {
                wasFired = !wasFired;
                return wasFired;
            };
        });
    }));

    beforeEach(module('templates'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($injector)
    {
        $state = $injector.get('$state');
        AuthService = $injector.get('AuthService');
        UserService = $injector.get('UserService');
        $rootScope = $injector.get('$rootScope');
        $location = $injector.get('$location');
    }));

});
