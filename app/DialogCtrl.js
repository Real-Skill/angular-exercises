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

    angular.module('exerciseApp').controller('DialogCtrl', ['$modalInstance', DialogCtrl]);
})();
