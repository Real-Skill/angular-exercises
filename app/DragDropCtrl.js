(function () {
    'use strict';
    function DragDropCtrl() {
        var ctrl = this;
        ctrl.container1 = [];
        ctrl.container2 = [];

        this.buttons = [
            {'title': 'One', 'drag': true},
            {'title': 'Two', 'drag': true},
            {'title': 'Three', 'drag': true},
            {'title': 'Four', 'drag': true},
            {'title': 'Five', 'drag': true},
            {'title': 'Six', 'drag': true}
        ];

    }

    var module = angular.module('exerciseApp', []);
    module.controller('DragDropCtrl', [DragDropCtrl]);
})();
