(function ()
{
    'use strict';

    function CandyDAO($resource)
    {
        var api = $resource('/api/candy/:a', null, {
            query: {
                isArray: false
            }
        });

        return {


        };
    }

    angular.module('app').factory('CandyDAO', ['$resource', CandyDAO]);
})();
