(function () {
    var voucherModule = angular.module("voucherModule", ['ui-notification']);
    voucherModule.config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 54
        });
    });
    var voucherController = function ($scope, Notification) {
        //variables
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.voucher = {};

        //actions
        $scope.doNew = function () {
            $scope.doClear();

            $scope.voucher.indexNo = $scope.getNextVoucherNumber();
            $scope.voucher.date = new Date();
            $scope.voucher.voucherDate = new Date();

            $scope.setMode('NEW');
        };

        $scope.doEdit = function (voucher) {
            $scope.setMode('EDIT');
            if (voucher) {
                $scope.voucher = voucher;
                $scope.setMode('IDEAL');
            }
        };

        $scope.doDelete = function () {
            if ($scope.voucher.indexNo) {
                $scope.vouchers.splice($scope.voucher, 1);
                Notification.error('Delete Success');
                $scope.voucher={};
            }else{
               Notification.primary('If you want to delete a voucher, selece it. ');
            }
        };

        $scope.doPrint = function () {

        };

        $scope.doSave = function () {
            Notification.success('Success');
        };

        $scope.doAdd = function () {
            if ($scope.voucher.indexNo &&
                    $scope.voucher.date &&
                    $scope.voucher.description &&
                    $scope.voucher.amount &&
                    $scope.voucher.account) {
                $scope.voucher.date = $scope.formatDate($scope.voucher.date);
                $scope.vouchers.push($scope.voucher);
                Notification.success('Success');

                $scope.voucher = "";

            } else {
                Notification.error('Must be filled all components to add voucher');
            }
        };

        $scope.doDiscard = function () {
            $scope.setMode('IDEAL');
            $scope.voucher = {};
            $scope.doClear();
        };

        $scope.doClear = function () {
            $scope.voucher = {};
        };

        //other functions
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        $scope.formatDate = function (date) {
            var d = date;
            var curr_date = d.getDate();
            var curr_month = d.getMonth();
            curr_month++;
            var curr_year = d.getFullYear();
            return (curr_date + "/" + curr_month + "/" + curr_year);
        };

        //http
        $scope.getNextVoucherNumber = function () {
            return "003";
        };

        $scope.getVouchers = function () {
            if (!$scope.vouchers) {
                $scope.vouchers = [
                    {
                        "indexNo": "001",
                        "date": new Date(),
                        "description": "bank deposit",
                        "amount": 38000.00,
                        "account": "Bank Account HNB"
                    },
                    {
                        "indexNo": "002",
                        "date": new Date(),
                        "description": "sale items",
                        "amount": 1000.00,
                        "account": "Other Supplier"
                    }
                ];
            }

            return $scope.vouchers;
        };

    };

    voucherModule.controller("voucherController", voucherController);
}());