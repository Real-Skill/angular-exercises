(function ()
{
    'use strict';
    function DialogCtrl($modalInstance)
    {
        this.ok = function ()
        {
            $modalInstance.close(true);
        };

        this.cancel = function ()
        {
            $modalInstance.dismiss(false);
        };
    }

    var module = angular.module("exerciseApp");
    module.controller('DialogCtrl', ['$scope', '$modalInstance', DialogCtrl]);
})();
