(function () {
    'use strict';

    angular.module('treeview.demo')
        .controller('LoginController',
            ['$scope', '$http', '$location', LoginController]);

    function LoginController($scope, $http, $location) {
        $scope.login = function () {
            $scope.logged_user = $scope.user.username;
            console.log($scope.user);
            $http.post('/auth_api/login/', $scope.user)
                .then(function () {
                        $location.url('#/')
                    },
                    function () {
                        $scope.login_error = "Invalid username/password"
                    });
        };
    }
})();