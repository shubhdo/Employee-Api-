'use strict';

app.controller('inputTempController',function ($scope,dataService,toastr) {
    $scope.obj={}
    $scope.input_temp = function() {
        console.log($scope.obj);
        dataService.addTemperature($scope.obj)
        .then((result)=> {
            console.log(result);
        })
        .catch((failed)=> {
            console.log(failed);
        })
    }
});