(function () {
    var copModule = angular.module("copModule", ["chart.js"]);

    var copController = function ($scope) {
//        $scope.
//        
//        $scope.cop = [
//            {month: "January", amount: 340.00},
//            {month: "February", amount: 320.00},
//            {month: "March", amount: 348.00},
//            {month: "April", amount: 360.00},
//            {month: "June", amount: 340.00}
//        ];

        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];

        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
    };
    copModule.controller("copController", copController);
}());