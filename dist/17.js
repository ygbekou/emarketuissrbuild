exports.ids = [17];
exports.modules = {

/***/ 2303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
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
/* harmony import */ var _Customers_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2304);
/* harmony import */ var _Customers_Users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2305);
/* harmony import */ var _Customers_User_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2306);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Pages/UserAccount/UserAccount.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Customers_Stores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2307);
/* harmony import */ var _Customers_Store_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2308);
/* harmony import */ var _Finances_Finances_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2311);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _Customers_Users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"],
                _Customers_User_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _Customers_Stores_component__WEBPACK_IMPORTED_MODULE_14__["StoresComponent"],
                _Customers_Store_component__WEBPACK_IMPORTED_MODULE_15__["StoreComponent"]
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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Customers_routing__WEBPACK_IMPORTED_MODULE_10__["CustomersRoutes"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_9__["GlobalModule"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Pages/UserAccount/UserAccount.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
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
                _Finances_Finances_module__WEBPACK_IMPORTED_MODULE_16__["FinancesModule"],
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
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ 2304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutes", function() { return CustomersRoutes; });
/* harmony import */ var _Customers_Users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2305);
/* harmony import */ var _Customers_User_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2306);
/* harmony import */ var _Customers_Stores_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2307);
/* harmony import */ var _Customers_Store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2308);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






var CustomersRoutes = [
    {
        path: '',
        redirectTo: 'UsersComponent',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'users',
                component: _Customers_Users_component__WEBPACK_IMPORTED_MODULE_0__["UsersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'user/:id',
                component: _Customers_User_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'stores/list',
                component: _Customers_Stores_component__WEBPACK_IMPORTED_MODULE_2__["StoresComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'store/:id',
                component: _Customers_Store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            }
        ]
    }
];


/***/ }),

/***/ 2305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
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








var UsersComponent = /** @class */ (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['name', 'phone', 'email', 'sex', 'groupName', 'dateAdded', 'status'];
        _this.messages = '';
        return _this;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.search();
    };
    UsersComponent.prototype.search = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/user/search/test/list', this.searchCriteria)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Returns complete'); });
    };
    UsersComponent.prototype.remove = function (user) {
        var _this = this;
        this.messages = '';
        this.appService.delete(user.id, 'user')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(user);
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
    UsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            templateUrl: './Users.component.html',
            styleUrls: ['./Users.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], UsersComponent);
    return UsersComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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








var UserComponent = /** @class */ (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent(appService, translate, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.messages = '';
        _this.displayedColumns = ['product', 'model', 'quantity', 'returnReason', 'opened', 'comment', 'actions'];
        _this.constants = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selectedTabIndex = 0;
        _this.appService.refreshReferenceData('ReturnAction', undefined);
        _this.appService.refreshReferenceData('ReturnStatus', undefined);
        _this.appService.refreshReferenceData('ReturnReason', undefined);
        return _this;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getUser(params.id);
            }
        });
    };
    UserComponent.prototype.clear = function () {
        this.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    UserComponent.prototype.getUser = function (userId) {
        var _this = this;
        if (userId > 0) {
            this.appService.getOneWithChildsAndFiles(userId, 'User')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.user = result;
                    // this.dataSource = new MatTableDataSource(this.orderReturn.returnProducts);
                    // this.dataSource.paginator = this.paginator;
                    // this.dataSource.sort = this.sort;
                    // this.getOrder();
                }
                else {
                    _this.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    UserComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.user.status = (this.user.status == null
            || this.user.status.toString() === 'false'
            || this.user.status.toString() === '0') ? 0 : 1;
        try {
            this.appService.save(this.user, 'User')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.user.id = result.id;
                    _this.processResult(result, _this.user, null);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    UserComponent.prototype.setToggleValues = function (returnProduct) {
        returnProduct.opened = (returnProduct.opened === null
            || returnProduct.opened === undefined
            || returnProduct.opened.toString() === 'false'
            || returnProduct.opened.toString() === '0') ? 0 : 1;
    };
    UserComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    UserComponent.prototype.tabClick = function (tab) {
        this.selectedTabIndex = tab.index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], UserComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], UserComponent.prototype, "sort", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            templateUrl: './User.component.html',
            styleUrls: ['./Users.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ 2307:
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








var StoresComponent = /** @class */ (function (_super) {
    __extends(StoresComponent, _super);
    function StoresComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['name', 'email', 'phone', 'userFullName', 'status', 'aprvStatus', 'dateAdded'];
        _this.messages = '';
        _this.button = 'filter';
        return _this;
    }
    StoresComponent.prototype.ngOnInit = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.search();
    };
    StoresComponent.prototype.clear = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    StoresComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.appService.saveWithUrl('/service/catalog/stores', this.searchCriteria)
                .subscribe(function (data) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
        }
    };
    StoresComponent.prototype.remove = function (store) {
        var _this = this;
        this.messages = '';
        this.appService.delete(store.id, 'Store')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(store);
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
    StoresComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
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
            selector: 'app-all-stores',
            templateUrl: './Stores.component.html',
            styleUrls: ['./Users.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], StoresComponent);
    return StoresComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
/* harmony import */ var _Finances_StoreServices_StoreServices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2309);
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var StoreComponent = /** @class */ (function (_super) {
    __extends(StoreComponent, _super);
    //searchCriteria: FundSearchCriteria = new FundSearchCriteria();
    function StoreComponent(appService, translate, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.messages = '';
        _this.errors = '';
        _this.picture = [];
        _this.currencies = [];
        _this.stores = [];
        return _this;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCurrencies();
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getStore(params.id);
            }
        });
    };
    StoreComponent.prototype.generateStoreCode = function () {
        var d = new Date();
        this.store.code = (this.store.owner.firstName ?
            this.store.owner.firstName.charAt(0) : '') + (this.store.owner.lastName ?
            this.store.owner.lastName.charAt(0) : '')
            + d.getTime();
    };
    StoreComponent.prototype.clear = function () {
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    StoreComponent.prototype.getStore = function (storeId) {
        var _this = this;
        if (storeId > 0) {
            this.appService.getOneWithChildsAndFiles(storeId, 'Store')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.store = result;
                    if (_this.store.goLiveDate) {
                        _this.store.goLiveDate = new Date(_this.store.goLiveDate);
                    }
                    _this.storeServiceComponent.setStore(_this.store);
                    _this.store.fileNames.forEach(function (item) {
                        if (item === _this.store.image) {
                            _this.picture.push({
                                link: 'assets/images/stores/' + _this.store.id + '/' + item,
                                preview: 'assets/images/stores/' + _this.store.id + '/' + item
                            });
                        }
                        else {
                            // Do Nothing
                        }
                    });
                }
                else {
                    _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    StoreComponent.prototype.submitStoreInfo = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.store.status = (this.store.status == null
            || this.store.status.toString() === 'false'
            || this.store.status.toString() === '0') ? 0 : 1;
        this.store.aprvStatus = (this.store.aprvStatus == null
            || this.store.aprvStatus.toString() === 'false'
            || this.store.aprvStatus.toString() === '0') ? 0 : 1;
        this.store.displayWeb = (this.store.displayWeb == null
            || this.store.displayWeb.toString() === 'false'
            || this.store.displayWeb.toString() === '0') ? 0 : 1;
        this.store.displayMb = (this.store.displayMb == null
            || this.store.displayMb.toString() === 'false'
            || this.store.displayMb.toString() === '0') ? 0 : 1;
        this.store.allowExRcpt = (this.store.allowExRcpt == null
            || this.store.allowExRcpt.toString() === 'false'
            || this.store.allowExRcpt.toString() === '0') ? 0 : 1;
        this.store.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.formData = new FormData();
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.saveWithFile(this.store, 'Store', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.store, null);
            _this.store = data;
        });
    };
    StoreComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    StoreComponent.prototype.getCurrencies = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.status = |abc|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.Currency', parameters, ' order by e.code ')
            .subscribe(function (data) {
            _this.currencies = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all CategoryDescription complete'); });
    };
    StoreComponent.prototype.changeTab = function ($event) {
        if ($event.index === 0) {
        }
        else if ($event.index === 1) {
        }
        else if ($event.index === 2) {
            this.getStores();
        }
    };
    StoreComponent.prototype.getStores = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/stores', { status: 1, userId: +this.appService.tokenStorage.getUserId() })
            .subscribe(function (data) {
            _this.stores = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    StoreComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.messages = '';
            _this.errors = '';
        }, 500);
    };
    StoreComponent.prototype.copyItemsFromStore = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.updateObject('/service/catalog/copyItemsFromStore/'
            + this.selectedStore.id + '/' + this.store.id + '/' + this.appService.tokenStorage.getUserId())
            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (data.result === 'SUCCESS') {
                    this.translate.get(['MESSAGE.SAVE_SUCCESS']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                    });
                }
                return [2 /*return*/];
            });
        }); }, function (error) { return console.log(error); }, function () { return console.log('Copy products complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Finances_StoreServices_StoreServices_component__WEBPACK_IMPORTED_MODULE_5__["StoreServicesComponent"], { static: false }),
        __metadata("design:type", _Finances_StoreServices_StoreServices_component__WEBPACK_IMPORTED_MODULE_5__["StoreServicesComponent"])
    ], StoreComponent.prototype, "storeServiceComponent", void 0);
    StoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store',
            templateUrl: './Store.component.html'
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], StoreComponent);
    return StoreComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ })

};;