'use strict';

app.controller('signupController', function ($scope, dataService,toastr) {
    $scope.obj = {};
    $scope.signUp = function () {
        console.log($scope.obj)
        dataService.signup($scope.obj)
            .then((result) => {
                console.log(result);
                if(result.data.responseCode==400 ||result.data.responseCode=='400' || result.data.responseCode==500)
                toastr.error(result.data.responseMessage);
                else
                toastr.success(result.data.responseMessage)

            })
            .catch((failed) => {
                console.log(failed);
                toastr.error(result.data.responseMessage);
            })
    }
});