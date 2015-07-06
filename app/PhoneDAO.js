(function () {
    'use strict';

    function PhoneDAO($resource) {
        var api = $resource('/api/phone/', null, {
            query: {isArray: true}
        });

        return {
            query: function (filter) {
                return api.query(filter).$promise;
            }
        };
    }

    angular.module('exerciseApp').factory('PhoneDAO', ['$resource', PhoneDAO]);
})();
