exports.ids = [16];
exports.modules = {

/***/ 2298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveriesModule", function() { return DeliveriesModule; });
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
/* harmony import */ var _Deliveries_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2299);
/* harmony import */ var _Summaries_DeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2300);
/* harmony import */ var _Summaries_DeliveriesSummary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2301);
/* harmony import */ var _Payouts_DeliveryPayouts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2302);
/* harmony import */ var _Sales_Sales_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2281);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DeliveriesModule = /** @class */ (function () {
    function DeliveriesModule() {
    }
    DeliveriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _Summaries_DeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_11__["DeliveriesSummariesComponent"],
                _Summaries_DeliveriesSummary_component__WEBPACK_IMPORTED_MODULE_12__["DeliveriesSummaryComponent"],
                _Payouts_DeliveryPayouts_component__WEBPACK_IMPORTED_MODULE_13__["DeliveryPayoutsComponent"]
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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Deliveries_routing__WEBPACK_IMPORTED_MODULE_10__["DeliveriesRoutes"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_9__["GlobalModule"],
                _Sales_Sales_module__WEBPACK_IMPORTED_MODULE_14__["SalesModule"],
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
            exports: [
                _Summaries_DeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_11__["DeliveriesSummariesComponent"],
                _Summaries_DeliveriesSummary_component__WEBPACK_IMPORTED_MODULE_12__["DeliveriesSummaryComponent"],
                _Payouts_DeliveryPayouts_component__WEBPACK_IMPORTED_MODULE_13__["DeliveryPayoutsComponent"]
            ]
        })
    ], DeliveriesModule);
    return DeliveriesModule;
}());



/***/ }),

/***/ 2299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveriesRoutes", function() { return DeliveriesRoutes; });
/* harmony import */ var _Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(624);
/* harmony import */ var _Services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1722);
/* harmony import */ var _Summaries_DeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2300);
/* harmony import */ var _Payouts_DeliveryPayouts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2302);




var DeliveriesRoutes = [
    {
        path: '',
        redirectTo: 'OrdersComponent',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'deliv/summaries',
                component: _Summaries_DeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_2__["DeliveriesSummariesComponent"],
                canActivate: [_Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"], _Services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__["RoleGuardService"]],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'deliv/payouts/:id',
                component: _Payouts_DeliveryPayouts_component__WEBPACK_IMPORTED_MODULE_3__["DeliveryPayoutsComponent"],
                canActivate: [_Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"], _Services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__["RoleGuardService"]],
                data: {
                    expectedRole: ['Administrator']
                }
            }
        ]
    }
];


/***/ }),

/***/ 2300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveriesSummariesComponent", function() { return DeliveriesSummariesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _DeliveriesSummary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2301);
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












var DeliveriesSummariesComponent = /** @class */ (function (_super) {
    __extends(DeliveriesSummariesComponent, _super);
    function DeliveriesSummariesComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.deliveriesSummariesColumns = ['shipperName', 'monthyear', 'paymentMethod', 'total', 'totalDue', 'totalPaid', 'totalRemaining', 'status', 'actions'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.shippers = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](0);
        return _this;
    }
    DeliveriesSummariesComponent.prototype.ngOnInit = function () {
        this.clear();
        this.isAdminPage = !this.userId;
    };
    DeliveriesSummariesComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        this.searchCriteria.endDate = new Date();
        var beginDate = new Date();
        beginDate.setFullYear(this.searchCriteria.endDate.getFullYear() - 1);
        this.searchCriteria.beginDate = beginDate;
        if (this.isAdminPage) {
            //this.searchCriteria.status = 1;
        }
        this.search();
    };
    DeliveriesSummariesComponent.prototype.clear = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    DeliveriesSummariesComponent.prototype.changeOrderType = function (event) {
    };
    DeliveriesSummariesComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = this.userId;
            this.appService.saveWithUrl('/service/order/deliveriesSummaries', this.searchCriteria)
                .subscribe(function (data) {
                _this.deliveriesSummariesDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.deliveriesSummariesDatasource.paginator = _this.deliveriesSummariesPaginator;
                _this.deliveriesSummariesDatasource.sort = _this.deliveriesSummariesSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all deliveries summaries complete'); });
        }
    };
    DeliveriesSummariesComponent.prototype.applyFilter = function (filterValue) {
        this.deliveriesSummariesDatasource.filter = filterValue.trim().toLowerCase();
        if (this.deliveriesSummariesDatasource.paginator) {
            this.deliveriesSummariesDatasource.paginator.firstPage();
        }
    };
    DeliveriesSummariesComponent.prototype.acknowledgeDeliveriesSummary = function (ssId) {
        var _this = this;
        this.messages = '';
        var ds = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        ds.id = ssId;
        ds.acknowledger.id = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/order/acknowledgeDeliveriesSummary/', ds)
            .subscribe(function (data) {
            _this.processResult(data, ds, null);
            _this.search();
        }, function (error) { return console.log(error); }, function () { return console.log('Aknowledgement complete'); });
    };
    DeliveriesSummariesComponent.prototype.getDeliveriesSummaryDetails = function (ddeliveriesSummaryId, payoutId) {
        this.deliveriesSummaryComponent.getDeliveriesSummary(ddeliveriesSummaryId);
        this.deliveriesSummaryComponent.getPayout(payoutId);
        this.selected.setValue(1);
    };
    DeliveriesSummariesComponent.prototype.getShipperSearchPopupResponse = function (response, value) {
        if (response) {
            console.log('Value returned from comment popup... ');
            console.log(value);
            this.searchCriteria = value;
        }
    };
    DeliveriesSummariesComponent.prototype.openSearchPopup = function () {
        this.appService.shipperSearch(this.searchCriteria).
            subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); }, function () { return console.log('Shipper search done... '); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorDeliveriesSummaries', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DeliveriesSummariesComponent.prototype, "deliveriesSummariesPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DeliveriesSummariesComponent.prototype, "deliveriesSummariesSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_DeliveriesSummary_component__WEBPACK_IMPORTED_MODULE_7__["DeliveriesSummaryComponent"], { static: false }),
        __metadata("design:type", _DeliveriesSummary_component__WEBPACK_IMPORTED_MODULE_7__["DeliveriesSummaryComponent"])
    ], DeliveriesSummariesComponent.prototype, "deliveriesSummaryComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeliveriesSummariesComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeliveriesSummariesComponent.prototype, "isAdminPage", void 0);
    DeliveriesSummariesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deliveries-summaries',
            templateUrl: './DeliveriesSummaries.component.html',
            styleUrls: ['./DeliveriesSummaries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]])
    ], DeliveriesSummariesComponent);
    return DeliveriesSummariesComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveriesSummaryComponent", function() { return DeliveriesSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _Sales_Payouts_DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2294);
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










var DeliveriesSummaryComponent = /** @class */ (function (_super) {
    __extends(DeliveriesSummaryComponent, _super);
    function DeliveriesSummaryComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.onlineOrdersColumns = ['id', 'storeName', 'customer', 'status', 'shippingCost', 'city', 'country', 'dateAdded'];
        _this.messages = '';
        _this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.deliveriesSummary = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.constants = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.picture = [];
        _this.payoutSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        return _this;
    }
    DeliveriesSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.deliveriesSummary.id = params.id;
                _this.clear();
                _this.getPayout(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    DeliveriesSummaryComponent.prototype.clear = function () {
        this.payout = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.payout.status = 1;
    };
    DeliveriesSummaryComponent.prototype.getDeliveriesSummary = function (deliveriesSummaryId) {
        var _this = this;
        this.messages = '';
        if (deliveriesSummaryId > 0) {
            this.search(deliveriesSummaryId);
            this.appService.getOneWithChildsAndFiles(deliveriesSummaryId, 'DeliveriesSummary')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.deliveriesSummary = result;
                }
                else {
                    _this.deliveriesSummary = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    DeliveriesSummaryComponent.prototype.getPayout = function (payoutId) {
        var _this = this;
        this.messages = '';
        if (payoutId > 0) {
            this.appService.getOneWithChildsAndFiles(payoutId, 'Payout')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.payout = result;
                    setTimeout(function () {
                        _this.deliveriesSummariesIncludeComponent.selectedCurrency = _this.payout.currency;
                        _this.deliveriesSummariesIncludeComponent.setDataSource(_this.payout.deliveriesSummaryVOs, 'fromDeliveriesSummaryDetails', _this.payout.total);
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
            setTimeout(function () {
                _this.deliveriesSummariesIncludeComponent.setDataSource([], 'fromDeliveriesSummaryDetails', null);
            }, 500);
        }
    };
    DeliveriesSummaryComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    DeliveriesSummaryComponent.prototype.acknowledgeDeliveriesSummary = function () {
        var _this = this;
        this.messages = '';
        this.deliveriesSummary.acknowledger = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.deliveriesSummary.acknowledger.id = +this.appService.tokenStorage.getUserId();
        this.deliveriesSummary.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/order/acknowledgeDeliveriesSummary/', this.deliveriesSummary)
            .subscribe(function (data) {
            _this.processResult(data, _this.deliveriesSummary, null);
            _this.getDeliveriesSummary(data.id);
            _this.getPayout(_this.payout.id);
        }, function (error) { return console.log(error); }, function () { return console.log('Aknowledgement complete'); });
    };
    DeliveriesSummaryComponent.prototype.search = function (deliveriesSummaryId) {
        var _this = this;
        this.messages = '';
        this.searchCriteria.deliveriesSummaryId = deliveriesSummaryId;
        this.searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/order/onlineOrders', this.searchCriteria)
            .subscribe(function (data) {
            _this.onlineOrdersDS = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data);
            _this.onlineOrdersDS.paginator = _this.onlineOrdersPG;
            _this.onlineOrdersDS.sort = _this.onlineOrdersST;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Orders complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepper"])
    ], DeliveriesSummaryComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Sales_Payouts_DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_7__["DeliveriesSummariesIncludeComponent"], { static: false }),
        __metadata("design:type", _Sales_Payouts_DeliveriesSummariesInclude_component__WEBPACK_IMPORTED_MODULE_7__["DeliveriesSummariesIncludeComponent"])
    ], DeliveriesSummaryComponent.prototype, "deliveriesSummariesIncludeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorOnlineOrders', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], DeliveriesSummaryComponent.prototype, "onlineOrdersPG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], DeliveriesSummaryComponent.prototype, "onlineOrdersST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeliveriesSummaryComponent.prototype, "payoutSaveEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeliveriesSummaryComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeliveriesSummaryComponent.prototype, "canAcknowledge", void 0);
    DeliveriesSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deliveries-summary',
            templateUrl: './DeliveriesSummary.component.html',
            styleUrls: ['./DeliveriesSummaries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], DeliveriesSummaryComponent);
    return DeliveriesSummaryComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ 2302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPayoutsComponent", function() { return DeliveryPayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
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






var DeliveryPayoutsComponent = /** @class */ (function (_super) {
    __extends(DeliveryPayoutsComponent, _super);
    function DeliveryPayoutsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        return _this;
    }
    DeliveryPayoutsComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || +params.id === 0) {
                setTimeout(function () {
                }, 500);
            }
            else {
            }
        });
    };
    DeliveryPayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delivery-payouts',
            templateUrl: './DeliveryPayouts.component.html',
            styleUrls: ['./DeliveryPayouts.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], DeliveryPayoutsComponent);
    return DeliveryPayoutsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ })

};;