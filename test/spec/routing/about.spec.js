'use strict';

describe('Route: Home', function ()
{

    var $state, AuthService, UserService, $rootScope, $location,
            scope, homePath = '/', user = 'user';

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
            }
        });

        $provide.service('UserService', function ()
        {
            var wasFired = false;
            this.getCurrent = function ()
            {
                wasFired = !wasFired;
                return wasFired;
            }
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

    it('should not display restricted view to the scope if not authenticated', function ()
    {
        $location.url(homePath);
        $rootScope.$digest();
        $state.go('site.main');
        $rootScope.$digest();
        expect($rootScope.authenticated).toBeFalsy();
    });

    // it('should include correct states', inject(function ()
    // {
    //     AuthService.login();
    //     return $rootScope.$apply(function ()
    //     {
    //         $location.url(homePath);
    //         $state.go('site.main');
    //         expect($state.includes('site')).toBeTruthy();
    //     });
    // }));
    //
    // it('should display restricted view to the scope if authenticated', inject(function ()
    // {
    //     AuthService.login();
    //     return $rootScope.$apply(function ()
    //     {
    //         $location.url(homePath);
    //         $state.go('site.main');
    //         expect(UserService.getCurrent()).toBeTruthy();
    //     });
    // }));
    //
    // it('should state not to be abstract', inject(function ()
    // {
    //     AuthService.login();
    //     var homeState;
    //     return $rootScope.$apply(function ()
    //     {
    //         $location.path('/');
    //         homeState = $state.get('site.main');
    //         expect(homeState.abstract).toBeFalsy();
    //     });
    // }));
});
