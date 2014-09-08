(function () {
    'use strict';
    function ProductListCtrl(ProductDAO) {
        var ctrl = this;

        var refreshProduct = function(){
            ProductDAO.query().then(function(data){
                ctrl.products = data;
            });
        };

        this.deleteProduct = function(id) {
            ProductDAO.remove(id).then(refreshProduct);
        };

        refreshProduct();
    }

    var module = angular.module("exerciseApp");
    module.controller('ProductListCtrl', ['ProductDAO', ProductListCtrl]);
})();
