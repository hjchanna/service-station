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

        $scope.labels = ['January', 'February', 'March', 'April', 'June'];
        $scope.series = ['COP/KG'];

        $scope.data = [
            [340.00, 350.00, 348.00, 360.00, 340.00]
        ];


        $scope.donut = {};
        $scope.donut.labels = ["Branch A", "Branch B", "Branch C"];
        $scope.donut.data = [300, 500, 250];



        $scope.line = {};
        $scope.line.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.line.series = ['Series A', 'Series B'];
        $scope.line.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
        $scope.line.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        };
    };
    copModule.controller("copController", copController);
}());