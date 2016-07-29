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
                "invoiceModule",
//                "grnModule",
                "customerPaymentModule",
                //master data
                "productModule",
                "customerModule",
                "userRegistrationModule"
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

                .when("/grn", {
                    controller: "grnController",
                    templateUrl: "app/transaction/grn/grn.html"
                })
                
                 .when("/customerPayment", {
                    controller: "customerPaymentController",
                    templateUrl: "app/transaction/customer-payment/customer-payment.html"
                })
                
                .when("/product", {
                    controller: "productController",
                    templateUrl: "app/master-data/product/product.html"
                })

                .when("/customer", {
                    controller: "customerController",
                    templateUrl: "app/master-data/customer/customer.html"
                })
                .when("/userRegistration", {
                    controller: "userRegistrationController",
                    templateUrl: "app/master-data/user-registration/user-registration.html"
                })



                .otherwise({redirectTo: "/"});
    });
}());