(function () {
    'use strict';
    function ProductNewCtrl(ProductDAO, $location) {
        var ctrl = this;

        this.addProduct = function() {
            ProductDAO.add(ctrl.details);
            $location.path('/');
        }
    }

    var module = angular.module("exerciseApp");
    module.controller('ProductNewCtrl', ['ProductDAO', '$location', ProductNewCtrl]);
})();
