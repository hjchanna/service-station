(function () {
    var journalModule = angular.module("journalModule", ['ui.bootstrap', 'ui-notification']);

    var journalController = function ($scope, Notification) {
         //variables
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.journal = null;
        $scope.tempJournal = {};


        //action
        $scope.doNew = function () {
            $scope.doClear();

            $scope.journal = {};
            $scope.journal.journalNo = $scope.getNextNumber();
            $scope.journal.journalDate = new Date();

            $scope.setMode('NEW');
        };
        $scope.doEdit = function () {
//            $scope.setMode('EDIT');
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
            $scope.tempJournal=null;

        };

        $scope.doSelectJournal = function (journal) {
//            $scope.tempJournal.date=$scope.journal.journals.date;
            $scope.tempJournal = journal;
        }

//        other function
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        $scope.doAdd = function () {
            if ($scope.tempJournal.date
                    && $scope.tempJournal.description
                    && $scope.tempJournal.debit
                    && $scope.tempJournal.credit
                    && $scope.tempJournal.amount
                    ) {

                if (!$scope.journal.journals) {
                    $scope.journal.journals = [];
                }
                $scope.journal.journals.push($scope.tempJournal);
                $scope.tempJournal = {};
            }
        };

        $scope.checkEnter = function ($event) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode == 13) {
                $scope.doAdd();
            }
        };

//        $http
        $scope.getNextNumber = function () {
            return "1";
        }

        $scope.getDebit = function () {
            return ["phone", "sdasa", "sddss"];
        };

        $scope.getCredit = function () {
            return ["pocket money", "sdasd", "asdasd"];
        };



    };


    journalModule.controller("journalController", journalController);

}());