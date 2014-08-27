(function () {
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource']);
    module.config(function ($provide) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    });
    module.run(function ($httpBackend) {
        var announcements = [
            {   id: 1,
                title: 'Announcement 1',
                description: 'I want to buy new car...'
            },
            {   id: 2,
                title: 'Announcement 2',
                description: 'I want to buy new bike...'
            },
            {   id: 3,
                title: 'Announcement 3',
                description: 'I want to buy new-old Fiat 126 p...'
            },
            {   id: 4,
                title: 'Announcement 4',
                description: 'I want to buy something to eat...'
            },
        ];

        $httpBackend.whenGET('/api/announcement').respond(announcements);

    });
})();