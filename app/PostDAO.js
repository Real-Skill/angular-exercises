(function () {
    'use strict';

    function PostDAO($resource) {
        var api = $resource('/api/post/:a', null, {

        });
        return {
            query: function () {
                return api.query().$promise;
            },
            get: function (id){
                return api.get({a: id}).$promise;
            }
        };
    }

    angular.module('exerciseApp').factory('PostDAO', ['$resource', PostDAO]);
})();
