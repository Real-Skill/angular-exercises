/*global jsonpatch*/
'use strict';

angular.module('taskApp', ['ngRoute', 'ngResource', 'xeditable']).config(function ($routeProvider)
{
    $routeProvider.when('/attraction/:attractionId', {
        templateUrl: 'modules/attraction/attraction.html',
        controller: 'attraction as attraction'
    });
    $routeProvider.when('/note/:noteId', {
        templateUrl: 'modules/note/note.html',
        controller: 'note as note'
    });
    $routeProvider.when('/', {
        templateUrl: 'modules/home/home.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}).run(function (editableOptions)
        {
            editableOptions.theme = 'bs3';
        });
