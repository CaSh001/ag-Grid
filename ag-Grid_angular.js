agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {

    var columnDefs = [
        {headerName: "Make", field: "make", filter: 'set', filterParams: {
            textFormatter: function(s){
                var r=s.toLowerCase();
                r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
                r = r.replace(new RegExp("æ", 'g'),"ae");
                r = r.replace(new RegExp("ç", 'g'),"c");
                r = r.replace(new RegExp("[èéêë]", 'g'),"e");
                r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
                r = r.replace(new RegExp("ñ", 'g'),"n");
                r = r.replace(new RegExp("[òóôõøö]", 'g'),"o");
                r = r.replace(new RegExp("œ", 'g'),"oe");
                r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
                r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
                r = r.replace(new RegExp("\\W", 'g'),"");
                return r; }
            }},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price", filter:"number"}
    ];

    var rowData = [
        {make: "Fork", model: "Celica", price: 35000},
        {make: "Førk", model: "Mondeo", price: 32000},
        {make: "áÉő", model: "Boxter", price: 72000}
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        enableSorting: true,
        animateRows: true,
        sortingOrder: ['desc', 'asc',null],
        accentedSort: true,
        enableFilter: true,
        
    };

});