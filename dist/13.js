exports.ids = [13];
exports.modules = {

/***/ 2242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(493);
/* harmony import */ var _Invoices_Invoices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2243);
/* harmony import */ var _Invoices_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2244);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Invoices_Invoices_component__WEBPACK_IMPORTED_MODULE_5__["InvoicesComponent"]],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Invoices_routing__WEBPACK_IMPORTED_MODULE_6__["InvoicesRoutes"])
            ]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ }),

/***/ 2243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(663);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent(service) {
        this.service = service;
        this.invoiceList = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invoiceList);
        this.displayedColumns = ['position', 'invoiceId', 'name', 'date', 'price', 'payment', 'status', 'action'];
    }
    InvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getInvoiceContent().valueChanges().subscribe(function (res) { return _this.getInvoiceData(res); });
    };
    //getInvoiceData method is used to get the invoice list data.
    InvoicesComponent.prototype.getInvoiceData = function (response) {
        var _this = this;
        this.invoiceList = response;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invoiceList);
        setTimeout(function () {
            _this.dataSource.paginator = _this.paginator;
        }, 0);
    };
    /**
     *onDelete method is used to open a delete dialog.
     */
    InvoicesComponent.prototype.onDelete = function (i) {
        var _this = this;
        this.service.deleteDialog("Are you sure you want to delete this invoice permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteUserResponse, i); });
    };
    /**
      * getDeleteResponse method is used to delete a invoice from the invoice list.
      */
    InvoicesComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == "yes") {
            this.dataSource.data.splice(i, 1);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataSource.data);
            this.dataSource.paginator = this.paginator;
        }
    };
    /**
      * onSeeDialog method is used to open a see dialog.
      */
    InvoicesComponent.prototype.onSeeDialog = function () {
        this.service.seeList();
    };
    //applyFilter function can be set which takes a data object and filter string and returns true if the data object is considered a match.
    InvoicesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], InvoicesComponent.prototype, "paginator", void 0);
    InvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoices',
            templateUrl: './Invoices.component.html',
            styleUrls: ['./Invoices.component.scss']
        }),
        __metadata("design:paramtypes", [_Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"]])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ 2244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesRoutes", function() { return InvoicesRoutes; });
/* harmony import */ var _Invoices_Invoices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2243);

var InvoicesRoutes = [
    {
        path: '',
        component: _Invoices_Invoices_component__WEBPACK_IMPORTED_MODULE_0__["InvoicesComponent"]
    }
];


/***/ })

};;