/*global jsonpatch*/

angular.module('taskApp').config(function ($provide)
{
    'use strict';

    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}).run(function ($httpBackend)
        {
            'use strict';

            var sequence = 1;
            var attractions = {};
            var notes = {};
            [
                {
                    id: sequence++,
                    name: 'Jenga',
                    author: 'Leslie Scott'
                },
                {
                    id: sequence++,
                    name: 'Pachisi',
                    author: 'Josef Friedrich Schmidt'
                }
            ].every(function (value)
                    {
                        attractions[value.id] = value;
                        return true;
                    });
            [
                {
                    id: sequence++,
                    title: 'Groceries',
                    details: 'milk, apples'
                },
                {
                    id: sequence++,
                    title: 'TODO',
                    details: 'do the dishes, laundry'
                }
            ].every(function (value)
                    {
                        notes[value.id] = value;
                        return true;
                    });

            $httpBackend.whenGET(/\/api\/attraction\/(\d+)/).respond(function (method, url)
            {
                var match = /\/api\/attraction\/(\d+)/.exec(url);
                if (match) {
                    var id = parseInt(match[1], 10);
                    return [200, attractions[id]];
                }
                return [404];
            });

            $httpBackend.whenPATCH(/\/api\/attraction\/(\d+)/).respond(function (method, url, data)
            {
                var match = /\/api\/attraction\/(\d+)/.exec(url);
                var id = parseInt(match[1], 10);

                data = JSON.parse(data);

                var obj = attractions[id];
                if (obj) {
                    jsonpatch.apply(obj, data);
                    return [200, obj];
                } else {
                    return [404];
                }
            });

            $httpBackend.whenGET(/\/api\/note\/(\d+)/).respond(function (method, url)
            {
                var match = /\/api\/note\/(\d+)/.exec(url);
                if (match) {
                    var id = parseInt(match[1], 10);
                    return [200, notes[id]];
                }
                return [404];
            });

            $httpBackend.whenPATCH(/\/api\/note\/(\d+)/).respond(function (method, url, data)
            {
                var match = /\/api\/note\/(\d+)/.exec(url);
                var id = parseInt(match[1], 10);

                data = JSON.parse(data);

                var obj = notes[id];
                if (obj) {
                    jsonpatch.apply(obj, data);
                    return [200, obj];
                } else {
                    return [404];
                }
            });

            $httpBackend.whenGET(/.*\.html/).passThrough();

        });
