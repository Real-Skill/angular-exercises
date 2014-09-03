'use strict';

/**
 * @ngdoc overview
 * @name ngflowApp
 * @description
 * # ngflowApp
 *
 * Main module of the application.
 */
angular.module('ngflowApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'uploadCtrl as upload'
      })
      .otherwise({
        redirectTo: '/upload'
      });
  });
