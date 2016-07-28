(function () {
    var userPrivilegesModule = angular.module("userPrivilegesModule", ['ui.bootstrap', 'ui-notification']);

    var userPrivilegesController = function ($scope, Notification) {
        //variables
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        
        //actions
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
            $scope.job = null;
        };
        
        //other functions
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        
    };
    userPrivilegesModule.controller("userPrivilegesController", userPrivilegesController);
}());
