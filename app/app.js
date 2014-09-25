(function ()
{
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource']);
    module.config(function ($provide)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    });
    module.run(function ($httpBackend)
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
