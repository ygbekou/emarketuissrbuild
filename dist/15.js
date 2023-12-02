exports.ids = [15];
exports.modules = {

/***/ 2281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModule", function() { return SalesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2229);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(439);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(628);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(440);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(493);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(434);
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(566);
/* harmony import */ var _Sales_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2282);
/* harmony import */ var _Orders_Orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2283);
/* harmony import */ var _Orders_OrderView_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2284);
/* harmony import */ var _Orders_OrderHistory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2295);
/* harmony import */ var _Returns_Returns_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2285);
/* harmony import */ var _Returns_Return_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2286);
/* harmony import */ var _Returns_ReturnHistory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2296);
/* harmony import */ var _Reviews_AdminReviews_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2287);
/* harmony import */ var _Reviews_ReviewsTable_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2288);
/* harmony import */ var _Orders_OrderOption_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2297);
/* harmony import */ var _Summaries_SalesSummaries_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2289);
/* harmony import */ var _Payouts_Payouts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2292);
/* harmony import */ var _Payouts_Payout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2293);
/* harmony import */ var _Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2291);
/* harmony import */ var _Summaries_SalesSummary_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2290);
/* harmony import */ var _Payouts_DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2294);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var SalesModule = /** @class */ (function () {
    function SalesModule() {
    }
    SalesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _Orders_Orders_component__WEBPACK_IMPORTED_MODULE_11__["OrdersComponent"],
                _Orders_OrderView_component__WEBPACK_IMPORTED_MODULE_12__["OrderViewComponent"],
                _Orders_OrderHistory_component__WEBPACK_IMPORTED_MODULE_13__["OrderHistoryComponent"],
                _Orders_OrderOption_component__WEBPACK_IMPORTED_MODULE_19__["OrderOptionComponent"],
                _Returns_Returns_component__WEBPACK_IMPORTED_MODULE_14__["ReturnsComponent"],
                _Returns_Return_component__WEBPACK_IMPORTED_MODULE_15__["ReturnComponent"],
                _Returns_ReturnHistory_component__WEBPACK_IMPORTED_MODULE_16__["ReturnHistoryComponent"],
                _Reviews_AdminReviews_component__WEBPACK_IMPORTED_MODULE_17__["AdminReviewsComponent"],
                _Reviews_ReviewsTable_component__WEBPACK_IMPORTED_MODULE_18__["ReviewsTableComponent"],
                _Summaries_SalesSummaries_component__WEBPACK_IMPORTED_MODULE_20__["SalesSummariesComponent"],
                _Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_23__["SalesSummariesIncludeComponent"],
                _Payouts_DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_25__["DeliveriesSummariesIncludeComponent"],
                _Summaries_SalesSummary_component__WEBPACK_IMPORTED_MODULE_24__["SalesSummaryComponent"],
                _Payouts_Payouts_component__WEBPACK_IMPORTED_MODULE_21__["PayoutsComponent"],
                _Payouts_Payout_component__WEBPACK_IMPORTED_MODULE_22__["PayoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Sales_routing__WEBPACK_IMPORTED_MODULE_10__["SalesRoutes"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_9__["GlobalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                ngx_input_file__WEBPACK_IMPORTED_MODULE_5__["InputFileModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot({
                    theme: 'snow',
                    modules: {
                        syntax: false,
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ header: 1 }, { header: 2 }],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            [{ script: 'sub' }, { script: 'super' }],
                            [{ indent: '-1' }, { indent: '+1' }],
                            [{ direction: 'rtl' }],
                            [{ size: ['small', false, 'large', 'huge'] }],
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            [{ color: [] }, { background: [] }],
                            [{ font: [] }],
                            [{ align: [] }],
                            ['clean'],
                            ['link', 'image', 'newsVideo'] // link and image, newsVideo
                        ]
                    }
                })
            ],
            exports: [_Orders_Orders_component__WEBPACK_IMPORTED_MODULE_11__["OrdersComponent"],
                _Orders_OrderView_component__WEBPACK_IMPORTED_MODULE_12__["OrderViewComponent"],
                _Summaries_SalesSummaries_component__WEBPACK_IMPORTED_MODULE_20__["SalesSummariesComponent"],
                _Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_23__["SalesSummariesIncludeComponent"],
                _Payouts_DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_25__["DeliveriesSummariesIncludeComponent"],
                _Summaries_SalesSummary_component__WEBPACK_IMPORTED_MODULE_24__["SalesSummaryComponent"],
                _Payouts_Payout_component__WEBPACK_IMPORTED_MODULE_22__["PayoutComponent"],
                _Payouts_Payouts_component__WEBPACK_IMPORTED_MODULE_21__["PayoutsComponent"]]
        })
    ], SalesModule);
    return SalesModule;
}());



/***/ }),

/***/ 2282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesRoutes", function() { return SalesRoutes; });
/* harmony import */ var _Orders_Orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2283);
/* harmony import */ var _Orders_OrderView_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2284);
/* harmony import */ var _Returns_Returns_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2285);
/* harmony import */ var _Returns_Return_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2286);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Reviews_AdminReviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2287);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/Review/Review.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Summaries_SalesSummaries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2289);
/* harmony import */ var _Payouts_Payouts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2292);










var SalesRoutes = [
    {
        path: '',
        redirectTo: 'OrdersComponent',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'orders',
                component: _Orders_Orders_component__WEBPACK_IMPORTED_MODULE_0__["OrdersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'orderView/:id',
                component: _Orders_OrderView_component__WEBPACK_IMPORTED_MODULE_1__["OrderViewComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'returns',
                component: _Returns_Returns_component__WEBPACK_IMPORTED_MODULE_2__["ReturnsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'reviews',
                component: _Reviews_AdminReviews_component__WEBPACK_IMPORTED_MODULE_5__["AdminReviewsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: ':reviewType/:reviewTypeId/review/:reviewId',
                component: !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/Review/Review.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'return/:id',
                component: _Returns_Return_component__WEBPACK_IMPORTED_MODULE_3__["ReturnComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'summaries',
                component: _Summaries_SalesSummaries_component__WEBPACK_IMPORTED_MODULE_6__["SalesSummariesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'payouts/:id',
                component: _Payouts_Payouts_component__WEBPACK_IMPORTED_MODULE_7__["PayoutsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            }
        ]
    }
];


/***/ }),

/***/ 2283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrdersComponent = /** @class */ (function (_super) {
    __extends(OrdersComponent, _super);
    function OrdersComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.onlineOrdersColumns = ['id', 'storeName', 'customer', 'status', 'total', 'city', 'country', 'dateAdded'];
        _this.storeOrdersColumns = ['id', 'storeName', 'cashier', 'status', 'amount', 'rebate', 'qty', 'date'];
        _this.messages = '';
        _this.fromAdmin = false;
        _this.button = 'filter';
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        return _this;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        if (!(this.userId === undefined)) {
            this.fromAdmin = true;
        }
        this.clear();
        this.getStores();
        this.getOrderStatuses();
    };
    OrdersComponent.prototype.clear = function () {
        this.messages = '';
        var oType = this.searchCriteria ? this.searchCriteria.orderType : 0;
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria.orderType = oType;
        this.searchCriteria.userId = this.userId;
        this.searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.searchCriteria.storeId = this.selectedStore ? this.selectedStore.id : 0;
        this.searchCriteria.beginDate = new Date();
        this.searchCriteria.endDate = new Date();
    };
    OrdersComponent.prototype.changeOrderType = function (event) {
        this.searchCriteria.orderType = event.index;
        this.search();
    };
    OrdersComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    OrdersComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = this.userId;
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores && _this.stores.length > 0) {
                _this.selectedStore = _this.stores[0];
                _this.storeSearchCriteria.storeId = _this.stores[0].id;
                _this.search();
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    OrdersComponent.prototype.getOrderStatuses = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |langCode|' + this.appService.appInfoStorage.language.id + '|Integer');
        parameters.push('e.status = |staCode|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.OrderStatus', parameters)
            .subscribe(function (data) {
            _this.orderStatuses = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all OrderStatus complete'); });
    };
    OrdersComponent.prototype.search = function () {
        var _this = this;
        this.messages = '';
        console.log(this.searchCriteria);
        this.searchCriteria.storeId = this.selectedStore.id;
        var diff = Math.ceil((this.searchCriteria.endDate.getTime() - this.searchCriteria.beginDate.getTime()) / (1000 * 3600 * 24));
        console.log(diff);
        if (!(diff >= 0 && diff <= 30)) {
            this.translate.get(['VALIDATION.INVALID_DATE_RANGE', 'COMMON.ERROR']).subscribe(function (res) {
                _this.messages = res['VALIDATION.INVALID_DATE_RANGE'];
            });
        }
        else if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            if (this.searchCriteria.orderType === 0) {
                this.appService.saveWithUrl('/service/order/onlineOrders', this.searchCriteria)
                    .subscribe(function (data) {
                    _this.onlineDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                    _this.onlineDS.paginator = _this.onlinePG;
                    _this.onlineDS.sort = _this.onlineST;
                }, function (error) { return console.log(error); }, function () { return console.log('Get all Orders complete'); });
            }
            else {
                this.appService.saveWithUrl('/service/order/storeOrders', this.searchCriteria)
                    .subscribe(function (data) {
                    _this.storeDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                    _this.storeDS.paginator = _this.storePG;
                    _this.storeDS.sort = _this.storeST;
                }, function (error) { return console.log(error); }, function () { return console.log('Get all Orders complete'); });
            }
        }
    };
    OrdersComponent.prototype.applyFilter = function (filterValue) {
        if (this.searchCriteria.orderType === 0) {
            this.onlineDS.filter = filterValue.trim().toLowerCase();
            if (this.onlineDS.paginator) {
                this.onlineDS.paginator.firstPage();
            }
        }
        else {
            this.storeDS.filter = filterValue.trim().toLowerCase();
            if (this.storeDS.paginator) {
                this.storeDS.paginator.firstPage();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorO', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrdersComponent.prototype, "onlinePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OrdersComponent.prototype, "onlineST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorS', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrdersComponent.prototype, "storePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OrdersComponent.prototype, "storeST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OrdersComponent.prototype, "userId", void 0);
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            templateUrl: './Orders.component.html',
            styleUrls: ['./Orders.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], OrdersComponent);
    return OrdersComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OrderViewComponent = /** @class */ (function (_super) {
    __extends(OrderViewComponent, _super);
    function OrderViewComponent(appService, translate, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.displayedColumns = ['product', 'quantity', 'price', 'total'];
        _this.displayedShippingColumns = ['shippingRateTitle', 'emptyFooter1', 'emptyFooter2', 'shippingAmount'];
        _this.displayedTaxesColumns = ['taxes', 'emptyFooter7', 'emptyFooter8', 'taxAmount'];
        _this.displayedTotalColumns = ['totalAmountTitle', 'emptyFooter4', 'emptyFooter5', 'totalAmount'];
        _this.messages = '';
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeOrder = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.constants = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.orderType = 'o';
        _this.deviceInfo = null;
        _this.canEdit = false;
        return _this;
    }
    OrderViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = '';
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            var paramId = params.id;
            if (params.id === undefined || params.id === '0') {
                _this.clear();
            }
            else {
                _this.clear();
                _this.orderType = paramId.charAt(0);
                if (paramId.charAt(0) === 'o') {
                    _this.getOrder(Number(paramId.substring(1)));
                }
                else if (paramId.charAt(0) === 's') {
                    _this.getStoreOrder(Number(paramId.substring(1)));
                }
                else if (paramId.charAt(0) === 'r') {
                    _this.orderType = 's';
                    _this.getStoreOrderByRef(paramId.substring(1));
                }
            }
        });
    };
    OrderViewComponent.prototype.setCanEdit = function () {
        console.log('current user id:' + this.appService.tokenStorage.getUserId());
        console.log('store owner:' + this.store.owner.id);
        console.log('Role:' + this.appService.tokenStorage.getRole());
        if (Number(this.appService.tokenStorage.getUserId()) === this.store.owner.id ||
            Number(this.appService.tokenStorage.getRole()) === 3) { // this is the store owner
            this.canEdit = true;
        }
        else {
            this.canEdit = false;
        }
    };
    OrderViewComponent.prototype.clear = function () {
        this.order = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.storeOrder = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.store.currency = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    OrderViewComponent.prototype.getStoreOrder = function (id) {
        var _this = this;
        var parameters = [];
        parameters.push('e.id = |stta|' + id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.TabHdr', parameters, ' ')
            .subscribe(function (data) {
            _this.storeOrder = data[0];
            _this.getStore(_this.storeOrder.storeId);
            _this.setStoreOrderDetails();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Open tabs complete'); });
    };
    OrderViewComponent.prototype.getStoreOrderByRef = function (ref) {
        var _this = this;
        var parameters = [];
        parameters.push('e.refNbr = |stta|' + ref + '|String');
        this.appService.getAllByCriteria('com.softenza.emarket.model.TabHdr', parameters, ' ')
            .subscribe(function (data) {
            _this.storeOrder = data[0];
            _this.getStore(_this.storeOrder.storeId);
            _this.setStoreOrderDetails();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Open tabs complete'); });
    };
    OrderViewComponent.prototype.getStore = function (id) {
        var _this = this;
        var parameters = [];
        parameters.push('e.id = |stta|' + id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.Store', parameters, ' ')
            .subscribe(function (data) {
            _this.store = data[0];
            _this.setCanEdit();
        }, function (error) { return console.log(error); }, function () { return console.log('Get Store complete'); });
    };
    OrderViewComponent.prototype.setStoreOrderDetails = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.tabId = |tId|' + this.storeOrder.id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.TabDtl', parameters)
            .subscribe(function (data) {
            if (data && data.length > 0) {
                _this.storeOrder.tabDtls = data;
                _this.storeDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.storeOrder.tabDtls);
                _this.storeDS.paginator = _this.storePG;
                _this.storeDS.sort = _this.storeST;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all TabDtl  complete'); });
    };
    OrderViewComponent.prototype.getOrder = function (orderId) {
        var _this = this;
        if (orderId > 0) {
            this.appService.getOneWithChildsAndFiles(orderId, 'Order')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.order = result;
                    _this.getStore(_this.order.storeId);
                    _this.order.orderOptionMap = {};
                    _this.order.orderOptions.forEach(function (item) {
                        if (_this.order.orderOptionMap[item.name] === undefined) {
                            _this.order.orderOptionMap[item.name] = [];
                        }
                        _this.order.orderOptionMap[item.name].push(item);
                    });
                    _this.onlineDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.order.orderProducts);
                    _this.onlineDS.paginator = _this.onlinePG;
                    _this.onlineDS.sort = _this.onlineST;
                }
                else {
                    _this.order = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    OrderViewComponent.prototype.applyFilter = function (filterValue) {
        if (this.orderType === 'o') {
            this.onlineDS.filter = filterValue.trim().toLowerCase();
            if (this.onlineDS.paginator) {
                this.onlineDS.paginator.firstPage();
            }
        }
        else {
            this.storeDS.filter = filterValue.trim().toLowerCase();
            if (this.storeDS.paginator) {
                this.storeDS.paginator.firstPage();
            }
        }
    };
    OrderViewComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    OrderViewComponent.prototype.updateStoreOrder = function () {
        var _this = this;
        this.messages = '';
        this.storeOrder.exRcpt = (this.storeOrder.exRcpt == null
            || this.storeOrder.exRcpt.toString() === 'false'
            || this.storeOrder.exRcpt.toString() === '0') ? 0 : 1;
        this.appService.save(this.storeOrder, 'TabHdr')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.storeOrder = result;
                _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_UNSUCCESS'];
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorO', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrderViewComponent.prototype, "onlinePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OrderViewComponent.prototype, "onlineST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorS', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrderViewComponent.prototype, "storePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OrderViewComponent.prototype, "storeST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OrderViewComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], OrderViewComponent.prototype, "order", void 0);
    OrderViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-overview',
            templateUrl: './OrderView.component.html',
            styleUrls: ['./Orders.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], OrderViewComponent);
    return OrderViewComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsComponent", function() { return ReturnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReturnsComponent = /** @class */ (function (_super) {
    __extends(ReturnsComponent, _super);
    function ReturnsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['id', 'orderId', 'customer', 'status', 'dateAdded', 'dateModified', 'actions'];
        _this.messages = '';
        return _this;
    }
    ReturnsComponent.prototype.ngOnInit = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.search();
        this.getReturnStatuses();
        this.getReturnReasons();
        this.getReturnActions();
    };
    ReturnsComponent.prototype.getReturnStatuses = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.ReturnStatus', parameters)
            .subscribe(function (data) {
            _this.returnStatuses = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReturnStatus complete'); });
    };
    ReturnsComponent.prototype.getReturnActions = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.ReturnAction', parameters)
            .subscribe(function (data) {
            _this.returnActions = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReturnActions complete'); });
    };
    ReturnsComponent.prototype.getReturnReasons = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.ReturnReason', parameters)
            .subscribe(function (data) {
            _this.returnReasons = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReturnReasons complete'); });
    };
    ReturnsComponent.prototype.search = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/order/returns', this.searchCriteria)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Returns complete'); });
    };
    ReturnsComponent.prototype.remove = function (orderReturn) {
        var _this = this;
        this.messages = '';
        this.appService.delete(orderReturn.id, 'Return')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(orderReturn);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    ReturnsComponent.prototype.getProducts = function (orderReturn) {
        return orderReturn.returnProducts !== null ? orderReturn.returnProducts[0].productName : '';
    };
    ReturnsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReturnsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReturnsComponent.prototype, "sort", void 0);
    ReturnsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-returns',
            templateUrl: './Returns.component.html',
            styleUrls: ['./Returns.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReturnsComponent);
    return ReturnsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnComponent", function() { return ReturnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReturnComponent = /** @class */ (function (_super) {
    __extends(ReturnComponent, _super);
    function ReturnComponent(appService, translate, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.messages = '';
        _this.displayedColumns = ['product', 'model', 'quantity', 'returnReason', 'opened', 'comment', 'actions'];
        _this.constants = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.order = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.appService.refreshReferenceData('ReturnAction', undefined);
        _this.appService.refreshReferenceData('ReturnStatus', undefined);
        _this.appService.refreshReferenceData('ReturnReason', undefined);
        return _this;
    }
    ReturnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getReturn(params.id);
            }
        });
    };
    ReturnComponent.prototype.clear = function () {
        this.orderReturn = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.orderId = undefined;
    };
    ReturnComponent.prototype.getReturn = function (returnId) {
        var _this = this;
        if (returnId > 0) {
            this.appService.getOneWithChildsAndFiles(returnId, 'Return')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.orderReturn = result;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.orderReturn.returnProducts);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.getOrder();
                }
                else {
                    _this.orderReturn = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    ReturnComponent.prototype.getOrder = function () {
        var _this = this;
        this.messages = '';
        if (this.orderId > 0) {
            this.appService.getOneWithChildsAndFiles(this.orderId, 'Order')
                .subscribe(function (result) {
                if (result !== null && result.id > 0) {
                    _this.orderReturn.order.id = result.id;
                    _this.orderReturn.customerId = result.userId;
                    _this.order = result;
                    _this.filteredOrderProducts = _this.order.orderProducts;
                }
                else {
                    _this.orderReturn.order.id = undefined;
                    _this.orderReturn.customerId = undefined;
                    _this.translate.get(['COMMON.READ', 'MESSAGE.INVALID_ORDER_ID']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.INVALID_ORDER_ID'];
                    });
                }
            });
        }
    };
    ReturnComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        console.info(this.orderReturn);
        try {
            this.appService.save(this.orderReturn, 'Return')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.orderReturn.id = result.id;
                    _this.processResult(result, _this.orderReturn, null);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    ReturnComponent.prototype.addProduct = function () {
        this.orderReturn.returnProducts.push(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.orderReturn.returnProducts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ReturnComponent.prototype.filterProducts = function (val) {
        if (val) {
            var filterValue_1 = typeof val === 'string' ? val.toLowerCase() : val.name.toLowerCase();
            this.filteredOrderProducts = this.order.orderProducts.filter(function (op) { return op.name.toLowerCase().startsWith(filterValue_1); });
        }
        return this.order.orderProducts;
    };
    ReturnComponent.prototype.deleteReturnProduct = function (returnProduct, index) {
        var _this = this;
        if (returnProduct.id === undefined || returnProduct.id === null) {
            this.orderReturn.returnProducts.splice(index, 1);
            return;
        }
        this.appService.delete(returnProduct.id, 'ReturnProduct')
            .subscribe(function (data) {
            _this.processDataSourceDeleteResult(data, _this.messages, returnProduct, _this.dataSource);
        });
    };
    ReturnComponent.prototype.setSelectedValue = function (returnProduct, option) {
        returnProduct.product = option.product;
        returnProduct.model = option.product.model;
    };
    ReturnComponent.prototype.setToggleValues = function (returnProduct) {
        returnProduct.opened = (returnProduct.opened === null
            || returnProduct.opened === undefined
            || returnProduct.opened.toString() === 'false'
            || returnProduct.opened.toString() === '0') ? 0 : 1;
    };
    ReturnComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ReturnComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ReturnComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReturnComponent.prototype, "returnStatuses", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReturnComponent.prototype, "returnActions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReturnComponent.prototype, "returnReasons", void 0);
    ReturnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return',
            templateUrl: './Return.component.html',
            styleUrls: ['./Returns.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ReturnComponent);
    return ReturnComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ 2287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReviewsComponent", function() { return AdminReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _ReviewsTable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2288);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminReviewsComponent = /** @class */ (function (_super) {
    __extends(AdminReviewsComponent, _super);
    function AdminReviewsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.messages = '';
        _this.button = 'filter';
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.srSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.reviews = [];
        _this.colors = ['primary', 'secondary'];
        _this.stores = [];
        _this.productFirstLoad = true;
        _this.storeFirstLoad = true;
        return _this;
    }
    AdminReviewsComponent.prototype.ngOnInit = function () {
        this.clear();
        this.getStores();
    };
    AdminReviewsComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    AdminReviewsComponent.prototype.clear = function () {
        var oldReviewType = (this.searchCriteria.reviewType === undefined ? 0 : this.searchCriteria.reviewType);
        var oldReviewTypeString = (this.searchCriteria.reviewTypeString === undefined ? 'product' : this.searchCriteria.reviewTypeString);
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria.languageId = this.appService.appInfoStorage.language.id;
        this.searchCriteria.approvalStatus = 0;
        this.searchCriteria.status = 1;
        this.searchCriteria.reviewType = oldReviewType;
        this.searchCriteria.reviewTypeString = oldReviewTypeString;
    };
    AdminReviewsComponent.prototype.changeReviewType = function (event) {
        this.searchCriteria.reviewType = event.index;
        this.searchCriteria.reviewTypeString = event.index === 0 ? 'product' : 'store';
        if (this.searchCriteria.reviewType === 0) {
            this.storeReviewComponent.productReviewsColumns = ['id', 'productName', 'author', 'headline', 'comments', 'enabled',
                'approved', 'createDate'];
        }
        else {
            this.storeReviewComponent.productReviewsColumns = ['id', 'storeName', 'author', 'headline', 'comments', 'enabled',
                'approved', 'createDate'];
        }
        if (event.index === 0 && this.productFirstLoad) {
            this.search();
            this.productFirstLoad = false;
        }
        if (event.index === 1 && this.storeFirstLoad) {
            this.search();
            this.storeFirstLoad = false;
        }
    };
    AdminReviewsComponent.prototype.getStores = function () {
        var _this = this;
        this.srSearchCriteria.approvalStatus = 0;
        this.appService.saveWithUrl('/service/catalog/stores', this.srSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    AdminReviewsComponent.prototype.search = function () {
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            if (this.searchCriteria.reviewType === 0) {
                this.productReviewComponent.searchCriteria = this.searchCriteria;
                this.productReviewComponent.productReviewsColumns = ['id', 'productName', 'author', 'headline', 'comments', 'enabled',
                    'approved', 'createDate'];
                this.productReviewComponent.search();
            }
            else {
                this.storeReviewComponent.searchCriteria = this.searchCriteria;
                this.storeReviewComponent.productReviewsColumns = ['id', 'storeName', 'author', 'headline', 'comments', 'enabled',
                    'approved', 'createDate'];
                this.storeReviewComponent.search();
            }
        }
    };
    AdminReviewsComponent.prototype.applyFilter = function (filterValue) {
        if (this.searchCriteria.reviewType === 0) {
            this.productReviewComponent.applyFilter(filterValue);
        }
        else {
            this.storeReviewComponent.applyFilter(filterValue);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ProductReviewComponent', { static: false }),
        __metadata("design:type", _ReviewsTable_component__WEBPACK_IMPORTED_MODULE_4__["ReviewsTableComponent"])
    ], AdminReviewsComponent.prototype, "productReviewComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('StoreReviewComponent', { static: false }),
        __metadata("design:type", _ReviewsTable_component__WEBPACK_IMPORTED_MODULE_4__["ReviewsTableComponent"])
    ], AdminReviewsComponent.prototype, "storeReviewComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AdminReviewsComponent.prototype, "userId", void 0);
    AdminReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-reviews',
            templateUrl: './AdminReviews.component.html',
            styleUrls: ['./AdminReviews.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AdminReviewsComponent);
    return AdminReviewsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ 2288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsTableComponent", function() { return ReviewsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReviewsTableComponent = /** @class */ (function (_super) {
    __extends(ReviewsTableComponent, _super);
    function ReviewsTableComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.productReviewsColumns = ['id', 'productName', 'author', 'headline', 'comments', 'enabled',
            'approved', 'createDate'];
        _this.messages = '';
        _this.button = 'filter';
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.reviews = [];
        _this.colors = ['primary', 'secondary'];
        return _this;
    }
    ReviewsTableComponent.prototype.ngOnInit = function () {
    };
    ReviewsTableComponent.prototype.search = function () {
        var _this = this;
        this.setToggleValues();
        this.appService.saveWithUrl('/service/order/reviews', this.searchCriteria)
            .subscribe(function (data) {
            _this.productReviewsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.productReviewsDatasource.paginator = _this.productReviewsPaginator;
            _this.productReviewsDatasource.sort = _this.productReviewsSort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Reviews complete'); });
    };
    ReviewsTableComponent.prototype.applyFilter = function (filterValue) {
        if (this.searchCriteria.reviewType === 0) {
            this.productReviewsDatasource.filter = filterValue.trim().toLowerCase();
            if (this.productReviewsDatasource.paginator) {
                this.productReviewsDatasource.paginator.firstPage();
            }
        }
    };
    ReviewsTableComponent.prototype.setToggleValues = function () {
        if (this.searchCriteria.status !== null && this.searchCriteria.status !== undefined) {
            this.searchCriteria.status = this.searchCriteria.status.toString() === 'false'
                || this.searchCriteria.status.toString() === '0' ? 0 : 1;
        }
        if (this.searchCriteria.approvalStatus !== null && this.searchCriteria.approvalStatus !== undefined) {
            this.searchCriteria.approvalStatus = this.searchCriteria.approvalStatus.toString() === 'false'
                || this.searchCriteria.approvalStatus.toString() === '0' ? 0 : 1;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ProductMatPaginator', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReviewsTableComponent.prototype, "productReviewsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReviewsTableComponent.prototype, "productReviewsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ReviewsTableComponent.prototype, "userId", void 0);
    ReviewsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews-table',
            templateUrl: './ReviewsTable.component.html',
            styleUrls: ['./AdminReviews.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReviewsTableComponent);
    return ReviewsTableComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesSummariesComponent", function() { return SalesSummariesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _SalesSummary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2290);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SalesSummariesComponent = /** @class */ (function (_super) {
    __extends(SalesSummariesComponent, _super);
    function SalesSummariesComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.salesSummariesColumns = ['storeName', 'monthyear',
            'paymentMethod', 'total', 'processingFees', 'totalDue',
            'totalPaid', 'status', 'actions'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](0);
        return _this;
    }
    SalesSummariesComponent.prototype.ngOnInit = function () {
        this.clear();
        this.getStores();
        this.isAdminPage = !this.userId;
    };
    SalesSummariesComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        this.searchCriteria.endDate = new Date();
        var beginDate = new Date();
        beginDate.setFullYear(this.searchCriteria.endDate.getFullYear() - 1);
        this.searchCriteria.beginDate = beginDate;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
        this.search();
    };
    SalesSummariesComponent.prototype.clear = function () {
        // this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    SalesSummariesComponent.prototype.changeOrderType = function (event) {
    };
    SalesSummariesComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = this.userId;
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    SalesSummariesComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = this.userId;
            this.appService.saveWithUrl('/service/order/salesSummaries', this.searchCriteria)
                .subscribe(function (data) {
                _this.salesSummariesDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.salesSummariesDatasource.paginator = _this.salesSummariesPaginator;
                _this.salesSummariesDatasource.sort = _this.salesSummariesSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all sales summaries complete'); });
        }
    };
    SalesSummariesComponent.prototype.applyFilter = function (filterValue) {
        this.salesSummariesDatasource.filter = filterValue.trim().toLowerCase();
        if (this.salesSummariesDatasource.paginator) {
            this.salesSummariesDatasource.paginator.firstPage();
        }
    };
    SalesSummariesComponent.prototype.acknowledgeSalesSummary = function (ssId) {
        var _this = this;
        this.messages = '';
        var ss = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        ss.id = ssId;
        ss.acknowledger.id = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/order/acknowledgeSalesSummary/', ss)
            .subscribe(function (data) {
            _this.processResult(data, ss, null);
            _this.search();
        }, function (error) { return console.log(error); }, function () { return console.log('Aknowledgement complete'); });
    };
    SalesSummariesComponent.prototype.getSalesSummaryDetails = function (salesSummaryId, payoutId) {
        this.salesSummaryComponent.getSalesSummary(salesSummaryId);
        this.salesSummaryComponent.getPayout(payoutId);
        this.selected.setValue(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorSalesSummaries', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SalesSummariesComponent.prototype, "salesSummariesPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SalesSummariesComponent.prototype, "salesSummariesSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_SalesSummary_component__WEBPACK_IMPORTED_MODULE_7__["SalesSummaryComponent"], { static: false }),
        __metadata("design:type", _SalesSummary_component__WEBPACK_IMPORTED_MODULE_7__["SalesSummaryComponent"])
    ], SalesSummariesComponent.prototype, "salesSummaryComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SalesSummariesComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SalesSummariesComponent.prototype, "isAdminPage", void 0);
    SalesSummariesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-summaries',
            templateUrl: './SalesSummaries.component.html',
            styleUrls: ['./SalesSummaries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]])
    ], SalesSummariesComponent);
    return SalesSummariesComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesSummaryComponent", function() { return SalesSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2291);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SalesSummaryComponent = /** @class */ (function (_super) {
    __extends(SalesSummaryComponent, _super);
    function SalesSummaryComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.messages = '';
        _this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.salesSummary = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.constants = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.picture = [];
        _this.payoutSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        return _this;
    }
    SalesSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.salesSummary.id = params.id;
                _this.clear();
                _this.getPayout(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    SalesSummaryComponent.prototype.clear = function () {
        this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.payout.status = 1;
    };
    SalesSummaryComponent.prototype.getSalesSummary = function (salesSummaryId) {
        var _this = this;
        this.messages = '';
        if (salesSummaryId > 0) {
            this.appService.getOneWithChildsAndFiles(salesSummaryId, 'SalesSummary')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.salesSummary = result;
                }
                else {
                    _this.salesSummary = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    SalesSummaryComponent.prototype.getPayout = function (payoutId) {
        var _this = this;
        this.messages = '';
        if (payoutId > 0) {
            this.appService.getOneWithChildsAndFiles(payoutId, 'Payout')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.payout = result;
                    setTimeout(function () {
                        _this.salesSummariesIncludeComponent.selectedCurrency = _this.payout.currency;
                        _this.salesSummariesIncludeComponent.setDataSource(_this.payout.salesSummaryVOs, 'fromSalesSummaryDetails', _this.payout.total);
                    }, 500);
                    var images = [];
                    var image = {
                        link: 'assets/images/payouts/' + _this.payout.id + '/' + _this.payout.image,
                        preview: 'assets/images/payouts/' + _this.payout.id + '/' + _this.payout.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    SalesSummaryComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    SalesSummaryComponent.prototype.acknowledgeSalesSummary = function () {
        var _this = this;
        this.messages = '';
        this.salesSummary.acknowledger.id = +this.appService.tokenStorage.getUserId();
        this.salesSummary.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/order/acknowledgeSalesSummary/', this.salesSummary)
            .subscribe(function (data) {
            _this.processResult(data, _this.salesSummary, null);
            _this.getSalesSummary(data.id);
            _this.getPayout(_this.payout.id);
        }, function (error) { return console.log(error); }, function () { return console.log('Aknowledgement complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepper"])
    ], SalesSummaryComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_5__["SalesSummariesIncludeComponent"], { static: false }),
        __metadata("design:type", _Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_5__["SalesSummariesIncludeComponent"])
    ], SalesSummaryComponent.prototype, "salesSummariesIncludeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SalesSummaryComponent.prototype, "payoutSaveEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SalesSummaryComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SalesSummaryComponent.prototype, "canAcknowledge", void 0);
    SalesSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-summary',
            templateUrl: './SalesSummary.component.html',
            styleUrls: ['./SalesSummaries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], SalesSummaryComponent);
    return SalesSummaryComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ 2291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesSummariesIncludeComponent", function() { return SalesSummariesIncludeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(452);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SalesSummariesIncludeComponent = /** @class */ (function (_super) {
    __extends(SalesSummariesIncludeComponent, _super);
    function SalesSummariesIncludeComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.salesSummariesColumns = ['select', 'monthyear', 'paymentMethod', 'total', 'processingFees', 'totalDue', 'totalPaid', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.action = '';
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.initialSelection = [];
        _this.allowMultiSelect = true;
        _this.totalDue = 0;
        _this.totalDueCompleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectSalesSummaryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectedSalesSummaryIds = [];
        _this.theaction = 'add';
        return _this;
    }
    SalesSummariesIncludeComponent.prototype.ngOnInit = function () {
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.clear();
    };
    SalesSummariesIncludeComponent.prototype.clear = function () {
        this.searchCriteria.userId = this.userId;
    };
    SalesSummariesIncludeComponent.prototype.changeOrderType = function (event) {
        this.search();
    };
    SalesSummariesIncludeComponent.prototype.search = function () {
        var _this = this;
        this.totalDue = 0;
        this.selection.clear();
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.appService.saveWithUrl('/service/order/salesSummaries', this.searchCriteria)
                .subscribe(function (data) {
                _this.salesSummariesDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.salesSummariesDatasource.paginator = _this.salesSummariesPaginator;
                _this.salesSummariesDatasource.sort = _this.salesSummariesSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all sales summaries complete'); });
        }
    };
    SalesSummariesIncludeComponent.prototype.applyFilter = function (filterValue) {
        this.salesSummariesDatasource.filter = filterValue.trim().toLowerCase();
        if (this.salesSummariesDatasource.paginator) {
            this.salesSummariesDatasource.paginator.firstPage();
        }
    };
    /** Whether the number of selected elements matches the total number of rows. */
    SalesSummariesIncludeComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.salesSummariesDatasource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    SalesSummariesIncludeComponent.prototype.masterToggle = function () {
        var _this = this;
        this.totalDue = 0;
        this.selectedSalesSummaryIds = [];
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.salesSummariesDatasource.data.forEach(function (row) {
                _this.selection.select(row);
                _this.totalDue += row.totalDue;
                _this.selectedSalesSummaryIds.push(row.id);
            });
        }
        var payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        payout.total = this.totalDue;
        payout.salesSummaryIds = this.selectedSalesSummaryIds;
        this.totalDueCompleteEvent.emit(payout);
    };
    SalesSummariesIncludeComponent.prototype.calculateTotalDue = function (row) {
        var _this = this;
        this.selection.toggle(row);
        this.totalDue = 0;
        this.selectedSalesSummaryIds = [];
        this.salesSummariesDatasource.data.forEach(function (row) {
            if (_this.selection.isSelected(row)) {
                _this.totalDue += row.totalDue;
                _this.selectedSalesSummaryIds.push(row.id);
            }
        });
        var payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        payout.total = this.totalDue;
        payout.salesSummaryIds = this.selectedSalesSummaryIds;
        this.totalDueCompleteEvent.emit(payout);
    };
    SalesSummariesIncludeComponent.prototype.setDataSource = function (data, action, total) {
        this.action = action;
        if (this.theaction !== 'add' && this.salesSummariesColumns[0] === 'select') {
            this.salesSummariesColumns.splice(0, 1);
        }
        if (total) {
            this.totalDue = total;
        }
        this.salesSummariesDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.salesSummariesDatasource.paginator = this.salesSummariesPaginator;
        this.salesSummariesDatasource.sort = this.salesSummariesSort;
    };
    SalesSummariesIncludeComponent.prototype.selectSalesSummary = function (ss) {
        // console.log(ss)
        this.selectSalesSummaryEvent.emit(ss);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorSalesSummaries', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SalesSummariesIncludeComponent.prototype, "salesSummariesPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SalesSummariesIncludeComponent.prototype, "salesSummariesSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SalesSummariesIncludeComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SalesSummariesIncludeComponent.prototype, "totalDueCompleteEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SalesSummariesIncludeComponent.prototype, "selectSalesSummaryEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SalesSummariesIncludeComponent.prototype, "theaction", void 0);
    SalesSummariesIncludeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-summaries-include',
            templateUrl: './SalesSummariesInclude.component.html',
            styleUrls: ['./SalesSummaries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], SalesSummariesIncludeComponent);
    return SalesSummariesIncludeComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutsComponent", function() { return PayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(439);
/* harmony import */ var _Payout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2293);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PayoutsComponent = /** @class */ (function (_super) {
    __extends(PayoutsComponent, _super);
    function PayoutsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.payoutColumns = ['id', 'payoutDate', 'storeName', 'year', 'total', 'proofPayoutId', 'dateAdded', 'reversePayoutId', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = true;
        _this.canAcknowledge = false;
        _this.type = 'sale';
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](0);
        return _this;
    }
    PayoutsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type === 'delivery') {
            this.payoutColumns[2] = 'shipperName';
            this.searchCriteria.typeString = this.type;
        }
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || +params.id === 0) {
                setTimeout(function () {
                    _this.selected.setValue(0);
                    _this.searchCriteria.storeId = 0;
                    _this.clear();
                    _this.getStores();
                    _this.search();
                }, 500);
            }
            else {
                _this.clear();
                _this.getStores();
                setTimeout(function () {
                    _this.selectPayout(params.id);
                }, 500);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/sales/payouts'));
        });
    };
    PayoutsComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    PayoutsComponent.prototype.selectPayout = function (payoutId) {
        this.payoutComponent.canAcknowledge = this.canAcknowledge;
        this.payoutComponent.getPayout(payoutId);
        this.selected.setValue(1);
    };
    PayoutsComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            _this.payoutComponent.stores = _this.stores;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    PayoutsComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.typeString = this.type;
            this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
            this.appService.saveWithUrl('/service/order/payouts', this.searchCriteria)
                .subscribe(function (data) {
                _this.payoutDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.payoutDatasource.paginator = _this.payoutPaginator;
                _this.payoutDatasource.sort = _this.payoutSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all payout complete'); });
        }
    };
    PayoutsComponent.prototype.applyFilter = function (filterValue) {
        this.payoutDatasource.filter = filterValue.trim().toLowerCase();
        if (this.payoutDatasource.paginator) {
            this.payoutDatasource.paginator.firstPage();
        }
    };
    PayoutsComponent.prototype.setToggleValues = function () {
        this.searchCriteria.status = (this.searchCriteria.status === null || this.searchCriteria.status === undefined
            || this.searchCriteria.status.toString() === 'false' || this.searchCriteria.status.toString() === '0') ? 0 : 1;
    };
    PayoutsComponent.prototype.updateDataTable = function (payoutVo) {
        this.updateDatasourceData(this.payoutDatasource, this.payoutPaginator, this.payoutSort, payoutVo);
        this.payoutComponent.getPayout(payoutVo.id, false);
    };
    PayoutsComponent.prototype.openSearchPopup = function () {
        this.appService.shipperSearch(this.searchCriteria).
            subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); }, function () { return console.log('Shipper search done... '); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorPayout', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], PayoutsComponent.prototype, "payoutPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PayoutsComponent.prototype, "payoutSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Payout_component__WEBPACK_IMPORTED_MODULE_8__["PayoutComponent"], { static: false }),
        __metadata("design:type", _Payout_component__WEBPACK_IMPORTED_MODULE_8__["PayoutComponent"])
    ], PayoutsComponent.prototype, "payoutComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PayoutsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayoutsComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayoutsComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayoutsComponent.prototype, "type", void 0);
    PayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payouts',
            templateUrl: './Payouts.component.html',
            styleUrls: ['./Payouts.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]])
    ], PayoutsComponent);
    return PayoutsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutComponent", function() { return PayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2291);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2294);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PayoutComponent = /** @class */ (function (_super) {
    __extends(PayoutComponent, _super);
    function PayoutComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.messages = '';
        _this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.constants = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.picture = [];
        _this.payoutSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.type = 'sale';
        return _this;
    }
    PayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.payout.id = params.id;
                _this.clear();
                _this.getPayout(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    PayoutComponent.prototype.clear = function () {
        this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.payout.status = 1;
    };
    PayoutComponent.prototype.getPayout = function (payoutId, clearMessages) {
        var _this = this;
        if (clearMessages === void 0) { clearMessages = true; }
        if (clearMessages) {
            this.messages = '';
        }
        if (payoutId > 0) {
            this.appService.getOneWithChildsAndFiles(payoutId, 'Payout')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.payout = result;
                    _this.payout.payoutDate = new Date(_this.payout.payoutDate);
                    setTimeout(function () {
                        if (_this.type === 'sale' && !_this.payout.reversePayoutId) {
                            _this.salesSummariesIncludeComponent.selectedCurrency = _this.payout.currency;
                            _this.salesSummariesIncludeComponent.setDataSource(_this.payout.salesSummaryVOs, 'edit', _this.payout.total);
                        }
                        if (_this.type === 'delivery' && !_this.payout.reversePayoutId) {
                            _this.deliveriesSummariesIncludeComponent.selectedCurrency = _this.payout.currency;
                            _this.deliveriesSummariesIncludeComponent.setDataSource(_this.payout.deliveriesSummaryVOs, 'edit', _this.payout.total);
                        }
                    }, 500);
                    var images = [];
                    var image = {
                        link: 'assets/images/payouts/' + _this.payout.id + '/' + _this.payout.image,
                        preview: 'assets/images/payouts/' + _this.payout.id + '/' + _this.payout.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            this.payout.status = 1;
        }
    };
    PayoutComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        if (this.type === 'sale') {
            this.payout.currency = this.payout.store.currency;
        }
        this.payout.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (this.type === 'delivery' && this.payout.shipperId) {
            this.payout.shipper.id = this.payout.shipperId;
        }
        if (!this.payout.id) {
            this.payout.payer.id = +this.appService.tokenStorage.getUserId();
        }
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.saveWithFileUsingUrl('/service/order/savePayout/', this.payout, this.formData)
            .subscribe(function (data) {
            _this.processResult(data, _this.payout, null);
            _this.payout = data;
            _this.payoutSaveEvent.emit(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this.payout));
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getProductsForCategoryForSale complete'); });
    };
    PayoutComponent.prototype.saveSimple = function () {
        var _this = this;
        this.messages = '';
        try {
            this.appService.save(this.payout, 'Payout')
                .subscribe(function (data) {
                _this.processResult(data, _this.payout, null);
                _this.payout = data;
                _this.payoutSaveEvent.emit(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this.payout));
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    PayoutComponent.prototype.reverse = function () {
        this.payout.reversePayoutId = this.payout.id;
        this.payout.id = undefined;
        this.payout.status = 3;
        this.payout.total = -this.payout.total;
        this.payout.salesSummarys = [];
        this.save();
    };
    PayoutComponent.prototype.acknowledge = function () {
        this.payout.status = 2;
        this.payout.salesSummarys = [];
        this.saveSimple();
    };
    PayoutComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    PayoutComponent.prototype.searchSalesSummaries = function () {
        if (this.salesSummariesIncludeComponent) {
            this.payout.total = 0;
            var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            searchCriteria.storeId = this.payout.store.id;
            searchCriteria.currencyId = this.payout.store.currency.id;
            searchCriteria.year = this.payout.year;
            searchCriteria.totalDueGreaterThan = 0;
            searchCriteria.status = 1;
            this.salesSummariesIncludeComponent.searchCriteria = searchCriteria;
            this.salesSummariesIncludeComponent.selectedCurrency = this.payout.store.currency;
            this.salesSummariesIncludeComponent.search();
            this.stepper.selectedIndex = 1;
        }
    };
    PayoutComponent.prototype.searchDeliveriesSummaries = function () {
        if (this.deliveriesSummariesIncludeComponent) {
            this.payout.total = 0;
            var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            searchCriteria.storeId = this.payout.store.id;
            searchCriteria.currencyId = this.payout.store.currency.id;
            searchCriteria.year = this.payout.year;
            searchCriteria.totalDueGreaterThan = 0;
            searchCriteria.status = 1;
            this.deliveriesSummariesIncludeComponent.searchCriteria = searchCriteria;
            this.deliveriesSummariesIncludeComponent.selectedCurrency = this.payout.store.currency;
            this.deliveriesSummariesIncludeComponent.search();
            this.stepper.selectedIndex = 1;
        }
    };
    PayoutComponent.prototype.updateTotalDue = function (payout) {
        this.payout.total = payout.total;
        this.payout.salesSummaryIds = payout.salesSummaryIds;
        this.payout.deliveriesSummaryIds = payout.deliveriesSummaryIds;
        this.payout.currency = payout.currency;
    };
    PayoutComponent.prototype.openSearchPopup = function () {
        this.appService.shipperSearch(this.payout).
            subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); }, function () { return console.log('Shipper search done... '); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepper"])
    ], PayoutComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_5__["SalesSummariesIncludeComponent"], { static: false }),
        __metadata("design:type", _Summaries_SalesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_5__["SalesSummariesIncludeComponent"])
    ], PayoutComponent.prototype, "salesSummariesIncludeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_8__["DeliveriesSummariesIncludeComponent"], { static: false }),
        __metadata("design:type", _DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_8__["DeliveriesSummariesIncludeComponent"])
    ], PayoutComponent.prototype, "deliveriesSummariesIncludeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PayoutComponent.prototype, "payoutSaveEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayoutComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayoutComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayoutComponent.prototype, "type", void 0);
    PayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payout',
            templateUrl: './Payout.component.html',
            styleUrls: ['./Payouts.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], PayoutComponent);
    return PayoutComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ 2294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveriesSummariesIncludeComponent", function() { return DeliveriesSummariesIncludeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(452);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DeliveriesSummariesIncludeComponent = /** @class */ (function (_super) {
    __extends(DeliveriesSummariesIncludeComponent, _super);
    function DeliveriesSummariesIncludeComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.deliveriesSummariesColumns = ['select', 'monthyear', 'paymentMethod', 'total', 'processingFees', 'totalDue', 'totalPaid', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.action = '';
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.initialSelection = [];
        _this.allowMultiSelect = true;
        _this.totalDue = 0;
        _this.totalDueCompleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectDeliveriesSummaryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectedDeliveriesSummaryIds = [];
        _this.currency = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.theaction = 'add';
        return _this;
    }
    DeliveriesSummariesIncludeComponent.prototype.ngOnInit = function () {
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.clear();
    };
    DeliveriesSummariesIncludeComponent.prototype.clear = function () {
        this.searchCriteria.userId = this.userId;
    };
    DeliveriesSummariesIncludeComponent.prototype.changeOrderType = function (event) {
        this.search();
    };
    DeliveriesSummariesIncludeComponent.prototype.search = function () {
        var _this = this;
        console.log('Searching ...');
        this.totalDue = 0;
        this.selection.clear();
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.appService.saveWithUrl('/service/order/deliveriesSummaries', this.searchCriteria)
                .subscribe(function (data) {
                _this.deliveriesSummariesDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.deliveriesSummariesDatasource.paginator = _this.deliveriesSummariesPaginator;
                _this.deliveriesSummariesDatasource.sort = _this.deliveriesSummariesSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all sales summaries complete'); });
        }
    };
    DeliveriesSummariesIncludeComponent.prototype.applyFilter = function (filterValue) {
        this.deliveriesSummariesDatasource.filter = filterValue.trim().toLowerCase();
        if (this.deliveriesSummariesDatasource.paginator) {
            this.deliveriesSummariesDatasource.paginator.firstPage();
        }
    };
    /** Whether the number of selected elements matches the total number of rows. */
    DeliveriesSummariesIncludeComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.deliveriesSummariesDatasource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    DeliveriesSummariesIncludeComponent.prototype.masterToggle = function () {
        var _this = this;
        this.totalDue = 0;
        this.selectedDeliveriesSummaryIds = [];
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else {
            this.deliveriesSummariesDatasource.data.forEach(function (row) {
                _this.selection.select(row);
                _this.totalDue += row.totalDue;
                _this.selectedDeliveriesSummaryIds.push(row.id);
                _this.currency.id = row.currencyId;
            });
        }
        var payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        payout.total = this.totalDue;
        payout.deliveriesSummaryIds = this.selectedDeliveriesSummaryIds;
        payout.currency = this.currency;
        this.totalDueCompleteEvent.emit(payout);
    };
    DeliveriesSummariesIncludeComponent.prototype.calculateTotalDue = function (row) {
        var _this = this;
        this.selection.toggle(row);
        this.totalDue = 0;
        this.selectedDeliveriesSummaryIds = [];
        this.deliveriesSummariesDatasource.data.forEach(function (row) {
            if (_this.selection.isSelected(row)) {
                _this.totalDue += row.totalDue;
                _this.selectedDeliveriesSummaryIds.push(row.id);
                _this.currency.id = row.currencyId;
            }
        });
        var payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        payout.total = this.totalDue;
        payout.deliveriesSummaryIds = this.selectedDeliveriesSummaryIds;
        payout.currency = this.currency;
        this.totalDueCompleteEvent.emit(payout);
    };
    DeliveriesSummariesIncludeComponent.prototype.setDataSource = function (data, action, total) {
        this.action = action;
        if (this.theaction !== 'add' && this.deliveriesSummariesColumns[0] === 'select') {
            this.deliveriesSummariesColumns.splice(0, 1);
        }
        if (total) {
            this.totalDue = total;
        }
        if (!data || data.length === 0) {
            this.totalDue = null;
        }
        this.deliveriesSummariesDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.deliveriesSummariesDatasource.paginator = this.deliveriesSummariesPaginator;
        this.deliveriesSummariesDatasource.sort = this.deliveriesSummariesSort;
    };
    DeliveriesSummariesIncludeComponent.prototype.selectDeliveriesSummary = function (ss) {
        // console.log(ss)
        this.selectDeliveriesSummaryEvent.emit(ss);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorDeliveriesSummaries', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DeliveriesSummariesIncludeComponent.prototype, "deliveriesSummariesPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DeliveriesSummariesIncludeComponent.prototype, "deliveriesSummariesSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeliveriesSummariesIncludeComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeliveriesSummariesIncludeComponent.prototype, "totalDueCompleteEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeliveriesSummariesIncludeComponent.prototype, "selectDeliveriesSummaryEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeliveriesSummariesIncludeComponent.prototype, "theaction", void 0);
    DeliveriesSummariesIncludeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deliveries-summaries-include',
            templateUrl: './DeliveriesSummariesInclude.component.html',
            styleUrls: ['./Payouts.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], DeliveriesSummariesIncludeComponent);
    return DeliveriesSummariesIncludeComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderHistoryComponent = /** @class */ (function (_super) {
    __extends(OrderHistoryComponent, _super);
    function OrderHistoryComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['dateAdded', 'user', 'comment', 'status'];
        _this.messages = '';
        _this.errors = '';
        _this.orderStatuses = [];
        _this.filteredOrderStatuses = [];
        _this.orderHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.canEdit = false;
        return _this;
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
        this.orderHistory.order.id = this.order.id;
        this.orderHistory.notify = 1;
        this.getOrderStatuses();
        this.getOrderHistories();
    };
    OrderHistoryComponent.prototype.getOrderStatuses = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |langCode|' + this.appService.appInfoStorage.language.id + '|Integer');
        parameters.push('e.status = |staCode|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.OrderStatus', parameters)
            .subscribe(function (data) {
            _this.orderStatuses = data;
            _this.filterOrderStatuses();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all OrderStatus complete'); });
    };
    OrderHistoryComponent.prototype.getOrderHistories = function () {
        var _this = this;
        var parameters = [];
        if (this.order.id !== null && this.order.id !== undefined) {
            parameters.push('e.order.id = |orderId|' + this.order.id + '|Integer');
        }
        this.appService.getAllByCriteria('com.softenza.emarket.model.OrderHistory', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.setCanEdit();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all OrderHistory complete'); });
    };
    OrderHistoryComponent.prototype.edit = function (orderHistoryId) {
        var _this = this;
        if (orderHistoryId > 0) {
            this.appService.getOne(orderHistoryId, 'com.softenza.emarket.model.OrderHistory')
                .subscribe(function (result) {
                if (result) {
                    if (result.id > 0) {
                        _this.orderHistory = result;
                    }
                    else {
                        _this.orderHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                        _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                            _this.messages = res['MESSAGE.READ_FAILED'];
                        });
                    }
                }
            });
        }
    };
    OrderHistoryComponent.prototype.remove = function (orderHistoryId) {
        var _this = this;
        this.messages = '';
        this.appService.delete(orderHistoryId, 'OrderHistory')
            .subscribe(function (resp) {
            _this.processDataSourceDeleteResult(resp, _this.messages, _this.orderHistory, _this.dataSource);
        });
    };
    OrderHistoryComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        console.log(this.orderHistory);
        if ((!this.orderHistory.orderStatus || !(this.orderHistory.orderStatus.id > 0))
            && (!this.orderHistory.comment || this.orderHistory.comment.trim() === '')) {
            this.translate.get(['VALIDATION.COMMENT_OR_STATUS', 'COMMON.SUCCESS']).subscribe(function (res) {
                _this.messages = res['VALIDATION.COMMENT_OR_STATUS'];
            });
        }
        else {
            try {
                this.orderHistory.order.id = this.order.id;
                this.orderHistory.user.id = Number(this.appService.tokenStorage.getUserId());
                if (!this.orderHistory.orderStatus || !(this.orderHistory.orderStatus.id > 0)) {
                    this.orderHistory.orderStatus = this.order.orderStatus;
                }
                this.setToggleValues();
                this.appService.saveWithUrl('/service/order/saveOrderHistory', this.orderHistory)
                    .subscribe(function (result) {
                    _this.processResult(result, _this.order, null);
                    if (result.id > 0) {
                        _this.order.orderStatus = _this.orderHistory.orderStatus;
                        _this.orderHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                        //this.getOrderHistories();
                        //this.filterOrderStatuses();
                        window.location.reload();
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
    };
    OrderHistoryComponent.prototype.setToggleValues = function () {
        this.orderHistory.notify = (this.orderHistory.notify === null
            || this.orderHistory.notify.toString() === 'false'
            || this.orderHistory.notify.toString() === '0') ? 0 : 1;
    };
    OrderHistoryComponent.prototype.setCanEdit = function () {
        console.log('current user id:' + this.appService.tokenStorage.getUserId());
        console.log('store owner:' + this.storeOwnerId);
        console.log('Role:' + this.appService.tokenStorage.getRole());
        if (Number(this.appService.tokenStorage.getUserId()) === this.storeOwnerId ||
            Number(this.appService.tokenStorage.getRole()) === 3) { // this is the store owner
            this.canEdit = true;
            this.displayedColumns = ['dateAdded', 'user', 'comment', 'status', 'notified', 'actions'];
        }
        else {
            this.canEdit = false;
        }
    };
    OrderHistoryComponent.prototype.filterOrderStatuses = function () {
        var _this = this;
        this.filteredOrderStatuses = [];
        this.orderStatuses.forEach(function (orderStatus) {
            if (orderStatus.name === 'PENDING' || orderStatus.name === 'SHIPPED' || orderStatus.name === 'DELIVERED' || orderStatus.name === 'PROCESSING') {
                _this.filteredOrderStatuses.push(orderStatus);
            }
        });
        return this.filteredOrderStatuses;
    };
    OrderHistoryComponent.prototype.onToggleGroupChange = function (event) {
        var result = this.orderStatuses.filter(function (el) { return el.id === event.value; });
        if (result.length > 0) {
            this.orderHistory.orderStatus = result[0];
        }
    };
    OrderHistoryComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    OrderHistoryComponent.prototype.disableToggle = function (orderStatus) {
        return this.order.orderStatus.name === orderStatus.name
            || (orderStatus.name === 'PENDING'
                && (this.order.orderStatus.name === 'PROCESSING' || this.order.orderStatus.name === 'SHIPPED'
                    || this.order.orderStatus.name === 'DELIVERED'))
            || (orderStatus.name === 'PROCESSING'
                && (this.order.orderStatus.name === 'SHIPPED' || this.order.orderStatus.name === 'DELIVERED'))
            || (orderStatus.name === 'SHIPPED' && this.order.orderStatus.name === 'DELIVERED');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrderHistoryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OrderHistoryComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrderHistoryComponent.prototype, "orderType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], OrderHistoryComponent.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OrderHistoryComponent.prototype, "storeOwnerId", void 0);
    OrderHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-history',
            templateUrl: './OrderHistory.component.html',
            styleUrls: ['./Orders.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnHistoryComponent", function() { return ReturnHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReturnHistoryComponent = /** @class */ (function (_super) {
    __extends(ReturnHistoryComponent, _super);
    function ReturnHistoryComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['dateAdded', 'comment', 'status', 'notified', 'actions'];
        _this.messages = '';
        _this.errors = '';
        _this.returnHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        return _this;
    }
    ReturnHistoryComponent.prototype.ngOnInit = function () {
        this.returnHistory.returnId = this.returnId;
        this.appService.refreshReferenceData('ReturnStatus', undefined);
        this.getReturnHistories();
    };
    ReturnHistoryComponent.prototype.getReturnHistories = function () {
        var _this = this;
        var parameters = [];
        if (this.returnId !== null && this.returnId !== undefined) {
            parameters.push('e.returnId = |returnIds|' + this.returnId + '|Integer');
        }
        this.appService.getAllByCriteria('ReturnHistory', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReturnHistory complete'); });
    };
    ReturnHistoryComponent.prototype.edit = function (returnHistoryId) {
        var _this = this;
        if (returnHistoryId > 0) {
            this.appService.getOne(returnHistoryId, 'ReturnHistory')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnHistory = result;
                }
                else {
                    _this.returnHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    ReturnHistoryComponent.prototype.remove = function (returnHistoryId) {
        var _this = this;
        this.messages = '';
        this.appService.delete(returnHistoryId, 'ReturnHistory')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.findIndex(function (element) { return element.id === returnHistoryId; });
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    ReturnHistoryComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.returnHistory.returnId = this.returnId;
            this.setToggleValues();
            var index_1 = this.dataSource.data.findIndex(function (element) { return element.id === _this.returnHistory.id; });
            this.appService.save(this.returnHistory, 'ReturnHistory')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    if (index_1 !== -1) {
                        _this.dataSource.data.splice(index_1, 1);
                    }
                    _this.dataSource.data.push(result);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    ReturnHistoryComponent.prototype.setToggleValues = function () {
        this.returnHistory.notify = (this.returnHistory.notify === null
            || this.returnHistory.notify === undefined
            || this.returnHistory.notify.toString() === 'false'
            || this.returnHistory.notify.toString() === '0') ? 0 : 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReturnHistoryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReturnHistoryComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ReturnHistoryComponent.prototype, "returnId", void 0);
    ReturnHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-returnHistory',
            templateUrl: './ReturnHistory.component.html',
            styleUrls: ['./Returns.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReturnHistoryComponent);
    return ReturnHistoryComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderOptionComponent", function() { return OrderOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderOptionComponent = /** @class */ (function (_super) {
    __extends(OrderOptionComponent, _super);
    function OrderOptionComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['product', 'name', 'type', 'value', 'price', 'pricePrefix'];
        _this.messages = '';
        _this.errors = '';
        _this.orderOption = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.canEdit = false;
        return _this;
    }
    OrderOptionComponent.prototype.ngOnInit = function () {
        this.getOrderOptions();
    };
    OrderOptionComponent.prototype.getOrderOptions = function () {
        var _this = this;
        var parameters = [];
        if (this.order.id !== null && this.order.id !== undefined) {
            parameters.push('e.orderId = |ourId|' + this.order.id + '|Integer');
        }
        this.appService.getAllByCriteria('OrderOption', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all OrderOption complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrderOptionComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OrderOptionComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrderOptionComponent.prototype, "orderType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], OrderOptionComponent.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OrderOptionComponent.prototype, "storeOwnerId", void 0);
    OrderOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-option',
            templateUrl: './OrderOption.component.html',
            styleUrls: ['./Orders.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], OrderOptionComponent);
    return OrderOptionComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ })

};;