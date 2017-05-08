'use strict';

describe('Controller: Register', function ()
{

    var RegisterCtrl, $state, AuthService, UserService, $rootScope, registerThen, loginThen, scope;

    // load the controller's module
    beforeEach(module('authExerciseApp', function ($provide)
    {
        $provide.service('AuthService', function ()
        {
            var auth = false;
            this.login = function ()
            {
                auth = true;
                return {
                    then: loginThen.and.callFake(function (callback)
                    {
                        callback();
                    })
                };
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
            var newUser;
            this.getCurrent = function ()
            {
                return newUser;
            };
            this.register = function (name, password)
            {
                if ('test' !== name || 'test' !== password) {
                    newUser = {
                        name: name,
                        password: password
                    };
                    return {
                        then: registerThen.andCallFake(function (callback)
                        {
                            callback();
                        })
                    };
                } else {
                    return {
                        then: function ()
                        {
                        }
                    };
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
        loginThen = jasmine.createSpy('then');
        registerThen = jasmine.createSpy('then');

        spyOn(AuthService, 'login').andCallThrough();
        spyOn(UserService, 'register').andCallThrough();

        scope = $rootScope.$new();
        RegisterCtrl = $controller('RegisterController', {
            $scope: scope
        });
    }));

    it('should RegisterCtrl be available', function ()
    {
        expect(!!RegisterCtrl).toBe(true);
    });

    it('should validate and register if input data is correct', inject(function ()
    {
        RegisterCtrl.login = 'user';
        RegisterCtrl.password = 'user';
        RegisterCtrl.passwordRetype = 'user';
        expect(RegisterCtrl.login && RegisterCtrl.password && RegisterCtrl.passwordRetype).toBeTruthy();

        $rootScope.$apply(function ()
        {
            RegisterCtrl.register();
        });

        expect(UserService.getCurrent()).toBeTruthy();
    }));

    it('should validate and cancel register if input data is incorrect', inject(function ()
    {
        RegisterCtrl.login = 'user';
        RegisterCtrl.password = 'user';
        RegisterCtrl.passwordRetype = 'admin';
        expect(RegisterCtrl.login && RegisterCtrl.password && RegisterCtrl.passwordRetype).toBeTruthy();

        $rootScope.$apply(function ()
        {
            RegisterCtrl.register();
        });

        expect($rootScope.authenticated && UserService.getCurrent()).toBeFalsy();
    }));

    it('should validate and cancel register if input data is empty', inject(function ()
    {
        expect(RegisterCtrl.login && RegisterCtrl.password && RegisterCtrl.passwordRetype).toBeFalsy();

        $rootScope.$apply(function ()
        {
            RegisterCtrl.register();
        });

        expect($rootScope.authenticated && UserService.getCurrent()).toBeFalsy();
    }));

    it('should not main if the user is not registered', inject(function ()
    {
        RegisterCtrl.login = 'test';
        RegisterCtrl.password = 'test';
        RegisterCtrl.passwordRetype = 'test';

        $rootScope.$apply(function ()
        {
            RegisterCtrl.register();
        });
        expect(registerThen).not.toHaveBeenCalled();
        expect(loginThen).not.toHaveBeenCalled();
    }));

    it('should main if the user is registered', inject(function ()
    {
        RegisterCtrl.login = 'user';
        RegisterCtrl.password = 'user';
        RegisterCtrl.passwordRetype = 'user';

        $rootScope.$apply(function ()
        {
            RegisterCtrl.register();
        });
    }));

});
