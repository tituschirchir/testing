(function () {
    'use strict';
    angular.module('treeview.demo', ['chart.js', 'ui.bootstrap'])
        .directive('navigator', NavigationDirective)
        .directive('portfolio', PortfolioDirective)
        .directive('service', ServiceDirective)
        .directive('footerDirective', FooterDirective)
        .directive('carouselDirective', FinancialEngineerDirective)
        .directive('pricingDirective', PricingDirective)
        .directive('contactDirective', ContactDirective)
        .directive('about', AboutDirective);

    function FileController($scope, $http) {

        $scope.choosePage = function (pageName) {
            $scope.reset();
            if (pageName === 'about') {
                $scope.aboutShow = !$scope.aboutShow
            }
            if (pageName === 'portfolio') {
                $scope.portfolioShow = !$scope.portfolioShow
            }
            if (pageName === 'carousel') {
                $scope.carouselShow = !$scope.carouselShow
            }
            if (pageName === 'pricing') {
                $scope.pricingShow = !$scope.pricingShow
            }
            if (pageName === 'contact') {
                $scope.contactShow = !$scope.contactShow
            }
        };

        $scope.reset = function () {
            $scope.aboutShow = false;
            $scope.portfolioShow = false;
            $scope.carouselShow = false;
            $scope.contactShow = false;
            $scope.pricingShow = false;
        };
        $scope.getTotalTrees = function () {
            var total = 0;
            for (var i = 0; i < $scope.farmers.length; i++) {
                var farmer = $scope.farmers[i];
                total += farmer.tree_count;
            }
            return total;
        };
        $scope.print = function (t) {
            console.log(t)
        };
        $scope.tree_cost = function (count) {
            $http.get('/getcost?trees=' + count).then(function (response) {
                $scope.num_trees = response.data.sum;
            });
        };
        $scope.init = function () {
            $scope.developer = "Titus";
            $scope.beloved = "Coding"
            $scope.myInterval = 6000;
            $scope.farmers = [];
            $scope.one_tree_cost = 0;
            $http.get('/getcost?trees=1').then(function (response) {
                $scope.one_tree_cost = response.data.sum;
            });
            $scope.trees = [];
            $scope.aboutShow = true;
            $scope.portfolioShow = false;
            $scope.carouselShow = false;
            $scope.contactShow = false;
            $scope.pricingShow = false;
            $scope.farmers = [];
            $scope.labels = [];
            $scope.data = [];
            $scope.mathRes = [];
            var farmer_loc = '/vtos/farmers/';
            var tree_loc = '/vtos/trees/';
            $http.get(farmer_loc).then(function (response) {
                $scope.farmers = response.data;
                for (var i = 0; i < response.data.length; i++) {
                    var farmer = response.data[i];
                    $scope.labels.push(farmer.first_name + " " + farmer.last_name);
                    $scope.data.push(farmer.tree_count);
                }
            });
            $http.get(tree_loc).then(function (response) {
                $scope.trees = response.data;
            });
        };
    }

    function NavigationDirective() {
        return {
            templateUrl: '/vto/public/static/html/navigator.html',
            restrict: 'E',
            controller: ['$scope', '$http', FileController]
        };
    }

    function PortfolioDirective() {
        return {
            templateUrl: '/vto/public/static/html/portfolio.html',
            restrict: 'E',
            controller: ['$scope', '$http', FileController]
        };
    }

    function ServiceDirective() {
        return {
            templateUrl: '/vto/public/static/html/service.html',
            restrict: 'E',
            controller: ['$scope', '$http', FileController]
        };
    }

    function AboutDirective() {
        return {
            templateUrl: '/vto/public/static/html/about.html',
            restrict: 'E',
            controller: ['$scope', '$http', FileController]
        };
    }

    function FooterDirective() {
        return {
            templateUrl: '/vto/public/static/html/footer.html',
            restrict: 'E',
            controller: ['$scope', '$http', FileController]
        };
    }

    function FinancialEngineerDirective() {
        return {
            templateUrl: '/vto/public/static/html/financialengineer.html',
            restrict: 'E',
            controller: ['$scope', '$http', FileController]
        };
    }

    function PricingDirective() {
        return {
            templateUrl: '/vto/public/static/html/pricing.html',
            restrict: 'E',
            controller: ['$scope', '$http', FileController]
        };
    }

    function ContactDirective() {
        return {
            templateUrl: '/vto/public/static/html/contact.html',
            restrict: 'E',
            controller: ['$scope', '$http', FileController]
        };
    }
})();
