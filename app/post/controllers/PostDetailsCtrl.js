(function () {
    'use strict';
    function PostDetailsCtrl(PostDAO, $routeParams, $location) {
        var ctrl = this;
        if (parseInt($routeParams.id, 10)) {
            PostDAO.get($routeParams.id).then(function(data){
                ctrl.details = data;
            });
         }

        this.savePost = function() {
            PostDAO.save(this.details);
            $location.path('/');
        };
    }

    var module = angular.module('exerciseApp');
    module.controller('PostDetailsCtrl', ['PostDAO', '$routeParams', '$location', PostDetailsCtrl]);
})();
