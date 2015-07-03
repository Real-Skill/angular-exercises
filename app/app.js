(function ()
{
    'use strict';
    var module = angular.module('exerciseApp', ['ngResource', 'ngRoute']);

    module.config(function ($provide, $routeProvider)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.when('/', {
            templateUrl: 'postList.html',
            controller: 'PostListCtrl as postList'
        });
        $routeProvider.when('/details/:id', {
            templateUrl: 'postDetails.html',
            controller: 'PostDetailsCtrl as postDetails'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend)
    {
        var posts = [
            {
                id: 1,
                author: 'Jack',
                title: 'Diving Deep with Dependency Injection'
            },
            {
                id: 2,
                author: 'Jill',
                title: 'Practical End-to-End Testing with Protractor'
            },
            {
                id: 3,
                author: 'Cleo',
                title: 'GitHub Flavored Markdown'
            }
        ];

        $httpBackend.whenGET(/\/api\/post\/(\d+)/).respond(function (method, url)
        {
            var match = /\/api\/post\/(\d+)/.exec(url);
            if (match) {
                var id = parseInt(match[1], 10);
                for (var i = 0; i < posts.length; i++) {
                    var content = posts[i];
                    if (id === content.id) {
                        return [200, content];
                    }
                }
            }
            return [404];
        });
        $httpBackend.whenGET('/api/post').respond(function ()
        {
            var list = [];
            angular.forEach(posts, function (post)
            {
                post = angular.extend({}, post);
                delete post.author;
                list.push(post);
            });
            return [200, list];
        });
        $httpBackend.whenGET(/.*\.html/).passThrough();

    });
})();
