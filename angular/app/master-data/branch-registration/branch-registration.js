(function () {
    var branchRegistrationModule = angular.module("branchRegistrationModule", ['ui.bootstrap', 'ui-notification']);
    branchRegistrationModule.config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 54
        });
    });


    var branchRegistrationController = function ($scope, Notification) {
        //variables
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.branch = {};

        //actions
        $scope.doNew = function () {
            $scope.doClear();

            $scope.setMode('NEW');
        };

        $scope.doEdit = function () {
            $scope.setMode('EDIT');
             $scope.branches.push($scope.branch);
        };

        $scope.doDelete = function () {
            alert($scope.branch);
            if ($scope.branch) {
                $scope.branches.splice(branch, 1);
                Notification.error('delete success...');
            }
        };

        $scope.doPrint = function () {

        };

        $scope.doSave = function () {
            $scope.branch.manager.indexNo=2;
            $scope.branch.indexNo=2;
            $scope.branches.push($scope.branch);
            Notification.success('Success');
            
        };

        $scope.doDiscard = function () {
            $scope.setMode('IDEAL');

            $scope.doClear();
        };

        $scope.doClear = function () {
            $scope.branch=null;
        };

        //other functions
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        $scope.setBranch = function (branch) {
            $scope.branch = branch;
            
             $scope.branch.manager= $scope.getManager(branch.manager.indexNo);
        };

        //http
        $scope.getBranches = function (indexNo) {
            $scope.branches = [
                {
                    indexNo: 1,
                    branchName: "Panadura Branch",
                    companyName: "siziki (pvt) Ltd",
                    companyAddress: "#87,\nOld Galle Rd.,\nWalana,\nPanadura.",
                    branchCode: "PASI",
                    companyEmail: "siziki@gmai.com",
                    webAddress: "www.sizikiinfo.com",
                    telephone1: 2342342,
                    telephone2: 3656283563,
                    telephone3: 4563745864,
                    "manager": {
                        "indexNo": "1"
                    }
                },
                {
                    indexNo: 2,
                    branchName: "Nugegoda Branch",
                    companyName: "siziki (pvt) Ltd",
                    companyAddress: "#87,\nOld Galle Rd.,\nWalana,\nPanadura.",
                    branchCode: "NUGE",
                    companyEmail: "siziki@gmai.com",
                    webAddress: "www.sizikiinfo.com",
                    telephone1: "234256272",
                    telephone2: "01143643",
                    telephone3: "534535364",
                    "manager": {
                        "indexNo": "1",
                        "namagerName": "Channa Mohan",
                        "managerAddress": "#87,\nOld Galle Rd.,\nWalana,\nPanadura.",
                        "managerMobile": "0703333681"
                    }
                }
            ];
            return $scope.branches;
        };
        $scope.getManager = function (indexNo) {
            return {
                "indexNo": "1",
                "managerName": "Channa Mohan",
                "managerAddress": "#87,\nOld Galle Rd.,\nWalana,\nPanadura.",
                "managerMobile": "0703333681",
            };
        };

    };
    branchRegistrationModule.controller("branchRegistrationController", branchRegistrationController);

}());
