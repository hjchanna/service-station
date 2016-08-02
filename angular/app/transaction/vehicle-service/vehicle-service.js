(function () {
    var vehicleServiceModule = angular.module("vehicleServiceModule", []);

    var vehicleServiceController = function ($scope) {
        //variables
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.service = "";


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
            $scope.service.invoiceDate = new Date();
        };

        $scope.doDiscard = function () {
            $scope.setMode('IDEAL');

            $scope.doClear();
        };

        $scope.doClear = function () {
            $scope.service = null;
        };

        //other functions
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        $scope.setJob = function (job) {
            $scope.service = job;

            $scope.service.customer = $scope.getCustomer(job.customer.indexNo);
            $scope.service.vehicle = $scope.getVehicle(job.vehicle.indexNo);
        };

        $scope.setInvoice = function (invoice) {
            $scope.service = invoice;

            $scope.service.customer = $scope.getCustomer(invoice.customer.indexNo);
            $scope.service.vehicle = $scope.getVehicle(invoice.vehicle.indexNo);
        };

        $scope.setProducts = function (product) {
            $scope.tempProduct = product;
        };

        $scope.doAdd = function () {
            if ($scope.tempProduct.productNo
                    && $scope.tempProduct.modelNo
                    && $scope.tempProduct.description
                    && $scope.tempProduct.unit
                    && $scope.tempProduct.unitPrice
                    && $scope.tempProduct.qty
                    ) {

                if (!$scope.service.products) {
                    $scope.service.products = [];
                }

                $scope.service.products.push($scope.tempProduct);
                $scope.tempProduct = {};
            }
        };
        
        $scope.checkEnter = function ($event) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode == 13) {
                $scope.doAdd();
            }
        };


        //$http
        $scope.getJobs = function (jobNo) {
            var jobs = [
                {
                    "indexNo": "1",
                    "jobNo": "111",
                    "jobDate": "2015-06-16",
                    "customer": {
                        "indexNo": "1"
                    },
                    "vehicle": {
                        "indexNo": "1"
                    }
                }
            ];
            return jobs;
        };

        $scope.getInvoice = function (invoiceNo) {
            var invoice = [
                {
                    "indexNo": "1",
                    "invoiceNo": "21524",
                    "Date": "2015-05-11",
                    "customer": {
                        "indexNo": "1"
                    },
                    "vehicle": {
                        "indexNo": "1"
                    },
                }
            ]
            return invoice;
        };

        $scope.getCustomer = function (indexNo) {
            return {
                "indexNo": "1",
                "name": "Kasun Chamara",
                "mobile": "0703333681",
            };
        };

        $scope.getVehicle = function (indexNo) {
            return {
                "indexNo": "1",
                "vehicleNo": "KB-1256",
                "inMilage": "3999",
                "next": "5000",
            };
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
                    "qty": "",
                    "value": "123"
                },
                {
                    "indexNo": "1",
                    "modelNo": "DS1122",
                    "productNo": "FG21335",
                    "description": "dffdf",
                    "unit": "KG",
                    "unitPrice": "300",
                    "qty": "",
                    "value": "123"
                }
            ];
            return products;
        };
    };

    vehicleServiceModule.controller("vehicleServiceController", vehicleServiceController);
}());