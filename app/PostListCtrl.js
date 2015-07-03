(function ()
{
    'use strict';
    function PostListCtrl(PostDAO)
    {
        var ctrl = this;
        PostDAO.query().then(function (data)
        {
            ctrl.posts = data;
        });
    }

    var module = angular.module('exerciseApp');
    module.controller('PostListCtrl', ['PostDAO', PostListCtrl]);
})();
