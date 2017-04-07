(function ()
{
    'use strict';
    function HomeCtrl()
    {
        var ctrl = this;
        ctrl.languages = [
            {value: 'pl', name: 'polski'},
            {value: 'en', name: 'angielski'},
            {value: 'de', name: 'niemiecki'}
        ];
    }

    angular.module('app').controller('HomeCtrl', [HomeCtrl]);
})();
