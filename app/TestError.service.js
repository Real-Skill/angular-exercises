(function () {
    'use strict';
    function TestErrorService() {
        function TestError(user) {
            if (null == user.id) {
                throw new Error('user must have id');
            } else {
                return user;
            }
        }

        return {
            error: TestError
        };
    }

    angular.module('exerciseApp').factory('TestErrorService', [TestErrorService]);
})();
