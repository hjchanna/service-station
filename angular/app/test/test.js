(function(){
    var testModule = angular.module("myTest", []);
    
    var testController = function($scope){
        $scope.sayHi = function(){
            console.log("Hi");
        };
    };
    
    testModule.controller("testController", testController);
}());