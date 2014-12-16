(function ()
{
    'use strict';
    var module = angular.module("exerciseApp", ['ngRoute', 'ngResource', 'ui.select2', 'angular-bootstrap-select', 'angular-bootstrap-select.extra']);

    module.config(function ($provide, $routeProvider)
    {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.when('/', {
            templateUrl: 'preference.html',
            controller: 'PreferenceCtrl as prefCtrl'
        }).when('/preference/:a', {
            templateUrl: 'preference.html',
            controller: 'PreferenceCtrl as prefCtrl'
        }).when('/preference/detail', {
            templateUrl: 'preferenceDetail.html',
            controller: 'PreferenceDetailCtrl as prefDetailCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend)
    {
        setupBackendMock($httpBackend);
    });
})();
