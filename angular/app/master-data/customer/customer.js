(function () {
    var customerModule = angular.module("customerModule", ['ui-notification']);

    var customerController = function ($scope, Notification) {
        //veriable
        $scope.mode = "IDEAL";
        $scope.customer = "";

//       actions
        $scope.doNew = function () {
            $scope.doClear();

            $scope.customer = {};
            $scope.customer.indexNo = $scope.getNextCustomerNumber();

            $scope.setMode('NEW');
        };

        $scope.doEdit = function () {
            $scope.setMode('EDIT');
            
        };

        $scope.doDelete = function () {
            if (customer) {
                $scope.customers.splice(customer, 1);
            }
        };

        $scope.doPrint = function () {

        };

        $scope.doSave = function () {
            if ($scope.customer.indexNo &&
                    $scope.customer.nic &&
                    $scope.customer.city &&
                    $scope.customer.mobile &&
                    $scope.customer.name) {

                angular.forEach($scope.customers, function (value, key) {
                    if (value.indexNo == $scope.customer.indexNo) {
                        if (value.nic == $scope.customer.nic) {
                            $scope.customers.splice(key, 1);

                        }
                    }
                    ;
                });
                $scope.customers.push($scope.customer);
            Notification.success('Success');

                $scope.customer = "";
            }
        };

        $scope.doDiscard = function () {
            $scope.setMode('IDEAL');

            $scope.doClear();
        };

        $scope.doClear = function () {
            $scope.customer = null;
        };

        $scope.doSelectCustomer = function (customer) {
            $scope.customer = customer;
            console.log("customer selected");
        };


//        other funtion
    
        $scope.setCustomer = function (customer) {
            alert("sdf");
            $scope.customer = customer;
        };
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        
        $scope.updateCustomer = function (customer) {
            if (customer) {
                $scope.customer.indexNo = customer.indexNo;
                $scope.customer.nic = customer.nic;
                $scope.customer.name = customer.name;
                $scope.customer.mobile = customer.mobile;
                $scope.customer.city = customer.city;
            }
            $scope.removeCustomer(customer);
        };





//        $http
        $scope.getNextCustomerNumber = function () {
            return "1";
        };

        $scope.getCustomers = function () {
            if (!$scope.customers) {
                $scope.customers = [{
                        "indexNo": "552",
                        "nic": "234232433V",
                        "name": "kaza",
                        "mobile": 2352352,
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


    };
    customerModule.controller("customerController", customerController);
}());
