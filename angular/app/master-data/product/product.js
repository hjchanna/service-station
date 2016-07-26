(function () {
    var productModule = angular.module("productModule", []);

    var productController = function ($scope) {
        $scope.product = "";
        
//        action

//        other funtion
        
//        $http
        $scope.getModelNo = function (modelNo) {
            return ["cd1111", "ds2222", "ew3333", "ed4444"];
        };
        
        $scope.getCategory=function (categoryName){
            return ["iol filter","fadad","saadf","dsaar"];  
        };
        $scope.getBrand=function (brandName){
            return ["dssa","adas","adsad","adasd"];
        };

    };
    productModule.controller("productController", productController);

}());