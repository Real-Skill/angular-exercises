(function () {
    'use strict';
    function HomeCtrl() {
        var ctrl = this;
        ctrl.languages = [
            {value: 'pl', name: 'polski'},
            {value: 'en', name: 'angielski'},
            {value: 'de', name: 'niemiecki'}
        ];

    }
    var module = angular.module('exerciseApp',[]);
    module.controller('HomeCtrl', [HomeCtrl]);
})();
