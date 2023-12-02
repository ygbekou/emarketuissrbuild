exports.ids = [2];
exports.modules = {

/***/ 1728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1729);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(439);
/* harmony import */ var _Products_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2136);
/* harmony import */ var _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2137);
/* harmony import */ var _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2138);
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(566);
/* harmony import */ var _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(639);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(493);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(440);
/* harmony import */ var _ViewAll_ViewAll_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2139);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/pipes/pipes.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(434);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(541);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Products_routing__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutes"]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__["GlobalModule"],
                _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/pipes/pipes.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_15__["SlickCarouselModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/pipes/pipes.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
            ],
            declarations: [
                _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_6__["ProductsListComponent"],
                _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_7__["DetailPageComponent"],
                _ViewAll_ViewAll_component__WEBPACK_IMPORTED_MODULE_12__["ViewAllComponent"]
            ],
            entryComponents: [],
            exports: []
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ 2136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutes", function() { return ProductsRoutes; });
/* harmony import */ var _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2137);
/* harmony import */ var _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2138);
/* harmony import */ var _ViewAll_ViewAll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2139);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/Review/Review.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




var ProductsRoutes = [
    {
        path: '',
        component: _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__["ProductsListComponent"]
    },
    {
        path: 'viewAll',
        component: _ViewAll_ViewAll_component__WEBPACK_IMPORTED_MODULE_2__["ViewAllComponent"]
    },
    {
        path: 'dtl/:prdId/:ptsId',
        component: _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_1__["DetailPageComponent"],
    },
    {
        path: ':type',
        component: _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__["ProductsListComponent"]
    },
    {
        path: ':reviewType/:reviewTypeId/review/:reviewId',
        component: !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/Review/Review.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
];


/***/ }),

/***/ 2137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(493);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(434);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(209);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(appService, translate, mediaObserver, sanitizer, activatedRoute) {
        this.appService = appService;
        this.translate = translate;
        this.mediaObserver = mediaObserver;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.count = 48;
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
        this.catId = 0;
        this.storeCatId = 0;
        this.marketId = 0;
        this.searchText = '0';
        this.storeId = 0;
        this.running = true;
        this.resultCount = 0;
        this.storeCategoryDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.stores = [];
        this.markDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.catDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        // slideConfig: any;
        this.height = { 'height': '70px' };
        this.counts = [12, 24, 36, 48, 96];
        this.dummyCat = '';
        this.productList = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.currentFilteredProductList = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.sortings = [
            { code: 'priceasc', name: 'Prix ascendant' },
            { code: 'pricedesc', name: 'Prix descendant' },
            { code: 'rating', name: 'Rating' }
        ];
        this.slideConfig = {
            'slidesToShow': 6,
            'slidesToScroll': 1,
            'arrows': true,
            'swipeToSlide': true,
            'infinite': true,
            'autoplay': true,
            'autoplaySpeed': 2000,
            'responsive': [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appService.appInfoStorage.language.code === 'en') {
            this.sortings = [
                { code: 'priceasc', name: 'Price ascending' },
                { code: 'pricedesc', name: 'Price descending' },
                { code: 'rating', name: 'Rating' }
            ];
        }
        this.sort = this.sortings[0];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.catId = 0;
            _this.marketId = 0;
            _this.storeCatId = 0;
            _this.stores = [];
            _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            _this.storeId = 0;
            _this.productList = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            _this.currentFilteredProductList = undefined;
            _this.running = true;
            console.log(params.type);
            if (params.type) {
                var type = params.type.substring(0, 3);
                if (type === 'cat') {
                    _this.catId = params.type.substring(3);
                }
                else if (type === 'mak') {
                    _this.marketId = params.type.substring(3);
                }
                else if (type === 'stc') {
                    _this.storeCatId = params.type.substring(3);
                }
                if (_this.catId > 0 || _this.marketId > 0 || _this.storeCatId > 0) {
                    console.log('catId=' + _this.catId
                        + ', marketId=' + _this.marketId
                        + ', storeCatId=' + _this.storeCatId);
                    if (_this.storeCatId > 0) {
                        _this.getStoreCategories(_this.storeCatId);
                        _this.getStoresFromCat();
                        // this.getStoresAndData();
                    }
                    else {
                        _this.getData();
                    }
                }
            }
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(_this.activatedRoute.queryParams);
            _this.activatedRoute.queryParams.forEach(function (queryParams) {
                if (queryParams['searchText'] !== undefined) {
                    _this.searchText = queryParams['searchText'];
                    _this.getData();
                }
                if (queryParams['storeId'] !== undefined) {
                    _this.storeId = queryParams['storeId'];
                    _this.getStore();
                }
            });
        });
        this.watcher = this.mediaObserver.media$.subscribe(function (change) {
            if (change.mqAlias === 'xs') {
                _this.viewCol = 100;
            }
            else if (change.mqAlias === 'sm') {
                _this.viewCol = 50;
            }
            else if (change.mqAlias === 'md') {
                _this.viewCol = 50;
            }
            else {
                _this.viewCol = 33.3;
            }
        });
    };
    ProductsListComponent.prototype.getStoreCategories = function (storeCatId) {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Language', parameters, ' order by e.sortOrder ')
            .subscribe(function (data) {
            var lang = _this.appService.navigator.language;
            if (lang) {
                lang = lang.substring(0, 2);
            }
            // if (this.cookieService.get('lang')) {
            //    lang = this.cookieService.get('lang');
            //    console.log('Using cookie lang=' + this.cookieService.get('lang'));
            // } else if (lang) {
            //    console.log('Using browser lang=' + lang);
            //    // this.translate.use(lang);
            // } else {
            //    lang = 'fr';
            //    console.log('Using default lang=fr');
            // }
            data.forEach(function (language) {
                if (language.code === lang) {
                    var parameters2 = [];
                    parameters2.push('e.language.id = |langCode|' + language.id + '|Integer');
                    parameters2.push('e.storeCat.id = |stC|' + storeCatId + '|Integer');
                    _this.appService.getAllByCriteria('com.softenza.emarket.model.StoreCategoryDesc', parameters2, ' order by e.storeCat.sortOrder ')
                        .subscribe(function (data2) {
                        if (data2 && data2.length > 0) {
                            _this.storeCategoryDesc = data2[0];
                        }
                    }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreCategoryDesc complete'); });
                }
            });
        }, function (error) { return console.log(error); }, function () { return console.log('Get Languages complete'); });
    };
    ProductsListComponent.prototype.getStore = function () {
        var _this = this;
        // alert(this.storeId);
        if (this.storeId > 0) {
            this.appService.saveWithUrl('/service/catalog/getStore', { 'type': 'Store', 'id': this.storeId })
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.store = result;
                    // console.log(this.store);
                    _this.setImage();
                    _this.storeId = _this.store.id;
                    _this.getData();
                }
            });
        }
    };
    ProductsListComponent.prototype.setImage = function () {
        if (this.store) {
            if (this.store.banner) {
                this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(' +
                    '/assets/images/stores/' + this.store.id + '/' + this.store.banner + ')');
            }
            else {
                this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(/assets/images/page-title-bar.jpg)');
            }
        }
        else {
            this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(/assets/images/page-title-bar.jpg)');
        }
        console.log(this.backgroundImg);
    };
    ProductsListComponent.prototype.getStoresFromCat = function () {
        var _this = this;
        this.appService.getObjects('/service/catalog/getStoresFromCat/' + this.storeCatId + '/1')
            .subscribe(function (data) {
            _this.stores = data;
            // console.log(this.stores);
            if (_this.stores && _this.stores.length === 1) {
                _this.store = _this.stores[0];
                _this.storeId = _this.store.id;
                _this.setImage();
                _this.storeCatId = 0;
                _this.getData();
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all storeSpecs complete'); });
    };
    ProductsListComponent.prototype.getStoresAndData = function () {
        var _this = this;
        // console.log('get store called');
        this.stores = [];
        var parameters = [];
        parameters.push('e.displayWeb = |abc|1|Integer');
        parameters.push('e.status = |xyz|1|Integer');
        parameters.push('e.aprvStatus = |klm|1|Integer');
        parameters.push('e.storeCat.id = |klz|' + this.storeCatId + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.Store', parameters, ' order by e.sortOrder ')
            .subscribe(function (data) {
            _this.stores = data;
            // console.log(this.stores);
            if (_this.stores) {
                _this.store = _this.stores[0];
                _this.storeId = _this.store.id;
                _this.setImage();
                _this.storeCatId = 0;
                _this.getData();
            }
        }, function (error) {
            console.log(error);
            console.log('Error occurred');
        }, function () { return console.log('Get getStores complete'); });
    };
    // Getting all the product based on the Top Search
    ProductsListComponent.prototype.getProducts = function () {
        var _this = this;
        var crit = null;
        if (this.searchText && this.searchText !== '0') {
            // console.log('this.searchText is not null =' + this.searchText);
            crit = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.appService.appInfoStorage.language.id, 0, 0, 0, this.searchText, 1, 0, 0, 0, 0, 0);
        }
        else {
            // console.log('this.searchText is null =' + this.searchText);
            crit = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.appService.appInfoStorage.language.id, this.storeId, this.marketId, this.catId, this.searchText, 1, 0, 0, 0, this.storeCatId, 0);
        }
        console.log(crit);
        this.appService.saveWithUrl('/service/catalog/getProductsOnSale/', crit).subscribe(function (data) {
            _this.applyGridFilter(data);
            _this.resultCount = data && data.productDescVOs ? data.productDescVOs.length : 0;
            // console.log(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getProductsOnSale complete'); });
    };
    ProductsListComponent.prototype.applyGridFilter = function (data) {
        var _this = this;
        // Make a copy of the backend returned data to avoid going to backend when a filtering is made.
        this.productList = data;
        this.currentFilteredProductList = undefined;
        this.translate.get(['COMMON.ALL_CATEGORIES', 'COMMON.ALL_CATEGORIES']).subscribe(function (res) {
            _this.dummyCat = res['COMMON.ALL_CATEGORIES'];
        });
        // Making the category list.
        if (this.productList && this.productList.categories) {
            this.productList.categories.unshift(this.dummyCat);
        }
        this.productList.categories = this.productList.categories.filter(function (x) { return x !== null; });
        var uniqueIds = [];
        this.createDatasource(data.productDescVOs.filter(function (element) {
            var isDuplicate = uniqueIds.includes(element.product.ptsId);
            if (!isDuplicate) {
                uniqueIds.push(element.product.ptsId);
                return true;
            }
            return false;
        }));
        //this.createDatasource(unique);
        this.running = false;
    };
    ProductsListComponent.prototype.getData = function () {
        var _this = this;
        var parameters = [];
        this.productList = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.currentFilteredProductList = undefined;
        this.appService.getAllByCriteria('com.softenza.emarket.model.Language', parameters, ' order by e.sortOrder ')
            .subscribe(function (data) {
            var lang = _this.appService.navigator.language;
            if (lang) {
                lang = lang.substring(0, 2);
            }
            // if (this.cookieService.get('lang')) {
            //    lang = this.cookieService.get('lang');
            //    console.log('Using cookie lang=' + this.cookieService.get('lang'));
            // } else if (lang) {
            //    console.log('Using browser lang=' + lang);
            //    // this.translate.use(lang);
            // } else {
            //    lang = 'fr';
            //    console.log('Using default lang=fr');
            // }
            data.forEach(function (language) {
                if (language.code === lang) {
                    _this.getProducts();
                    _this.getMarkDescs(language.id);
                    _this.getCatDescs(language.id);
                }
            });
        }, function (error) { return console.log(error); }, function () { return console.log('Get Languages complete'); });
    };
    ProductsListComponent.prototype.getMarkDescs = function (langId) {
        var _this = this;
        var parameters = [];
        if (this.marketId > 0) {
            parameters.push('e.marketing.id = |marketingId|' + this.marketId + '|Integer');
            parameters.push('e.language.id = |langId|' + langId + '|Integer');
            this.appService.getAllByCriteria('com.softenza.emarket.model.MarketingDescription', parameters)
                .subscribe(function (data) {
                if (data && data.length > 0) {
                    _this.markDesc = data[0];
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Get all Marketing Item complete'); });
        }
    };
    ProductsListComponent.prototype.getCatDescs = function (langId) {
        var _this = this;
        var parameters = [];
        if (this.catId > 0) {
            parameters.push('e.category.id = |categoryId|' + this.catId + '|Integer');
            parameters.push('e.language.id = |langId|' + langId + '|Integer');
            this.appService.getAllByCriteria('com.softenza.emarket.model.CategoryDescription', parameters)
                .subscribe(function (data) {
                if (data && data.length > 0) {
                    _this.catDesc = data[0];
                    // console.log(this.catDesc);
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Get all Category Item complete'); });
        }
    };
    ProductsListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ProductsListComponent.prototype.applyAllFilter = function () {
        this.firstPagePagination();
        this.createDatasource(this.filterDataBySearchCriteria(this.searchCriteria, this.dummyCat));
        this.resetPagination();
    };
    ProductsListComponent.prototype.addToCart = function (value) {
        var _this = this;
        if (value.product.hasOption === 1) {
            this.appService.productOptionPopup(value).
                subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getCartPopupResponse(_this.popupResponse, value); });
        }
        else {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            this.appService.addToCart(ci);
        }
    };
    ProductsListComponent.prototype.getCartPopupResponse = function (response, value) {
        if (response) {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            ci.quantity = value.quantity;
            this.appService.addToCart(ci);
        }
    };
    ProductsListComponent.prototype.addToWishList = function (value) {
        var _this = this;
        if (value.product.hasOption === 1) {
            this.appService.productOptionPopup(value).
                subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getWishPopupResponse(_this.popupResponse, value); });
        }
        else {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            this.appService.addToWishlist(ci);
        }
    };
    ProductsListComponent.prototype.getWishPopupResponse = function (response, value) {
        if (response) {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            ci.quantity = value.quantity;
            this.appService.addToWishlist(ci);
        }
    };
    ProductsListComponent.prototype.transformHits = function (hits) {
        hits.forEach(function (hit) {
            hit.stars = [];
            for (var i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    };
    ProductsListComponent.prototype.changeCount = function (count) {
        this.count = count;
        // this.products.length = 0;
        this.resetPagination();
        this.filterProducts();
    };
    ProductsListComponent.prototype.changeSorting = function (sort) {
        this.sort = sort;
        this.filterProducts();
    };
    ProductsListComponent.prototype.changeViewType = function (obj) {
        if (obj.viewType === 'list') {
            this.changeCount(1);
        }
        else if (this.count === 1) {
            this.changeCount(6);
        }
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    };
    ProductsListComponent.prototype.onPageChange = function (e) {
        this.pagination.page = e.pageIndex + 1;
        this.filterProducts();
        // window.scrollTo(0, 0);
    };
    ProductsListComponent.prototype.resetPagination = function () {
        console.log('resetPagination called');
        this.firstPagePagination();
        this.pagination.totalPages = Math.ceil(this.pagination.total / this.count);
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    };
    ProductsListComponent.prototype.firstPagePagination = function () {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
            this.paginator.firstPage();
        }
    };
    ProductsListComponent.prototype.filterProducts = function () {
        this.createDatasource(this.currentFilteredProductList && this.currentFilteredProductList.productDescVOs
            ? this.currentFilteredProductList.productDescVOs : this.productList.productDescVOs);
    };
    ProductsListComponent.prototype.searchClicked = function (data) {
        this.searchCriteria.text = data.trim().toLowerCase();
        this.firstPagePagination();
        this.createDatasource(this.filterDataBySearchCriteria(this.searchCriteria, this.dummyCat));
        this.resetPagination();
    };
    ProductsListComponent.prototype.filterDataBySearchCriteria = function (searchCriteria, dummyCat) {
        var uniqueIds = [];
        var filteredData = this.productList.productDescVOs.filter(function (data) {
            var found = true;
            if (searchCriteria.priceMin && searchCriteria.priceMax) {
                if (!(data.product.price >= searchCriteria.priceMin
                    && data.product.price <= searchCriteria.priceMax)) {
                    found = false;
                }
            }
            else if (searchCriteria.priceMin && !searchCriteria.priceMax) {
                if (!(data.product.price >= searchCriteria.priceMin)) {
                    found = false;
                }
            }
            else if (!searchCriteria.priceMin && searchCriteria.priceMax) {
                if (!(data.product.price <= searchCriteria.priceMax)) {
                    found = false;
                }
            }
            if (searchCriteria.category) {
                if (!(searchCriteria.category === data.category) &&
                    searchCriteria.category !== dummyCat) {
                    found = false;
                }
            }
            if (searchCriteria.text) {
                if (!(data.name.toLowerCase().indexOf(searchCriteria.text.toLowerCase()) > -1)) {
                    found = false;
                }
            }
            // Filter out duplicate
            if (found) {
                var isDuplicate = uniqueIds.includes(data.product.ptsId);
                if (!isDuplicate) {
                    uniqueIds.push(data.product.ptsId);
                }
                else {
                    found = false;
                }
            }
            console.log('Filter Predicate called.');
            return found;
        });
        this.currentFilteredProductList = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.currentFilteredProductList.productDescVOs = filteredData;
        this.resultCount = this.currentFilteredProductList.productDescVOs ?
            this.currentFilteredProductList.productDescVOs.length : 0;
        return filteredData;
    };
    ProductsListComponent.prototype.createDatasource = function (listData) {
        var _this = this;
        // this.pagination = new Pagination(1, this.count, null, 2, 0, 0);
        this.message = null;
        var result = this.filterData(listData);
        if (result.data.length === 0) {
            this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
            this.translate.get(['COMMON.SAVE', 'MESSAGE.NO_RESULT_FOUND']).subscribe(function (res) {
                _this.message = res['MESSAGE.NO_RESULT_FOUND'];
            });
        }
        // this.resultCount = result.data.length;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](result.data);
        this.pagination = result.pagination;
    };
    ProductsListComponent.prototype.filterData = function (data) {
        return this.appService.filterData(data, this.searchFields, this.sort.code, this.pagination.page, this.pagination.perPage);
    };
    ProductsListComponent.prototype.selectForSaleProduct = function ($event) {
        console.log($event);
    };
    ProductsListComponent.prototype.buy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ProductsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", Object)
    ], ProductsListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], ProductsListComponent.prototype, "sidenav", void 0);
    ProductsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prod-list-all',
            templateUrl: './ProductsList.component.html',
            styleUrls: ['./ProductsList.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ 2138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageComponent", function() { return DetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(545);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(434);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(493);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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







var DetailPageComponent = /** @class */ (function (_super) {
    __extends(DetailPageComponent, _super);
    function DetailPageComponent(appService, translate, mediaObserver, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.mediaObserver = mediaObserver;
        _this.activatedRoute = activatedRoute;
        _this.prdId = 0;
        _this.ptsId = 0;
        _this.topN = 4;
        _this.viewType = 'grid';
        _this.viewCol = 25;
        _this.products = [];
        return _this;
    }
    DetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            // path: 'dtl/:prdId/:ptsId',
            _this.prdId = params.prdId;
            _this.ptsId = params.ptsId;
            _this.topN = 4;
            _this.url = 'http://100.24.25.220:4000' + '/#/products/dtl/'
                + params.prdId + '/' + params.ptsId;
            /*
            console.log(params.prdId);
            console.log(params.ptsId); */
            _this.getData();
        });
        console.log('Activated route data in Component:::', this.activatedRoute.data);
        this.activatedRoute.data.subscribe(function (response) {
            console.log('PRODUCT FETCHING', response);
            _this.product = response.product;
            console.log('PRODUCT FETCHED');
        });
    };
    DetailPageComponent.prototype.getProduct = function (langId) {
        var _this = this;
        this.appService.getObject('/service/catalog/getProductOnSale/' +
            langId + '/' + this.ptsId)
            .subscribe(function (data) {
            console.log(data);
            _this.product = data;
            _this.getRelatedProducts(langId);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getProductOnSale complete'); });
    };
    /*   constructor(public languageId: number,
               public storeId: number,
               public marketingId: number,
               public catId: number,
               public searchText: string,
               public fromWeb = 1,
               public productId: number,
               public topN: number,
               public userId: number,
   ) */
    DetailPageComponent.prototype.getRelatedProducts = function (langId) {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getRelatedProductsOnSale/', new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(langId, 0, 0, 0, '0', 1, this.product.product.id, this.topN, 0, 0, 0))
            .subscribe(function (data) {
            _this.products = data;
            console.log(_this.products);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getRelatedProductsOnSale complete'); });
    };
    DetailPageComponent.prototype.showMore = function () {
        this.topN += 4;
        this.getRelatedProducts(this.appService.appInfoStorage.language.id);
    };
    DetailPageComponent.prototype.getData = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Language', parameters, ' order by e.sortOrder ')
            .subscribe(function (data) {
            var lang = _this.appService.navigator.language;
            if (lang) {
                lang = lang.substring(0, 2);
            }
            // if (this.cookieService.get('lang')) {
            //    lang = this.cookieService.get('lang');
            //    console.log('Using cookie lang=' + this.cookieService.get('lang'));
            // } else if (lang) {
            //    console.log('Using browser lang=' + lang);
            //    // this.translate.use(lang);
            // } else {
            //    lang = 'fr';
            //    console.log('Using default lang=fr');
            // }
            data.forEach(function (language) {
                if (language.code === lang) {
                    _this.getProduct(language.id);
                }
            });
        }, function (error) { return console.log(error); }, function () { return console.log('Get Languages complete'); });
    };
    DetailPageComponent.prototype.addToCart = function (value) {
        var _this = this;
        if (value.product.hasOption === 1) {
            this.appService.productOptionPopup(value).
                subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getCartPopupResponse(_this.popupResponse, value); });
        }
        else {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            this.appService.addToCart(ci);
        }
    };
    DetailPageComponent.prototype.getCartPopupResponse = function (response, value) {
        if (response) {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            this.appService.addToCart(ci);
        }
    };
    DetailPageComponent.prototype.addToWishList = function (value) {
        var _this = this;
        if (value.product.hasOption === 1) {
            this.appService.productOptionPopup(value).
                subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getWishPopupResponse(_this.popupResponse, value); });
        }
        else {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            this.appService.addToWishlist(ci);
        }
    };
    DetailPageComponent.prototype.getWishPopupResponse = function (response, value) {
        if (response) {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            this.appService.addToWishlist(ci);
        }
    };
    DetailPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-DetailPage',
            templateUrl: './DetailPage.component.html',
            styleUrls: ['./DetailPage.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DetailPageComponent);
    return DetailPageComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllComponent", function() { return ViewAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(493);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(434);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewAllComponent = /** @class */ (function () {
    function ViewAllComponent(appService, translate, mediaObserver, route) {
        this.appService = appService;
        this.translate = translate;
        this.mediaObserver = mediaObserver;
        this.route = route;
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.count = 6;
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
        this.marketings = [];
        this.sectionId = 0;
        this.height = { 'height': '220px' };
        this.counts = [2, 3, 6, 12, 24, 36];
    }
    ViewAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.sectionId = Number(queryParams['id']);
                console.log(_this.sectionId);
                if (_this.sectionId === 2) {
                    _this.height = { 'height': '100px' };
                }
                else {
                    _this.height = { 'height': '220px' };
                }
                _this.getMarketings();
            });
        });
        this.watcher = this.mediaObserver.media$.subscribe(function (change) {
            if (change.mqAlias === 'xs') {
                _this.viewCol = 100;
            }
            else if (change.mqAlias === 'sm') {
                _this.viewCol = 50;
            }
            else if (change.mqAlias === 'md') {
                _this.viewCol = 50;
            }
            else {
                _this.viewCol = 33.3;
            }
        });
    };
    ViewAllComponent.prototype.addToCart = function ($event) {
    };
    ViewAllComponent.prototype.getMarketings = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Language', parameters, ' order by e.sortOrder ')
            .subscribe(function (data) {
            var lang = _this.appService.navigator.language;
            if (lang) {
                lang = lang.substring(0, 2);
            }
            // if (this.cookieService.get('lang')) {
            //    lang = this.cookieService.get('lang');
            //    console.log('Using cookie lang=' + this.cookieService.get('lang'));
            // } else if (lang) {
            //    console.log('Using browser lang=' + lang);
            //    // this.translate.use(lang);
            // } else {
            //    lang = 'fr';
            //    console.log('Using default lang=fr');
            // }
            data.forEach(function (language) {
                if (language.code === lang) {
                    _this.getSliders(language.id);
                }
            });
        }, function (error) { return console.log(error); }, function () { return console.log('Get Languages complete'); });
    };
    ViewAllComponent.prototype.getSliders = function (langId) {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |langCode|' + langId + '|Integer');
        parameters.push('e.marketing.section = |sInS|' + this.sectionId + '|Integer');
        parameters.push('e.marketing.status = |stta|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.MarketingDescription', parameters, ' order by e.marketing.sortOrder')
            .subscribe(function (data) {
            _this.marketings = data;
            var result = _this.filterData(data);
            if (result.data.length === 0) {
                // this.properties.length = 0;
                _this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, _this.count, null, 2, 0, 0);
                _this.translate.get(['COMMON.SAVE', 'MESSAGE.NO_RESULT_FOUND']).subscribe(function (res) {
                    _this.message = res['MESSAGE.NO_RESULT_FOUND'];
                });
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](result.data);
            _this.pagination = result.pagination;
            _this.message = null;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all MarketingDescription complete'); });
    };
    ViewAllComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ViewAllComponent.prototype.addToWishList = function (value) {
        this.appService.addToWishlist(value);
    };
    ViewAllComponent.prototype.transformHits = function (hits) {
        hits.forEach(function (hit) {
            hit.stars = [];
            for (var i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    };
    ViewAllComponent.prototype.changeCount = function (count) {
        this.count = count;
        // this.products.length = 0;
        this.resetPagination();
        this.filterProducts();
    };
    ViewAllComponent.prototype.changeSorting = function (sort) {
        this.sort = sort;
        this.filterProducts();
    };
    ViewAllComponent.prototype.onPageChange = function (e) {
        this.pagination.page = e.pageIndex + 1;
        this.filterProducts();
        // window.scrollTo(0, 0);
    };
    ViewAllComponent.prototype.resetPagination = function () {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    };
    ViewAllComponent.prototype.filterProducts = function () {
        var _this = this;
        var result = this.filterData(this.marketings);
        if (result.data.length === 0) {
            // this.properties.length = 0;
            this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
            this.translate.get(['COMMON.SAVE', 'MESSAGE.NO_RESULT_FOUND']).subscribe(function (res) {
                _this.message = res['MESSAGE.NO_RESULT_FOUND'];
            });
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](result.data);
        this.pagination = result.pagination;
        this.message = null;
    };
    ViewAllComponent.prototype.filterData = function (data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    };
    ViewAllComponent.prototype.searchClicked = function (data) {
        this.applyFilter(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ViewAllComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ViewAllComponent.prototype, "sort", void 0);
    ViewAllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-all',
            templateUrl: './ViewAll.component.html',
            styleUrls: ['./ViewAll.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewAllComponent);
    return ViewAllComponent;
}());



/***/ })

};;