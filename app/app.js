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
        .when('/profile', {
            templateUrl: 'profile/profile.html',
            controller: 'profileController'
        })
        .when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'signupController'
        })
        .when('/account_settings', {
            templateUrl: 'account_settings/account_settings.html',
            controller: 'accountController'
        })
        .otherwise({redirectTo: '/account_settings'});
    }])
