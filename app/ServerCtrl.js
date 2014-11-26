(function ()
{
    'use strict';

    function ServerCtrl($scope, $timeout)
    {
        $scope.$root.$on('event:message-server', function (event, message)
        {
            $timeout(function(){
                $scope.$root.$broadcast('event:message-client', message)
            }, 500);
        });
    }

    var module = angular.module('exerciseApp');
    module.controller('ServerCtrl', ['$scope', '$timeout' , ServerCtrl]);
})();