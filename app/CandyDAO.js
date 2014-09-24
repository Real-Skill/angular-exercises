(function ()
{
    'use strict';

    function CandyDAO($resource)
    {
        var api = $resource('/api/candy/:a', null, {

        });
        return {

        };
    }

    angular.module('exerciseApp').factory('CandyDAO', ['$resource', CandyDAO]);
})();
