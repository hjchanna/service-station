(function () {
    var productModule = angular.module("productModule", ['ui-notification']);

    var productController = function ($scope,Notification) {
        $scope.unit = "";
        $scope.units = null;
        $scope.mode = "IDEAL";

//        action
        $scope.addUnit = function () {
            var unit = {};
            unit.unitPrice = $scope.unit.unitPrice;
            unit.cost = $scope.unit.cost;
            unit.sellingPrice = $scope.unit.sellingPrice;
            unit.qty = $scope.unit.qty;
            if (unit.unitPrice && unit.cost && unit.sellingPrice && unit.qty) {
                
            $scope.units.push(unit);
            $scope.refresh();
            }else{
                 Notification.warning('empty set..');
            }

        }
        $scope.refresh = function () {
            $scope.unit.unitPrice = "";
            $scope.unit.cost = "";
            $scope.unit.sellingPrice = "";
            $scope.unit.qty = "";



        }
        $scope.remove = function (proNo) {
            console.log('remove ' + proNo);
            if (proNo != -1) {
                var res = confirm('Do you want to delete ?');
                if (res) {
                    $scope.units.splice(proNo, 1);
                }
            }
        }
        $scope.update = function (unit,index) {
            alert(unit);
            if (unit!=null) {
                $scope.unit.unitPrice = unit.unitPrice;
                $scope.unit.cost = unit.cost;
                $scope.unit.sellingPrice = unit.sellingPrice;
                $scope.unit.qty = unit.qty;
            }
            $scope.remove(index);
        }
//        other funtion
        $scope.setDescription = function () {
            if (!$scope.unit.brandName) {
                $scope.unit.brandName = "";
            }
            if (!$scope.unit.categoryName) {
                $scope.unit.categoryName = "";
            }
            if (!$scope.unit.modelNo) {
                $scope.unit.modelNo = "";
            }
            $scope.unit.description =
                    $scope.unit.brandName + " " +
                    $scope.unit.categoryName + " " +
                    $scope.unit.modelNo;
            $scope.unit.printdescription =
                    $scope.unit.brandName + " " +
                    $scope.unit.categoryName + " " +
                    $scope.unit.modelNo;


        };
        $scope.checkEnterPressed = function ($event) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode == 13) {
                //add code
                $scope.addUnit();
            }


        };
        $scope.showNew=function (){
             $scope.mode = "IDEAL";
        }
        $scope.showSave=function (){
             $scope.mode = "SAVE";
        }

//        $http
        $scope.getModelNo = function (modelNo) {
            $scope.unit.modelNo = modelNo;
            return ["model 1", "model 2", "model 3", "model 4"];
        };

        $scope.getCategory = function (categoryName) {
            $scope.unit.categoryName = categoryName;
            return ["category 1", "category 2", "category 3", "category 4"];
        };
        $scope.getBrand = function (brandName) {
            $scope.unit.brandName = brandName;
            return ["brand 1", "brand 2", "brand 3", "brand 4"];
        };
        $scope.getUnits = function () {
            if (!$scope.units) {
                $scope.units = [
                    {
                        "proNo": "1",
                        "unitPrice": "100.00",
                        "cost": "90.00",
                        "sellingPrice": "120.00",
                        "qty": "10"
                    },
                    {
                        "proNo": "2",
                        "unitPrice": "200.00",
                        "cost": "180.00",
                        "sellingPrice": "220.00",
                        "qty": "10"
                    }
                ];
            }

            return $scope.units;
        };

    };
    productModule.controller("productController", productController);

}());