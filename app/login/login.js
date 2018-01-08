'use strict';

app.controller('loginController',function ($scope,dataService,toastr) {
    $scope.obj={}
    $scope.Login = function () {
        console.log($scope.obj)
        dataService.login($scope.obj)
            .then((result) => {
                console.log(result);
                if(result.data.responseCode==400 ||result.data.responseCode=='400'|| result.data.responseCode==500)
                toastr.error(result.data.responseMessage);
                else {
                toastr.success(result.data.responseMessage)
                localStorage.setItem('userId',result.data.result._id)
                }
            })
            .catch((failed) => {
                console.log(failed);
                toastr.error(result.data.responseMessage);

            })
    }
});