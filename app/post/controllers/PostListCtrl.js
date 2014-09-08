(function () {
    'use strict';
    function PostListCtrl(PostDAO) {
        var ctrl = this;

        var refreshPost = function() {
            PostDAO.query().then(function(data){
                ctrl.posts = data;
            });
        };

        this.deletePost = function(id) {
            PostDAO.remove(id).then(refreshPost);
        };

        refreshPost();
    }

    var module = angular.module("exerciseApp");
    module.controller('PostListCtrl', ['PostDAO', PostListCtrl]);
})();
