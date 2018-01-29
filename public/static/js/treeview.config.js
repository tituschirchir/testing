(function () {
    'use strict';

    angular.module('treeview.demo', ['ui.bootstrap', 'ngRoute'])
        .config(['$routeProvider', config])
        .run(['$http', run]);
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/static/html/contact.html',
                controller: 'FileController'
            })
            .when('/farmers', {
                templateUrl: '/static/html/farmers.html',
                controller: 'FarmerController'
            })
            .when('/login', {
                templateUrl: '/static/html/login.html',
                controller: 'LoginController'
            })
            .when('/admin', {
                templateUrl: '/admin',
                controller: 'LoginController'
            })
            .otherwise('/');
    }
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }

})();