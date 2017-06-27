### Grid Size 

* just call it with the button onclick
```js
function fillLarge() {
    setWidthAndHeight('100%','100%');
}

function fillMedium() {
    setWidthAndHeight('60%','60%');
}

function fillExact() {
    setWidthAndHeight('400px','400px');
}

function setWidthAndHeight(width, height) {
    var eGridDiv = document.querySelector('#myGrid');
    eGridDiv.style.width = width;
    eGridDiv.style.height = height;
    gridOptions.api.doLayout(); //reduces flicker
}
```

### Sorting

```js
columnDefs: columnDefs,
rowData: rowData, //?
enableSorting: true,
```

* __You can change options specificly, like:__
    * This changes the sortingorder on most of them. Last one stays default, which is 'asc, desc, none'.

```js
    {headerName: "Athlete", field: "athlete", width: 150, sortingOrder: ['asc','desc']},
    {headerName: "Age", field: "age", width: 90, sortingOrder: ['desc','asc']},
    {headerName: "Country", field: "country", width: 120, sortingOrder: ['desc',null]},
    {headerName: "Year", field: "year", width: 90, sortingOrder: ['asc']},
    {headerName: "Date", field: "date", width: 110},
```

* API sorting is a thing

* Accented sort:
    * _gridOptions.accentedSort = true_