var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http)
    {
        $http.get('https://api.sandbox.amadeus.com/v1.2/travel-intelligence/top-destinations?apikey=l912cgcrdidJdVHRdzD9Sp4JmUw7jDta&period=2015-09&origin=BOS')
            .success(function (result) {
                var counter = 0;
                $scope.complaints = result;
                console.log("Hooray!");
                $scope.causeOfDeath = [];



                for (var i = 0; i < 22; i++) {
                    var disease = result.data[i][11];
                    //$scope.causeOfDeath.push(disease.substring(0,4));
                    if ($scope.causeOfDeath.push(disease.substring(0, 4)) === "INFL") {
                        counter++;
                    }

                }
                console.log(counter);
            })
            .error(function (data, status) {
                console.log("Oops...");
            });
                }]);
myApp.controller('secondController', ['$scope', '$http', function ($scope, $http) 
    {
        $http.get('https://api.sandbox.amadeus.com/v1.2/trains/schedule-search?apikey=l912cgcrdidJdVHRdzD9Sp4JmUw7jDta&origin=7171801&departure_date=2016-03-14')
            .success(function(result)){
                
                     
                     }
                 }])