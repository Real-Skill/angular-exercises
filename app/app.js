(function ()
{
    'use strict';
    angular.module('exerciseApp', ['ngResource', 'ngRoute']).config(function ($provide, $routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'view.html',
            controller: 'ServerCtrl as server'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
})();
