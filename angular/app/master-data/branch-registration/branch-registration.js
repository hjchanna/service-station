(function () {
    var branchRegistrationModule = angular.module("branchRegistrationModule", ['ui.bootstrap', 'ui-notification']);
    branchRegistrationModule.config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 54
        });
    });


    var branchRegistrationController= function ($scope, Notification) {
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
        };

        //other functions
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };
        
    };
    branchRegistrationModule.controller("branchRegistrationController", branchRegistrationController);

}());
