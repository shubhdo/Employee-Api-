'use strict';

app.controller('profileController', function ($scope,dataService,toastr) {
    $scope.obj = {};
    console.log("user",localStorage.getItem('userId'))
    $scope.userId=localStorage.getItem('userId')

    $scope.editProfle = function() {
        console.log($scope.obj);
        dataService.editProfile($scope.obj)
        .then((result)=> {
            console.log(result);
        })
        .catch((failed)=> {
            console.log(failed);
        })
    }
    $scope.imageUpload=function (element) {
        console.log("running")
        console.log("element====>",element)
        var reader=new FileReader();
        reader.readAsDataURL(element.files[0]);
        reader.onload = $scope.imageIsLoaded;
    }

    $scope.imageIsLoaded=function (e) {
        $scope.obj.image=e.target.result;
        document.getElementById('OpenImgUpload').src=$scope.obj.image
        console.log("image result====>",$scope.obj.image);
    }
});

