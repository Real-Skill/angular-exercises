(function ()
{
    'use strict';

    function OnCtrl($scope)
    {
        $scope.table = [];

        $scope.$on('event:very-important-event', function (event, number)
        {
            $scope.table.push({id: number, name: 'New Event: very-important-event!'});
            $scope.$emit('event:very-important-answer', number);
        });
    }

    var module = angular.module("exerciseApp");
    module.controller('OnCtrl', ['$scope' , OnCtrl]);
})();
