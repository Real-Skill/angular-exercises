(function ()
{
    'use strict';
    function MainCtrl($modal)
    {
        this.openDialog = function ()
        {
            var dialog = $modal.open({
                templateUrl: 'dialog.html',
                controller: 'DialogCtrl as dialog'
            });
        }
    }

    var module = angular.module("exerciseApp", ['ui.bootstrap']);
    module.controller('MainCtrl', ['$modal', MainCtrl]);
})();
