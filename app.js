var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function ($scope, $http)
    {
        $http.get('http://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=c9796fd40fb6ade46c14b7f31e958378%3A1%3A74022479
')
            .success(function (result) {
                var counter = 0;
                $scope.complaints = result;
                console.log("Hooray!");
                $scope.causeOfDeath = [];



                for (var i = 0; i < 22; i++) {
                    var disease = result.data[i][11];
                    //$scope.causeOfDeath.push(disease.substring(0,4));
                    if ($scope.causeOfDeath.push(disease.substring(0, 4)) === "INFL") {
                        counter ++;
                    }

                }
            console.log(counter);
            })
            .error(function (data, status) {
                console.log("Oops...");
            });
    }]);