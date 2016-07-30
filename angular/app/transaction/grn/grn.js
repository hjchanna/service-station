(function () {
    var grnModule = angular.module("grnModule", ['ui.bootstrap', 'ui-notification']);


    var grnController = function ($scope, Notification) {
        $scope.mode = "IDEAL";
        $scope.grn = "";



//            action
        $scope.doNew = function () {
            $scope.doClear();

            $scope.grn = {};
            $scope.grn.invoiceNo = $scope.getInvoiceNumber();
            $scope.setMode('NEW');
        };

        $scope.doEdit = function () {
            $scope.setMode('EDIT');
        };

        $scope.doDelete = function () {

        };

        $scope.doPrint = function () {

        };

        $scope.doSave = function () {
            Notification.success('Success');
        };

        $scope.doDiscard = function () {
            $scope.setMode('IDEAL');

            $scope.doClear();
        };

        $scope.doClear = function () {
            $scope.grn = null;
        };

//        other funtion
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

//        $http
        $scope.getInvoiceNumber = function () {
            return "1";
        };

        $scope.getRecNumber = function (recNo) {
            return ["R001", "R002", "R003"];
        };
        
        $scope.getSupplierName= function (name){
            return ["Kasun Chamara","Nidura Prageeth","Mohan Jayamuni"];
        };

    };




    grnModule.controller("grnController", grnController);
}());

