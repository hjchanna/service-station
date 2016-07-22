(function () {
    var jobCardModule = angular.module("jobCardModule", ['ui.bootstrap']);

    var jobCardController = function ($scope) {
        //variables
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.job = null;
        //actions
        $scope.doNew = function(){
            $scope.doClear();
            
            $scope.setMode('NEW');
        };
        $scope.doEdit = function(){
            $scope.setMode('EDIT');
            
        };
        $scope.doDelete = function(){
            
        };
        $scope.doPrint = function(){
            
        };
        $scope.doSave = function(){
            console.log($scope.job);
        };
        $scope.doDiscard = function(){
            $scope.setMode('IDEAL');
            
            $scope.doClear();
        };
        $scope.doClear = function(){
            $scope.job = null;
        };
        
        //other functions
        $scope.setMode = function(mode){
            $scope.mode = mode;
        };
        
        $scope.getVehicles = function(number){
            console.log("get vehicles - "+number);
            return ["CA-8524", "KB-1256", "HJ-7842", "KK-1919"];
        };
    };
    jobCardModule.controller("jobCardController", jobCardController);


}());


