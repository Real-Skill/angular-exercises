(function ()
{
    'use strict';

    function PostDAO($resource)
    {
        var api = $resource('/api/post', null, {});
        return {
            query: function ()
            {
                return api.query().$promise;
            }
        };
    }

    angular.module('app').factory('PostDAO', ['$resource', PostDAO]);
})();
