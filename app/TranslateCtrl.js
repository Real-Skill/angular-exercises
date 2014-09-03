(function () {
    'use strict';
    function TranslateCtrl() {
        var ctrl = this;
        ctrl.languages = [
            {value: 'pl', name: 'polski'},
            {value: 'en', name: 'angielski'},
            {value: 'de', name: 'niemiecki'}
        ];

    }
    var module = angular.module('exerciseApp',[]);
    module.controller('TranslateCtrl', [TranslateCtrl]);
})();
