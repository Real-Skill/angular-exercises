(function ()
{
    'use strict';
    var app = angular.module('app', ['ngResource']);

    app.config(function ($provide)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    });
    app.run(function ($httpBackend)
    {
        var posts = [
            {   id: 1,
                author: 'Jack',
                title: 'Diving Deep with Dependency Injection'
            },
            {   id: 2,
                author: 'Jill',
                title: 'Practical End-to-End Testing with Protractor'
            }
        ];
        $httpBackend.whenGET('/api/post').respond(posts);

    });
})();
