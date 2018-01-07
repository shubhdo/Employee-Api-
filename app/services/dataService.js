'use strict';

angular.module('myApp').service('dataService', function ($q, $http) {

    var self = this;
    self.signup = function (data) {
        return self.httpData('POST','',data);
    }

    self.login = function (data) {
        return self.httpData('POST','',data);
    }

    self.httpData = function (method, url, data) {
        return $q(function (resolve, reject) {
            $http({
                method: method,
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(function successCallback(response) {
                console.log(response);
                resolve(response)
            }, function errorCallback(response) {
                console.log(response)
                reject(response)
            });

        })
    }
});
