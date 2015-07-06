(function () {
    'use strict';
    var module = angular.module('exerciseApp', ['ngRoute', 'ngResource', 'ui.select2']);

    module.config(function ($provide, $routeProvider) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);

        $routeProvider.when('/', {
            templateUrl: 'phone.html',
            controller: 'PhoneListCtrl as phoneList'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });

    module.run(function ($httpBackend) {
        var phoneSeq = 1;
        var phones = {};
        [
            {id: phoneSeq++, name: 'Samsung Galaxy Alpha', price: '1000'},
            {id: phoneSeq++, name: 'Sony Xperia Z3 Compact', price: '2000'},
            {id: phoneSeq++, name: 'Nokia Lumia 930', price: '3000'},
            {id: phoneSeq++, name: 'Samsung Galaxy Note 4', price: '1000'},
            {id: phoneSeq++, name: 'LG G3', price: '2000'},
            {id: phoneSeq++, name: 'HTC One M8', price: '3000'},
            {id: phoneSeq++, name: 'Apple iPhone 6', price: '4000'},
            {id: phoneSeq++, name: 'Apple iPhone 6 Plus', price: '5000'},
            {id: phoneSeq++, name: 'LG Nexus 5', price: '2000'},
            {id: phoneSeq++, name: 'OnePlus One', price: '2000'},
            {id: phoneSeq++, name: 'Nokia 35101', price: '3000'}
        ].every(function (value) {
                phones[value.id] = value;
                return true;
            });

        function parseQueryString(url) {
            var args = url.split('?');
            args = args[1] || args[0];
            args = args.split('&');
            var result = {};
            var arg;
            for (var i = 0; i < args.length; i++) {
                arg = decodeURI(args[i]);

                if (arg.indexOf('=') == -1) {
                    result[arg.trim()] = true;
                } else {
                    var kvp = arg.split('=');
                    result[kvp[0].trim()] = kvp[1].trim();
                }
            }
            return result;
        }

        $httpBackend.whenGET(/\/api\/phone(\?.*)$/).respond(function (method, url) {

            var match = /\/api\/phone(\?.*)/.exec(url);
            var queryParams = parseQueryString(match[1]);
            var query = queryParams.query || '';
            console.log(queryParams);
            var phoneList = [];

            angular.forEach(phones, function (phone) {
                if (phone && ( !query || -1 < phone.name.toLowerCase().indexOf(query))) {
                    phoneList.push(phone);
                }
            });
            return [200, phoneList];
        });

        $httpBackend.whenGET(/.*\.html/).passThrough();

    });
})();
