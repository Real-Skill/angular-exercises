(function ()
{
    'use strict';

    function MainCtrl($modal)
    {
        this.openDialog = function ()
        {
            $modal.open({
                templateUrl: 'dialog.html',
                controller: 'DialogCtrl as dialog'
            });
        };
    }

    angular.module('exerciseApp', ['ui.bootstrap']).controller('MainCtrl', ['$modal', MainCtrl]);
})();
