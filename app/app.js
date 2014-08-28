(function () {
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource','ngRoute']);

    module.config(function ($provide, $routeProvider) {
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

    module.run(function ($httpBackend) {
        var posts = [
            {   id: 1,
                name: 'Stefan',
                pets: 'Sfinksu'
            },
            {   id: 2,
                name: 'Gienia',
                pets: 'Krowcia'
            },
            {   id: 3,
                name: 'Erlang',
                pets: 'Square'
            }
        ];

        var list = [
            {   id: 1,
                name: 'Stefan'
            },
            {   id: 2,
                name: 'Gienia'
            }
        ];

        $httpBackend.whenGET(/\/api\/post\/(\d+)/).respond(function (method, url) {
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
        $httpBackend.whenGET('/api/post').respond(list);
        $httpBackend.whenGET(/.*\.html/).passThrough();

    });
})();
