(function () {
    var userRegistrationModule = angular.module("userRegistrationModule", ['ui.bootstrap', 'ui-notification']);

    var userRegistrationController = function ($scope,Notification) {
        $scope.mode = "IDEAL";
        $scope.user = "";



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

    userRegistrationModule.controller("userRegistrationController", userRegistrationController);

}());