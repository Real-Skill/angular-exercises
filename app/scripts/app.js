'use strict';

/**
 * @ngdoc overview
 * @name ngselect2App
 * @description
 * # ngselect2App
 *
 * Main module of the application.
 */

angular.module('ngselect2App', ['ngRoute', 'ngResource', 'ui.select2'])
    .config(function ($routeProvider) {
    $routeProvider
      .when('/ngselect2', {
        templateUrl: 'views/ngselect2.html',
        controller: 'Ngselect2Ctrl as ngselect2'
      })
      .otherwise({
        redirectTo: '/ngselect2'
      });
  });
