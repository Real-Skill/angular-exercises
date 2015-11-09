(function ()
{
    'use strict';

    function ServerCtrl($scope, $timeout)
    {
        $scope.$on('event:message-server', function (event, message)
        {
            $timeout(function(){
                $scope.$broadcast('event:message-client', message);
            }, 500);
        });
    }

    angular.module('exerciseApp').controller('ServerCtrl', ['$scope', '$timeout' , ServerCtrl]);
})();
