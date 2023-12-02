exports.ids = [12];
exports.modules = {

/***/ 2238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _Reports_Reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2239);
/* harmony import */ var _Reports_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2240);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(440);
/* harmony import */ var _Widget_Widget_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(927);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(493);
/* harmony import */ var _Finances_Finances_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2241);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Reports_Reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"], _Finances_Finances_component__WEBPACK_IMPORTED_MODULE_9__["FinancesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_Reports_routing__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutes"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _Widget_Widget_module__WEBPACK_IMPORTED_MODULE_7__["WidgetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
            ],
            exports: [_Reports_Reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"], _Finances_Finances_component__WEBPACK_IMPORTED_MODULE_9__["FinancesComponent"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ 2239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.tag = 'week';
        this.tag2 = 'weekday';
        this.tagValue = '0';
        this.index = 1;
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.store0 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.chartType = 'bar';
        this.stores = [];
        this.colors = ['secondary', 'primary', 'secondary', 'secondary', 'secondary',
            'secondary', 'secondary', 'secondary', 'secondary', 'secondary'];
        this.colors2 = ['tertiary', 'accent', 'tertiary', 'tertiary', 'tertiary', 'tertiary'];
        this.onlineOrdersColumns = ['orderId', 'createDate', 'status', 'storeName', 'city', 'country', 'total'];
        this.storeOrdersColumns = ['orderId', 'date', 'status', 'store', 'type', 'price', 'rebate', 'total'];
        this.store0.id = 0;
        this.store = this.store0;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        if (!this.storeId) {
            this.storeId = 0;
        }
        if (!this.userId) {
            this.userId = 0;
        }
        this.getStores();
        this.getDynDashboard();
    };
    ReportsComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    ReportsComponent.prototype.changeStore = function (storeId) {
        this.storeId = storeId;
        console.log(this.storeId);
        this.getDynDashboard();
    };
    ReportsComponent.prototype.getStores = function () {
        var _this = this;
        var storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        storeSearchCriteria.status = 1;
        storeSearchCriteria.userId = this.userId;
        console.log(storeSearchCriteria);
        this.appService.saveWithUrl('/service/catalog/stores', storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    ReportsComponent.prototype.getDashboard = function () {
        var _this = this;
        var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        searchCriteria.userId = this.userId;
        searchCriteria.storeId = this.storeId;
        searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/catalog/getDashboard', searchCriteria)
            .subscribe(function (data) {
            _this.dashboard = data[0];
            _this.chartDataChange(_this.tag, _this.index);
            console.log(_this.dashboard);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getDashboard complete'); });
    };
    ReportsComponent.prototype.getDynDashboard = function () {
        var _this = this;
        var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        searchCriteria.userId = this.userId;
        searchCriteria.storeId = this.storeId;
        searchCriteria.miscText1 = this.tag;
        searchCriteria.miscText2 = this.tag2;
        searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/catalog/getDynDashboard', searchCriteria)
            .subscribe(function (data) {
            _this.dashboard = data[0];
            // this.chartDataChange(this.tag, this.index);
            _this.chartData = _this.dashboard.dataSet[0];
            console.log(_this.dashboard);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getDashboard complete'); });
    };
    ReportsComponent.prototype.getSalesDtl = function () {
        var _this = this;
        var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        searchCriteria.userId = this.userId;
        searchCriteria.storeId = this.storeId;
        searchCriteria.miscText1 = this.tag;
        searchCriteria.miscText2 = this.tagValue;
        searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/catalog/getSalesDtl', searchCriteria)
            .subscribe(function (data) {
            _this.ordersVO = data[0];
            _this.onlineDS = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data[0].online);
            _this.onlineDS.paginator = _this.onlinePG;
            _this.onlineDS.sort = _this.onlineST;
            _this.storeDS = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data[0].store);
            _this.storeDS.paginator = _this.storePG;
            _this.storeDS.sort = _this.storeST;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getSalesDtl complete'); });
    };
    ReportsComponent.prototype.chartClick = function ($event) {
        this.tagValue = $event;
        // this.getSalesDtl();
    };
    // chartDataChange method is used to change the chart data according to button event.
    ReportsComponent.prototype.chartDataChange2 = function (tag2, i) {
        this.tag2 = tag2;
        this.index = i;
        for (var j = 0; j < 6; j++) {
            this.colors2[j] = 'tertiary';
        }
        this.colors2[i] = 'accent';
        this.getDynDashboard();
    };
    ReportsComponent.prototype.chartDataChange = function (tag, i) {
        this.tag = tag;
        this.index = i;
        for (var j = 0; j < 10; j++) {
            this.colors[j] = 'secondary';
        }
        this.colors[i] = 'primary';
        if (this.tag === 'day') {
            this.tag2 = 'hour';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[0] = 'accent';
        }
        else if (this.tag === 'week') {
            this.tag2 = 'weekday';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[1] = 'accent';
        }
        else if (this.tag === 'month'
            || this.tag === '1month') {
            this.tag2 = 'day';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[2] = 'accent';
        }
        else if (this.tag === '3months'
            || this.tag === '6months'
            || this.tag === '1year'
            || this.tag === 'year') {
            this.tag2 = 'month';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[4] = 'accent';
        }
        else if (this.tag === '5years'
            || this.tag === 'century') {
            this.tag2 = 'year';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[5] = 'accent';
        }
        this.getDynDashboard();
    };
    ReportsComponent.prototype.chartDataChangeOrig = function (tag, i) {
        this.tag = tag;
        this.index = i;
        for (var j = 0; j < 10; j++) {
            this.colors[j] = 'secondary';
        }
        this.colors[i] = 'primary';
        if (this.dashboard && this.dashboard.dataSet.length > 0) {
            for (var _i = 0, _a = this.dashboard.dataSet; _i < _a.length; _i++) {
                var content = _a[_i];
                if (content.tag === tag) {
                    this.chartData = content;
                    this.tagValue = '0';
                    this.getSalesDtl();
                }
            }
        }
    };
    ReportsComponent.prototype.filterOnlineOrder = function (status) {
        this.onlineDS.filter = status.trim().toLowerCase();
        if (this.onlineDS.paginator) {
            this.onlineDS.paginator.firstPage();
        }
    };
    ReportsComponent.prototype.filterStoreOrder = function (status) {
        console.log(status);
        this.storeDS.filter = status.trim().toLowerCase();
        if (this.storeDS.paginator) {
            this.storeDS.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorO', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ReportsComponent.prototype, "onlinePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReportsComponent.prototype, "onlineST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorS', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ReportsComponent.prototype, "storePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReportsComponent.prototype, "storeST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportsComponent.prototype, "storeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportsComponent.prototype, "userId", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            templateUrl: './Reports.component.html',
            styleUrls: ['./Reports.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ 2240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutes", function() { return ReportsRoutes; });
/* harmony import */ var _Reports_Reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2239);
/* harmony import */ var _Finances_Finances_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2241);


var ReportsRoutes = [
    {
        path: '',
        component: _Reports_Reports_component__WEBPACK_IMPORTED_MODULE_0__["ReportsComponent"]
    },
    {
        path: 'finances',
        component: _Finances_Finances_component__WEBPACK_IMPORTED_MODULE_1__["FinancesComponent"]
    }
];


/***/ }),

/***/ 2241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancesComponent", function() { return FinancesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinancesComponent = /** @class */ (function () {
    function FinancesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.tag = 'week';
        this.tag2 = 'weekday';
        this.tagValue = '0';
        this.index = 1;
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.store0 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.chartType = 'bar';
        this.stores = [];
        this.colors = ['secondary', 'primary', 'secondary', 'secondary', 'secondary',
            'secondary', 'secondary', 'secondary', 'secondary', 'secondary'];
        this.colors2 = ['tertiary', 'accent', 'tertiary', 'tertiary', 'tertiary', 'tertiary'];
        this.store0.id = 0;
        this.store = this.store0;
    }
    FinancesComponent.prototype.ngOnInit = function () {
        if (!this.storeId) {
            this.storeId = 0;
        }
        if (!this.userId) {
            this.userId = 0;
        }
        this.getStores();
        this.getFinanceDynDashboard();
    };
    FinancesComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    FinancesComponent.prototype.changeStore = function (storeId) {
        this.storeId = storeId;
        console.log(this.storeId);
        this.getFinanceDynDashboard();
    };
    FinancesComponent.prototype.getStores = function () {
        var _this = this;
        var storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        storeSearchCriteria.status = 1;
        storeSearchCriteria.userId = this.userId;
        console.log(storeSearchCriteria);
        this.appService.saveWithUrl('/service/catalog/stores', storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    FinancesComponent.prototype.getDashboard = function () {
        var _this = this;
        var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        searchCriteria.userId = this.userId;
        searchCriteria.storeId = this.storeId;
        searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/catalog/getDashboard', searchCriteria)
            .subscribe(function (data) {
            _this.dashboard = data[0];
            _this.chartDataChange(_this.tag, _this.index);
            console.log(_this.dashboard);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getDashboard complete'); });
    };
    FinancesComponent.prototype.getFinanceDynDashboard = function () {
        var _this = this;
        var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        searchCriteria.userId = this.userId;
        searchCriteria.storeId = this.storeId;
        searchCriteria.miscText1 = this.tag;
        searchCriteria.miscText2 = this.tag2;
        searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/catalog/getFinanceDynDashboard', searchCriteria)
            .subscribe(function (data) {
            _this.dashboard = data[0];
            // this.chartDataChange(this.tag, this.index);
            _this.chartData = _this.dashboard.dataSet[0];
            _this.translate.get(['COMMON.SALES', 'COMMON.SPENDINGS']).subscribe(function (res) {
                _this.chartData.data[0].label = res['COMMON.SALES'];
                _this.chartData.data[1].label = res['COMMON.SPENDINGS'];
            });
            console.log(_this.chartData);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getFinanceDynDashboard complete'); });
    };
    FinancesComponent.prototype.chartClick = function ($event) {
        this.tagValue = $event;
        // this.getSalesDtl();
    };
    // chartDataChange method is used to change the chart data according to button event.
    FinancesComponent.prototype.chartDataChange2 = function (tag2, i) {
        this.tag2 = tag2;
        this.index = i;
        for (var j = 0; j < 6; j++) {
            this.colors2[j] = 'tertiary';
        }
        this.colors2[i] = 'accent';
        this.getFinanceDynDashboard();
    };
    FinancesComponent.prototype.chartDataChange = function (tag, i) {
        this.tag = tag;
        this.index = i;
        for (var j = 0; j < 10; j++) {
            this.colors[j] = 'secondary';
        }
        this.colors[i] = 'primary';
        if (this.tag === 'day') {
            this.tag2 = 'hour';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[0] = 'accent';
        }
        else if (this.tag === 'week') {
            this.tag2 = 'weekday';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[1] = 'accent';
        }
        else if (this.tag === 'month'
            || this.tag === '1month') {
            this.tag2 = 'day';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[2] = 'accent';
        }
        else if (this.tag === '3months'
            || this.tag === '6months'
            || this.tag === '1year'
            || this.tag === 'year') {
            this.tag2 = 'month';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[4] = 'accent';
        }
        else if (this.tag === '5years'
            || this.tag === 'century') {
            this.tag2 = 'year';
            for (var j = 0; j < 6; j++) {
                this.colors2[j] = 'tertiary';
            }
            this.colors2[5] = 'accent';
        }
        this.getFinanceDynDashboard();
    };
    FinancesComponent.prototype.chartDataChangeOrig = function (tag, i) {
        this.tag = tag;
        this.index = i;
        for (var j = 0; j < 10; j++) {
            this.colors[j] = 'secondary';
        }
        this.colors[i] = 'primary';
        if (this.dashboard && this.dashboard.dataSet.length > 0) {
            for (var _i = 0, _a = this.dashboard.dataSet; _i < _a.length; _i++) {
                var content = _a[_i];
                if (content.tag === tag) {
                    this.chartData = content;
                    this.tagValue = '0';
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FinancesComponent.prototype, "storeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FinancesComponent.prototype, "userId", void 0);
    FinancesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finances',
            templateUrl: './Finances.component.html',
            styleUrls: ['./Finances.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FinancesComponent);
    return FinancesComponent;
}());



/***/ })

};;