(function () {
    'use strict';
    angular.module('treeview.demo')
        .controller('FarmerController', ['$scope', '$http', FarmerController]);

    function FarmerController($scope, $http) {
        $scope.farmers = [];
        $scope.selected = {};
        var farmer_loc = '/treeview/farmers/';
        $http.get(farmer_loc).then(function (response) {
            $scope.farmers = response.data;
        });
        $scope.add_farmer = function (farmer_) {
            $http.post(farmer_loc, farmer_)
                .then(function (response) {
                    $scope.farmers.push(response.data)
                });
        };
        $scope.delete_farmer = function (id) {
            var url = farmer_loc + $scope.farmers[id].id + '/';
            $http.delete(url).then(
                function () {
                    $scope.farmers.splice(id, 1);
                }
            );
        };
        $scope.edit_farmer = function (id) {
            $scope.farmer_ = $scope.farmers[id];
            $scope.delete_farmer(id);
        }
    }
})();