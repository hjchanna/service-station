(function () {
    var stockAdjustmentModule = angular.module("stockAdjustmentModule", ['ui-notification']);
    stockAdjustmentModule.config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 54
        });
    });


    var stockAdjustmentController = function ($scope, Notification) {


    };

    stockAdjustmentModule.controller("stockAdjustmentController", stockAdjustmentController);

}());