(function () {
    'use strict';

    function PostDAO($resource) {
        var api = $resource('/api/post/:a', null, {
            query: {isArray: false}
        });
        return {
            query: function (filter) {
                return api.query(filter).$promise;
            },
            get: function (id){
                return api.get({a: id}).$promise;
            },
            save: function(post) {
                return api.save(post).$promise;
            },
            remove: function(id){
                return api.remove({a: id}).$promise;
            }

        };
    }

    angular.module('exerciseApp').factory('PostDAO', ['$resource', PostDAO]);
})();
