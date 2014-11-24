(function ()
{
    'use strict';

    function BroadcastCtrl($scope, $timeout)
    {
        var ctrl = this;
        this.id = 0;

        this.sendRequest = function ()
        {
            ctrl.id += 1;
            $scope.$root.$broadcast('event:very-important-event', ctrl.id)
        };

        $scope.$root.$on('event:very-important-answer', function (event, number)
        {
            $timeout(function(){
                $scope.table.push({id: number, name: 'New Answer: very-important-answer!'});
            }, 500);
        });
    }

    var module = angular.module("exerciseApp");
    module.controller('BroadcastCtrl', ['$scope', '$timeout', BroadcastCtrl]);
})();
