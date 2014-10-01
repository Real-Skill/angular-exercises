(function ()
{
    'use strict';
    function ContactCtrl(ContactDAO)
    {
        var ctrl = this;
        this.selected = undefined;

        this.getContacts = function ()
        {

        };

        this.selectContact = function (item)
        {
            this.selected = item;
        };
    }

    var module = angular.module('exerciseApp');
    module.controller('ContactCtrl', ['ContactDAO', ContactCtrl]);
})();
