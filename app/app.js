(function ()
{
    'use strict';
    var module = angular.module('app', ['ngResource', 'ngRoute']);

    module.config(function ($provide)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        //add routing here

    });

    //mocked backend
    module.run(function ($httpBackend)
    {
        var sequence = 1;
        var candies = {};
        [
            {
                id: sequence++,
                name: 'Jenga',
                author: ' Leslie Scott'
            },
            {
                id: sequence++,
                name: 'Pachisi',
                author: 'Josef Friedrich Schmidt'
            },
            {
                id: sequence++,
                name: 'Rubik Cube',
                author: 'Terutoshi Ishige'
            }
        ].every(function (value)
        {
            candies[value.id] = value;
            return true;
        });

        $httpBackend.whenGET(/\/api\/candy\/(\d+)/).respond(function (method, url)
        {
            var match = /\/api\/candy\/(\d+)/.exec(url);
            if (match) {
                var id = parseInt(match[1], 10);
                return [200, candies[id]];
            }
            return [404];
        });
        $httpBackend.whenGET('/api/candy').respond(function ()
        {
            return [200, candies];
        });

        $httpBackend.whenPOST(/\/api\/candy/).respond(function (method, url, candyData)
        {
            candyData = JSON.parse(candyData);

            if (candies[candyData.id]) {
                candies[candyData.id].name = candyData.name;
                candies[candyData.id].author = candyData.author;
            } else {
                candyData.id = sequence++;
                candies[candyData.id] = candyData;
            }

            return [200, candyData];
        });

        $httpBackend.whenDELETE(/\/api\/candy\/(\d+)/).respond(function (method, url)
        {
            var match = /\/api\/candy\/(\d+)/.exec(url);
            if (match) {
                var id = parseInt(match[1], 10);
                delete candies[id];
                return [200];
            }
            return [404];
        });

        $httpBackend.whenGET(/.*\.html/).passThrough();
    });

})();
