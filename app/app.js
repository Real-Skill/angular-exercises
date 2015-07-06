(function () {
    'use strict';
    var module = angular.module('exerciseApp', ['ngResource', 'ngRoute']);

    module.directive('currency', ['$filter', function ($filter) {
        return {
            require: 'ngModel',
            link: function (elem, $scope, attrs, ngModel) {
                ngModel.$formatters.push(function (val) {
                    return $filter('currency')(val);
                });
                ngModel.$parsers.push(function (val) {
                    return val.replace(/[\$,]/, '');
                });
            }
        };
    }]);

    module.config(function ($provide, $routeProvider) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.when('/', {
            templateUrl: 'views/productList.html',
            controller: 'ProductListCtrl as productList'
        });
        $routeProvider.when('/details/:id', {
            templateUrl: 'views/productDetails.html',
            controller: 'ProductDetailsCtrl as productDetails'
        });
        $routeProvider.when('/new', {
            templateUrl: 'views/productNew.html',
            controller: 'ProductNewCtrl as productNew'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend) {
        var sequence = 1;
        var products = {};
        [
            {   id: sequence++,
                product: 'Rumianek',
                price: '200'
            },
            {   id: sequence++,
                product: 'JSON prawde Ci powie',
                price: '100'
            }
        ].every(function (value) {
                products[value.id] = value;
                return true;
            });


    });
})();
