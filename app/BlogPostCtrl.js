(function () {
    'use strict';
    function BlogPostCtrl(PostDAO) {

    }

    var module = angular.module("exerciseApp");
    module.controller('BlogPostCtrl', ['PostDAO',BlogPostCtrl]);
})();
