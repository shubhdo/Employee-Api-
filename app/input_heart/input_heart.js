'use strict';

app.controller('inputHeartController',function ($scope,dataService,toastr) {
    $scope.obj={}
    $scope.obj={}
    $scope.input_heart = function() {
        console.log($scope.obj);
        dataService.addHeartRate($scope.obj)
        .then((result)=> {
            console.log(result);
        })
        .catch((failed)=> {
            console.log(failed);
        })
    }
});