(function () {
    //angular module
    var indexModule = angular.module("index",
            [
                "ngRoute",
                //application custom module import
                "home",
                "myTest",
                //transactions
                "jobCardModule"
                
            ]);

    //controller
    var indexController = function ($scope) {
        $scope.sayGoodBye = function () {
            console.log("good byeee");
        };
    };
    indexModule.controller("indexController", indexController);

    //route config
    indexModule.config(function ($routeProvider) {
        $routeProvider
                .when("/", {
                    controller: "",
                    templateUrl: "app/home/home.html"
                })
                .when("/test", {
                    controller: "testController",
                    templateUrl: "app/test/test.html"
                })
                .when("/job-card", {
                    controller: "jobCardController",
                    templateUrl: "app/transaction/job-card/job-card.html"

                })
                .otherwise({redirectTo: "/"});

    });
}());