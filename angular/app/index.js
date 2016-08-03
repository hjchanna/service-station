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
                "grnModule",
                "customerPaymentModule",
                "vehicleServiceModule",
                "stockTransferModule",
                "stockAdjustmentModule",
                //master data
                "productModule",
                "customerModule",
                "userRegistrationModule",
                "branchRegistrationModule",
                "userPrivilegesModule",
                //accounts
                "journalModule",
                //dashboards
                "copModule",
                //account
//                "voucherModule",
                
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
                .when("/vehicleService", {
                    controller: "vehicleServiceController",
                    templateUrl: "app/transaction/vehicle-service/vehicle-service.html"
                })

                .when("/stockTransfer", {
                    controller: "stockTransferController",
                    templateUrl: "app/transaction/stock-transfer/stock-transfer.html"
                })

                .when("/stockAdjustment", {
                    controller: "stockAdjustmentController",
                    templateUrl: "app/transaction/stock-adjustmant/stock-adjustmant.html"
                })

                .when("/product", {
                    controller: "productController",
                    templateUrl: "app/master-data/product/product.html"
                })

                .when("/customer", {
                    controller: "customerController",
                    templateUrl: "app/master-data/customer/customer.html"
                })

                .when("/dashboard", {
                    controller: "copController",
                    templateUrl: "app/dashboard/cop/cop.html"
                })

                .when("/userRegistration", {
                    controller: "userRegistrationController",
                    templateUrl: "app/master-data/user-registration/user-registration.html"
                })

                .when("/branchRegistration", {
                    controller: "branchRegistrationController",
                    templateUrl: "app/master-data/branch-registration/branch-registration.html"
                })

                .when("/userPrivileges", {
                    controller: "userPrivilegesController",
                    templateUrl: "app/master-data/user-privileges/user-privileges.html"
                })
                
                .when("/voucher", {
                    controller: "voucherController",
                    templateUrl: "app/accounts/voucher/voucher.html"
                })
                
                .when("/journal", {
                    controller: "journalController",
                    templateUrl: "app/accounts/journal/journal.html"
                })

                .otherwise({redirectTo: "/"});
    });
}());
