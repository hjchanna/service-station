(function () {
    var customerModule = angular.module("customerModule", ['ui-notification']);

    var customerController = function ($scope, Notification) {
        //veriable
        $scope.mode = "IDEAL";
        $scope.customer = "";

        //actions
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
            $scope.customer = customer;
        };

        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        //$http
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
                        "city": "polonnaruwa",
                        "address": "#12,\nkaluthara.",
                        "email": "dsfs.sd@gmail.com",
                        "creditLimitAmount": 1200.00,
                        "creditLimitDays": 45,
                        "blacklist": true,
                        "blacklistReason": "payment not conpleted",
                        "telephone1": 432342,
                        "telephone2": 2342342,
                        "telephone3": 2342342,
                        "fax": 669699999,
                        "cashCustomer": true
                    }];
            }

            return $scope.customers;
        };


    };
    customerModule.controller("customerController", customerController);
}());
