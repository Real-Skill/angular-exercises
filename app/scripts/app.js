'use strict';

/**
 * @ngdoc overview
 * @name itcApp
 * @description
 * # itcApp
 *
 * Main module of the application.
 */
angular.module('itcApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/typeahead', {
        templateUrl: 'views/typeahead.html',
        controller: 'TypeaheadCtrl as typeahead'
      })
      .otherwise({
        redirectTo: '/typeahead'
      });
  });