exports.ids = [21];
exports.modules = {

/***/ 2348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
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
/* harmony import */ var _System_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2349);
/* harmony import */ var _Languages_Languages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2350);
/* harmony import */ var _Currencies_Currencies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2351);
/* harmony import */ var _StockStatuses_StockStatuses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2352);
/* harmony import */ var _OrderStatuses_OrderStatuses_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2353);
/* harmony import */ var _ReturnStatuses_ReturnStatuses_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2354);
/* harmony import */ var _ReturnActions_ReturnActions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2355);
/* harmony import */ var _ReturnReasons_ReturnReasons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2356);
/* harmony import */ var _Countries_Countries_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2357);
/* harmony import */ var _Zones_Zones_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2367);
/* harmony import */ var _GeoZones_GeoZones_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2358);
/* harmony import */ var _TaxRates_TaxRates_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2359);
/* harmony import */ var _TaxClasses_TaxClasses_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2360);
/* harmony import */ var _WeightClass_WeightClass_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2361);
/* harmony import */ var _WeightClasses_WeightClasses_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2362);
/* harmony import */ var _LengthClasses_LengthClasses_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2363);
/* harmony import */ var _LengthClass_LengthClass_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2364);
/* harmony import */ var _configs_configs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2365);
/* harmony import */ var _Stores_Stores_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2368);
/* harmony import */ var _Shippers_Shippers_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2366);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var SystemModule = /** @class */ (function () {
    function SystemModule() {
    }
    SystemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Languages_Languages_component__WEBPACK_IMPORTED_MODULE_11__["LanguagesComponent"], _Currencies_Currencies_component__WEBPACK_IMPORTED_MODULE_12__["CurrenciesComponent"], _OrderStatuses_OrderStatuses_component__WEBPACK_IMPORTED_MODULE_14__["OrderStatusesComponent"],
                _StockStatuses_StockStatuses_component__WEBPACK_IMPORTED_MODULE_13__["StockStatusesComponent"], _ReturnStatuses_ReturnStatuses_component__WEBPACK_IMPORTED_MODULE_15__["ReturnStatusesComponent"], _ReturnActions_ReturnActions_component__WEBPACK_IMPORTED_MODULE_16__["ReturnActionsComponent"],
                _ReturnReasons_ReturnReasons_component__WEBPACK_IMPORTED_MODULE_17__["ReturnReasonsComponent"], _Countries_Countries_component__WEBPACK_IMPORTED_MODULE_18__["CountriesComponent"], _Zones_Zones_component__WEBPACK_IMPORTED_MODULE_19__["ZonesComponent"], _GeoZones_GeoZones_component__WEBPACK_IMPORTED_MODULE_20__["GeoZonesComponent"],
                _TaxRates_TaxRates_component__WEBPACK_IMPORTED_MODULE_21__["TaxRatesComponent"], _TaxClasses_TaxClasses_component__WEBPACK_IMPORTED_MODULE_22__["TaxClassesComponent"], _WeightClass_WeightClass_component__WEBPACK_IMPORTED_MODULE_23__["WeightClassComponent"], _WeightClasses_WeightClasses_component__WEBPACK_IMPORTED_MODULE_24__["WeightClassesComponent"],
                _LengthClasses_LengthClasses_component__WEBPACK_IMPORTED_MODULE_25__["LengthClassesComponent"], _LengthClass_LengthClass_component__WEBPACK_IMPORTED_MODULE_26__["LengthClassComponent"], _configs_configs_component__WEBPACK_IMPORTED_MODULE_27__["ConfigsComponent"], _Stores_Stores_component__WEBPACK_IMPORTED_MODULE_28__["StoresComponent"], _Shippers_Shippers_component__WEBPACK_IMPORTED_MODULE_29__["ShippersComponent"]],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_System_routing__WEBPACK_IMPORTED_MODULE_10__["SystemRoutes"]),
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                ngx_input_file__WEBPACK_IMPORTED_MODULE_5__["InputFileModule"],
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
            exports: []
        })
    ], SystemModule);
    return SystemModule;
}());



/***/ }),

/***/ 2349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemRoutes", function() { return SystemRoutes; });
/* harmony import */ var _Languages_Languages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2350);
/* harmony import */ var _Currencies_Currencies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2351);
/* harmony import */ var _StockStatuses_StockStatuses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2352);
/* harmony import */ var _OrderStatuses_OrderStatuses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2353);
/* harmony import */ var _ReturnStatuses_ReturnStatuses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2354);
/* harmony import */ var _ReturnActions_ReturnActions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2355);
/* harmony import */ var _ReturnReasons_ReturnReasons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2356);
/* harmony import */ var _Countries_Countries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2357);
/* harmony import */ var _GeoZones_GeoZones_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2358);
/* harmony import */ var _TaxRates_TaxRates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2359);
/* harmony import */ var _TaxClasses_TaxClasses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2360);
/* harmony import */ var _WeightClass_WeightClass_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2361);
/* harmony import */ var _WeightClasses_WeightClasses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2362);
/* harmony import */ var _LengthClasses_LengthClasses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2363);
/* harmony import */ var _LengthClass_LengthClass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2364);
/* harmony import */ var _configs_configs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2365);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Shippers_Shippers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2366);
/* harmony import */ var _Zones_Zones_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2367);




















var SystemRoutes = [
    {
        path: '',
        redirectTo: 'LanguagesComponent',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'languages',
                component: _Languages_Languages_component__WEBPACK_IMPORTED_MODULE_0__["LanguagesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'currencies',
                component: _Currencies_Currencies_component__WEBPACK_IMPORTED_MODULE_1__["CurrenciesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'stockStatuses',
                component: _StockStatuses_StockStatuses_component__WEBPACK_IMPORTED_MODULE_2__["StockStatusesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'orderStatuses',
                component: _OrderStatuses_OrderStatuses_component__WEBPACK_IMPORTED_MODULE_3__["OrderStatusesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'returnStatuses',
                component: _ReturnStatuses_ReturnStatuses_component__WEBPACK_IMPORTED_MODULE_4__["ReturnStatusesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'returnActions',
                component: _ReturnActions_ReturnActions_component__WEBPACK_IMPORTED_MODULE_5__["ReturnActionsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'returnReasons',
                component: _ReturnReasons_ReturnReasons_component__WEBPACK_IMPORTED_MODULE_6__["ReturnReasonsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'countries',
                component: _Countries_Countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'countries',
                component: _Countries_Countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'shippers',
                component: _Shippers_Shippers_component__WEBPACK_IMPORTED_MODULE_17__["ShippersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'zones',
                component: _Zones_Zones_component__WEBPACK_IMPORTED_MODULE_18__["ZonesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'geoZones',
                component: _GeoZones_GeoZones_component__WEBPACK_IMPORTED_MODULE_8__["GeoZonesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'taxRates',
                component: _TaxRates_TaxRates_component__WEBPACK_IMPORTED_MODULE_9__["TaxRatesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'taxClasses',
                component: _TaxClasses_TaxClasses_component__WEBPACK_IMPORTED_MODULE_10__["TaxClassesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'weightClasses',
                component: _WeightClasses_WeightClasses_component__WEBPACK_IMPORTED_MODULE_12__["WeightClassesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'weightClasses/:id',
                component: _WeightClass_WeightClass_component__WEBPACK_IMPORTED_MODULE_11__["WeightClassComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'lengthClasses',
                component: _LengthClasses_LengthClasses_component__WEBPACK_IMPORTED_MODULE_13__["LengthClassesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'lengthClasses/:id',
                component: _LengthClass_LengthClass_component__WEBPACK_IMPORTED_MODULE_14__["LengthClassComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'configs',
                component: _configs_configs_component__WEBPACK_IMPORTED_MODULE_15__["ConfigsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            }
        ]
    }
];


/***/ }),

/***/ 2350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'code', 'sortOrder', 'actions'];
        this.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
    }
    LanguagesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    LanguagesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Language', parameters, ' order by e.sortOrder ')
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Language complete'); });
    };
    LanguagesComponent.prototype.remove = function (language) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(language.id, 'com.softenza.emarket.model.Language')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(language);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    LanguagesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LanguagesComponent.prototype.clear = function () {
        this.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    LanguagesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    LanguagesComponent.prototype.edit = function (si) {
        this.language = si;
        this.selectedTab = 1;
    };
    LanguagesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            var index_1 = this.dataSource.data.indexOf(this.language);
            this.language.status = (this.language.status == null || this.language.status.toString() === 'false') ? 0 : 1;
            this.appService.save(this.language, 'Language')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], LanguagesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], LanguagesComponent.prototype, "sort", void 0);
    LanguagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-languages',
            templateUrl: './Languages.component.html',
            styleUrls: ['./Languages.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ 2351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrenciesComponent", function() { return CurrenciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CurrenciesComponent = /** @class */ (function () {
    function CurrenciesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'title', 'code', 'value', 'modDate', 'actions'];
        this.currency = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
    }
    CurrenciesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    CurrenciesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Currency', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Currency complete'); });
    };
    CurrenciesComponent.prototype.remove = function (currency) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(currency.id, 'com.softenza.emarket.model.Currency')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(currency);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    CurrenciesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CurrenciesComponent.prototype.clear = function () {
        this.currency = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    CurrenciesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.currency = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    CurrenciesComponent.prototype.edit = function (si) {
        this.currency = si;
        this.selectedTab = 1;
    };
    CurrenciesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            var index_1 = this.dataSource.data.indexOf(this.currency);
            this.currency.status = (this.currency.status == null || this.currency.status.toString() === 'false') ? 0 : 1;
            this.appService.save(this.currency, 'Currency')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.currency = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CurrenciesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CurrenciesComponent.prototype, "sort", void 0);
    CurrenciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currencys',
            templateUrl: './Currencies.component.html',
            styleUrls: ['./Currencies.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], CurrenciesComponent);
    return CurrenciesComponent;
}());



/***/ }),

/***/ 2352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusesComponent", function() { return StockStatusesComponent; });
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








var StockStatusesComponent = /** @class */ (function (_super) {
    __extends(StockStatusesComponent, _super);
    function StockStatusesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['id', 'name', 'language', 'actions'];
        _this.stockStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.messages = '';
        _this.errors = '';
        _this.selectedTab = 0;
        return _this;
    }
    StockStatusesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    StockStatusesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.StockStatus', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all StockStatus complete'); });
    };
    StockStatusesComponent.prototype.remove = function (stockStatus) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(stockStatus.id, 'com.softenza.emarket.model.StockStatus')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(stockStatus);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    StockStatusesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    StockStatusesComponent.prototype.clear = function () {
        this.stockStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    StockStatusesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.stockStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    StockStatusesComponent.prototype.edit = function (si) {
        this.stockStatus = si;
        this.selectedTab = 1;
    };
    StockStatusesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.stockStatus);
            var index_1 = this.dataSource.data.indexOf(this.stockStatus);
            this.appService.save(this.stockStatus, 'StockStatus')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.stockStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StockStatusesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StockStatusesComponent.prototype, "sort", void 0);
    StockStatusesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-statuses',
            templateUrl: './StockStatuses.component.html',
            styleUrls: ['./StockStatuses.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], StockStatusesComponent);
    return StockStatusesComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusesComponent", function() { return OrderStatusesComponent; });
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








var OrderStatusesComponent = /** @class */ (function (_super) {
    __extends(OrderStatusesComponent, _super);
    function OrderStatusesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['id', 'name', 'language', 'description', 'status', 'actions'];
        _this.orderStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.messages = '';
        _this.errors = '';
        _this.selectedTab = 0;
        return _this;
    }
    OrderStatusesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    OrderStatusesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.OrderStatus', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all OrderStatus complete'); });
    };
    OrderStatusesComponent.prototype.remove = function (orderStatus) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(orderStatus.id, 'com.softenza.emarket.model.OrderStatus')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(orderStatus);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    OrderStatusesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    OrderStatusesComponent.prototype.clear = function () {
        this.orderStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    OrderStatusesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.orderStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    OrderStatusesComponent.prototype.edit = function (si) {
        this.orderStatus = si;
        this.selectedTab = 1;
    };
    OrderStatusesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            this.orderStatus.status = (this.orderStatus.status == null || this.orderStatus.status.toString() === 'false') ? 0 : 1;
            var index_1 = this.dataSource.data.indexOf(this.orderStatus);
            this.appService.save(this.orderStatus, 'OrderStatus')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.orderStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OrderStatusesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OrderStatusesComponent.prototype, "sort", void 0);
    OrderStatusesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-statuses',
            templateUrl: './OrderStatuses.component.html',
            styleUrls: ['./OrderStatuses.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], OrderStatusesComponent);
    return OrderStatusesComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnStatusesComponent", function() { return ReturnStatusesComponent; });
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








var ReturnStatusesComponent = /** @class */ (function (_super) {
    __extends(ReturnStatusesComponent, _super);
    function ReturnStatusesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['id', 'name', 'language', 'description', 'actions'];
        _this.returnStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.messages = '';
        _this.errors = '';
        _this.selectedTab = 0;
        return _this;
    }
    ReturnStatusesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ReturnStatusesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.ReturnStatus', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReturnStatus complete'); });
    };
    ReturnStatusesComponent.prototype.remove = function (returnStatus) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(returnStatus.id, 'com.softenza.emarket.model.ReturnStatus')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(returnStatus);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    ReturnStatusesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ReturnStatusesComponent.prototype.clear = function () {
        this.returnStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    ReturnStatusesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.returnStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    ReturnStatusesComponent.prototype.edit = function (returnStatusId) {
        var _this = this;
        if (returnStatusId > 0) {
            this.appService.getOne(returnStatusId, 'ReturnAction')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnStatus = result;
                    _this.selectedTab = 1;
                    console.info(_this.returnStatus);
                }
                else {
                    _this.returnStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    ReturnStatusesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.returnStatus);
            var index_1 = this.dataSource.data.indexOf(this.returnStatus);
            this.appService.save(this.returnStatus, 'ReturnStatus')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnStatus = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReturnStatusesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReturnStatusesComponent.prototype, "sort", void 0);
    ReturnStatusesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return-statuses',
            templateUrl: './ReturnStatuses.component.html',
            styleUrls: ['./ReturnStatuses.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReturnStatusesComponent);
    return ReturnStatusesComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnActionsComponent", function() { return ReturnActionsComponent; });
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








var ReturnActionsComponent = /** @class */ (function (_super) {
    __extends(ReturnActionsComponent, _super);
    function ReturnActionsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['id', 'name', 'language', 'description', 'actions'];
        _this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.messages = '';
        _this.errors = '';
        _this.selectedTab = 0;
        return _this;
    }
    ReturnActionsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ReturnActionsComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.ReturnAction', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReturnAction complete'); });
    };
    ReturnActionsComponent.prototype.remove = function (returnAction) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(returnAction.id, 'com.softenza.emarket.model.ReturnAction')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(returnAction);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    ReturnActionsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ReturnActionsComponent.prototype.clear = function () {
        this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    ReturnActionsComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    ReturnActionsComponent.prototype.edit = function (returnActionId) {
        var _this = this;
        if (returnActionId > 0) {
            this.appService.getOne(returnActionId, 'ReturnAction')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnAction = result;
                    _this.selectedTab = 1;
                }
                else {
                    _this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    ReturnActionsComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.returnAction);
            var index_1 = this.dataSource.data.indexOf(this.returnAction);
            this.appService.save(this.returnAction, 'ReturnAction')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReturnActionsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReturnActionsComponent.prototype, "sort", void 0);
    ReturnActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return-action',
            templateUrl: './ReturnActions.component.html',
            styleUrls: ['./ReturnActions.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReturnActionsComponent);
    return ReturnActionsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnReasonsComponent", function() { return ReturnReasonsComponent; });
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








var ReturnReasonsComponent = /** @class */ (function (_super) {
    __extends(ReturnReasonsComponent, _super);
    function ReturnReasonsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['id', 'name', 'language', 'description', 'actions'];
        _this.returnReason = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.messages = '';
        _this.errors = '';
        _this.selectedTab = 0;
        return _this;
    }
    ReturnReasonsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ReturnReasonsComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.ReturnReason', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReturnReason complete'); });
    };
    ReturnReasonsComponent.prototype.remove = function (returnReason) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(returnReason.id, 'com.softenza.emarket.model.ReturnReason')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(returnReason);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    ReturnReasonsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ReturnReasonsComponent.prototype.clear = function () {
        this.returnReason = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    ReturnReasonsComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.returnReason = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    ReturnReasonsComponent.prototype.edit = function (returnReasonId) {
        var _this = this;
        if (returnReasonId > 0) {
            this.appService.getOne(returnReasonId, 'ReturnReason')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnReason = result;
                    _this.selectedTab = 1;
                }
                else {
                    _this.returnReason = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    ReturnReasonsComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.returnReason);
            var index_1 = this.dataSource.data.indexOf(this.returnReason);
            this.appService.save(this.returnReason, 'ReturnReason')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnReason = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReturnReasonsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReturnReasonsComponent.prototype, "sort", void 0);
    ReturnReasonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return-reason',
            templateUrl: './ReturnReasons.component.html',
            styleUrls: ['./ReturnReasons.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReturnReasonsComponent);
    return ReturnReasonsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'isoCode2', 'isoCode3', 'actions'];
        this.country = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
    }
    CountriesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    CountriesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Country', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Country complete'); });
    };
    CountriesComponent.prototype.remove = function (country) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(country.id, 'com.softenza.emarket.model.Country')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(country);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    CountriesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CountriesComponent.prototype.clear = function () {
        this.country = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    CountriesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.country = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    CountriesComponent.prototype.edit = function (si) {
        this.country = si;
        this.selectedTab = 1;
    };
    CountriesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.country);
            var index_1 = this.dataSource.data.indexOf(this.country);
            this.country.status = (this.country.status == null || this.country.status.toString() === 'false') ? 0 : 1;
            this.country.postcodeRequired = (this.country.postcodeRequired == null
                || this.country.postcodeRequired.toString() === 'false') ? 0 : 1;
            this.appService.save(this.country, 'Country')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.country = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CountriesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CountriesComponent.prototype, "sort", void 0);
    CountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country',
            templateUrl: './Countries.component.html',
            styleUrls: ['./Countries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ 2358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoZonesComponent", function() { return GeoZonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GeoZonesComponent = /** @class */ (function () {
    function GeoZonesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'description', 'actions'];
        this.displayedColumns2 = ['id', 'country', 'zone', 'actions'];
        this.geoZone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.countries = [];
        this.zones = [];
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
    }
    GeoZonesComponent.prototype.ngOnInit = function () {
        this.getCountries();
        // this.getZoneToGeoZone();
        this.getAll();
    };
    GeoZonesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.GeoZone', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all GeoZone complete'); });
    };
    GeoZonesComponent.prototype.getZones = function (country) {
        var _this = this;
        if (country) {
            var parameters = [];
            parameters.push('e.country.id = |countryId|' + country.id + '|Integer');
            this.appService.getAllByCriteria('com.softenza.emarket.model.Zone', parameters)
                .subscribe(function (data) {
                _this.zones = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all GeoZone complete'); });
        }
    };
    GeoZonesComponent.prototype.getZoneToGeoZone = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.geoZone.id = |geoZoneId|' + this.geoZone.id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.ZoneToGeoZone', parameters)
            .subscribe(function (data) {
            _this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.zoneToGeoZoneDS.paginator = _this.paginator;
            _this.zoneToGeoZoneDS.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all GeoZone complete'); });
    };
    GeoZonesComponent.prototype.addNewZoneToGeoZone = function () {
        if (!this.zoneToGeoZoneDS || this.zoneToGeoZoneDS == null || !this.zoneToGeoZoneDS.data) {
            var data = [];
            this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            this.zoneToGeoZoneDS.data = [];
        }
        this.zoneToGeoZoneDS.data.unshift(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
        this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.zoneToGeoZoneDS.data);
        this.zoneToGeoZoneDS.paginator = this.paginator;
        this.zoneToGeoZoneDS.sort = this.sort;
    };
    GeoZonesComponent.prototype.saveZoneToGeoZone = function (zoneToGeoZone) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (zoneToGeoZone.country && zoneToGeoZone.zone) {
            zoneToGeoZone.geoZone = this.geoZone;
            try {
                this.messages = '';
                console.log(zoneToGeoZone);
                var index_1 = this.zoneToGeoZoneDS.data.indexOf(zoneToGeoZone);
                this.appService.save(zoneToGeoZone, 'ZoneToGeoZone')
                    .subscribe(function (result) {
                    if (result.id > 0) {
                        if (index_1 !== -1) {
                            _this.zoneToGeoZoneDS.data.splice(index_1, 1);
                        }
                        _this.zoneToGeoZoneDS.data.push(result);
                        _this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.zoneToGeoZoneDS.data);
                        _this.zoneToGeoZoneDS.paginator = _this.paginator;
                        _this.zoneToGeoZoneDS.sort = _this.sort;
                        _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                            _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                        });
                    }
                    else {
                        _this.selectedTab = 1;
                        _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                            _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                        });
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
    };
    GeoZonesComponent.prototype.deleteZoneToGeoZone = function (zoneToGeoZone) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (!(zoneToGeoZone.id > 0)) {
            var index = this.zoneToGeoZoneDS.data.indexOf(zoneToGeoZone);
            if (index !== -1) {
                this.zoneToGeoZoneDS.data.splice(index, 1);
                this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.zoneToGeoZoneDS.data);
                this.zoneToGeoZoneDS.paginator = this.paginator;
                this.zoneToGeoZoneDS.sort = this.sort;
            }
        }
        else {
            this.appService.delete(zoneToGeoZone.id, 'com.softenza.emarket.model.ZoneToGeoZone')
                .subscribe(function (resp) {
                if (resp.result === 'SUCCESS') {
                    var index = _this.zoneToGeoZoneDS.data.indexOf(zoneToGeoZone);
                    if (index !== -1) {
                        _this.zoneToGeoZoneDS.data.splice(index, 1);
                        _this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.zoneToGeoZoneDS.data);
                        _this.zoneToGeoZoneDS.paginator = _this.paginator;
                        _this.zoneToGeoZoneDS.sort = _this.sort;
                    }
                }
                else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                    _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                    });
                }
            });
        }
    };
    GeoZonesComponent.prototype.getCountries = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Country', parameters)
            .subscribe(function (data) {
            _this.countries = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Countries complete'); });
    };
    GeoZonesComponent.prototype.remove = function (geoZone) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(geoZone.id, 'com.softenza.emarket.model.GeoZone')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(geoZone);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    GeoZonesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GeoZonesComponent.prototype.clear = function () {
        this.geoZone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    GeoZonesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.geoZone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    GeoZonesComponent.prototype.edit = function (si) {
        this.geoZone = si;
        this.getZoneToGeoZone();
        this.selectedTab = 1;
    };
    GeoZonesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.geoZone);
            var index_2 = this.dataSource.data.indexOf(this.geoZone);
            this.appService.save(this.geoZone, 'GeoZone')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.geoZone = result;
                    if (index_2 !== -1) {
                        _this.dataSource.data.splice(index_2, 1);
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], GeoZonesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], GeoZonesComponent.prototype, "sort", void 0);
    GeoZonesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geo-zone',
            templateUrl: './GeoZones.component.html',
            styleUrls: ['./GeoZones.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], GeoZonesComponent);
    return GeoZonesComponent;
}());



/***/ }),

/***/ 2359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxRatesComponent", function() { return TaxRatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaxRatesComponent = /** @class */ (function () {
    function TaxRatesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'taxType', 'rate', 'createDate', 'modDate', 'actions'];
        this.taxRate = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
        this.geoZones = [];
    }
    TaxRatesComponent.prototype.ngOnInit = function () {
        this.getGeoZones();
        this.getAll();
    };
    TaxRatesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.TaxRate', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all TaxRate complete'); });
    };
    TaxRatesComponent.prototype.getGeoZones = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.GeoZone', parameters)
            .subscribe(function (data) {
            _this.geoZones = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Countries complete'); });
    };
    TaxRatesComponent.prototype.remove = function (taxRate) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(taxRate.id, 'com.softenza.emarket.model.TaxRate')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(taxRate);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    TaxRatesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TaxRatesComponent.prototype.clear = function () {
        this.taxRate = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    TaxRatesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.taxRate = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    TaxRatesComponent.prototype.edit = function (si) {
        this.taxRate = si;
        this.selectedTab = 1;
    };
    TaxRatesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.taxRate);
            var index_1 = this.dataSource.data.indexOf(this.taxRate);
            this.appService.save(this.taxRate, 'TaxRate')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.taxRate = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TaxRatesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TaxRatesComponent.prototype, "sort", void 0);
    TaxRatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-rates',
            templateUrl: './TaxRates.component.html',
            styleUrls: ['./TaxRates.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], TaxRatesComponent);
    return TaxRatesComponent;
}());



/***/ }),

/***/ 2360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxClassesComponent", function() { return TaxClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaxClassesComponent = /** @class */ (function () {
    function TaxClassesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'title', 'description', 'actions'];
        this.displayedColumns2 = ['id', 'rate', 'based', 'priority', 'actions'];
        this.taxClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.taxRates = [];
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
    }
    TaxClassesComponent.prototype.ngOnInit = function () {
        this.getTaxRates();
        // this.getTaxRule();
        this.getAll();
    };
    TaxClassesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.TaxClass', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all TaxClass complete'); });
    };
    TaxClassesComponent.prototype.getTaxRule = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.taxClass.id = |taxClassId|' + this.taxClass.id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.TaxRule', parameters)
            .subscribe(function (data) {
            _this.taxRuleDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.taxRuleDS.paginator = _this.paginator;
            _this.taxRuleDS.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all TaxClass complete'); });
    };
    TaxClassesComponent.prototype.addNewTaxRule = function () {
        if (!this.taxRuleDS || this.taxRuleDS == null || !this.taxRuleDS.data) {
            var data = [];
            this.taxRuleDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            this.taxRuleDS.data = [];
        }
        this.taxRuleDS.data.unshift(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
        this.taxRuleDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.taxRuleDS.data);
        this.taxRuleDS.paginator = this.paginator;
        this.taxRuleDS.sort = this.sort;
    };
    TaxClassesComponent.prototype.saveTaxRule = function (taxRule) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (taxRule.taxRate && taxRule.priority) {
            taxRule.taxClass = this.taxClass;
            try {
                this.messages = '';
                console.log(taxRule);
                var index_1 = this.taxRuleDS.data.indexOf(taxRule);
                this.appService.save(taxRule, 'TaxRule')
                    .subscribe(function (result) {
                    if (result.id > 0) {
                        if (index_1 !== -1) {
                            _this.taxRuleDS.data.splice(index_1, 1);
                        }
                        _this.taxRuleDS.data.push(result);
                        _this.taxRuleDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.taxRuleDS.data);
                        _this.taxRuleDS.paginator = _this.paginator;
                        _this.taxRuleDS.sort = _this.sort;
                        _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                            _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                        });
                    }
                    else {
                        _this.selectedTab = 1;
                        _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                            _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                        });
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
    };
    TaxClassesComponent.prototype.deleteTaxRule = function (taxRule) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (!(taxRule.id > 0)) {
            var index = this.taxRuleDS.data.indexOf(taxRule);
            if (index !== -1) {
                this.taxRuleDS.data.splice(index, 1);
                this.taxRuleDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.taxRuleDS.data);
                this.taxRuleDS.paginator = this.paginator;
                this.taxRuleDS.sort = this.sort;
            }
        }
        else {
            this.appService.delete(taxRule.id, 'com.softenza.emarket.model.TaxRule')
                .subscribe(function (resp) {
                if (resp.result === 'SUCCESS') {
                    var index = _this.taxRuleDS.data.indexOf(taxRule);
                    if (index !== -1) {
                        _this.taxRuleDS.data.splice(index, 1);
                        _this.taxRuleDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.taxRuleDS.data);
                        _this.taxRuleDS.paginator = _this.paginator;
                        _this.taxRuleDS.sort = _this.sort;
                    }
                }
                else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                    _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                    });
                }
            });
        }
    };
    TaxClassesComponent.prototype.getTaxRates = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.TaxRate', parameters)
            .subscribe(function (data) {
            _this.taxRates = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all TaxRates complete'); });
    };
    TaxClassesComponent.prototype.remove = function (taxClass) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(taxClass.id, 'com.softenza.emarket.model.TaxClass')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(taxClass);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    TaxClassesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TaxClassesComponent.prototype.clear = function () {
        this.taxClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.taxRuleDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    TaxClassesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.taxClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    TaxClassesComponent.prototype.edit = function (si) {
        this.taxClass = si;
        this.getTaxRule();
        this.selectedTab = 1;
    };
    TaxClassesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.taxClass);
            var index_2 = this.dataSource.data.indexOf(this.taxClass);
            this.appService.save(this.taxClass, 'TaxClass')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.taxClass = result;
                    if (index_2 !== -1) {
                        _this.dataSource.data.splice(index_2, 1);
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TaxClassesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TaxClassesComponent.prototype, "sort", void 0);
    TaxClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-class',
            templateUrl: './TaxClasses.component.html',
            styleUrls: ['./TaxClasses.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], TaxClassesComponent);
    return TaxClassesComponent;
}());



/***/ }),

/***/ 2361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightClassComponent", function() { return WeightClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeightClassComponent = /** @class */ (function () {
    function WeightClassComponent(appService, activatedRoute, translate) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.displayedColumns = ['id', 'image', 'title', 'lang', 'actions'];
        this.weightClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.weightClassDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.weightClassDescs = [];
        this.formData = new FormData();
        this.weightClasses = [];
        this.weightClassImages = [];
        this.messages = '';
        this.errors = '';
        this.lang = 'fr';
        this.selectedTab = 0;
        this.selectedMainTabIndex = 0;
    }
    WeightClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAll();
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id == 0) {
                _this.clear();
            }
            else {
                _this.getCatDescs(params.id);
                _this.getWeightClass(params.id);
            }
        });
    };
    WeightClassComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('com.softenza.emarket.model.WeightClassDescription', parameters, ' order by e.weightClass.sortOrder ')
            .subscribe(function (data) {
            _this.weightClasses = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all WeightClassDescription complete'); });
    };
    WeightClassComponent.prototype.clear = function () {
        this.weightClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.weightClassDescs = [];
        this.refreshLangObjects();
    };
    WeightClassComponent.prototype.onMainTabChanged = function ($event) {
        console.log('Selectd main = ' + this.selectedMainTabIndex);
        this.messages = '';
        if (this.selectedMainTabIndex === 1) {
            this.selectedTab = 0;
        }
    };
    WeightClassComponent.prototype.getCatDescs = function (weightClassId) {
        var _this = this;
        var parameters = [];
        if (weightClassId != null) {
            parameters.push('e.weightClass.id = |weightClassId|' + weightClassId + '|Integer');
        }
        this.appService.getAllByCriteria('com.softenza.emarket.model.WeightClassDescription', parameters)
            .subscribe(function (data) {
            _this.weightClassDescs = data;
            _this.refreshLangObjects();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all WeightClass Item complete'); });
    };
    WeightClassComponent.prototype.refreshLangObjects = function () {
        var _this = this;
        var first = true;
        this.appService.appInfoStorage.languages.forEach(function (language) {
            console.log('Refresh = ' + language.name);
            var found = false;
            _this.weightClassDescs.forEach(function (aCatDesc) {
                if (aCatDesc.language.code === language.code) {
                    found = true;
                    if (first) {
                        _this.weightClassDesc = aCatDesc;
                        console.log(_this.weightClassDesc);
                        first = false;
                    }
                }
            });
            if (!found) {
                var a = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                a.language = language;
                a.weightClass = _this.weightClass;
                _this.weightClassDescs.push(a);
                if (first) {
                    _this.weightClassDesc = a;
                    first = false;
                }
            }
        });
    };
    WeightClassComponent.prototype.getWeightClass = function (weightClassId) {
        var _this = this;
        if (weightClassId > 0) {
            this.appService.getOne(weightClassId, 'com.softenza.emarket.model.WeightClass')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.weightClass = result;
                }
                else {
                    _this.weightClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    WeightClassComponent.prototype.onLangChanged = function (event) {
        var _this = this;
        console.log('Selected lang =' + event.tab.textLabel);
        this.weightClassDescs.forEach(function (aCatDesc) {
            if (aCatDesc.language.name === event.tab.textLabel) {
                _this.weightClassDesc = aCatDesc;
            }
        });
    };
    WeightClassComponent.prototype.saveWeightClass = function (type) {
        var _this = this;
        if (type === 2 && this.weightClass.id > 0) {
            this.saveWeightClassDesc();
        }
        else {
            this.messages = '';
            this.errors = '';
            try {
                var nbFiles = 0;
                for (var _i = 0, _a = this.weightClassImages; _i < _a.length; _i++) {
                    var img = _a[_i];
                    nbFiles++;
                    this.formData.append('file[]', img.file, 'picture.jpg');
                }
                if (this.weightClassImages.length > 0) {
                    this.appService.saveWithFile(this.weightClass, 'WeightClass', this.formData, 'saveWithFile')
                        .subscribe(function (result) {
                        if (result.id > 0) {
                            console.log('saveWithFile');
                            _this.weightClass = result;
                            if (type === 2) {
                                _this.saveWeightClassDesc();
                            }
                            _this.weightClassImages = [];
                            _this.formData = new FormData();
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
                else {
                    this.appService.save(this.weightClass, 'WeightClass')
                        .subscribe(function (result) {
                        if (result.id > 0) {
                            _this.weightClass = result;
                            if (type === 2) {
                                _this.saveWeightClassDesc();
                            }
                            console.log('Saved');
                            _this.weightClassImages = [];
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
            }
            catch (e) {
                console.log(e);
            }
        }
    };
    WeightClassComponent.prototype.saveWeightClassDesc = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            this.weightClassDesc.weightClass = this.weightClass;
            console.log(this.weightClassDesc);
            console.log(this.weightClassDescs);
            var index_1 = this.weightClassDescs.indexOf(this.weightClassDesc);
            this.appService.save(this.weightClassDesc, 'WeightClassDescription')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.weightClassDesc = result;
                    _this.weightClassDescs.splice(index_1, 1);
                    _this.weightClassDescs.push(result);
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
    WeightClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weight-class',
            templateUrl: './WeightClass.component.html',
            styleUrls: ['./WeightClass.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], WeightClassComponent);
    return WeightClassComponent;
}());



/***/ }),

/***/ 2362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightClassesComponent", function() { return WeightClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeightClassesComponent = /** @class */ (function () {
    function WeightClassesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'title', 'unit', 'value', 'actions'];
        this.messages = '';
    }
    WeightClassesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    WeightClassesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('com.softenza.emarket.model.WeightClassDescription', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all WeightClassDescription complete'); });
    };
    WeightClassesComponent.prototype.remove = function (weightClassDesc) {
        var _this = this;
        this.messages = '';
        this.appService.delete(weightClassDesc.id, 'com.softenza.emarket.model.WeightClassDescription')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(weightClassDesc);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.dataSource.data);
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
    WeightClassesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], WeightClassesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], WeightClassesComponent.prototype, "sort", void 0);
    WeightClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weight-classes',
            templateUrl: './WeightClasses.component.html',
            styleUrls: ['./WeightClasses.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], WeightClassesComponent);
    return WeightClassesComponent;
}());



/***/ }),

/***/ 2363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LengthClassesComponent", function() { return LengthClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LengthClassesComponent = /** @class */ (function () {
    function LengthClassesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'title', 'unit', 'value', 'actions'];
        this.messages = '';
    }
    LengthClassesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    LengthClassesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('com.softenza.emarket.model.LengthClassDescription', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all LengthClassDescription complete'); });
    };
    LengthClassesComponent.prototype.remove = function (lengthClassDesc) {
        var _this = this;
        this.messages = '';
        this.appService.delete(lengthClassDesc.id, 'com.softenza.emarket.model.LengthClassDescription')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(lengthClassDesc);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.dataSource.data);
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
    LengthClassesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], LengthClassesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], LengthClassesComponent.prototype, "sort", void 0);
    LengthClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-length-classes',
            templateUrl: './LengthClasses.component.html',
            styleUrls: ['./LengthClasses.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], LengthClassesComponent);
    return LengthClassesComponent;
}());



/***/ }),

/***/ 2364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LengthClassComponent", function() { return LengthClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LengthClassComponent = /** @class */ (function () {
    function LengthClassComponent(appService, activatedRoute, translate) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.displayedColumns = ['id', 'image', 'title', 'lang', 'actions'];
        this.lengthClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.lengthClassDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.lengthClassDescs = [];
        this.formData = new FormData();
        this.lengthClasses = [];
        this.lengthClassImages = [];
        this.messages = '';
        this.errors = '';
        this.lang = 'fr';
        this.selectedTab = 0;
        this.selectedMainTabIndex = 0;
    }
    LengthClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAll();
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id == 0) {
                _this.clear();
            }
            else {
                _this.getCatDescs(params.id);
                _this.getLengthClass(params.id);
            }
        });
    };
    LengthClassComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('com.softenza.emarket.model.LengthClassDescription', parameters, ' order by e.lengthClass.sortOrder ')
            .subscribe(function (data) {
            _this.lengthClasses = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all LengthClassDescription complete'); });
    };
    LengthClassComponent.prototype.clear = function () {
        this.lengthClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.lengthClassDescs = [];
        this.refreshLangObjects();
    };
    LengthClassComponent.prototype.onMainTabChanged = function ($event) {
        console.log('Selectd main = ' + this.selectedMainTabIndex);
        this.messages = '';
        if (this.selectedMainTabIndex === 1) {
            this.selectedTab = 0;
        }
    };
    LengthClassComponent.prototype.getCatDescs = function (lengthClassId) {
        var _this = this;
        var parameters = [];
        if (lengthClassId != null) {
            parameters.push('e.lengthClass.id = |lengthClassId|' + lengthClassId + '|Integer');
        }
        this.appService.getAllByCriteria('com.softenza.emarket.model.LengthClassDescription', parameters)
            .subscribe(function (data) {
            _this.lengthClassDescs = data;
            _this.refreshLangObjects();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all LengthClass Item complete'); });
    };
    LengthClassComponent.prototype.refreshLangObjects = function () {
        var _this = this;
        var first = true;
        this.appService.appInfoStorage.languages.forEach(function (language) {
            console.log('Refresh = ' + language.name);
            var found = false;
            _this.lengthClassDescs.forEach(function (aCatDesc) {
                if (aCatDesc.language.code === language.code) {
                    found = true;
                    if (first) {
                        _this.lengthClassDesc = aCatDesc;
                        console.log(_this.lengthClassDesc);
                        first = false;
                    }
                }
            });
            if (!found) {
                var a = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                a.language = language;
                a.lengthClass = _this.lengthClass;
                _this.lengthClassDescs.push(a);
                if (first) {
                    _this.lengthClassDesc = a;
                    first = false;
                }
            }
        });
    };
    LengthClassComponent.prototype.getLengthClass = function (lengthClassId) {
        var _this = this;
        if (lengthClassId > 0) {
            this.appService.getOne(lengthClassId, 'com.softenza.emarket.model.LengthClass')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.lengthClass = result;
                }
                else {
                    _this.lengthClass = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    LengthClassComponent.prototype.onLangChanged = function (event) {
        var _this = this;
        console.log('Selected lang =' + event.tab.textLabel);
        this.lengthClassDescs.forEach(function (aCatDesc) {
            if (aCatDesc.language.name === event.tab.textLabel) {
                _this.lengthClassDesc = aCatDesc;
            }
        });
    };
    LengthClassComponent.prototype.saveLengthClass = function (type) {
        var _this = this;
        if (type === 2 && this.lengthClass.id > 0) {
            this.saveLengthClassDesc();
        }
        else {
            this.messages = '';
            this.errors = '';
            try {
                var nbFiles = 0;
                for (var _i = 0, _a = this.lengthClassImages; _i < _a.length; _i++) {
                    var img = _a[_i];
                    nbFiles++;
                    this.formData.append('file[]', img.file, 'picture.jpg');
                }
                console.log(this.lengthClass);
                if (this.lengthClassImages.length > 0) {
                    this.appService.saveWithFile(this.lengthClass, 'LengthClass', this.formData, 'saveWithFile')
                        .subscribe(function (result) {
                        if (result.id > 0) {
                            console.log('saveWithFile');
                            _this.lengthClass = result;
                            if (type === 2) {
                                _this.saveLengthClassDesc();
                            }
                            _this.lengthClassImages = [];
                            _this.formData = new FormData();
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
                else {
                    this.appService.save(this.lengthClass, 'LengthClass')
                        .subscribe(function (result) {
                        if (result.id > 0) {
                            _this.lengthClass = result;
                            if (type === 2) {
                                _this.saveLengthClassDesc();
                            }
                            console.log('Saved');
                            _this.lengthClassImages = [];
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
            }
            catch (e) {
                console.log(e);
            }
        }
    };
    LengthClassComponent.prototype.saveLengthClassDesc = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            this.lengthClassDesc.lengthClass = this.lengthClass;
            console.log(this.lengthClassDesc);
            console.log(this.lengthClassDescs);
            var index_1 = this.lengthClassDescs.indexOf(this.lengthClassDesc);
            this.appService.save(this.lengthClassDesc, 'LengthClassDescription')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.lengthClassDesc = result;
                    _this.lengthClassDescs.splice(index_1, 1);
                    _this.lengthClassDescs.push(result);
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
    LengthClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-length-class',
            templateUrl: './LengthClass.component.html',
            styleUrls: ['./LengthClass.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LengthClassComponent);
    return LengthClassComponent;
}());



/***/ }),

/***/ 2365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigsComponent", function() { return ConfigsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(484);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'telephone', 'actions'];
        this.toolbarTypes = [0, 1, 2];
        this.headerTypes = ['default', 'image', 'carousel'];
        this.footerTypes = ['Footer-1', 'Footer-2', 'Footer-3'];
        this.flags = [
            { name: 'Francais', image: 'assets/images/flags/fr.svg', code: 'fr' },
            { name: 'English', image: 'assets/images/flags/gb.svg', code: 'en' }
        ];
        this.formData = new FormData();
        this.company = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.companies = [];
        this.location = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.selectedTab = 0;
        this.selectedMainTabIndex = 0;
    }
    ConfigsComponent.prototype.edit = function (si) {
        this.location = si;
        this.selectedTab = 1;
    };
    ConfigsComponent.prototype.changeLang = function (flag) {
        var _this = this;
        var found = false;
        this.flag = flag;
        this.companies.forEach(function (aCompany) {
            if (flag.code === aCompany.language) {
                _this.company = aCompany;
                found = true;
            }
        });
        if (!found) {
            this.company = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            this.company.language = flag.code;
        }
    };
    ConfigsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        var parameters = [];
        this.appService.getAllByCriteria('Company', parameters)
            .subscribe(function (data) {
            _this.companies = data;
            var found = false;
            if (_this.companies.length > 0) {
                _this.companies.forEach(function (aCompany) {
                    if (_this.appService.lang === aCompany.language) {
                        _this.company = aCompany;
                        found = true;
                    }
                });
            }
            if (!found) {
                _this.company = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                _this.company.language = _this.appService.lang;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get Company complete'); });
        this.appService.getAllByCriteria('Location', parameters, 'order by e.rank ')
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get locatioms complete'); });
    };
    ConfigsComponent.prototype.onMainTabChanged = function ($event) {
        console.log('Selectd main = ' + this.selectedMainTabIndex);
        this.messages = '';
        if (this.selectedMainTabIndex === 5) {
            this.selectedTab = 0;
        }
    };
    ConfigsComponent.prototype.save = function () {
        var _this = this;
        this.formData = new FormData();
        var nbFiles = 0;
        var isNew = !(this.company.id > 0);
        for (var i = 0; i < this.favicons.length; i++) {
            nbFiles++;
            this.formData.append('file[]', this.favicons[i].file, 'favicon.ico');
        }
        for (var i = 0; i < this.logos.length; i++) {
            nbFiles++;
            this.formData.append('file[]', this.logos[i].file, 'logo.png');
        }
        try {
            console.log('Nomber of files: ' + nbFiles);
            console.log(this.formData);
            console.log(this.company);
            if (nbFiles > 0) {
                this.appService.saveWithFile(this.company, 'Company', this.formData, 'saveWithFile')
                    .subscribe(function (result) {
                    if (result.id > 0) {
                        _this.company = result;
                        // this.appService.initCompany();
                        if (isNew) {
                            _this.companies.push(_this.company);
                        }
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
            }
            else {
                this.appService.save(this.company, 'Company')
                    .subscribe(function (result) {
                    if (result.id > 0) {
                        _this.company = result;
                        // this.appService.initCompany();
                        if (isNew) {
                            _this.companies.push(_this.company);
                        }
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
            }
        }
        catch (e) {
            this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                _this.messages = res['MESSAGE.ERROR_OCCURRED'];
            });
            console.log(e);
        }
    };
    ConfigsComponent.prototype.clear = function () {
        this.location = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    };
    ConfigsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ConfigsComponent.prototype.addLocation = function () {
        this.selectedTab = 1;
        this.location = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    ConfigsComponent.prototype.remove = function (location) {
        var _this = this;
        this.messages = '';
        this.appService.delete(location.id, 'com.wack.model.Location')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(location);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.dataSource.data);
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
    ConfigsComponent.prototype.saveLocation = function () {
        var _this = this;
        this.messages = '';
        try {
            this.messages = '';
            var index_1 = this.dataSource.data.indexOf(this.location);
            this.appService.save(this.location, 'Location')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.location = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
                    if (index_1 !== -1) {
                        _this.dataSource.data.splice(index_1, 1);
                    }
                    _this.dataSource.data.push(result);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    _this.selectedTab = 1;
                    _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_UNSUCCESS'];
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ConfigsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ConfigsComponent.prototype, "sort", void 0);
    ConfigsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-properties',
            templateUrl: './configs.component.html',
            styleUrls: ['./configs.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ConfigsComponent);
    return ConfigsComponent;
}());



/***/ }),

/***/ 2366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippersComponent", function() { return ShippersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShippersComponent = /** @class */ (function () {
    function ShippersComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'phone', 'status', 'deliveryCount', 'rating', 'sortOrder'];
        this.shipper = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
    }
    ShippersComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ShippersComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        if (this.shipperName) {
            parameters.push('e.name = |shipperName|' + this.shipperName + '|String');
        }
        if (this.shipperLastName) {
            parameters.push('e.user.lastName = |shipperLastName|' + this.shipperLastName + '|String');
        }
        if (this.shipperFirstName) {
            parameters.push('e.user.firstName = |shipperFirstName|' + this.shipperFirstName + '|String');
        }
        this.appService.getAllByCriteria('com.softenza.emarket.model.Shipper', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Shipper complete'); });
    };
    ShippersComponent.prototype.remove = function (shipper) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(shipper.id, 'com.softenza.emarket.model.Shipper')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(shipper);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    ShippersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ShippersComponent.prototype.clear = function () {
        this.shipper = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    ShippersComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.shipper = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    ShippersComponent.prototype.edit = function (si) {
        this.shipper = si;
        this.selectedTab = 1;
    };
    ShippersComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.shipper);
            var index_1 = this.dataSource.data.indexOf(this.shipper);
            this.shipper.status = (this.shipper.status == null || this.shipper.status.toString() === 'false') ? 0 : 1;
            this.appService.save(this.shipper, 'Shipper')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.shipper = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ShippersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ShippersComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShippersComponent.prototype, "shipperName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShippersComponent.prototype, "shipperLastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShippersComponent.prototype, "shipperFirstName", void 0);
    ShippersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipper',
            templateUrl: './Shippers.component.html',
            styleUrls: ['./Shippers.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ShippersComponent);
    return ShippersComponent;
}());



/***/ }),

/***/ 2367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonesComponent", function() { return ZonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZonesComponent = /** @class */ (function () {
    function ZonesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'code', 'country', 'actions'];
        this.zone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.countries = [];
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
    }
    ZonesComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.getCountries();
    };
    ZonesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Zone', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Zone complete'); });
    };
    ZonesComponent.prototype.getCountries = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Country', parameters)
            .subscribe(function (data) {
            _this.countries = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Countries complete'); });
    };
    ZonesComponent.prototype.remove = function (zone) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(zone.id, 'com.softenza.emarket.model.Zone')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(zone);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    ZonesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ZonesComponent.prototype.clear = function () {
        this.zone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    ZonesComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.zone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    ZonesComponent.prototype.edit = function (si) {
        this.zone = si;
        this.selectedTab = 1;
    };
    ZonesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.zone);
            var index_1 = this.dataSource.data.indexOf(this.zone);
            this.zone.status = (this.zone.status == null || this.zone.status.toString() === 'false') ? 0 : 1;
            this.appService.save(this.zone, 'Zone')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.zone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ZonesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ZonesComponent.prototype, "sort", void 0);
    ZonesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zone',
            templateUrl: './Zones.component.html',
            styleUrls: ['./Zones.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ZonesComponent);
    return ZonesComponent;
}());



/***/ }),

/***/ 2368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StoresComponent = /** @class */ (function () {
    function StoresComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'language', 'actions'];
        this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.messages = '';
        this.errors = '';
        this.selectedTab = 0;
    }
    StoresComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    StoresComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.ReturnAction', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReturnAction complete'); });
    };
    StoresComponent.prototype.remove = function (returnAction) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(returnAction.id, 'com.softenza.emarket.model.ReturnAction')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(returnAction);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    StoresComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    StoresComponent.prototype.clear = function () {
        this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    };
    StoresComponent.prototype.addSectionItem = function () {
        this.selectedTab = 1;
        this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    StoresComponent.prototype.edit = function (si) {
        this.returnAction = si;
        this.selectedTab = 1;
    };
    StoresComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.returnAction);
            var index_1 = this.dataSource.data.indexOf(this.returnAction);
            this.appService.save(this.returnAction, 'ReturnAction')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.returnAction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.selectedTab = 0;
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
                    _this.selectedTab = 1;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StoresComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StoresComponent.prototype, "sort", void 0);
    StoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stores',
            templateUrl: './Stores.component.html',
            styleUrls: ['./Stores.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], StoresComponent);
    return StoresComponent;
}());



/***/ })

};;