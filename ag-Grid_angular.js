agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {

    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "aaáb", model: "Celica", price: 35000},
        {make: "aaac", model: "Mondeo", price: 32000},
        {make: "aaad", model: "Boxter", price: 72000}
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        enableSorting: true,
        animateRows: true,
        sortingOrder: ['desc', 'asc',null],
        accentedSort: true
    };

});