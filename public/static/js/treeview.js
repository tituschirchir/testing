(function () {
    'use strict';
    angular.module('treeview.demo', ['ngRoute'])
        .controller('treeviewController', ['$scope', '$http', treeviewController]);

    function treeviewController($scope, $http) {
        $scope.logged_user="";
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };
            $http.post('/treeview/cards/', card)
                .then(function (response) {
                        console.log(list.cards);
                        list.cards.push(response.data);
                    },
                    function () {
                        alert('Error saving')
                    });
        };
        $scope.logout = function () {
            $http.get("/auth_api/logout");
        };

        $scope.data = [];
        $http.get('/treeview/lists/').then(function (response) {
            $scope.data = response.data;
        });
        $scope.sortBy = 'story_points';
        $scope.reverse = true;
        $scope.showFilters = false;
    }
}());