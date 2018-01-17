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
        .when('/input_temp', {
            templateUrl: 'input_temp/input_temp.html',
            controller: 'inputTempController'
        })
        .when('/input_heart', {
            templateUrl: 'input_heart/input_heart.html',
            controller: 'inputHeartController'
        })
        .otherwise({redirectTo: '/account_settings'});
    }])
