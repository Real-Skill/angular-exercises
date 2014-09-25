(function ()
{
    'use strict';
    function AnnouncementListCtrl(AnnouncementDAO)
    {

    }

    var module = angular.module("exerciseApp");
    module.controller('AnnouncementListCtrl', ['AnnouncementDAO', AnnouncementListCtrl]);

})();
