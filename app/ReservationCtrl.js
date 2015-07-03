(function ()
{
    'use strict';
    function ReservationCtrl()
    {
        this.refreshments = [{value: 1, status: 'yes'}, {value: 2, status: 'no'}];

        this.zones = [{value: 1, color: 'White'}, {value: 2, color: 'Blue'}, {value: 3, color: 'Red'}, {value: 4, color: 'Green'}, {value: 5, color: 'Black'}];

        this.isSummary = false;

        this.showSummary = function ()
        {
            this.isSummary = !this.isSummary;
        };

        this.formData = {};
        this.savedData = {};

        this.save = function ()
        {
            this.savedData = {
                firstName: this.formData.firstName,
                lastName: this.formData.lastName,
                email: this.formData.email,
                refreshment: this.formData.refreshment,
                zone: this.formData.zone,
                vip: this.formData.vip,
                date: this.formData.date,
                comments: this.formData.comments
            };
        };
    }

    var module = angular.module('exerciseApp', []);
    module.controller('ReservationCtrl', [ReservationCtrl]);
})();
