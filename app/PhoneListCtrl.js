(function () {
    'use strict';
    function PhoneListCtrl(PhoneDAO) {
        var ctrl = this;
        this.filter = {
            maxResults: 10,
            query: null
        };

        this.selectedPhones = null;
        this.selectedPhonesB = null;

        function getPhoneList(query) {

        }

    }

    var module = angular.module('exerciseApp');
    module.controller('PhoneListCtrl', ['PhoneDAO', PhoneListCtrl]);
})();
