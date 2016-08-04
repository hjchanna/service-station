//(function(){
//    var testModule = angular.module("myTest", []);
//    
//    var testController = function($scope){
//        $scope.sayHi = function(){
//            console.log("Hi");
//        };
//    };
//    
//    testModule.controller("testController", testController);
//    
//    $('#scroll-div').slimScroll({
//        height: '250px'
//    });
//    
//    $('#scroll-div').text('Hi');
//    
//}());

(function () {
    var indexModule = angular.module('myTest', []);

    var indexController = function ($scope) {
//        $(function () {
//            $('#scroll-div').slimScroll({
//                height: '250px'
//            });
//        });
    };
    indexModule.controller('testController', indexController);



}());