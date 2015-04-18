'use strict';

angular.module('taskApp').controller('note', function ($http, $routeParams, $scope, api, patchModel) {

  var ctrl = this;
  $http.get(api.note + '/' + $routeParams.noteId).then(function (result) {
    ctrl.item = result.data;
    patchModel(ctrl.item, $scope).api(api.note);
  })
});
