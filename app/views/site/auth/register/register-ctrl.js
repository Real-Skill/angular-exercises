'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:RegisterController
 * @description
 * # RegisterCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('RegisterController', ['UserService', function (UserService)
{
    this.register = function () {
        UserService.register(this.login, this.password);
    }
}]);
