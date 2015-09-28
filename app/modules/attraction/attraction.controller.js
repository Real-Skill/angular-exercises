angular.module('taskApp').controller('attraction', function ($http, $interval, $routeParams, $scope, api, patchModel)
{
    'use strict';

    var ctrl = this;

    var images = ['https://www.npmjs.com/static/images/wombat-by-night.svg'];
    $interval(function ()
    {
        ctrl.item.photo = {src: images[Math.round(Math.random() * (images.length - 1))]};
    }, 1000);

    $http.get(api.attraction + '/' + $routeParams.attractionId).then(function (result)
    {
        ctrl.item = result.data;

        patchModel(ctrl.item, $scope).api(api.attraction).ignore(['/photo']);
    });
});
