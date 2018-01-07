'use strict';

// Declare app level module which depends on views, and components
var app= angular.module('myApp', ['ngRoute','toastr'])

    app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!' +
            '');

        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginController'
        }).when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        })
        .when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'signupController'
        })
        .otherwise({redirectTo: '/signup'});
    }])
