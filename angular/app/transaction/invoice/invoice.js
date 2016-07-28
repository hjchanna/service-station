(function () {
    var invoiceModule = angular.module("invoiceModule", ['ui.bootstrap', 'ui-notification']);

    var invoiceController = function ($scope, Notification) {
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.invoice = "";
        $scope.ProductList = [];

//        action
        $scope.doNew = function () {
            $scope.doClear();

            $scope.invoice = {};
            $scope.invoice.invoiceNo = $scope.getNextInvoiceNumber();
            $scope.invoice.date = new Date();

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

//        other funtion
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        $scope.setProducts = function (product) {
            $scope.invoice.product = product;

        };

        $scope.setModels = function (model) {
            $scope.invoice.product = model;

        };

        $scope.add = function () {
            var data = {};
            data.productNo = $scope.invoice.product.productNo;
            data.modelNo = $scope.invoice.product.modelNo;
            data.description = $scope.invoice.product.description;
            data.unit = $scope.invoice.product.unit;
            data.unitPrice = $scope.invoice.product.unitPrice;
            data.recQty = $scope.invoice.product.recQty;

            $scope.ProductList.push(data);

        };
        $scope.checkEnter = function ($event) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode == 13) {
                $scope.add();
            }
        }

//        $http
        $scope.getInvoiceNo = function (indexNo) {
            return ["cd1111", "ds2222", "ew3333", "ed4444"];
        };

        $scope.getNextInvoiceNumber = function () {
            return "1";
        };

        $scope.getCustomers = function (customerName) {
            return ["Nidura Prageeth", "Kasun Chamara", "Mohan Jayamuni"];
        };

        $scope.getProducts = function (productNo) {
            var products = [
                {
                    "indexNo": "1",
                    "modelNo": "DS1121",
                    "productNo": "FG21333",
                    "description": "oil fiter",
                    "unit": "L",
                    "unitPrice": "200",
                    "recQty": "10"
                },
                {
                    "indexNo": "1",
                    "modelNo": "DS1122",
                    "productNo": "FG21335",
                    "description": "dffdf",
                    "unit": "KG",
                    "unitPrice": "300",
                    "recQty": "20",
                }
            ];
            return products;
        };

        $scope.getModels = function (modelNo) {
            var models = [
                {
                    "indexNo": "1",
                    "modelNo": "DS1121",
                    "productNo": "FG21333",
                    "description": "oil fiter",
                    "unit": "L",
                    "unitPrice": "200",
                    "recQty": "10",
                    "value": "233"

                },
                {
                    "indexNo": "1",
                    "modelNo": "DS1122",
                    "productNo": "FG21335",
                    "description": "dffdf",
                    "unit": "KG",
                    "unitPrice": "300",
                    "recQty": "20",
                    "value": "234"
                }
            ];
            return models;
        };

    };
    invoiceModule.controller("invoiceController", invoiceController);

}());