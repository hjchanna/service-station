(function () {
    //angular module
    var indexModule = angular.module("index",
            [
                "ngRoute",
                //application custom module import
                "home",
                "myTest",
                //transactions
                "jobCardModule",
                //master data
                "productModule",
                "customerModule"
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
                .when("/invoice", {
                    controller: "invoiceController",
                    templateUrl: "app/transaction/invoice/invoice.html"

                })
                .when("/product", {
                    controller: "productController",
                    templateUrl: "app/master-data/product/product.html"
                })
                .when("/customer", {
                    controller: "customerController",
                    templateUrl: "app/master-data/customer/customer.html"
                })
                
                .otherwise({redirectTo: "/"});
    });
}());