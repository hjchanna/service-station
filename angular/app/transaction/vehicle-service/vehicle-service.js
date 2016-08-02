(function () {
    var vehicleServiceModule = angular.module("vehicleServiceModule", []);

    var vehicleServiceController = function ($scope) {
        //variables
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.service = "";

        //temp
        $scope.customers = null;

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

    };

    vehicleServiceModule.controller("vehicleServiceController", vehicleServiceController);
}());