(function ()
{
    'use strict';

    describe('Service: userService', function ()
    {

        var $httpBackend, UserService;

        // load the service's module
        beforeEach(module('authExerciseApp'));

        // instantiate service
        beforeEach(inject(function ($injector)
        {
            $httpBackend = $injector.get('$httpBackend');
            UserService = $injector.get('UserService');
        }));

        it('should UserService be available', function ()
        {
            expect(!!UserService).toBe(true);
        });

        it('should getCurrent retrieve current user', function ()
        {
            $httpBackend.expectGET('/user/current').respond(200, {name: 'user'});
            return UserService.getCurrent().then(function (data)
            {
                expect(data.name).toBe('user');
            });
            $httpBackend.flush();
        });

        it('should register new user', function ()
        {
            $httpBackend.expectPOST('/user/register').respond(200, {register: 'registered'});
            return UserService.register('user', 'user').then(function (data)
            {
                expect(data.register).toBe('registered');
            });
            $httpBackend.flush();
        });

    });
})();
