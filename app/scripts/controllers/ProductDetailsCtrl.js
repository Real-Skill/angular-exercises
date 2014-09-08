(function () {
    'use strict';
    function ProductDetailsCtrl(ProductDAO, $routeParams, $location) {
        var ctrl = this;
        if (parseInt($routeParams.id, 10)) {
            ProductDAO.get($routeParams.id).then(function(data){
                ctrl.details = data;
            });
         }

        this.saveProduct = function() {
            ProductDAO.save(this.details);
            $location.path('/');
        }
    }

    var module = angular.module("exerciseApp");
    module.controller('ProductDetailsCtrl', ['ProductDAO', '$routeParams', '$location', ProductDetailsCtrl]);
})();
