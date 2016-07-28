(function () {
    var customerPaymentModule = angular.module("customerPaymentModule", ['ui.bootstrap', 'ui-notification']);
    customerPaymentModule.config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 54
        });
    });


    var customerPaymentController = function ($scope, Notification) {
        
    };
    customerPaymentModule.controller("customerPaymentController", customerPaymentController);

}());
    