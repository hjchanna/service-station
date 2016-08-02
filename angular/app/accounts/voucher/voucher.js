(function(){
    var voucherModule = angular.module("voucherModule", ['ui-notification']);
        voucherModule.config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 54
        });
    });
    var voucherController = function($scope , Notification){
        $scope.mode = "IDEAL";

//            action
        $scope.doNew = function () {
            $scope.doClear();

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
            $scope.user = null;
        };

//        other funtion
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

//        $http
    };
    
    voucherModule.controller("voucherController", voucherController);
}());