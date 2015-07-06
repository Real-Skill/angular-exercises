(function () {
    'use strict';

    function ProductDAO($resource) {
        var api = $resource('/api/product/:a', null, {
            query: {method: 'GET', isArray: false},
            add: {method: 'PUT', params: {a: 'new'}, isArray: false}
        });
        return {
            query: function () {
                return api.query().$promise;
            },
            get: function (id) {
                return api.get({a: id}).$promise;
            },
            save: function (product) {
                return api.save(product).$promise;
            },
            remove: function (id) {
                return api.remove({a: id}).$promise;
            },
            add: function (product) {
                return api.add(product).$promise;
            }

        };
    }

    angular.module('exerciseApp').factory('ProductDAO', ['$resource', ProductDAO]);
})();
