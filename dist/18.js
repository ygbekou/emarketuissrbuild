exports.ids = [18];
exports.modules = {

/***/ 2309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreServicesComponent", function() { return StoreServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _StoreService_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2310);
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












var StoreServicesComponent = /** @class */ (function (_super) {
    __extends(StoreServicesComponent, _super);
    function StoreServicesComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.ssColumns = ['name', 'renewalDate', 'startDate', 'endDate', 'amount', 'billRecur', 'renewalRecur', 'actions'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.colors = ['primary', 'secondary'];
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.services = [];
        return _this;
    }
    StoreServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    StoreServicesComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
        this.search();
    };
    StoreServicesComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    StoreServicesComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
            this.appService.saveWithUrl('/service/finance/getStoreServices', this.searchCriteria)
                .subscribe(function (data) {
                _this.ssDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.ssDatasource.paginator = _this.ssPaginator;
                _this.ssDatasource.sort = _this.ssSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get store services complete'); });
        }
    };
    StoreServicesComponent.prototype.applyFilter = function (filterValue) {
        this.ssDatasource.filter = filterValue.trim().toLowerCase();
        if (this.ssDatasource.paginator) {
            this.ssDatasource.paginator.firstPage();
        }
    };
    StoreServicesComponent.prototype.getStoreServiceDetails = function (ss) {
        this.selected.setValue(1);
        this.storeServiceComponent.getStoreService(ss);
    };
    StoreServicesComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
            _this.selected.setValue(0);
            if (_this.storeServiceComponent) {
                _this.storeServiceComponent.store = event.value;
                _this.storeServiceComponent.getMyStoreEmployees();
                _this.storeServiceComponent.clear([]);
            }
        }, 500);
    };
    StoreServicesComponent.prototype.updateDataTable = function (storeService) {
        this.updateDatasourceData(this.ssDatasource, this.ssPaginator, this.ssSort, storeService);
        this.selected.setValue(0);
    };
    StoreServicesComponent.prototype.setStore = function (store) {
        var _this = this;
        setTimeout(function () {
            _this.selectedStore = store;
            _this.searchCriteria.storeId = store.id;
            _this.search();
        }, 500);
    };
    StoreServicesComponent.prototype.tabChanged = function (store) {
        var _this = this;
        setTimeout(function () {
            if (_this.storeServiceComponent) {
                console.log(store);
                _this.storeServiceComponent.store = store;
            }
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorSs', { static: false }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StoreServicesComponent.prototype, "ssPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StoreServicesComponent.prototype, "ssSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_StoreService_component__WEBPACK_IMPORTED_MODULE_9__["StoreServiceComponent"], { static: false }),
        __metadata("design:type", _StoreService_component__WEBPACK_IMPORTED_MODULE_9__["StoreServiceComponent"])
    ], StoreServicesComponent.prototype, "storeServiceComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StoreServicesComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreServicesComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], StoreServicesComponent.prototype, "selectedStore", void 0);
    StoreServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-services',
            templateUrl: './StoreServices.component.html',
            styleUrls: ['./StoreServices.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], StoreServicesComponent);
    return StoreServicesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreServiceComponent", function() { return StoreServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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







var StoreServiceComponent = /** @class */ (function (_super) {
    __extends(StoreServiceComponent, _super);
    function StoreServiceComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.messages = '';
        _this.storeService = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeEmployees = [];
        _this.formData = new FormData();
        _this.picture = [];
        _this.isAdminPage = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeServiceSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.saving = false;
        _this.justSubmitted = false;
        return _this;
    }
    StoreServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear([]);
            }
            else {
                _this.storeService.id = params.id;
                _this.clear([]);
                _this.getStoreService(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.getMyStoreEmployees();
        this.clear([]);
    };
    StoreServiceComponent.prototype.ngAfterViewInit = function () {
    };
    StoreServiceComponent.prototype.clear = function (data) {
        this.messages = '';
        this.storeService = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.picture = [];
    };
    StoreServiceComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.store.id) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.store.id + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
                console.log(_this.storeEmployees);
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    StoreServiceComponent.prototype.getStoreService = function (storeService) {
        var _this = this;
        this.messages = '';
        if (storeService && storeService.id > 0) {
            this.appService.getOneWithChildsAndFiles(storeService.id, 'StoreService')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.storeService = result;
                    console.log(_this.storeService);
                    if (_this.storeService.renewalDate !== null && _this.storeService.renewalDate !== undefined) {
                        console.log('Renewal Date is not null before: ' + _this.storeService.renewalDate);
                        _this.storeService.renewalDate = new Date(_this.storeService.renewalDate);
                        console.log('Renewal Date is not null after: ' + _this.storeService.renewalDate);
                    }
                    if (_this.storeService.startDate !== null && _this.storeService.startDate !== undefined) {
                        console.log('Start Date is not null before: ' + _this.storeService.startDate);
                        _this.storeService.startDate = new Date(_this.storeService.startDate);
                        console.log('Start Date is not null after: ' + _this.storeService.startDate);
                    }
                    if (_this.storeService.endDate !== null && _this.storeService.endDate !== undefined) {
                        console.log('End Date is not null before: ' + _this.storeService.endDate);
                        _this.storeService.endDate = new Date(_this.storeService.endDate);
                        console.log('End Date is not null after: ' + _this.storeService.endDate);
                    }
                    var images = [];
                    var image = {
                        link: 'assets/images/storeservices/' + _this.storeService.id + '/' + _this.storeService.image,
                        preview: 'assets/images/storeservices/' + _this.storeService.id + '/' + _this.storeService.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.storeService = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear([]);
        }
    };
    StoreServiceComponent.prototype.save = function () {
        var _this = this;
        if (this.justSubmitted) {
            this.justSubmitted = false;
            return;
        }
        this.saving = true;
        this.messages = '';
        this.storeService.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (!this.storeService.store.id) {
            this.storeService.store.id = this.store.id;
        }
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.saveWithFile(this.storeService, 'StoreService', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.storeService, null);
            _this.storeService = data;
            _this.storeService.storeName = _this.store.name;
            _this.storeService.service.name = _this.appService.getServiceDesc(_this.storeService.service).name;
            _this.storeServiceSaveEvent.emit(_this.storeService);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Save Store Service complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreServiceComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StoreServiceComponent.prototype, "storeServiceSaveEvent", void 0);
    StoreServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-service',
            templateUrl: './StoreService.component.html',
            styleUrls: ['./StoreServices.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], StoreServiceComponent);
    return StoreServiceComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancesModule", function() { return FinancesModule; });
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
/* harmony import */ var _TransactionType_TransactionType_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2312);
/* harmony import */ var _TransactionTypes_TransactionTypes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2313);
/* harmony import */ var _FundType_FundType_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2314);
/* harmony import */ var _FundTypes_FundTypes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2315);
/* harmony import */ var _Finances_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2316);
/* harmony import */ var _Suppliers_Supplier_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2318);
/* harmony import */ var _Suppliers_Suppliers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2317);
/* harmony import */ var _Billings_Bill_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2320);
/* harmony import */ var _Billings_BillDetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2321);
/* harmony import */ var _Billings_Bills_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2319);
/* harmony import */ var _Service_Service_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2326);
/* harmony import */ var _Services_Services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2325);
/* harmony import */ var _StoreServices_StoreService_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2310);
/* harmony import */ var _StoreServices_StoreServices_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2309);
/* harmony import */ var _Billings_UserBill_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2322);
/* harmony import */ var _Billings_BillPayment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2323);
/* harmony import */ var _Billings_UserBillPayment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2324);
/* harmony import */ var _Wallets_AdminWallets_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2327);
/* harmony import */ var _Wallets_AdminWallet_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2328);
/* harmony import */ var _DiscountCards_AdminDiscountCards_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2329);
/* harmony import */ var _DiscountCards_AdminDiscountCard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2330);
/* harmony import */ var _DiscountCards_AdminDCDetails_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2331);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/Validation/max-bill-amount.directive'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var FinancesModule = /** @class */ (function () {
    function FinancesModule() {
    }
    FinancesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _FundType_FundType_component__WEBPACK_IMPORTED_MODULE_12__["FundTypeComponent"],
                _FundTypes_FundTypes_component__WEBPACK_IMPORTED_MODULE_13__["FundTypesComponent"],
                _TransactionType_TransactionType_component__WEBPACK_IMPORTED_MODULE_10__["TransactionTypeComponent"],
                _TransactionTypes_TransactionTypes_component__WEBPACK_IMPORTED_MODULE_11__["TransactionTypesComponent"],
                _Suppliers_Supplier_component__WEBPACK_IMPORTED_MODULE_15__["SupplierComponent"],
                _Suppliers_Suppliers_component__WEBPACK_IMPORTED_MODULE_16__["SuppliersComponent"],
                _Billings_Bill_component__WEBPACK_IMPORTED_MODULE_17__["BillComponent"],
                _Billings_BillDetails_component__WEBPACK_IMPORTED_MODULE_18__["BillDetailsComponent"],
                _Billings_BillPayment_component__WEBPACK_IMPORTED_MODULE_25__["BillPaymentComponent"],
                _Billings_UserBillPayment_component__WEBPACK_IMPORTED_MODULE_26__["UserBillPaymentComponent"],
                _Billings_Bills_component__WEBPACK_IMPORTED_MODULE_19__["BillsComponent"],
                _Billings_UserBill_component__WEBPACK_IMPORTED_MODULE_24__["UserBillComponent"],
                _Service_Service_component__WEBPACK_IMPORTED_MODULE_20__["ServiceComponent"],
                _Services_Services_component__WEBPACK_IMPORTED_MODULE_21__["ServicesComponent"],
                _StoreServices_StoreService_component__WEBPACK_IMPORTED_MODULE_22__["StoreServiceComponent"],
                _StoreServices_StoreServices_component__WEBPACK_IMPORTED_MODULE_23__["StoreServicesComponent"],
                _Wallets_AdminWallets_component__WEBPACK_IMPORTED_MODULE_27__["AdminWalletsComponent"],
                _Wallets_AdminWallet_component__WEBPACK_IMPORTED_MODULE_28__["AdminWalletComponent"],
                _DiscountCards_AdminDiscountCards_component__WEBPACK_IMPORTED_MODULE_29__["AdminDiscountCardsComponent"],
                _DiscountCards_AdminDiscountCard_component__WEBPACK_IMPORTED_MODULE_30__["AdminDiscountCardComponent"],
                _DiscountCards_AdminDCDetails_component__WEBPACK_IMPORTED_MODULE_31__["AdminDCDetailsComponent"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Finances_routing__WEBPACK_IMPORTED_MODULE_14__["FinancesRoutes"]),
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
            exports: [
                _Billings_Bills_component__WEBPACK_IMPORTED_MODULE_19__["BillsComponent"],
                _StoreServices_StoreServices_component__WEBPACK_IMPORTED_MODULE_23__["StoreServicesComponent"],
                _DiscountCards_AdminDiscountCard_component__WEBPACK_IMPORTED_MODULE_30__["AdminDiscountCardComponent"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/Validation/max-bill-amount.directive'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                _DiscountCards_AdminDiscountCards_component__WEBPACK_IMPORTED_MODULE_29__["AdminDiscountCardsComponent"]
            ]
        })
    ], FinancesModule);
    return FinancesModule;
}());



/***/ }),

/***/ 2312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionTypeComponent", function() { return TransactionTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionTypeComponent = /** @class */ (function (_super) {
    __extends(TransactionTypeComponent, _super);
    function TransactionTypeComponent(activatedRoute, translate, appService) {
        var _this = _super.call(this, translate) || this;
        _this.activatedRoute = activatedRoute;
        _this.translate = translate;
        _this.appService = appService;
        _this.messages = '';
        _this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    TransactionTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getDescriptions(params.id);
            }
        });
    };
    TransactionTypeComponent.prototype.clearMessages = function ($event) {
        this.messages = '';
        this.transactionType = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    TransactionTypeComponent.prototype.setIngredient = function ($event) {
        this.transactionType = $event;
    };
    TransactionTypeComponent.prototype.clear = function () {
        this.transactionType = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.transactionType.transactionTypeDescriptions = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var ttd = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            ttd.language = lang;
            ttd.name = '';
            this.transactionType.transactionTypeDescriptions.push(ttd);
        }
    };
    TransactionTypeComponent.prototype.getDescriptions = function (transactionTypeId) {
        var _this = this;
        this.messages = '';
        var parameters = [];
        if (transactionTypeId != null) {
            parameters.push('e.transactionType.id = |transactionTypeId|' + transactionTypeId + '|Integer');
        }
        this.appService.getAllByCriteria('TransactionTypeDescription', parameters)
            .subscribe(function (data) {
            if (data !== null && data.length > 0) {
                _this.transactionType = data[0].transactionType;
                _this.transactionType.transactionTypeDescriptions = data;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all TransactionType Description complete'); });
    };
    TransactionTypeComponent.prototype.setToggles = function () {
        this.transactionType.status = (this.transactionType.status == null
            || this.transactionType.status.toString() === 'false'
            || this.transactionType.status.toString() === '0') ? 0 : 1;
        this.transactionType.approverOnly = (this.transactionType.approverOnly == null
            || this.transactionType.approverOnly.toString() === 'false'
            || this.transactionType.approverOnly.toString() === '0') ? 0 : 1;
    };
    TransactionTypeComponent.prototype.cleanDescriptions = function (transactionType) {
        transactionType.transactionTypeDescriptions.forEach(function (element) {
            element.transactionType = undefined;
            var language = element.language;
            element.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            element.language.id = language.id;
        });
    };
    TransactionTypeComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        try {
            this.setToggles();
            var thisTransactionType = __assign({}, this.transactionType);
            this.cleanDescriptions(thisTransactionType);
            this.appService.save(thisTransactionType, 'TransactionType')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.processResult(result, _this.transactionType, null);
                    _this.transactionType = __assign({}, result);
                    _this.saveEvent.emit(_this.transactionType);
                    _this.clear();
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransactionTypeComponent.prototype, "saveEvent", void 0);
    TransactionTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-type',
            templateUrl: './TransactionType.component.html',
            styleUrls: ['./TransactionType.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], TransactionTypeComponent);
    return TransactionTypeComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ 2313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionTypesComponent", function() { return TransactionTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _TransactionType_TransactionType_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2312);
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








var TransactionTypesComponent = /** @class */ (function (_super) {
    __extends(TransactionTypesComponent, _super);
    function TransactionTypesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['name', 'approverOnly', 'status', 'actions'];
        _this.messages = '';
        return _this;
    }
    TransactionTypesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    TransactionTypesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('TransactionTypeDescription', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all TransactionTypeDescription complete'); });
    };
    TransactionTypesComponent.prototype.remove = function (ttDesc) {
        var _this = this;
        this.messages = '';
        this.appService.delete(ttDesc.transactionType.id, 'TransactionType')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(ttDesc);
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
    TransactionTypesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TransactionTypesComponent.prototype.onSave = function ($event) {
        var _this = this;
        var transType = $event;
        transType.transactionTypeDescriptions.forEach(function (element) {
            if (element.language.id === _this.appService.appInfoStorage.language.id) {
                transType.transactionTypeDescriptions[0].transactionType = transType;
                if (!_this.dataSource.data) {
                    _this.dataSource.data = [];
                }
                // this.dataSource.data.push(transType.transactionTypeDescriptions[0]);
                // this.dataSource = new MatTableDataSource(this.dataSource.data);
                _this.updateDatasourceData(_this.dataSource, _this.paginator, _this.sort, transType.transactionTypeDescriptions[0]);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_TransactionType_TransactionType_component__WEBPACK_IMPORTED_MODULE_7__["TransactionTypeComponent"], { static: false }),
        __metadata("design:type", _TransactionType_TransactionType_component__WEBPACK_IMPORTED_MODULE_7__["TransactionTypeComponent"])
    ], TransactionTypesComponent.prototype, "transactionTypeView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TransactionTypesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], TransactionTypesComponent.prototype, "sort", void 0);
    TransactionTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactionTypes',
            templateUrl: './TransactionTypes.component.html',
            styleUrls: ['./TransactionTypes.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], TransactionTypesComponent);
    return TransactionTypesComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTypeComponent", function() { return FundTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FundTypeComponent = /** @class */ (function (_super) {
    __extends(FundTypeComponent, _super);
    function FundTypeComponent(activatedRoute, translate, appService) {
        var _this = _super.call(this, translate) || this;
        _this.activatedRoute = activatedRoute;
        _this.translate = translate;
        _this.appService = appService;
        _this.messages = '';
        _this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    FundTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getDescriptions(params.id);
            }
        });
    };
    FundTypeComponent.prototype.clearMessages = function ($event) {
        this.messages = '';
        this.fundType = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    FundTypeComponent.prototype.setIngredient = function ($event) {
        this.fundType = $event;
    };
    FundTypeComponent.prototype.clear = function () {
        this.fundType = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.fundType.fundTypeDescriptions = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var ftd = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            ftd.language = lang;
            ftd.name = '';
            this.fundType.fundTypeDescriptions.push(ftd);
        }
    };
    FundTypeComponent.prototype.getDescriptions = function (fundTypeId) {
        var _this = this;
        this.messages = '';
        var parameters = [];
        if (fundTypeId != null) {
            parameters.push('e.fundType.id = |fundTypeId|' + fundTypeId + '|Integer');
        }
        this.appService.getAllByCriteria('FundTypeDescription', parameters)
            .subscribe(function (data) {
            if (data !== null && data.length > 0) {
                _this.fundType = data[0].fundType;
                _this.fundType.fundTypeDescriptions = data;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all FundType Description complete'); });
    };
    FundTypeComponent.prototype.setToggles = function () {
        this.fundType.status = (this.fundType.status == null
            || this.fundType.status.toString() === 'false'
            || this.fundType.status.toString() === '0') ? 0 : 1;
        this.fundType.approverOnly = (this.fundType.approverOnly == null
            || this.fundType.approverOnly.toString() === 'false'
            || this.fundType.approverOnly.toString() === '0') ? 0 : 1;
    };
    FundTypeComponent.prototype.cleanDescriptions = function (fundType) {
        fundType.fundTypeDescriptions.forEach(function (element) {
            element.fundType = undefined;
            var language = element.language;
            element.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            element.language.id = language.id;
        });
    };
    FundTypeComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        try {
            this.setToggles();
            var thisFundType = __assign({}, this.fundType);
            this.cleanDescriptions(thisFundType);
            this.appService.save(thisFundType, 'FundType')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.processResult(result, _this.fundType, null);
                    _this.fundType = __assign({}, result);
                    _this.saveEvent.emit(_this.fundType);
                    _this.clear();
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FundTypeComponent.prototype, "saveEvent", void 0);
    FundTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund-type',
            templateUrl: './FundType.component.html',
            styleUrls: ['./FundType.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], FundTypeComponent);
    return FundTypeComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ 2315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTypesComponent", function() { return FundTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _FundType_FundType_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2314);
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








var FundTypesComponent = /** @class */ (function (_super) {
    __extends(FundTypesComponent, _super);
    function FundTypesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['name', 'approverOnly', 'status', 'actions'];
        _this.messages = '';
        return _this;
    }
    FundTypesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    FundTypesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('FundTypeDescription', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all FundTypeDescription complete'); });
    };
    FundTypesComponent.prototype.remove = function (ftDesc) {
        var _this = this;
        this.messages = '';
        this.appService.delete(ftDesc.fundType.id, 'FundType')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(ftDesc);
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
    FundTypesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    FundTypesComponent.prototype.onSave = function ($event) {
        var _this = this;
        var fdType = $event;
        fdType.fundTypeDescriptions.forEach(function (element) {
            if (element.language.id === _this.appService.appInfoStorage.language.id) {
                fdType.fundTypeDescriptions[0].fundType = fdType;
                if (!_this.dataSource.data) {
                    _this.dataSource.data = [];
                }
                _this.updateDatasourceData(_this.dataSource, _this.paginator, _this.sort, fdType.fundTypeDescriptions[0]);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_FundType_FundType_component__WEBPACK_IMPORTED_MODULE_7__["FundTypeComponent"], { static: false }),
        __metadata("design:type", _FundType_FundType_component__WEBPACK_IMPORTED_MODULE_7__["FundTypeComponent"])
    ], FundTypesComponent.prototype, "fundTypeView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], FundTypesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], FundTypesComponent.prototype, "sort", void 0);
    FundTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fundTypes',
            templateUrl: './FundTypes.component.html',
            styleUrls: ['./FundTypes.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], FundTypesComponent);
    return FundTypesComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancesRoutes", function() { return FinancesRoutes; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _TransactionTypes_TransactionTypes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2313);
/* harmony import */ var _TransactionType_TransactionType_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2312);
/* harmony import */ var _Suppliers_Suppliers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2317);
/* harmony import */ var _Suppliers_Supplier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2318);
/* harmony import */ var _Billings_Bills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2319);
/* harmony import */ var _Services_Services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2325);
/* harmony import */ var _Service_Service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2326);
/* harmony import */ var _FundTypes_FundTypes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2315);
/* harmony import */ var _FundType_FundType_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2314);
/* harmony import */ var _Wallets_AdminWallets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2327);
/* harmony import */ var _DiscountCards_AdminDiscountCards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2329);













var FinancesRoutes = [
    {
        path: '',
        redirectTo: 'TransactionTypesComponent',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'fundTypes',
                component: _FundTypes_FundTypes_component__WEBPACK_IMPORTED_MODULE_8__["FundTypesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'fundType/:id',
                component: _FundType_FundType_component__WEBPACK_IMPORTED_MODULE_9__["FundTypeComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'transactionTypes',
                component: _TransactionTypes_TransactionTypes_component__WEBPACK_IMPORTED_MODULE_1__["TransactionTypesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'transactionType/:id',
                component: _TransactionType_TransactionType_component__WEBPACK_IMPORTED_MODULE_2__["TransactionTypeComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'suppliers',
                component: _Suppliers_Suppliers_component__WEBPACK_IMPORTED_MODULE_3__["SuppliersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'supplier/:id',
                component: _Suppliers_Supplier_component__WEBPACK_IMPORTED_MODULE_4__["SupplierComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'bills',
                component: _Billings_Bills_component__WEBPACK_IMPORTED_MODULE_5__["BillsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'services',
                component: _Services_Services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'service/:id',
                component: _Service_Service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'admin-wallets',
                component: _Wallets_AdminWallets_component__WEBPACK_IMPORTED_MODULE_10__["AdminWalletsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'admin-rewards',
                component: _DiscountCards_AdminDiscountCards_component__WEBPACK_IMPORTED_MODULE_11__["AdminDiscountCardsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            }
        ]
    }
];


/***/ }),

/***/ 2317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersComponent", function() { return SuppliersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var _Supplier_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2318);
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












var SuppliersComponent = /** @class */ (function (_super) {
    __extends(SuppliersComponent, _super);
    function SuppliersComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.supplierColumns = ['id', 'name', 'contact', 'phone', 'email', 'address'];
        _this.messages = '';
        _this.button = 'filter';
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.isAdminPage = true;
        _this.canAcknowledge = false;
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](0);
        return _this;
    }
    SuppliersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || +params.id === 0) {
                setTimeout(function () {
                    _this.selected.setValue(0);
                }, 500);
            }
            else {
                setTimeout(function () {
                    _this.selectSupplier(params.id);
                }, 500);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.getSuppliers();
    };
    SuppliersComponent.prototype.getSuppliers = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('Supplier', parameters)
            .subscribe(function (data) {
            console.log(data);
            _this.clear(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get All Supplier complete'); });
    };
    SuppliersComponent.prototype.clear = function (data) {
        this.supplierDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.supplierDatasource.paginator = this.supplierPaginator;
        this.supplierDatasource.sort = this.supplierSort;
    };
    SuppliersComponent.prototype.selectSupplier = function (supplierId) {
        // this.payoutComponent.isAdminPage = this.isAdminPage;
        this.supplierComponent.getSupplier(supplierId);
        this.selected.setValue(1);
    };
    SuppliersComponent.prototype.applyFilter = function (filterValue) {
        this.supplierDatasource.filter = filterValue.trim().toLowerCase();
    };
    SuppliersComponent.prototype.updateDataTable = function (supplier) {
        this.updateDatasourceData(this.supplierDatasource, this.supplierPaginator, this.supplierSort, supplier);
        // this.supplierComponent.getSupplier(supplier.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorSupplier', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SuppliersComponent.prototype, "supplierPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SuppliersComponent.prototype, "supplierSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Supplier_component__WEBPACK_IMPORTED_MODULE_10__["SupplierComponent"], { static: false }),
        __metadata("design:type", _Supplier_component__WEBPACK_IMPORTED_MODULE_10__["SupplierComponent"])
    ], SuppliersComponent.prototype, "supplierComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SuppliersComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SuppliersComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SuppliersComponent.prototype, "canAcknowledge", void 0);
    SuppliersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suppliers',
            templateUrl: './Suppliers.component.html',
            styleUrls: ['./Suppliers.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]])
    ], SuppliersComponent);
    return SuppliersComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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








var SupplierComponent = /** @class */ (function (_super) {
    __extends(SupplierComponent, _super);
    function SupplierComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.messages = '';
        _this.supplier = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.constants = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.picture = [];
        _this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isAdminPage = false;
        return _this;
    }
    SupplierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.supplier.id = params.id;
                _this.clear();
                _this.getSupplier(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    SupplierComponent.prototype.clear = function () {
        // console.log('Clearing suppliers');
        this.supplier = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        // this.supplier.status = 1;
        // console.log(this.supplier);
    };
    SupplierComponent.prototype.getSupplier = function (supplierId) {
        var _this = this;
        if (supplierId > 0) {
            this.appService.getOneWithChildsAndFiles(supplierId, 'Supplier')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.supplier = result;
                }
                else {
                    _this.supplier = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear();
        }
    };
    SupplierComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.supplier.modifiedBy = +this.appService.tokenStorage.getUserId();
        try {
            this.appService.save(this.supplier, 'Supplier')
                .subscribe(function (data) {
                _this.processResult(data, _this.supplier, null);
                _this.supplier = data;
                _this.saveEvent.emit(_this.supplier);
                _this.clear();
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    SupplierComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SupplierComponent.prototype, "saveEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SupplierComponent.prototype, "isAdminPage", void 0);
    SupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier',
            templateUrl: './Supplier.component.html',
            styleUrls: ['./Suppliers.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], SupplierComponent);
    return SupplierComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ 2319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsComponent", function() { return BillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(439);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2320);
/* harmony import */ var _UserBill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2322);
/* harmony import */ var _BillPayment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2323);
/* harmony import */ var _UserBillPayment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2324);
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













var BillsComponent = /** @class */ (function (_super) {
    __extends(BillsComponent, _super);
    function BillsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.billsColumns = ['reference', 'billDate', 'description', 'amount', 'amountDue', 'dueDate', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = true;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeEmployees = [];
        _this.suppliers = [];
        _this.totalDue = 0;
        _this.unpaidBillIds = [];
        _this.action = 'details';
        _this.saving = false;
        return _this;
    }
    BillsComponent.prototype.ngOnInit = function () {
        this.clear();
        this.getStores();
    };
    BillsComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        this.search(false);
    };
    BillsComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    BillsComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = this.userId;
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores && _this.stores.length === 1) {
                _this.selectedStore = _this.stores[0];
                _this.storeSelected(_this.selectedStore);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    BillsComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.searchCriteria.storeId) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.searchCriteria.storeId + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    BillsComponent.prototype.getTotalDue = function (data, showPaymentPage) {
        var _this = this;
        this.totalDue = 0;
        this.unpaidBillIds = [];
        data.forEach(function (b) {
            if (b.amountDue) {
                _this.totalDue += b.amountDue;
                _this.unpaidBillIds.push(b.id);
            }
        });
        if (showPaymentPage) {
            this.showPayment();
        }
    };
    BillsComponent.prototype.search = function (showPaymentPage) {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = this.userId;
            console.log('User Id = ' + this.userId);
            this.appService.saveWithUrl('/service/finance/getBills', this.searchCriteria)
                .subscribe(function (data) {
                _this.getTotalDue(data, showPaymentPage);
                _this.billsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.billsDatasource.paginator = _this.billsPaginator;
                _this.billsDatasource.sort = _this.billsSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get bills complete'); });
        }
    };
    BillsComponent.prototype.applyFilter = function (filterValue) {
        this.billsDatasource.filter = filterValue.trim().toLowerCase();
        if (this.billsDatasource.paginator) {
            this.billsDatasource.paginator.firstPage();
        }
    };
    BillsComponent.prototype.getBillDetails = function (bill) {
        this.selected.setValue(1);
        if (this.userId) {
            this.userBillComponent.newBillSelected(bill);
            this.userBillPaymentComponent.bill = bill;
            this.userBillPaymentComponent.updateAmounts(bill.amountDue);
        }
        else {
            this.billComponent.getBill(bill);
            this.billPaymentComponent.newBillSelected(bill);
        }
    };
    BillsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.userBillPaymentComponent.store = _this.selectedStore;
            _this.search(false);
            _this.selected.setValue(0);
            _this.getMyStoreEmployees();
            if (_this.billComponent) {
                if (event && event.value) {
                    _this.billComponent.store = event.value;
                }
                else {
                    _this.billComponent.store = event;
                }
                _this.billComponent.getMyStoreEmployees();
                _this.billComponent.clear([]);
            }
        }, 500);
    };
    BillsComponent.prototype.updateDataTable = function (bill) {
        this.updateDatasourceData(this.billsDatasource, this.billsPaginator, this.billsSort, bill);
        this.billPaymentComponent.newBillSelected(bill);
        // this.selected.setValue(0);
    };
    BillsComponent.prototype.updateDataTableFromPayment = function (bill) {
        this.updateDatasourceData(this.billsDatasource, this.billsPaginator, this.billsSort, bill);
        this.billComponent.getBill(bill);
    };
    BillsComponent.prototype.showPayment = function () {
        this.action = 'payment';
        this.userBillPaymentComponent.totalDue = this.totalDue;
        this.userBillPaymentComponent.updateAmounts(this.totalDue);
        this.userBillPaymentComponent.billPayment.unpaidBillIds = this.unpaidBillIds;
    };
    BillsComponent.prototype.showDetails = function () {
        this.action = 'details';
    };
    BillsComponent.prototype.setSaving = function (value) {
        this.saving = value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorBills', { static: false }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BillsComponent.prototype, "billsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BillsComponent.prototype, "billsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Bill_component__WEBPACK_IMPORTED_MODULE_7__["BillComponent"], { static: false }),
        __metadata("design:type", _Bill_component__WEBPACK_IMPORTED_MODULE_7__["BillComponent"])
    ], BillsComponent.prototype, "billComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_UserBill_component__WEBPACK_IMPORTED_MODULE_8__["UserBillComponent"], { static: false }),
        __metadata("design:type", _UserBill_component__WEBPACK_IMPORTED_MODULE_8__["UserBillComponent"])
    ], BillsComponent.prototype, "userBillComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_BillPayment_component__WEBPACK_IMPORTED_MODULE_9__["BillPaymentComponent"], { static: false }),
        __metadata("design:type", _BillPayment_component__WEBPACK_IMPORTED_MODULE_9__["BillPaymentComponent"])
    ], BillsComponent.prototype, "billPaymentComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_UserBillPayment_component__WEBPACK_IMPORTED_MODULE_10__["UserBillPaymentComponent"], { static: false }),
        __metadata("design:type", _UserBillPayment_component__WEBPACK_IMPORTED_MODULE_10__["UserBillPaymentComponent"])
    ], BillsComponent.prototype, "userBillPaymentComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BillsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BillsComponent.prototype, "isAdminPage", void 0);
    BillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bills',
            templateUrl: './Bills.component.html',
            styleUrls: ['./Bills.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], BillsComponent);
    return BillsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _BillDetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2321);
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








var BillComponent = /** @class */ (function (_super) {
    __extends(BillComponent, _super);
    function BillComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.messages = '';
        _this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeEmployees = [];
        _this.billDtls = [];
        _this.formData = new FormData();
        _this.picture = [];
        _this.isAdminPage = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.billSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.saving = false;
        _this.justSubmitted = false;
        return _this;
    }
    BillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear([]);
            }
            else {
                _this.bill.id = params.id;
                _this.clear([]);
                _this.getBill(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.getMyStoreEmployees();
        this.clear([]);
    };
    BillComponent.prototype.ngAfterViewInit = function () {
    };
    BillComponent.prototype.clear = function (data) {
        this.messages = '';
        this.errors = '';
        this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.setDatasource([]);
        this.picture = [];
    };
    BillComponent.prototype.setDatasource = function (data) {
        var _this = this;
        setTimeout(function () {
            var prdBillDtls = data.filter(function (billDtl) { return billDtl.product && billDtl.product.id > 0; });
            if (_this.productsComponent) {
                _this.productsComponent.bill = _this.bill;
                _this.productsComponent.setDatasource(prdBillDtls);
                // this.productsComponent.getStoreProducts(this.store.id);
            }
            var serBillDtls = data.filter(function (billDtl) { return billDtl.service && billDtl.service.id > 0; });
            if (_this.servicesComponent) {
                _this.servicesComponent.bill = _this.bill;
                _this.servicesComponent.setDatasource(serBillDtls);
                // this.servicesComponent.getServices();
            }
        }, 1000);
    };
    BillComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.store.id) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.store.id + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
                console.log(_this.storeEmployees);
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    BillComponent.prototype.getBill = function (bill) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (bill && bill.id > 0) {
            this.appService.getOneWithChildsAndFiles(bill.id, 'Bill')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.bill = result;
                    if (_this.bill.billDate) {
                        _this.bill.billDate = new Date(_this.bill.billDate);
                    }
                    if (_this.bill.dueDate) {
                        _this.bill.dueDate = new Date(_this.bill.dueDate);
                    }
                    _this.getBillDtls();
                    var images = [];
                    var image = {
                        link: 'assets/images/pohdrs/' + _this.bill.id + '/' + _this.bill.image,
                        preview: 'assets/images/pohdrs/' + _this.bill.id + '/' + _this.bill.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear([]);
        }
    };
    BillComponent.prototype.getBillDtls = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/finance/getBillDetails', {
            billId: this.bill.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.setDatasource(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get bill products complete'); });
    };
    BillComponent.prototype.save = function () {
        var _this = this;
        if (this.justSubmitted) {
            this.justSubmitted = false;
            return;
        }
        this.saving = true;
        this.messages = '';
        this.bill.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (!this.bill.store.id) {
            this.bill.store.id = this.store.id;
        }
        if (this.bill.status <= 1) {
            this.bill.amountDue = this.bill.amount;
            this.bill.amountPaid = 0;
        }
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.saveWithFile(this.bill, 'Bill', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.bill, null);
            _this.bill = data;
            _this.bill.storeName = _this.store.name;
            _this.billSaveEvent.emit(_this.bill);
            setTimeout(function () {
                if (_this.productsComponent) {
                    _this.productsComponent.bill = _this.bill;
                }
                if (_this.servicesComponent) {
                    _this.servicesComponent.bill = _this.bill;
                }
            }, 1000);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Save PoHdr complete'); });
    };
    BillComponent.prototype.submit = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.bill.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/submitBill/', this.bill)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.bill, null);
            _this.bill = data;
            _this.getBillDtls();
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Submit Bill complete'); });
    };
    BillComponent.prototype.approve = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.bill.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/approveBill/', this.bill)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.bill, null);
            _this.bill = data;
            _this.getBillDtls();
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Submit Bill complete'); });
    };
    BillComponent.prototype.reopen = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.bill.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/reopenBill/', this.bill)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.bill, null);
            _this.bill = data;
            _this.getBillDtls();
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Reopen Bill complete'); });
    };
    BillComponent.prototype.cancel = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.bill.status = 9;
        this.bill.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.save(this.bill, 'Bill')
            .subscribe(function (data) {
            _this.processResult(data, _this.bill, null);
            _this.bill = data;
            _this.bill.storeName = _this.store.name;
            _this.billSaveEvent.emit(_this.bill);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Save PoHdr complete'); });
    };
    BillComponent.prototype.changeTab = function ($event) {
        if ($event.index === 0) {
            this.productsComponent.billDtlColumns[2] = 'productName';
        }
        else if ($event.index === 1) {
            this.servicesComponent.billDtlColumns[2] = 'serviceName';
        }
    };
    BillComponent.prototype.calculateAmount = function () {
        if (this.bill.subTotal) {
            this.bill.amount = Number(this.bill.subTotal);
        }
        if (this.bill.taxes) {
            if (!this.bill.amount) {
                this.bill.amount = 0;
            }
            this.bill.amount += Number(this.bill.taxes);
        }
        if (this.bill.discount) {
            if (!this.bill.amount) {
                this.bill.amount = 0;
            }
            this.bill.amount -= Number(this.bill.discount);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ProductsComponent', { static: false }),
        __metadata("design:type", _BillDetails_component__WEBPACK_IMPORTED_MODULE_5__["BillDetailsComponent"])
    ], BillComponent.prototype, "productsComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ServicesComponent', { static: false }),
        __metadata("design:type", _BillDetails_component__WEBPACK_IMPORTED_MODULE_5__["BillDetailsComponent"])
    ], BillComponent.prototype, "servicesComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BillComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BillComponent.prototype, "store", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BillComponent.prototype, "billSaveEvent", void 0);
    BillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill',
            templateUrl: './Bill.component.html',
            styleUrls: ['./Bills.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], BillComponent);
    return BillComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailsComponent", function() { return BillDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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








var BillDetailsComponent = /** @class */ (function (_super) {
    __extends(BillDetailsComponent, _super);
    function BillDetailsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.billDtlColumns = ['id', 'image', 'productName', 'quantity', 'unitPrice', 'totalAmount', 'actions'];
        _this.messages = '';
        _this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.billDtls = [];
        _this.saving = false;
        _this.services = [];
        return _this;
    }
    BillDetailsComponent.prototype.ngOnInit = function () {
        this.clear([]);
        this.getStoreProducts(17);
        this.getServices();
    };
    BillDetailsComponent.prototype.ngAfterViewInit = function () {
    };
    BillDetailsComponent.prototype.clear = function (data) {
        this.messages = '';
        this.currentOption = '';
        this.setDatasource([]);
    };
    BillDetailsComponent.prototype.setDatasource = function (data) {
        this.billDtlDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.billDtlDatasource.paginator = this.billDtlPaginator;
        this.billDtlDatasource.sort = this.billDtlSort;
        this.billDtls = data;
    };
    BillDetailsComponent.prototype.getStoreProducts = function (storeId) {
        var _this = this;
        this.appService.getObjects('/service/catalog/getMyProductsOnSale/'
            + this.appService.appInfoStorage.language.id + '/' + 17)
            .subscribe(function (data) {
            _this.filteredProductOptions = data;
            _this.productOptions = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all store product complete'); });
    };
    BillDetailsComponent.prototype.getServices = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('ServiceDescription', parameters)
            .subscribe(function (data) {
            _this.filteredServiceOptions = data;
            _this.serviceOptions = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ServiceDescription complete'); });
    };
    BillDetailsComponent.prototype.filterOptions = function (val) {
        if (val) {
            var filterValue_1 = typeof val === 'string' ? val.toLowerCase() : val.name.toLowerCase();
            this.filteredProductOptions = this.productOptions
                .filter(function (productDesc) { return productDesc.name.toLowerCase().startsWith(filterValue_1); });
        }
        else {
            this.filteredProductOptions = this.productOptions;
        }
    };
    BillDetailsComponent.prototype.filterServiceOptions = function (val) {
        if (val) {
            var filterValue_2 = typeof val === 'string' ? val.toLowerCase() : val.name.toLowerCase();
            this.filteredServiceOptions = this.serviceOptions
                .filter(function (ingredienttDesc) { return ingredienttDesc.name.toLowerCase().startsWith(filterValue_2); });
        }
        else {
            this.filteredServiceOptions = this.serviceOptions;
        }
    };
    BillDetailsComponent.prototype.addBillDtl = function () {
        this.messages = '';
        this.billDtlDatasource.data.unshift(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
        this.billDtlDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.billDtlDatasource.data);
        this.billDtlDatasource.paginator = this.billDtlPaginator;
        this.billDtlDatasource.sort = this.billDtlSort;
    };
    BillDetailsComponent.prototype.saveBillDtl = function (billDtl, index) {
        var _this = this;
        this.saving = true;
        this.messages = '';
        billDtl.modifiedBy = +this.appService.tokenStorage.getUserId();
        billDtl.bill = this.bill;
        if (billDtl.product.id > 0) {
            billDtl.service = null;
        }
        else if (billDtl.service.id > 0) {
            billDtl.product = null;
        }
        this.appService.saveWithUrl('/service/finance/saveBillDtl/', billDtl)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, billDtl, null);
            billDtl = data;
            billDtl.isTouched = false;
            _this.billDtlDatasource.data[index] = data;
            _this.setDatasource(_this.billDtlDatasource.data);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all billDtl complete'); });
    };
    BillDetailsComponent.prototype.removeBillDtl = function (billDtl, index) {
        var _this = this;
        if (!billDtl.id) {
            this.billDtlDatasource.data.splice(index, 1);
            this.resetDatasource(this.billDtlDatasource.data, index);
            return;
        }
        this.messages = '';
        this.appService.delete(billDtl.id, 'BillDtl')
            .subscribe(function (data) {
            _this.processDataSourceDeleteResult(data, _this.messages, billDtl, _this.billDtlDatasource);
            _this.billDtlDatasource.data = Array.from(_this.billDtlDatasource.data);
            _this.setDatasource(_this.billDtlDatasource.data);
        });
    };
    BillDetailsComponent.prototype.validateSelectedProduct = function (billDtl) {
        if (typeof (billDtl.productName) === 'string' && this.productOptions) {
            var index = this.productOptions.findIndex(function (x) { return x.name === billDtl.productName; });
            if (index === -1) {
                index = this.billDtls.findIndex(function (x) { return x.id === billDtl.id; });
                if (index === -1) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                billDtl.product = this.productOptions[index].product;
            }
        }
        if (!billDtl.product || !billDtl.product.id) {
            return false;
        }
        return true;
    };
    BillDetailsComponent.prototype.validateSelectedService = function (billDtl) {
        if (typeof (billDtl.serviceName) === 'string' && this.serviceOptions) {
            var index = this.serviceOptions.findIndex(function (x) { return x.name === billDtl.serviceName; });
            if (index === -1) {
                index = this.billDtls.findIndex(function (x) { return x.id === billDtl.id; });
                if (index === -1) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                billDtl.service = this.serviceOptions[index].service;
            }
        }
        if (!billDtl.service || !billDtl.service.id) {
            return false;
        }
        return true;
    };
    BillDetailsComponent.prototype.setSelectedProduct = function (billDtl, productDesc) {
        billDtl.product = productDesc.product;
    };
    BillDetailsComponent.prototype.calculateTotalAmount = function (billDtl) {
        if (!billDtl.unitAmount || !billDtl.quantity) {
            billDtl.totalAmount = undefined;
            return;
        }
        billDtl.totalAmount = billDtl.unitAmount * billDtl.quantity;
    };
    BillDetailsComponent.prototype.changeTab = function ($event) {
        console.log('Tab changed');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('billDtlPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], BillDetailsComponent.prototype, "billDtlPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], BillDetailsComponent.prototype, "billDtlSort", void 0);
    BillDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-details',
            templateUrl: './BillDetails.component.html',
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], BillDetailsComponent);
    return BillDetailsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBillComponent", function() { return UserBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _BillDetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2321);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(440);
/* harmony import */ var _BillPayment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2323);
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










var UserBillComponent = /** @class */ (function (_super) {
    __extends(UserBillComponent, _super);
    function UserBillComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.billDtlColumns = ['id', 'image', 'productName', 'quantity', 'unitPrice', 'totalAmount'];
        _this.messages = '';
        _this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.billDtls = [];
        _this.formData = new FormData();
        _this.picture = [];
        _this.isAdminPage = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        return _this;
    }
    UserBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
            }
            else {
                _this.bill.id = params.id;
                _this.getBill(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    UserBillComponent.prototype.setDatasource = function (data) {
        var _this = this;
        setTimeout(function () {
            var prdBillDtls = data.filter(function (billDtl) { return billDtl.product && billDtl.product.id > 0; });
            _this.billDtlDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
            _this.billDtlDatasource.paginator = _this.billDtlPaginator;
            _this.billDtlDatasource.sort = _this.billDtlSort;
            _this.billDtls = data;
        }, 1000);
    };
    UserBillComponent.prototype.newBillSelected = function (bill) {
        this.getBill(bill);
        this.billPaymentComponent.bill = bill;
        this.billPaymentComponent.isFromAdmin = false;
        this.billPaymentComponent.getBillPayments();
    };
    UserBillComponent.prototype.getBill = function (bill) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (bill && bill.id > 0) {
            this.appService.getOneWithChildsAndFiles(bill.id, 'Bill')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.bill = result;
                    _this.getBillDtls();
                    var images = [];
                    var image = {
                        link: 'assets/images/pohdrs/' + _this.bill.id + '/' + _this.bill.image,
                        preview: 'assets/images/pohdrs/' + _this.bill.id + '/' + _this.bill.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    UserBillComponent.prototype.getBillDtls = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/finance/getBillDetails', {
            billId: this.bill.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.setDatasource(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get bill products complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ProductsComponent', { static: false }),
        __metadata("design:type", _BillDetails_component__WEBPACK_IMPORTED_MODULE_5__["BillDetailsComponent"])
    ], UserBillComponent.prototype, "productsComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ServicesComponent', { static: false }),
        __metadata("design:type", _BillDetails_component__WEBPACK_IMPORTED_MODULE_5__["BillDetailsComponent"])
    ], UserBillComponent.prototype, "servicesComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_BillPayment_component__WEBPACK_IMPORTED_MODULE_7__["BillPaymentComponent"], { static: false }),
        __metadata("design:type", _BillPayment_component__WEBPACK_IMPORTED_MODULE_7__["BillPaymentComponent"])
    ], UserBillComponent.prototype, "billPaymentComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('billDtlPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], UserBillComponent.prototype, "billDtlPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], UserBillComponent.prototype, "billDtlSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserBillComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserBillComponent.prototype, "store", void 0);
    UserBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-bill',
            templateUrl: './UserBill.component.html',
            styleUrls: ['./UserBills.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserBillComponent);
    return UserBillComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillPaymentComponent", function() { return BillPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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








var BillPaymentComponent = /** @class */ (function (_super) {
    __extends(BillPaymentComponent, _super);
    function BillPaymentComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.billPayColumns = ['id', 'dueDate', 'paymentDate', 'amount', 'receiver', 'status'];
        _this.messages = '';
        _this.formData = new FormData();
        _this.picture = [];
        _this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.billPayment = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.billPayments = [];
        _this.saving = false;
        _this.justSubmitted = false;
        _this.storeEmployees = [];
        _this.isFromAdmin = true;
        _this.hasError = false;
        _this.billPaymentSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    BillPaymentComponent.prototype.ngOnInit = function () {
        this.clear([]);
        this.getMyStoreEmployees();
    };
    BillPaymentComponent.prototype.ngAfterViewInit = function () {
    };
    BillPaymentComponent.prototype.clear = function (data) {
        this.messages = '';
        this.setDatasource([]);
        this.billPayment = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.picture = [];
    };
    BillPaymentComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.store.id = |sId|17|Integer');
        parameters.push('e.store.status = |storeStatus|1|Integer');
        parameters.push('e.status = |employeeStatus|1|Integer');
        this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
            .subscribe(function (data) {
            _this.storeEmployees = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
    };
    BillPaymentComponent.prototype.setDatasource = function (data) {
        this.billPayDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.billPayDatasource.paginator = this.billPayPaginator;
        this.billPayDatasource.sort = this.billPaySort;
        this.billPayments = data;
    };
    BillPaymentComponent.prototype.updateDataTable = function (billPayment) {
        this.updateDatasourceData(this.billPayDatasource, this.billPayPaginator, this.billPaySort, billPayment);
    };
    BillPaymentComponent.prototype.addPayment = function () {
        this.messages = '';
        this.billPayment = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.billPayment.bill = this.bill;
    };
    BillPaymentComponent.prototype.save = function () {
        var _this = this;
        if (this.justSubmitted) {
            this.justSubmitted = false;
            return;
        }
        this.saving = true;
        this.messages = '';
        this.billPayment.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (!this.billPayment.bill.id) {
            this.billPayment.bill.id = this.bill.id;
        }
        if (this.bill.amountDue < this.billPayment.amount) {
            this.translate.get(['COMMON.INVALID_PAYMENT_AMOUNT']).subscribe(function (res) {
                _this.messages = res['COMMON.INVALID_PAYMENT_AMOUNT'];
            });
            this.hasError = true;
            this.saving = false;
            return;
        }
        if (this.billPayment.paymentDate) {
            this.translate.get(['COMMON.PAYMENT_DATE_NOTREQ']).subscribe(function (res) {
                _this.messages = res['COMMON.PAYMENT_DATE_NOTREQ'];
            });
            this.saving = false;
            this.hasError = true;
            return;
        }
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.saveWithFile(this.billPayment, 'BillPayment', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.bill, null);
            _this.billPayment = data;
            _this.updateDataTable(_this.billPayment);
            _this.saving = false;
            _this.addPayment();
        }, function (error) { return console.log(error); }, function () { return console.log('Save Bill Payment complete'); });
    };
    BillPaymentComponent.prototype.submitBillPayment = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.bill.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (this.bill.amountDue < this.billPayment.amount) {
            this.translate.get(['COMMON.INVALID_PAYMENT_AMOUNT']).subscribe(function (res) {
                _this.messages = res['COMMON.INVALID_PAYMENT_AMOUNT'];
            });
            this.saving = false;
            this.hasError = true;
            return;
        }
        if (!this.billPayment.paymentDate) {
            this.translate.get(['COMMON.PAYMENT_DATE_REQ']).subscribe(function (res) {
                _this.messages = res['COMMON.PAYMENT_DATE_REQ'];
            });
            this.saving = false;
            this.hasError = true;
            return;
        }
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.saveWithFileUsingUrl('/service/finance/submitBillPayment/', this.billPayment, this.formData)
            .subscribe(function (data) {
            _this.processResult(data, _this.billPayment, null);
            _this.billPayment = data;
            _this.saving = false;
            _this.updateDataTable(_this.billPayment);
            _this.getBill();
            _this.addPayment();
        }, function (error) { return console.log(error); }, function () { return console.log('Submit Bill Payment complete'); });
    };
    BillPaymentComponent.prototype.getBill = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (this.bill && this.bill.id > 0) {
            this.appService.getOneWithChildsAndFiles(this.bill.id, 'Bill')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.bill = result;
                    _this.billPaymentSaveEvent.emit(_this.bill);
                }
                else {
                    _this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear([]);
        }
    };
    BillPaymentComponent.prototype.getBillPayment = function (billPayment) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (billPayment && billPayment.id > 0) {
            this.appService.getOneWithChildsAndFiles(billPayment.id, 'BillPayment')
                .subscribe(function (result) {
                console.log(result);
                if (result.id > 0) {
                    _this.billPayment = result;
                    var images = [];
                    var image = {
                        link: 'assets/images/billpayments/' + _this.billPayment.id + '/' + _this.billPayment.image,
                        preview: 'assets/images/billpayments/' + _this.billPayment.id + '/' + _this.billPayment.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.billPayment = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    BillPaymentComponent.prototype.getBillPayments = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.bill.id = |billId|' + this.bill.id + '|Integer');
        this.appService.getAllByCriteria('BillPayment', parameters, ' ORDER BY e.createDate DESC ')
            .subscribe(function (data) {
            _this.setDatasource(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get Bill payments for bill complete'); });
    };
    BillPaymentComponent.prototype.newBillSelected = function (bill) {
        if (bill) {
            this.bill = bill;
            this.clear([]);
            this.getBillPayments();
        }
    };
    BillPaymentComponent.prototype.changeTab = function ($event) {
        console.log('Tab changed');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('billPayPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], BillPaymentComponent.prototype, "billPayPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], BillPaymentComponent.prototype, "billPaySort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BillPaymentComponent.prototype, "billPaymentSaveEvent", void 0);
    BillPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-payment',
            templateUrl: './BillPayment.component.html',
            styleUrls: ['./Bills.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], BillPaymentComponent);
    return BillPaymentComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBillPaymentComponent", function() { return UserBillPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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






var UserBillPaymentComponent = /** @class */ (function (_super) {
    __extends(UserBillPaymentComponent, _super);
    function UserBillPaymentComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.payEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.savingEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.messages = '';
        _this.bill = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.billPayment = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.billPayments = [];
        _this.saving = false;
        _this.justSubmitted = false;
        _this.storeEmployees = [];
        _this.isFromAdmin = true;
        _this.hasError = false;
        _this.totalDue = 0;
        return _this;
    }
    UserBillPaymentComponent.prototype.ngAfterViewInit = function () {
    };
    UserBillPaymentComponent.prototype.ngOnInit = function () {
        this.clear([]);
    };
    UserBillPaymentComponent.prototype.clear = function (data) {
        this.clearMessages();
        this.billPayment = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.billPayment.paymentDate = new Date();
    };
    UserBillPaymentComponent.prototype.clearMessages = function () {
        this.messages = '';
        this.errors = '';
    };
    UserBillPaymentComponent.prototype.setBillPaymentInfo = function (result) {
        this.billPayment.bill = this.bill;
        this.billPayment.dueDate = new Date();
        this.billPayment.paymentDate = new Date();
        this.billPayment.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.billPayment.language = this.appService.appInfoStorage.language;
        if (result) {
            this.billPayment.stripePaymentMethodId = result.paymentMethod.id;
        }
    };
    UserBillPaymentComponent.prototype.pay = function (result) {
        var _this = this;
        this.clearMessages();
        this.translate.get(['MESSAGE.PAYMENT_PROCESSING']).subscribe(function (res) {
            _this.messages = res['MESSAGE.PAYMENT_PROCESSING'];
        });
        this.setBillPaymentInfo(result);
        this.savingEvent.emit(true);
        this.appService.saveWithUrl('/service/finance/payBillOnline', this.billPayment)
            .subscribe(function (savedBillPayment) {
            console.log(savedBillPayment);
            _this.clearMessages();
            if (savedBillPayment.errors === null || savedBillPayment.errors.length === 0) {
                if (savedBillPayment.status === 1) {
                    _this.translate.get(['MESSAGE.PAYMENT_UNSUCCESS']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.PAYMENT_UNSUCCESS'];
                    });
                }
                else {
                    _this.translate.get('MESSAGE.PAYMENT_SUCCESS', {
                        pay_amount: _this.appService.formatAmount(savedBillPayment.amount, _this.store.currency)
                    }).subscribe(function (res) {
                        _this.messages = res;
                    });
                    setTimeout(function () {
                        _this.initPaymentMethod();
                        _this.billPayment.nameOnCard = '';
                    }, 0);
                    _this.payEvent.emit(true);
                }
            }
            else {
                _this.processResult(savedBillPayment, _this.billPayment, '');
            }
            _this.savingEvent.emit(false);
        });
    };
    UserBillPaymentComponent.prototype.onTogglePmntMethodChange = function ($event) {
        var _this = this;
        this.billPayment.paymentMethodCode = $event.value;
        if ($event.value === 'CREDIT_CARD') {
            setTimeout(function () {
                _this.initPaymentMethod();
            }, 0);
        }
    };
    UserBillPaymentComponent.prototype.initPaymentMethod = function () {
        var _this = this;
        this.appService.getObject('/service/order/stripe-key').toPromise()
            .then(function (result) {
            return result;
        })
            .then(function (data) {
            return _this.setupElements(data);
        })
            .then(function (data) {
            _this.data = data;
            document.querySelector('button').disabled = false;
            var form = document.getElementById('payment-form');
            form.addEventListener('submit', _this.handleCardSave.bind(_this));
        });
    };
    UserBillPaymentComponent.prototype.setupElements = function (data) {
        this.stripe = Stripe(data.publishableKey);
        /* ------- Set up Stripe Elements to use in checkout form ------- */
        var elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        var card = elements.create('card', { style: style });
        card.mount('#card-element');
        return {
            stripe: this.stripe,
            card: card,
            clientSecret: data.clientSecret
        };
    };
    UserBillPaymentComponent.prototype.handleCardSave = function (event) {
        event.preventDefault();
        this.saveCard(this.data.stripe, this.data.card, this.data.clientSecret);
    };
    UserBillPaymentComponent.prototype.saveCard = function (stripe, card, clientSecret) {
        var _this = this;
        this.errors = '';
        this.messages = '';
        stripe
            .createPaymentMethod('card', card)
            .then(function (result) {
            if (result.error) {
                _this.translate.get(['MESSAGE.INVALID_CARD', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.INVALID_CARD'];
                });
                console.log('Error: ' + result.error);
                // showError(result.error.message);
            }
            else {
                _this.billPayment.paymentMethodCode = 'CREDIT_CARD';
                _this.billPayment.paymentMethodName = 'Credit Card';
                _this.billPayment.stripePaymentMethodId = result.paymentMethod.id;
                _this.pay(null);
            }
        })
            .then(function (result) {
            console.log(result);
            if (result) {
                return result.json();
            }
        })
            .then(function (response) {
            if (response && response.error) {
                // showError(response.error);
            }
            else if (response && response.requiresAction) {
                // Request authentication
                // handleAction(response.clientSecret);
            }
            else {
                // orderComplete(response.clientSecret);
            }
        });
    };
    UserBillPaymentComponent.prototype.updateAmounts = function (amount) {
        this.billPayment.amount = amount;
        this.billPayment.processingFee = this.billPayment.amount * !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).PROCESSING_FEE_PERC;
        this.billPayment.totalPaid = Number(this.billPayment.amount) + Number(this.billPayment.processingFee);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserBillPaymentComponent.prototype, "store", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserBillPaymentComponent.prototype, "payEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserBillPaymentComponent.prototype, "savingEvent", void 0);
    UserBillPaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userbill-payment',
            templateUrl: './UserBillPayment.component.html',
            styleUrls: ['./Bills.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], UserBillPaymentComponent);
    return UserBillPaymentComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _Service_Service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2326);
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








var ServicesComponent = /** @class */ (function (_super) {
    __extends(ServicesComponent, _super);
    function ServicesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['name', 'status', 'actions'];
        _this.messages = '';
        return _this;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ServicesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('ServiceDescription', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ServiceDescription complete'); });
    };
    ServicesComponent.prototype.remove = function (sDesc) {
        var _this = this;
        this.messages = '';
        this.appService.delete(sDesc.service.id, 'Service')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(sDesc);
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
    ServicesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ServicesComponent.prototype.onSave = function ($event) {
        var _this = this;
        var sce = $event;
        sce.serviceDescriptions.forEach(function (element) {
            if (element.language.id === _this.appService.appInfoStorage.language.id) {
                sce.serviceDescriptions[0].service = sce;
                if (!_this.dataSource.data) {
                    _this.dataSource.data = [];
                }
                _this.updateDatasourceData(_this.dataSource, _this.paginator, _this.sort, sce.serviceDescriptions[0]);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Service_Service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"], { static: false }),
        __metadata("design:type", _Service_Service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"])
    ], ServicesComponent.prototype, "serviceView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ServicesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ServicesComponent.prototype, "sort", void 0);
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            templateUrl: './Services.component.html',
            styleUrls: ['./Services.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ServicesComponent);
    return ServicesComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServiceComponent = /** @class */ (function (_super) {
    __extends(ServiceComponent, _super);
    function ServiceComponent(activatedRoute, translate, appService) {
        var _this = _super.call(this, translate) || this;
        _this.activatedRoute = activatedRoute;
        _this.translate = translate;
        _this.appService = appService;
        _this.messages = '';
        _this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getDescriptions(params.id);
            }
        });
    };
    ServiceComponent.prototype.clearMessages = function ($event) {
        this.messages = '';
    };
    ServiceComponent.prototype.setIngredient = function ($event) {
        this.service = $event;
    };
    ServiceComponent.prototype.clear = function () {
        this.service = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.service.serviceDescriptions = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var ttd = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            ttd.language = lang;
            ttd.name = '';
            this.service.serviceDescriptions.push(ttd);
        }
    };
    ServiceComponent.prototype.getDescriptions = function (serviceId) {
        var _this = this;
        this.messages = '';
        var parameters = [];
        if (serviceId != null) {
            parameters.push('e.service.id = |serviceId|' + serviceId + '|Integer');
        }
        this.appService.getAllByCriteria('ServiceDescription', parameters)
            .subscribe(function (data) {
            if (data !== null && data.length > 0) {
                _this.service = data[0].service;
                _this.service.serviceDescriptions = data;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Service Description complete'); });
    };
    ServiceComponent.prototype.setToggles = function () {
        this.service.status = (this.service.status == null
            || this.service.status.toString() === 'false'
            || this.service.status.toString() === '0') ? 0 : 1;
    };
    ServiceComponent.prototype.cleanDescriptions = function (service) {
        service.serviceDescriptions.forEach(function (element) {
            element.service = undefined;
            var language = element.language;
            element.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            element.language.id = language.id;
        });
    };
    ServiceComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        try {
            this.setToggles();
            var thisService = __assign({}, this.service);
            this.cleanDescriptions(thisService);
            this.appService.save(thisService, 'Service')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.processResult(result, _this.service, null);
                    _this.service = __assign({}, result);
                    _this.saveEvent.emit(_this.service);
                    _this.clear();
                    console.log(_this.service);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ServiceComponent.prototype, "saveEvent", void 0);
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            templateUrl: './Service.component.html',
            styleUrls: ['./Service.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], ServiceComponent);
    return ServiceComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ 2327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWalletsComponent", function() { return AdminWalletsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AdminWallet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2328);
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












var AdminWalletsComponent = /** @class */ (function (_super) {
    __extends(AdminWalletsComponent, _super);
    function AdminWalletsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.walletsColumns = ['userName', 'currency', 'balance', 'actions'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.users = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        return _this;
    }
    AdminWalletsComponent.prototype.ngOnInit = function () {
        this.clear();
        this.isAdminPage = !this.userId;
    };
    AdminWalletsComponent.prototype.ngAfterViewInit = function () {
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
    AdminWalletsComponent.prototype.clear = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    AdminWalletsComponent.prototype.changeOrderType = function (event) {
    };
    AdminWalletsComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            //this.searchCriteria.userId = this.userId;
            this.appService.saveWithUrl('/service/finance/wallets', this.searchCriteria)
                .subscribe(function (data) {
                _this.walletsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.walletsDatasource.paginator = _this.walletsPaginator;
                _this.walletsDatasource.sort = _this.walletsSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all wallet complete'); });
        }
    };
    AdminWalletsComponent.prototype.applyFilter = function (filterValue) {
        this.walletsDatasource.filter = filterValue.trim().toLowerCase();
        if (this.walletsDatasource.paginator) {
            this.walletsDatasource.paginator.firstPage();
        }
    };
    AdminWalletsComponent.prototype.getWalletDetails = function (wallet) {
        this.walletComponent.wallet = wallet;
        this.walletComponent.getWalletTransList(wallet.id);
        this.selected.setValue(1);
    };
    AdminWalletsComponent.prototype.getShipperSearchPopupResponse = function (response, value) {
        if (response) {
            console.log('Value returned from comment popup... ');
            console.log(value);
            this.searchCriteria = value;
        }
    };
    AdminWalletsComponent.prototype.openSearchPopup = function () {
        this.appService.userSearch(this.searchCriteria).
            subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); }, function () { return console.log('User search done... '); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorWallets', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminWalletsComponent.prototype, "walletsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AdminWalletsComponent.prototype, "walletsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_AdminWallet_component__WEBPACK_IMPORTED_MODULE_10__["AdminWalletComponent"], { static: false }),
        __metadata("design:type", _AdminWallet_component__WEBPACK_IMPORTED_MODULE_10__["AdminWalletComponent"])
    ], AdminWalletsComponent.prototype, "walletComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AdminWalletsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdminWalletsComponent.prototype, "isAdminPage", void 0);
    AdminWalletsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-wallets',
            templateUrl: './AdminWallets.component.html',
            styleUrls: ['./AdminWallets.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], AdminWalletsComponent);
    return AdminWalletsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ 2328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWalletComponent", function() { return AdminWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
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






var AdminWalletComponent = /** @class */ (function (_super) {
    __extends(AdminWalletComponent, _super);
    function AdminWalletComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.wltCols = ['date', 'type', 'amount', 'store'];
        _this.wallet = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.messages = '';
        _this.fromAdmin = false;
        _this.step = 1;
        return _this;
    }
    AdminWalletComponent.prototype.ngOnInit = function () {
        if (this.userId === undefined) {
            this.userId = Number(this.appService.tokenStorage.getUserId());
        }
        else {
            this.fromAdmin = true;
        }
    };
    AdminWalletComponent.prototype.ngAfterViewInit = function () {
    };
    AdminWalletComponent.prototype.getWalletTransList = function (walletId) {
        var _this = this;
        this.appService.saveWithUrl('/service/finance/getWalletTransList/', {
            walletId: walletId
        })
            .subscribe(function (data) {
            var i = 0;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var wl = data_1[_i];
                _this.wltDS = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.wltDS.paginator = _this.wltPaginator;
                _this.wltDS.sort = _this.wltSort;
                i++;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get wallet trans list complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        __metadata("design:type", Object)
    ], AdminWalletComponent.prototype, "wltPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", Object)
    ], AdminWalletComponent.prototype, "wltSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdminWalletComponent.prototype, "userId", void 0);
    AdminWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-wallet',
            templateUrl: './AdminWallet.component.html',
            styleUrls: ['./AdminWallets.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AdminWalletComponent);
    return AdminWalletComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDiscountCardsComponent", function() { return AdminDiscountCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AdminDiscountCard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2330);
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












var AdminDiscountCardsComponent = /** @class */ (function (_super) {
    __extends(AdminDiscountCardsComponent, _super);
    function AdminDiscountCardsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.dcColumns = ['userName', 'currency', 'store', 'totalPoints', 'usedPoints', 'availablePoints', 'pointsValue', 'actions'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = true;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.users = [];
        _this.colors = ['primary', 'secondary'];
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        return _this;
    }
    AdminDiscountCardsComponent.prototype.ngOnInit = function () {
        this.clear();
        if (!this.isAdminPage) {
            this.dcColumns = ['userName', 'currency', 'totalPoints', 'usedPoints', 'availablePoints', 'pointsValue', 'actions'];
        }
        this.getStores();
    };
    AdminDiscountCardsComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = this.userId;
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores.length === 1) {
                _this.selectedStore = _this.stores[0];
                _this.searchCriteria.storeId = _this.selectedStore.id;
                _this.search();
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    AdminDiscountCardsComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.endDate = new Date();
        var beginDate = new Date();
        beginDate.setFullYear(this.searchCriteria.endDate.getFullYear() - 1);
        this.searchCriteria.beginDate = beginDate;
    };
    AdminDiscountCardsComponent.prototype.clear = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    AdminDiscountCardsComponent.prototype.changeOrderType = function (event) {
    };
    AdminDiscountCardsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
        }, 500);
    };
    AdminDiscountCardsComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            if (this.selectedStore) {
                this.searchCriteria.storeId = this.selectedStore.id;
            }
            this.appService.saveWithUrl('/service/finance/discountCards', this.searchCriteria)
                .subscribe(function (data) {
                _this.dcDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.dcDatasource.paginator = _this.dcPaginator;
                _this.dcDatasource.sort = _this.dcSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all discount card complete'); });
        }
    };
    AdminDiscountCardsComponent.prototype.applyFilter = function (filterValue) {
        this.dcDatasource.filter = filterValue.trim().toLowerCase();
        if (this.dcDatasource.paginator) {
            this.dcDatasource.paginator.firstPage();
        }
    };
    AdminDiscountCardsComponent.prototype.getDiscountCardDetails = function (discountCard) {
        this.discountCardComponent.discountCard = discountCard;
        this.discountCardComponent.getDiscountCardTransList(discountCard.id);
        this.selected.setValue(1);
    };
    AdminDiscountCardsComponent.prototype.getShipperSearchPopupResponse = function (response, value) {
        if (response) {
            console.log('Value returned from comment popup... ');
            console.log(value);
            this.searchCriteria = value;
        }
    };
    AdminDiscountCardsComponent.prototype.openSearchPopup = function () {
        this.appService.userSearch(this.searchCriteria).
            subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); }, function () { return console.log('User search done... '); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorDiscountCards', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminDiscountCardsComponent.prototype, "dcPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AdminDiscountCardsComponent.prototype, "dcSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_AdminDiscountCard_component__WEBPACK_IMPORTED_MODULE_10__["AdminDiscountCardComponent"], { static: false }),
        __metadata("design:type", _AdminDiscountCard_component__WEBPACK_IMPORTED_MODULE_10__["AdminDiscountCardComponent"])
    ], AdminDiscountCardsComponent.prototype, "discountCardComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AdminDiscountCardsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdminDiscountCardsComponent.prototype, "isAdminPage", void 0);
    AdminDiscountCardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-discountcards',
            templateUrl: './AdminDiscountCards.component.html',
            styleUrls: ['./AdminDiscountCards.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], AdminDiscountCardsComponent);
    return AdminDiscountCardsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ 2330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDiscountCardComponent", function() { return AdminDiscountCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(211);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * @title Table with expandable rows
 */
var AdminDiscountCardComponent = /** @class */ (function () {
    //
    function AdminDiscountCardComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.columnsToDisplay = ['createDate', 'type', 'amount', 'store'];
        this.discountCard = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.dtlCols = ['name', 'qty', 'fraction', 'earnedPoints'];
        this.isAdmin = true;
        //super(translate);
    }
    AdminDiscountCardComponent.prototype.ngOnInit = function () {
        //this.getDiscountCardTransList(1);
    };
    AdminDiscountCardComponent.prototype.getDiscountCardTransList = function (discountCardId) {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.appService.saveWithUrl('/service/finance/getDiscountCardTransList/', {
            discountCardId: discountCardId
        })
            .subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.dctPaginator;
            _this.dataSource.sort = _this.dctSort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get dicount card trans list complete'); });
    };
    AdminDiscountCardComponent.prototype.getDCDetailList = function (discountCardTransId, transType) {
        var _this = this;
        this.appService.saveWithUrl('/service/finance/getDCTransDetails/', {
            discountCardTransId: discountCardTransId,
            transType: transType,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            if (!data) {
                data = [];
            }
            _this.dtlDS = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dtlDS.paginator = _this.dtlPaginator;
            _this.dtlDS.sort = _this.dtlSort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get dicount card trans details complete'); });
    };
    AdminDiscountCardComponent.prototype.getDetails = function (element) {
        this.expandedElement = this.expandedElement === element ? null : element;
        this.getDCDetailList(element.id, element.dcTransType);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        __metadata("design:type", Object)
    ], AdminDiscountCardComponent.prototype, "dctPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", Object)
    ], AdminDiscountCardComponent.prototype, "dctSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], AdminDiscountCardComponent.prototype, "discountCard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        __metadata("design:type", Object)
    ], AdminDiscountCardComponent.prototype, "dtlPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", Object)
    ], AdminDiscountCardComponent.prototype, "dtlSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdminDiscountCardComponent.prototype, "isAdmin", void 0);
    AdminDiscountCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-discountcard',
            styleUrls: ['AdminDiscountCard.component.scss'],
            templateUrl: 'AdminDiscountCard.component.html',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], AdminDiscountCardComponent);
    return AdminDiscountCardComponent;
}());

var ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\uFFFDmaking four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
    },
];
/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ 2331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDCDetailsComponent", function() { return AdminDCDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
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






var AdminDCDetailsComponent = /** @class */ (function (_super) {
    __extends(AdminDCDetailsComponent, _super);
    function AdminDCDetailsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.dtlCols = ['qty', 'fraction', 'earnedPoints'];
        _this.messages = '';
        _this.fromAdmin = false;
        _this.step = 1;
        return _this;
    }
    AdminDCDetailsComponent.prototype.ngOnInit = function () {
        if (this.userId === undefined) {
            this.userId = Number(this.appService.tokenStorage.getUserId());
        }
        else {
            this.fromAdmin = true;
        }
    };
    AdminDCDetailsComponent.prototype.ngAfterViewInit = function () {
    };
    AdminDCDetailsComponent.prototype.getDCDetailList = function (discountCardTransId) {
        var _this = this;
        this.appService.saveWithUrl('/service/finance/getDCTransDetails/', {
            discountCardTransId: discountCardTransId,
            transType: 'OO'
        })
            .subscribe(function (data) {
            var i = 0;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var wl = data_1[_i];
                _this.dtlDS = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.dtlDS.paginator = _this.dtlPaginator;
                _this.dtlDS.sort = _this.dtlSort;
                i++;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get dicount card trans details complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        __metadata("design:type", Object)
    ], AdminDCDetailsComponent.prototype, "dtlPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", Object)
    ], AdminDCDetailsComponent.prototype, "dtlSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdminDCDetailsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], AdminDCDetailsComponent.prototype, "dct", void 0);
    AdminDCDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dcdetails',
            templateUrl: './AdminDCDetails.component.html',
            styleUrls: ['./AdminDiscountCards.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AdminDCDetailsComponent);
    return AdminDCDetailsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ })

};;