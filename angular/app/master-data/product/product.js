(function () {
    var productModule = angular.module("productModule", ['ui-notification']);
    productModule.config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 54
        });
    });

    var productController = function ($scope, Notification) {
        $scope.product = null;
        $scope.tempUnit = {}; //temporary unit for editing purpose

        $scope.mode = "IDEAL";

        //action
        $scope.doNew = function () {
            $scope.doClear();

            $scope.product.productNo = $scope.getNextProductNumber();

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
            $scope.product = {};
        };

        $scope.doAddUnit = function () {
            if ($scope.tempUnit.unitName
                    && $scope.tempUnit.costPrice
                    && $scope.tempUnit.salesPrice
                    && $scope.tempUnit.quantity
                    ) {

                if (!$scope.product.units) {
                    $scope.product.units = [];
                }

                $scope.product.units.push($scope.tempUnit);
                $scope.tempUnit = {};
            } else {
                Notification.error("Please specify all of unit properties.");
            }
        };

        $scope.doEditUnit = function (unit) {
            if (unit) {
                $scope.tempUnit = unit;
            }

            $scope.doRemoveUnit(unit);
        };

        $scope.doRemoveUnit = function (unit) {
            if (unit) {
                var res = confirm('Do you want to delete ?');

                if (res) {
                    $scope.product.units.splice(unit, 1);
                }
            }
        };

        //other funtions
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        $scope.updateProductDescription = function () {
            if (!$scope.product.brandName) {
                $scope.product.brandName = "";
            }
            if (!$scope.product.categoryName) {
                $scope.product.categoryName = "";
            }
            if (!$scope.product.modelNo) {
                $scope.product.modelNo = "";
            }

            $scope.product.description =
                    $scope.product.brandName + " " +
                    $scope.product.categoryName + " " +
                    $scope.product.modelNo;

            $scope.product.printdescription =
                    $scope.product.brandName + " " +
                    $scope.product.categoryName + " " +
                    $scope.product.modelNo;
        };

        $scope.AddUnitKeyEvent = function ($event) {
            var keyCode = $event.which || $event.keyCode;

            if (keyCode == 13) {
                $scope.doAddUnit();
            }
        };

        //$http
        $scope.getNextProductNumber = function (){
            return 1;  
        };
        $scope.getCategories = function (category) {
            return ["category 1", "category 2", "category 3", "category 4"];
        };

        $scope.getBrands = function (brand) {
            return ["brand 1", "brand 2", "brand 3", "brand 4"];
        };

        $scope.getModels = function (model) {
            return ["model 1", "model 2", "model 3", "model 4"];
        };
    };

    productModule.controller("productController", productController);

}());