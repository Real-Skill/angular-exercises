'use strict';

describe('Controller: AuthCtrl', function ()
{


    var AuthCtrl, UserService, $rootScope, $httpBackend,
            scope, user = 'user';

    beforeEach(module('authExerciseApp'));


    beforeEach(function ()
    {
        module(function ($provide)
        {
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
        });
    });

    beforeEach(module('templates'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $injector)
    {
        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');
        scope = $rootScope.$new();
        UserService = $injector.get('UserService');
        spyOn(UserService, 'getCurrent').andCallThrough();
        spyOn(console, 'log').andCallThrough();
        AuthCtrl = $controller('AuthenticationController', {User: user});
    }));

    it('should AuthCtrl be available', function ()
    {
        expect(!!AuthCtrl).toBe(true);
    });

    it('should log presence', function ()
    {
        expect(console.log).toHaveBeenCalledWith('Auth controller!');
    });

    it('should assign user to the scope', function ()
    {
        $rootScope.$digest();
        expect(AuthCtrl.user).toBe(user);
    });
});
