var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) 
    {
    $http.get('https://data.hartford.gov/api/views/889t-nwfu/rows.json?accessType=DOWNLOAD')
        .success(function (result) 
            {
            $scope.complaints = result;
            console.log("Hooray!");
            })
        .error(function (data, status) 
            {
            console.log("Oops...");
            });  
    }]);