(function ()
{
    'use strict';
    var module = angular.module('exerciseApp', ['ngRoute', 'ngResource']);

    module.config(function ($provide, $routeProvider)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend)
    {

        var contacts = [
            {
                id: 1,
                email: 'example.name@domain.com',
                name: 'Example Name'
            },
            {
                id: 2,
                email: 'test.test@test.com',
                name: 'Test Name'
            },
            {
                id: 3,
                email: 'james.brown@yahoo.com',
                name: 'James Brown'
            },
            {
                id: 4,
                email: 'martin@gmail.com',
                name: 'Martin Fowler'
            },
            {
                id: 5,
                email: 'contact@itcrowd.com',
                name: 'IT Crowd'
            },
            {
                id: 6,
                email: 'contact@company.com',
                name: 'The Company'
            },
            {
                id: 7,
                email: 'a.smith@yahoo.com',
                name: 'Adam Smith'
            },
            {
                id: 8,
                email: 'williamjackson@live.com',
                name: 'William Jackson'
            },
            {
                id: 9,
                email: 'jamesred@live.com',
                name: 'James Red'
            }
        ];

        $httpBackend.whenGET('/api/contact').respond(function ()
        {
            return [200, contacts];
        });

        $httpBackend.whenGET(/.*\.html/).passThrough();

    });
})();
