(function () {
    'use strict';

    function ContactDAO($resource) {
        var api = $resource('/api/contact/', null, {
            query: {method: 'GET', isArray: true }
        });
        return {
            query: function () {
                return api.query().$promise;
            }
        };
    }

    angular.module('exerciseApp').factory('ContactDAO', ['$resource', ContactDAO]);
})();
