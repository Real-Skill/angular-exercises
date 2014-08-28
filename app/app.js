(function () {
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource']);
    module.config(function ($provide) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
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
            }
        ];

        $httpBackend.whenGET('/api/post').respond(posts);

    });
})();
