(function ()
{
    'use strict';

    function ClientCtrl($scope)
    {
        var ctrl = this;

        this.sender = null;
        this.message = '';
        this.conversation = [];

        this.sendMessage = function () {
            $scope.$emit('event:message-server', {sender: ctrl.sender, message: ctrl.message});
            ctrl.message = '';
        };

        $scope.$on('event:message-client', function (event, message)
        {
            ctrl.conversation.push(message);
        });
    }

    angular.module('exerciseApp').controller('ClientCtrl', ['$scope' , ClientCtrl]);
})();
