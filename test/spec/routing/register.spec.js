'use strict';

describe('Route: Register', function ()
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

        //$provide.service('UserService', function ()
        //{
        //    var newUser;
        //    this.getCurrent = function ()
        //    {
        //        return newUser;
        //    };
        //    this.register = function (name, password)
        //    {
        //        newUser = {
        //            name: name,
        //            password: password
        //        };
        //    }
        //});
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

        spyOn(AuthService, 'login').andCallThrough();
        spyOn(UserService, 'register').andCallThrough();
    }));

    it('should display view to the scope if not authenticated', function ()
    {
        $location.url(homePath);
        $rootScope.$digest();
        $state.go('site.register');
        expect($rootScope.authenticated).toBeFalsy();
    });

    //it('should redirect to home view if authenticated', inject(function ()
    //{
    //    UserService.register('user', 'user');
    //    AuthService.login('user', 'user');
    //    $rootScope.$apply(function ()
    //    {
    //        $location.url(homePath);
    //        $state.go('site.register');
    //    });
    //    spyOn($state, 'go').andCallThrough();
    //    expect(UserService.register).toHaveBeenCalledWith('user', 'user');
    //    expect(AuthService.login).toHaveBeenCalledWith('user', 'user');
    //    $rootScope.$digest();
    //    expect($state.go).toHaveBeenCalledWith('site.main');
    //    expect(UserService.getCurrent()).toBeTruthy();
    //
    //    //expect($state.current.name).toBe('site.main');
    //}));

    it('should not redirect to home view if not authenticated', inject(function ()
    {
        UserService.register('user', 'user');
        $rootScope.$apply(function ()
        {
            $location.url(homePath);
            $state.go('site.register');
        });
        expect(UserService.register).toHaveBeenCalledWith('user', 'user');
        expect(AuthService.login).not.toHaveBeenCalled();
        expect($rootScope.authenticated && UserService.getCurrent()).toBeFalsy();
        expect($state.current.name).not.toBe('site.main');
    }));

    it('should be available on register url', inject(function ()
    {
        $rootScope.$apply(function ()
        {
            $location.url(homePath);
            $state.go('site.register');
        });
        expect($state.current.url).toBe('/register');
    }));

    it('should name be set if authenticated', inject(function ()
    {
        UserService.register('cool_user', 'user');
        $rootScope.$apply(function ()
        {
            $location.url(homePath);
            $state.go('site.register');
        });
        expect(UserService.register).toHaveBeenCalledWith('cool_user', 'user');
        UserService.getCurrent().then(function (user) {
            expect(user).toBe({name: 'cool_user'});
        });
    }));
});
