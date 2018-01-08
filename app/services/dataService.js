'use strict';

app.service('dataService', function ($q, $http) {
    var baseUrl='http://localhost:3001/api/v1/user/'
    var userId=localStorage.getItem('userId');
    var self = this;
    self.signup = function (data) {
        return self.httpData('POST',baseUrl+"signup",data);
    }

    self.login = function (data) {
        return self.httpData('POST',baseUrl+'login',data);
    }

    self.editProfile = function (data) {
        return self.httpData('POST',baseUrl+'editProfile/'+userId,data)
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
