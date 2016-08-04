(function () {
    var jobCardModule = angular.module("jobCardModule", [ 'index','ui.bootstrap', 'ui-notification']);

    var jobCardController = function ($scope, Notification) {
        //variables
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.job = "";
        $scope.newCustomer="";
        $scope.newCustomer.indexNo="1";
        
        //temp
        $scope.customers = null;

        //actions
        $scope.doNew = function () {
            $scope.doClear();

            $scope.job = {};
            $scope.job.jobNo = $scope.getNextJobNumber();
            $scope.job.jobDate = new Date();
            $scope.job.inTime = new Date();

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
            $scope.doRefersh();
        };

        $scope.doClear = function () {
            $scope.job = null;
        };
        $scope.doNewCustomer = function () {
            $scope.job.customer=$scope.newCustomer;
        };
        
        $scope.doSelectCustomer = function(customer){
            $scope.job.customer=customer;
            console.log("customer selected");
        };
        $scope.doRefersh = function(){
            $scope.newCustomer={};
            $scope.newCustomer.indexNo=$scope.getNextCustomerNumber(); 
            
        };

        //other functions
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        $scope.setJob = function (job) {
            $scope.job = job;

            $scope.job.customer = $scope.getCustomer(job.customer.indexNo);
            $scope.job.vehicle = $scope.getVehicle(job.vehicle.indexNo);
        };

        $scope.setVehicle = function (vehicle) {
            $scope.job.vehicle = vehicle;

            if (!$scope.job.customer) {
                $scope.job.customer = $scope.getCustomer(vehicle.customer);
            }
        };

        $scope.setCustomer = function (customer) {
            $scope.job.customer = customer;
        };

        //$http

        $scope.getNextJobNumber = function () {
            return "1";
        };
        $scope.getNextCustomerNumber = function () {
            return "1";
        };

        $scope.getJobs = function (jobNo) {
            var jobs = [
                {
                    "jobNo": "552",
                    "jobDate": new Date(),
                    "inTime": new Date(),
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

        $scope.getVehicles = function (vehicleNo) {
            var vehicles = [
                {
                    "indexNo": "1",
                    "vehicleNo": "CA-7875",
                    "make": "TOYOTA",
                    "type": "CAR",
                    "customer": "1"
                },
                {
                    "indexNo": "1",
                    "vehicleNo": "KR-2266",
                    "make": "NISSAN",
                    "type": "VAN",
                    "customer": "1"
                },
                {
                    "indexNo": "1",
                    "vehicleNo": "KK-1091",
                    "make": "BMW",
                    "type": "JEEP",
                    "customer": "1"
                },
                {
                    "indexNo": "1",
                    "vehicleNo": "KB-1256",
                    "make": "SUSUKI",
                    "type": "CAR",
                    "customer": "1"
                }
            ];

            return vehicles;
        };

        $scope.getVehicleType = function (type) {
            return ["CAR", "BUS", "VAN", "JEEP"];
        };

        $scope.getVehicleMake = function (make) {
            return ["TOYOTA", "NISSAN", "SUSUKI", "TATA", "KIA"];
        };

        $scope.getCustomer = function (indexNo) {
            return {
                "indexNo": "1",
                "name": "Channa Mohan",
                "address": "#87,\nOld Galle Rd.,\nWalana,\nPanadura.",
                "nic": "56329963V",
                "mobile": "0703333681",
                "fax": "0382223422",
                "birthday": "1991-02-01",
                "telephone": "0386692254",
                "email": "hjchanna@gmail.com"
            };
        };

        $scope.getVehicle = function (indexNo) {
            return {
                "indexNo": "1",
                "vehicleNo": "KB-1256",
                "make": "SUSUKI",
                "type": "CAR",
                "customer": "1"
            };
        };

        $scope.getCustomers = function (name) {
            if(!$scope.customers){
                $scope.customers = [
                    {
                    "indexNo": "1",
                    "name": "Channa Mohan",
                    "address": "#87,\nOld Galle Rd.,\nWalana,\nPanadura.",
                    "nic": "56329963V",
                    "mobile": "0703333681",
                    "fax": "0382223422",
                    "birthday": "1991-02-01",
                    "telephone": "0386692254",
                    "email": "hjchanna@gmail.com"
                },
                    {
                    "indexNo": "2",
                    "name": "Kasun Chamara",
                    "address": "#38,\nMudungama.,\nSiripura,\nPolonnaruwa.",
                    "nic": "2424235V",
                    "mobile": "0703333681",
                    "fax": "0998232345",
                    "birthday": "1993-02-01",
                    "telephone": "01127474678",
                    "email": "chamara.kaza@gmail.com"
                }
            ];
            }
            
            return $scope.customers;
        };
    };
    jobCardModule.controller("jobCardController", jobCardController);
}());


