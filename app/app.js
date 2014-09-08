(function ()
{
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource', 'ngRoute']);

    module.config(function ($provide, $routeProvider)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.when('/', {
            templateUrl: 'post/views/postList.html',
            controller: 'PostListCtrl as postList'
        });
        $routeProvider.when('/details/:id', {
            templateUrl: 'post/views/postDetails.html',
            controller: 'PostDetailsCtrl as postDetails'
        });
        $routeProvider.when('/details', {
            templateUrl: 'post/views/postDetails.html',
            controller: 'PostDetailsCtrl as postDetails'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend)
    {
        var sequence = 1;
        var posts = {};
        [
            { id: sequence++, name: 'Stefan', pets: 'Sfinksu' },
            { id: sequence++, name: 'Gienia', pets: 'Krowcia' },
            { id: sequence++, name: 'Kazek', pets: 'Kudlaty' },
            { id: sequence++, name: 'Franek', pets: 'Azor' },
            { id: sequence++, name: 'Jola', pets: 'Fifi' },
            { id: sequence++, name: 'Genek', pets: 'Lapa' },
            { id: sequence++, name: 'Bolek', pets: 'Bundz' },
            { id: sequence++, name: 'Jagna', pets: 'Bolo' },
            { id: sequence++, name: 'Gustlik', pets: 'Pupil' },
            { id: sequence++, name: 'Pawel', pets: 'Jorkus' },
            { id: sequence++, name: 'Joanna', pets: 'Luna' },
            { id: sequence++, name: 'Wlodek', pets: 'Puszek' }
        ].every(function (value)
                {
                    posts[value.id] = value;
                    return true;
                });

        $httpBackend.whenGET(/\/api\/post\/(\d+)/).respond(function (method, url)
        {
            var match = /\/api\/post\/(\d+)/.exec(url);
            if (match) {
                var id = parseInt(match[1], 10);
                return [200, posts[id]];
            }
            return [404];
        });

        function parseQueryString(url)
        {
            var args = url.split('?');
            args = args[1] || args[0];
            args = args.split('&');
            var result = {};
            var arg;
            for (var i = 0; i < args.length; i++) {
                arg = decodeURI(args[i]);

                if (arg.indexOf('=') == -1) {
                    result[arg.trim()] = true;
                } else {
                    var kvp = arg.split('=');
                    result[kvp[0].trim()] = kvp[1].trim();
                }
            }
            return result;
        }

//        $httpBackend.whenGET(/\/api\/post(\?.*)$/).respond(function (method, url)
//        {
//            var params = parseQueryString(url);
//            var first = parseInt(params.firstResult);
//            var max = parseInt(params.maxResults);
//
//            var count = 0;
//            var result = [];
//            for (var i in posts) {
//                if (posts.hasOwnProperty(i) && ((-1<posts[i].name.indexOf(params.searchQuery) || !params.searchQuery) || (-1<posts[i].pets.indexOf(params.searchQuery) || !params.searchQuery)))
//                {
//                    if ((count>=first) && (count<first+max))
//                    {
//                        result.push(posts[i]);
//                    }
//                    count++;
//                }
//            }
//            return [200, {resultList: result, totalCount: count}];
//        });

        $httpBackend.whenGET('/api/post').respond(function ()
        {
            return [200, posts];
        });

        $httpBackend.whenPOST(/\/api\/post/).respond(function (method, url, postData)
        {
            postData = JSON.parse(postData);

            if (posts[postData.id]) {
                posts[postData.id].name = postData.name;
                posts[postData.id].pets = postData.pets;
            } else {
                postData.id = sequence++;
                posts[postData.id] = postData;
            }

            return [200, postData];
        });

        $httpBackend.whenDELETE(/\/api\/post\/(\d+)/).respond(function (method, url)
        {
            var match = /\/api\/post\/(\d+)/.exec(url);
            if (match) {
                var id = parseInt(match[1], 10);
                delete posts[id];
                return [200];
            }
            return [404];
        });

        $httpBackend.whenGET(/.*\.html/).passThrough();

    });
})();
