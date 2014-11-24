(function ()
{
    'use strict';
    var module = angular.module("exerciseApp", ['ngResource', 'ngRoute']);

    module.config(function ($provide, $routeProvider)
    {

        $routeProvider.when('/', {
            templateUrl: 'view.html',
            controller: 'OnCtrl as on'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
})();
