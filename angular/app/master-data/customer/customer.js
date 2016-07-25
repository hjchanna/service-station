(function () {
    var customerModule = angular.module("customerModule", []);

    var customerController = function ($scope) {
        $scope.customers = null;



//        Action
        $scope.getCustomers = function () {
            if (!$scope.customers) {
                $scope.customers = [{
                        "indexNo": "552",
                        "nic": "234232433V",
                        "name": "kaza",
                        "mobile": "4534543",
                        "city": "plolnnaruwa",
                        "address": "#12,\nkaluthara.",
                        "email": "dsfs.sd@gmail.com",
                        "creditLimitAmount": 1200.00,
                        "creditLimitDays": 45,
                        "backlist": true,
                        "reason": "payment not conpleted",
                        "telephone1": "2352352",
                        "telephone2": "9696988",
                        "telephone3": "34534534",
                        "fax": 669699999,
                        "cashCustomer": false
                    }];
            }

            return $scope.customers;
        };
        $scope.saveCustomer = function (){
            
        };
    };
    customerModule.controller("customerController", customerController);
}());
