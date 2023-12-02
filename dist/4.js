exports.ids = [4];
exports.modules = {

/***/ 2140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsModule", function() { return RoomsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1729);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(439);
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(566);
/* harmony import */ var _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(639);
/* harmony import */ var _Session_Session_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2141);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(493);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(440);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/pipes/pipes.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(434);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(541);
/* harmony import */ var _Rooms_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2147);
/* harmony import */ var _RoomsList_RoomsList_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2148);
/* harmony import */ var _RoomsSearch_RoomsSearch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2152);
/* harmony import */ var _DetailPage_RoomDetail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2149);
/* harmony import */ var _BookPage_BookDetail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2150);
/* harmony import */ var _BookComplete_BookReceipt_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2151);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var RoomsModule = /** @class */ (function () {
    function RoomsModule() {
    }
    RoomsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Rooms_routing__WEBPACK_IMPORTED_MODULE_13__["RoomsRoutes"]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_5__["GlobalModule"],
                _Session_Session_module__WEBPACK_IMPORTED_MODULE_7__["SessionModule"],
                _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/pipes/pipes.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__["SlickCarouselModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/pipes/pipes.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"]
            ],
            declarations: [
                _RoomsList_RoomsList_component__WEBPACK_IMPORTED_MODULE_14__["RoomsListComponent"],
                _RoomsSearch_RoomsSearch_component__WEBPACK_IMPORTED_MODULE_15__["RoomsSearchComponent"],
                _DetailPage_RoomDetail_component__WEBPACK_IMPORTED_MODULE_16__["RoomDetailComponent"],
                _BookPage_BookDetail_component__WEBPACK_IMPORTED_MODULE_17__["BookDetailComponent"],
                _BookComplete_BookReceipt_component__WEBPACK_IMPORTED_MODULE_18__["BookReceiptComponent"]
            ],
            entryComponents: [],
            exports: []
        })
    ], RoomsModule);
    return RoomsModule;
}());



/***/ }),

/***/ 2147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsRoutes", function() { return RoomsRoutes; });
/* harmony import */ var _RoomsList_RoomsList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2148);
/* harmony import */ var _DetailPage_RoomDetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2149);
/* harmony import */ var _BookPage_BookDetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2150);
/* harmony import */ var _BookComplete_BookReceipt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2151);




var RoomsRoutes = [
    {
        path: '',
        component: _RoomsList_RoomsList_component__WEBPACK_IMPORTED_MODULE_0__["RoomsListComponent"]
    },
    {
        path: 'search',
        component: _RoomsList_RoomsList_component__WEBPACK_IMPORTED_MODULE_0__["RoomsListComponent"]
    },
    {
        path: 'detail',
        component: _DetailPage_RoomDetail_component__WEBPACK_IMPORTED_MODULE_1__["RoomDetailComponent"]
    },
    {
        path: 'booking',
        component: _BookPage_BookDetail_component__WEBPACK_IMPORTED_MODULE_2__["BookDetailComponent"]
    },
    {
        path: 'reservations/:reservId',
        component: _BookComplete_BookReceipt_component__WEBPACK_IMPORTED_MODULE_3__["BookReceiptComponent"]
    },
    {
        path: ':type',
        component: _RoomsList_RoomsList_component__WEBPACK_IMPORTED_MODULE_0__["RoomsListComponent"]
    }
];


/***/ }),

/***/ 2148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsListComponent", function() { return RoomsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(493);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(434);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(209);
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









var RoomsListComponent = /** @class */ (function () {
    function RoomsListComponent(appService, router, translate, mediaObserver, sanitizer, activatedRoute) {
        this.appService = appService;
        this.router = router;
        this.translate = translate;
        this.mediaObserver = mediaObserver;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.viewType = 'grid';
        this.viewCol = 33;
        this.count = 48;
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
        this.catId = 0;
        this.storeCatId = 0;
        this.marketId = 0;
        this.searchText = '0';
        this.storeId = 0;
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.stores = [];
        this.buildings = [];
        this.markDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.catDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        // slideConfig: any;
        this.height = { 'height': '70px' };
        this.counts = [12, 24, 36, 48, 96];
        this.dummyCat = '';
        this.roomList = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.currentFilteredRoomList = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCritCopy = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.minDate = new Date();
        this.minCheckoutDate = new Date();
        this.sortSelect = 1;
        this.cities = [];
        this.topPropertiesLabel = '';
        this.BEGIN_HOURS = ['00', '01', '03', '04', '05', '06', '07', '08',
            '09', '10', '11', '12', '13', '14', '15', '16', '17', '18',
            '19', '20', '21', '22', '23'];
        this.END_HOURS = ['00', '01', '03', '04', '05', '06', '07', '08', '09',
            '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
            '20', '21', '22', '23'];
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
    RoomsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('COMMON.TOP_PROPERTIES').subscribe(function (res) {
            _this.topPropertiesLabel = res;
        });
        // if (this.appService.appInfoStorage.language.code === 'en') {
        this.sortings = [
            { code: 'storeNameAsc', name: 'Store Name ascending' },
            { code: 'storeNameDsc', name: 'Store Name descending' },
            { code: 'rating', name: 'Rating' }
        ];
        // }
        this.sort = this.sortings[0];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(_this.activatedRoute.queryParams);
            _this.activatedRoute.queryParams.forEach(function (queryParams) {
                if (queryParams['searchText'] !== undefined) {
                    _this.searchText = queryParams['searchText'];
                    _this.getData();
                }
                if (queryParams['storeId'] !== undefined) {
                    _this.storeId = queryParams['storeId'];
                    _this.searchCriteria.storeId = _this.storeId;
                    _this.searchCriteria.topProperty = 1;
                    _this.getStoresFromCat();
                    _this.getStore();
                }
                if (queryParams['storeCatId'] !== undefined) {
                    _this.storeCatId = queryParams['storeCatId'];
                    _this.searchCritCopy.rooms = 1;
                    _this.searchCritCopy.adults = 1;
                    _this.searchCritCopy.days = 1;
                    _this.searchCritCopy.children = 1;
                    _this.searchCritCopy.checkinDate = new Date();
                    _this.searchCritCopy.checkoutDate = new Date();
                    _this.searchCriteria.topProperty = 1;
                    _this.getStoresFromCat();
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
            _this.viewCol = 100;
        });
    };
    RoomsListComponent.prototype.getStore = function () {
        var _this = this;
        // alert(this.storeId);
        if (this.storeId > 0) {
            this.appService.saveWithUrl('/service/catalog/getStore', { 'type': 'Store', 'id': this.storeId })
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.store = result;
                    _this.translate.get('COMMON.TOP_STORE_PROPERTIES', {
                        STORE_NAME: _this.store.name
                    }).subscribe(function (res) {
                        _this.topPropertiesLabel = res;
                    });
                }
            });
        }
    };
    RoomsListComponent.prototype.setImage = function () {
        if (this.store) {
            if (this.store.storeFrontImage) {
                this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(' +
                    '/assets/images/stores/' + this.store.id + '/' + this.store.storeFrontImage + ')');
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
    RoomsListComponent.prototype.getStoresFromCat = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/hospitality/getBuildings/', this.searchCriteria).subscribe(function (data) {
            _this.buildings = data;
            console.log(_this.buildings);
            if (_this.buildings.length === 1) {
                var bldg = _this.buildings[0];
                _this.router.navigate(['/rooms/detail/'], {
                    queryParams: {
                        storeId: bldg.buildingType === 1 ? bldg.storeId : 0,
                        bdgId: bldg.buildingType === 1 ? 0 : bldg.buildingId,
                        checkinDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(Date.now(), 'yyyy-MM-dd', 'en-US'),
                        checkoutDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(Date.now(), 'yyyy-MM-dd', 'en-US'),
                        rooms: 1,
                        adults: 1,
                        days: 1,
                        children: 1
                    }
                });
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all buildings complete'); });
    };
    RoomsListComponent.prototype.filterCities = function () {
        this.filteredStores = [];
        if (this.stores && this.stores.length > 0) {
            var _loop_1 = function (st) {
                var index = this_1.filteredStores.findIndex(function (tb) { return tb.cityCountryName === st.cityCountryName; });
                console.log(st.cityCountryName + '--' + index);
                if (index === -1) {
                    this_1.filteredStores.push(st);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.stores; _i < _a.length; _i++) {
                var st = _a[_i];
                _loop_1(st);
            }
        }
    };
    // Getting all the product based on the Top Search
    RoomsListComponent.prototype.getRooms = function () {
        var _this = this;
        if (this.selectedStore) {
            this.searchCriteria.storeId = this.selectedStore.id;
        }
        var beginDateStr = new Date(this.searchCriteria.checkinDate.getTime()
            - (this.searchCriteria.checkinDate.getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
        if (this.searchCriteria.beginHr) {
            this.searchCriteria.checkinTS = new Date(beginDateStr + 'T' + this.searchCriteria.beginHr + ':00:00');
        }
        else {
            this.searchCriteria.checkinTS = new Date(beginDateStr + 'T00:00:00');
        }
        if (this.searchCriteria.endHr) {
            this.searchCriteria.checkoutTS = new Date(beginDateStr + 'T' + this.searchCriteria.endHr + ':59:59');
        }
        else {
            var endDateStr = new Date(this.searchCriteria.checkoutDate.getTime()
                - (this.searchCriteria.checkoutDate.getTimezoneOffset() * 60000))
                .toISOString()
                .split('T')[0];
            this.searchCriteria.checkoutTS = new Date(endDateStr + 'T23:59:59');
        }
        this.searchCriteria.languageId = this.appService.appInfoStorage.language.id;
        var diffInMs = Math.abs(this.searchCriteria.checkoutDate.valueOf() - this.searchCriteria.checkinDate.valueOf());
        this.searchCriteria.days = Math.round(diffInMs / (1000 * 60 * 60 * 24)) + 1;
        this.searchCritCopy = __assign({}, this.searchCriteria);
        this.appService.saveWithUrl('/service/hospitality/getRoomsForSale/', this.searchCriteria).subscribe(function (data) {
            // if (data.roomStoreVOs && data.roomStoreVOs.length > 0) {
            _this.applyGridFilter(data);
            // }
            console.log(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getRoomsOnSale complete'); });
    };
    RoomsListComponent.prototype.applyGridFilter = function (data) {
        var _this = this;
        // Make a copy of the backend returned data to avoid going to backend when a filtering is made.
        this.roomList = data;
        this.currentFilteredRoomList = undefined;
        this.translate.get(['COMMON.ALL_CATEGORIES', 'COMMON.ALL_CATEGORIES']).subscribe(function (res) {
            _this.dummyCat = res['COMMON.ALL_CATEGORIES'];
        });
        // Making the category list.
        if (this.roomList && this.roomList.roomTypes) {
            this.roomList.roomTypes.unshift(this.dummyCat);
        }
        this.createDatasource(data.roomStoreVOs);
    };
    RoomsListComponent.prototype.getData = function () {
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
                    _this.getRooms();
                }
            });
        }, function (error) { return console.log(error); }, function () { return console.log('Get Languages complete'); });
    };
    RoomsListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    RoomsListComponent.prototype.applyAllFilter = function () {
        this.firstPagePagination();
        this.createDatasource(this.filterDataBySearchCriteria(this.searchCriteria, this.dummyCat));
        this.resetPagination();
    };
    RoomsListComponent.prototype.getCartPopupResponse = function (response, value) {
        if (response) {
        }
    };
    RoomsListComponent.prototype.addToWishList = function (value) {
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
    RoomsListComponent.prototype.getWishPopupResponse = function (response, value) {
        if (response) {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            ci.quantity = value.quantity;
            this.appService.addToWishlist(ci);
        }
    };
    RoomsListComponent.prototype.transformHits = function (hits) {
        hits.forEach(function (hit) {
            hit.stars = [];
            for (var i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    };
    RoomsListComponent.prototype.changeCount = function (count) {
        this.count = count;
        // this.products.length = 0;
        this.resetPagination();
        this.filterProducts();
    };
    RoomsListComponent.prototype.changeSorting = function (sort) {
        this.sort = sort;
        this.filterProducts();
    };
    RoomsListComponent.prototype.changeViewType = function (obj) {
        if (obj.viewType === 'list') {
            this.changeCount(1);
        }
        else if (this.count === 1) {
            this.changeCount(6);
        }
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    };
    RoomsListComponent.prototype.onPageChange = function (e) {
        this.pagination.page = e.pageIndex + 1;
        this.filterProducts();
        // window.scrollTo(0, 0);
    };
    RoomsListComponent.prototype.resetPagination = function () {
        console.log('resetPagination called');
        this.firstPagePagination();
        this.pagination.totalPages = Math.ceil(this.pagination.total / this.count);
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    };
    RoomsListComponent.prototype.firstPagePagination = function () {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
            this.paginator.firstPage();
        }
    };
    RoomsListComponent.prototype.filterProducts = function () {
        this.createDatasource(this.currentFilteredRoomList && this.currentFilteredRoomList.roomStoreVOs
            ? this.currentFilteredRoomList.roomStoreVOs : this.roomList.roomStoreVOs);
    };
    RoomsListComponent.prototype.searchClicked = function (data) {
        this.searchCriteria.text = data.trim().toLowerCase();
        this.firstPagePagination();
        this.createDatasource(this.filterDataBySearchCriteria(this.searchCriteria, this.dummyCat));
        this.resetPagination();
    };
    RoomsListComponent.prototype.filterDataBySearchCriteria = function (searchCriteria, dummyCat) {
        var filteredData = this.roomList.roomStoreVOs.filter(function (data) {
            var found = true;
            // if (searchCriteria.priceMin && searchCriteria.priceMax) {
            //    if (!(data..price >= searchCriteria.priceMin
            //       && data.price <= searchCriteria.priceMax)) {
            //       found = false;
            //    }
            // } else if (searchCriteria.priceMin && !searchCriteria.priceMax) {
            //    if (!(data.price >= searchCriteria.priceMin)) {
            //       found = false;
            //    }
            // } else if (!searchCriteria.priceMin && searchCriteria.priceMax) {
            //    if (!(data.price <= searchCriteria.priceMax)) {
            //       found = false;
            //    }
            // }
            // if (searchCriteria.roomTypeName) {
            //    if (!(searchCriteria.roomTypeName === data.roomTypeName) &&
            //       searchCriteria.roomTypeName !== dummyCat) {
            //       found = false;
            //    }
            // }
            // if (searchCriteria.text) {
            //    if (!(data.roomTypeName.toLowerCase().indexOf(searchCriteria.text.toLowerCase()) > -1)) {
            //       found = false;
            //    }
            // }
            console.log('Filter Predicate called.');
            return found;
        });
        this.currentFilteredRoomList = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.currentFilteredRoomList.roomStoreVOs = filteredData;
        return filteredData;
    };
    RoomsListComponent.prototype.createDatasource = function (listData) {
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
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](result.data);
        this.pagination = result.pagination;
    };
    RoomsListComponent.prototype.filterData = function (data) {
        return this.appService.filterData(data, this.searchFields, this.sort.code, this.pagination.page, this.pagination.perPage);
    };
    RoomsListComponent.prototype.selectForSaleProduct = function ($event) {
        console.log($event);
    };
    RoomsListComponent.prototype.filterOptions = function (val) {
        if (val) {
            var filterValue = typeof val === 'string' ? val.toLowerCase() : val.name.toLowerCase();
            this.filteredStores = this.stores
                .filter(function (store) {
                /*  store.address.city
                    && store.address.city.toLowerCase().startsWith(filterValue); */
            });
        }
        else {
            this.filteredStores = this.stores;
        }
    };
    RoomsListComponent.prototype.onCheckinDateChange = function (event) {
        this.minCheckoutDate = this.searchCriteria.checkinDate;
        // this.searchCriteria.checkoutDate = undefined;
    };
    RoomsListComponent.prototype.beginHourSelected = function (event) {
        this.END_HOURS = [];
        for (var i = Number(event.value) + 1; i <= 23; i++) {
            this.END_HOURS.push(i <= 9 ? '0' + i : '' + i);
        }
    };
    RoomsListComponent.prototype.sortSelected = function () {
        if (this.sortSelect === 1) {
            this.dataSource.data = this.dataSource.data.sort(function (a, b) {
                if (a.lowestPrice < b.lowestPrice) {
                    return -1;
                }
                else if (a.lowestPrice > b.lowestPrice) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (this.sortSelect === 2) {
            this.dataSource.data = this.dataSource.data.sort(function (a, b) {
                if (a.highestPrice > b.highestPrice) {
                    return -1;
                }
                else if (a.highestPrice < b.highestPrice) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (this.sortSelect === 3) {
            this.dataSource.data = this.appService.sortData('rating', this.dataSource.data);
        }
    };
    RoomsListComponent.prototype.selectStore = function (aStore) {
        this.selectedStore = aStore;
        this.searchCriteria.location = aStore.cityCountryName;
        this.searchCriteria.address = aStore.address;
    };
    RoomsListComponent.prototype.unSelectStore = function () {
        this.selectedStore = undefined;
        this.searchCriteria.storeId = undefined;
        this.searchCriteria.location = undefined;
        this.searchCriteria.address = undefined;
    };
    RoomsListComponent.prototype.searchEventHandler = function (data) {
        this.applyGridFilter(data);
    };
    RoomsListComponent.prototype.isHotel = function (bdg) {
        return bdg.buildingType === 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], RoomsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        __metadata("design:type", Object)
    ], RoomsListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], RoomsListComponent.prototype, "sidenav", void 0);
    RoomsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-list',
            templateUrl: './RoomsList.component.html',
            styleUrls: ['./RoomsList.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RoomsListComponent);
    return RoomsListComponent;
}());



/***/ }),

/***/ 2149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetailComponent", function() { return RoomDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(545);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(493);
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








var RoomDetailComponent = /** @class */ (function (_super) {
    __extends(RoomDetailComponent, _super);
    function RoomDetailComponent(appService, router, translate, mediaObserver, activatedRoute, snackBar) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.router = router;
        _this.translate = translate;
        _this.mediaObserver = mediaObserver;
        _this.activatedRoute = activatedRoute;
        _this.snackBar = snackBar;
        _this.snackMessage = 'Please select a room.';
        _this.addExtraClass = false;
        _this.action = true;
        _this.backgroundColor = '#4c76b2';
        _this.color = '#fff';
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.firstImage = '';
        _this.secondImage = '';
        _this.mainImage = '';
        _this.filesCopy = [];
        _this.fiveImages = [];
        _this.currentLow = 0;
        _this.currentHigh = 0;
        _this.hasError = false;
        _this.hasInvalidDates = false;
        _this.appService.selectedRoomStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        return _this;
    }
    RoomDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('I am here ... ');
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.storeId > 0) {
                _this.searchCriteria.storeId = params.storeId;
            }
            if (params.bdgId > 0) {
                _this.searchCriteria.buildingId = params.bdgId;
            }
            if (params.checkinDate) {
                _this.searchCriteria.checkinDate = new Date(params.checkinDate.substr(0, 4), params.checkinDate.substr(5, 2) - 1, params.checkinDate.substr(8, 2));
            }
            else {
                _this.searchCriteria.checkinDate = new Date();
            }
            if (params.checkoutDate) {
                _this.searchCriteria.checkoutDate = new Date(params.checkoutDate.substr(0, 4), params.checkoutDate.substr(5, 2) - 1, params.checkoutDate.substr(8, 2));
            }
            else {
                _this.searchCriteria.checkoutDate = new Date();
            }
            _this.searchCriteria.rooms = params.rooms ? params.rooms : 1;
            _this.searchCriteria.days = params.days ? params.days : 1;
            _this.searchCriteria.roomTypeName = params.roomTypeName;
            if (params.bdgType) {
                _this.searchCriteria.buildingType = params.bdgType;
            }
            else {
                _this.searchCriteria.buildingType = 0;
            }
            _this.getRoomStore();
        });
    };
    RoomDetailComponent.prototype.getRoomStore = function () {
        var _this = this;
        if (this.searchCriteria.checkinDate > this.searchCriteria.checkoutDate) {
            this.hasInvalidDates = true;
            return;
        }
        var beginDateStr = new Date(this.searchCriteria.checkinDate.getTime())
            .toISOString()
            .split('T')[0];
        if (this.searchCriteria.beginHr) {
            this.searchCriteria.checkinTS = new Date(beginDateStr + 'T' + this.searchCriteria.beginHr + ':00:00');
        }
        else {
            this.searchCriteria.checkinTS = new Date(beginDateStr + 'T00:00:00');
        }
        if (this.searchCriteria.endHr) {
            this.searchCriteria.checkoutTS = new Date(beginDateStr + 'T' + this.searchCriteria.endHr + ':59:59');
        }
        else {
            var endDateStr = new Date(this.searchCriteria.checkoutDate.getTime())
                .toISOString()
                .split('T')[0];
            this.searchCriteria.checkoutTS = new Date(endDateStr + 'T23:59:59');
        }
        this.searchCriteria.languageId = this.appService.appInfoStorage.language.id;
        var diffInMs = Math.abs(this.searchCriteria.checkoutDate.valueOf() - this.searchCriteria.checkinDate.valueOf());
        this.searchCriteria.days = Math.round(diffInMs / (1000 * 60 * 60 * 24)) + 1;
        this.searchCriteria.languageId = this.appService.appInfoStorage.language.id;
        this.searchCriteria.withAmenities = true;
        this.appService.saveWithUrl('/service/hospitality/getRoomsForSale/', this.searchCriteria).subscribe(function (data) {
            if (data.roomStoreVOs && data.roomStoreVOs.length > 0) {
                _this.roomStore = data.roomStoreVOs[0];
                _this.firstImage = _this.roomStore.image1;
                _this.secondImage = _this.roomStore.image2;
                _this.mainImage = _this.roomStore.image;
                console.log(_this.roomStore.fileNames);
                var j = 0;
                if (_this.roomStore.fileNames) {
                    for (var i = 0; i < _this.roomStore.fileNames.length; i++) {
                        if (_this.roomStore.fileNames[i] === _this.roomStore.image
                            || _this.roomStore.fileNames[i] === _this.roomStore.image1
                            || _this.roomStore.fileNames[i] === _this.roomStore.image2
                            || _this.roomStore.fileNames[i] === _this.roomStore.image3) {
                            continue;
                        }
                        else {
                            if (j < 12) {
                                _this.fiveImages.push(_this.roomStore.fileNames[i]);
                            }
                            _this.filesCopy.push(_this.roomStore.fileNames[i]);
                            j++;
                        }
                    }
                }
                _this.currentHigh = _this.filesCopy.length < 10 ? _this.filesCopy.length - 1 : 9;
                // this.setDataSource(this.roomStore.roomTyeVOs);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getRoomsOnSale complete'); });
    };
    RoomDetailComponent.prototype.reserve = function (roomTypeId) {
        console.log('Room Type ID: ' + roomTypeId);
        var reserv = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        reserv.roomTypeIds = [];
        reserv.roomTypeIds.push(roomTypeId);
        reserv.storeId = this.searchCriteria.storeId;
        reserv.languageId = this.appService.appInfoStorage.language.id;
        reserv.userId = Number(this.appService.tokenStorage.getUserId());
        reserv.clientId = Number(this.appService.tokenStorage.getUserId());
        reserv.beginDate = this.searchCriteria.checkinDate;
        reserv.endDate = this.searchCriteria.checkoutDate;
        reserv.firstName = this.appService.tokenStorage.getFirstName();
        reserv.lastName = this.appService.tokenStorage.getLastName();
        reserv.nbrAdult = this.searchCriteria.adults + '';
        reserv.nbrChild = this.searchCriteria.children + '';
        reserv.quantity = this.searchCriteria.rooms;
        reserv.contact = this.appService.tokenStorage.getFirstName() + ' '
            + this.appService.tokenStorage.getLastName();
        reserv.cashier = this.appService.tokenStorage.getFirstName() + ' '
            + this.appService.tokenStorage.getLastName();
        reserv.email = 'test@gmail.com';
        reserv.sex = 'M';
        reserv.comments = 'Reserving Hotel';
        reserv.country = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        reserv.country.id = 228;
        reserv.phone = '888-999-202';
        reserv.idType = 1;
        reserv.idNbr = 'G1203698696';
        reserv.days = this.searchCriteria.days;
        reserv.nbrRooms = this.searchCriteria.rooms;
        this.appService.saveWithUrl('/service/hospitality/reserve/', reserv).subscribe(function () {
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getRoomsOnSale complete'); });
    };
    RoomDetailComponent.prototype.changeImageSrc = function (src) {
        var myImg = document.getElementById('thirdImage');
        myImg.src = src;
        // document.getElementById('thirdImage').src = src;
        document.getElementById('thirdImage')[0].src = src;
    };
    RoomDetailComponent.prototype.previous = function () {
        var j = 0;
        if (this.currentLow <= 0) {
            return;
        }
        var maxI = this.currentLow + 9 > this.filesCopy.length - 1 ? this.filesCopy.length - 1 : this.currentLow + 9;
        for (var i = this.currentLow - 1; i < this.filesCopy.length; i++) {
            this.fiveImages[j] = this.filesCopy[i];
            j++;
            if (j === 12) {
                break;
            }
        }
        if (this.currentLow > 0) {
            this.currentLow--;
        }
        this.currentHigh--;
    };
    RoomDetailComponent.prototype.next = function () {
        var j = 0;
        if (this.currentHigh >= this.filesCopy.length) {
            return;
        }
        var maxI = this.currentLow + 9 > this.filesCopy.length - 1 ? this.filesCopy.length - 1 : this.currentLow + 9;
        for (var i = this.currentLow + 1; i < this.filesCopy.length; i++) {
            this.fiveImages[j] = this.filesCopy[i];
            j++;
            if (j === 12) {
                break;
            }
        }
        this.currentLow++;
        if (this.currentHigh < this.filesCopy.length) {
            this.currentHigh++;
        }
    };
    RoomDetailComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    RoomDetailComponent.prototype.goToCheckout = function () {
        var _this = this;
        if (this.appService.selectedRoomStore.total <= 0) {
            this.translate.get(['MESSAGE.PLEASE_SELECT_A_ROOM']).subscribe(function (res) {
                _this.snackMessage = res['MESSAGE.PLEASE_SELECT_A_ROOM'];
            });
            this.action = false;
            this.hasError = true;
            this.open();
            return;
        }
        if (this.appService.selectedRoomStore.roomTyeVOs.length > 0) {
            this.router.navigate(['/rooms/booking/'], {
                queryParams: {
                    storeId: this.searchCriteria.storeId,
                    checkinDate: this.searchCriteria.checkinDate,
                    checkoutDate: this.searchCriteria.checkoutDate,
                    rooms: this.searchCriteria.rooms,
                    days: this.searchCriteria.days
                }
            });
        }
    };
    RoomDetailComponent.prototype.roomChanged = function () {
        var _this = this;
        this.appService.selectedRoomStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.appService.selectedRoomStore.roomTyeVOs = [];
        this.roomStore.roomTyeVOs.forEach(function (rt) {
            if (rt.nbRooms > 0) {
                rt.total = rt.price * rt.nbRooms * _this.searchCriteria.days;
                _this.appService.selectedRoomStore.total += rt.total;
                _this.appService.selectedRoomStore.nbrRooms += +rt.nbRooms;
                _this.appService.selectedRoomStore.roomTyeVOs.push(rt);
            }
        });
    };
    RoomDetailComponent.prototype.open = function () {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        this.snackBar.open(this.snackMessage, undefined, config);
    };
    RoomDetailComponent.prototype.searchEventHandler = function (data) {
        this.roomStore = data.roomStoreVOs[0];
    };
    RoomDetailComponent.prototype.scroll = function (sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView(); // scroll to a particular element
        }
    };
    RoomDetailComponent.prototype.increaseRoom = function (roomType) {
        roomType.nbRooms++;
        this.roomChanged();
    };
    RoomDetailComponent.prototype.decreaseRoom = function (roomType) {
        roomType.nbRooms--;
        this.roomChanged();
    };
    RoomDetailComponent.prototype.isHotel = function (storeId) {
        return storeId === 0;
    };
    RoomDetailComponent.prototype.reserveFullRental = function () {
        this.roomStore.roomTyeVOs[0].nbRooms++;
        this.roomChanged();
        this.goToCheckout();
    };
    RoomDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-detail',
            templateUrl: './RoomDetail.component.html',
            styleUrls: ['./RoomDetail.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], RoomDetailComponent);
    return RoomDetailComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(545);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(434);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(487);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(493);
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










var BookDetailComponent = /** @class */ (function (_super) {
    __extends(BookDetailComponent, _super);
    function BookDetailComponent(appService, router, translate, mediaObserver, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.router = router;
        _this.translate = translate;
        _this.mediaObserver = mediaObserver;
        _this.activatedRoute = activatedRoute;
        _this.roomsColumns = ['roomTypeName', 'price', 'actions'];
        _this.backgroundColor = '#4c76b2';
        _this.color = '#fff';
        _this.roomStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.reserv = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.step = 1;
        _this.isLogged = false;
        _this.wantToLogin = false;
        _this.continueAsGuest = false;
        _this.forgotPassword = false;
        _this.needToRegister = false;
        _this.booking = false;
        return _this;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booking = false;
        this.appService.getCountries();
        this.copyUserInfo();
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.searchCriteria.storeId = params.storeId;
            _this.searchCriteria.roomTypeId = params.roomTypeId;
            _this.searchCriteria.checkinDate = new Date(params.checkinDate);
            _this.searchCriteria.checkoutDate = new Date(params.checkoutDate);
            _this.searchCriteria.rooms = params.rooms;
            _this.searchCriteria.days = params.days;
            _this.searchCriteria.roomTypeName = params.roomTypeName;
            _this.getRoomStore();
        });
    };
    BookDetailComponent.prototype.getRoomStore = function () {
        var _this = this;
        this.searchCriteria.languageId = this.appService.appInfoStorage.language.id;
        this.searchCriteria.withAmenities = true;
        this.appService.saveWithUrl('/service/hospitality/getRoomsForSale/', this.searchCriteria).subscribe(function (data) {
            if (data.roomStoreVOs && data.roomStoreVOs.length > 0) {
                console.log(data.roomStoreVOs[0]);
                _this.roomStore = data.roomStoreVOs[0];
                _this.roomTypeVO = _this.roomStore.roomTyeVOs[0];
                _this.reserv.currencyCode = _this.roomStore.currencyCode;
                _this.reserv.currencyDecimalPlace = _this.roomStore.currencyDecimalPlace;
                _this.reserv.currencyId = _this.roomStore.currencyId;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getRoomsOnSale complete'); });
    };
    BookDetailComponent.prototype.copyUserInfo = function () {
        if (this.hasLoggedIn()) {
            this.reserv.userId = Number(this.appService.tokenStorage.getUserId());
            this.reserv.firstName = this.appService.tokenStorage.getFirstName();
            this.reserv.lastName = this.appService.tokenStorage.getLastName();
            this.reserv.contact = this.appService.tokenStorage.getFirstName() + ' '
                + this.appService.tokenStorage.getLastName();
            this.reserv.email = this.appService.tokenStorage.getEmail();
            this.reserv.phone = this.appService.tokenStorage.getUser().mobilePhone;
            this.reserv.guestFirstName = this.appService.tokenStorage.getFirstName();
            this.reserv.guestLastName = this.appService.tokenStorage.getLastName();
            this.reserv.guestEmail = this.appService.tokenStorage.getEmail();
        }
    };
    BookDetailComponent.prototype.onForgotPassword = function () {
        this.forgotPassword = true;
        this.wantToLogin = false;
        this.continueAsGuest = false;
    };
    BookDetailComponent.prototype.onSendPassword = function () {
        this.wantToLogin = true;
        this.forgotPassword = false;
        this.continueAsGuest = false;
    };
    BookDetailComponent.prototype.onPymtMethodSelect = function (event) {
        this.step = 3;
        this.reserv.pymtMethodCode = event.paymentMethodCode;
        if (this.reserv.pymtMethodCode === 'CREDIT_CARD') {
            this.reserv.last4Digits = event.last4Digits;
        }
        else if (this.reserv.pymtMethodCode === 'TMONEY') {
            this.reserv.tmoney = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            this.reserv.tmoney.phoneNumber = event.tmoneyPhone;
        }
        else if (this.reserv.pymtMethodCode === 'FLOOZ') {
            this.reserv.flooz = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            this.reserv.flooz.phoneNumber = event.tmoneyPhone;
        }
    };
    BookDetailComponent.prototype.setReserv = function () {
        this.reserv.roomTypeIds = [];
        this.reserv.roomTypeIds.push(this.searchCriteria.roomTypeId);
        this.reserv.storeId = this.searchCriteria.storeId;
        this.reserv.languageId = this.appService.appInfoStorage.language.id;
        this.reserv.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.reserv.language.id = this.appService.appInfoStorage.language.id;
        this.reserv.beginDate = this.searchCriteria.checkinDate;
        this.reserv.endDate = this.searchCriteria.checkoutDate;
        this.reserv.nbrAdult = this.searchCriteria.adults + '';
        this.reserv.nbrChild = this.searchCriteria.children + '';
        this.reserv.quantity = this.searchCriteria.rooms;
        this.reserv.days = this.searchCriteria.days;
        this.reserv.nbrRooms = this.searchCriteria.rooms;
        this.reserv.currencyCode = this.roomStore.currencyCode;
        this.reserv.currencyId = this.roomStore.currencyId;
        this.reserv.roomTypes = this.appService.selectedRoomStore.roomTyeVOs;
    };
    BookDetailComponent.prototype.setDataSource = function (data) {
        this.roomsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
        this.roomsDatasource.paginator = this.roomsPaginator;
        this.roomsDatasource.sort = this.roomsSort;
    };
    BookDetailComponent.prototype.initPaymentMethod = function () {
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
    BookDetailComponent.prototype.handleCardSave = function (event) {
        event.preventDefault();
        this.saveCard(this.data.stripe, this.data.card, this.data.clientSecret);
    };
    BookDetailComponent.prototype.setupElements = function (data) {
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
    /*
    * Collect card details and pay for the order
    */
    BookDetailComponent.prototype.saveCard = function (stripe, card, clientSecret) {
        var _this = this;
        this.errors = '';
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
                _this.reserv.pymtMethodCode = 'CREDIT_CARD';
                _this.reserv.pymtMethodName = 'Credit Card';
                _this.reserv.stripePaymentMethodId = result.paymentMethod.id;
                _this.step = 3;
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
    BookDetailComponent.prototype.book = function (result) {
        var _this = this;
        this.booking = true;
        console.log(result);
        this.setReserv();
        if (result) {
            this.reserv.stripePaymentMethodId = result.paymentMethod.id;
        }
        this.reserv.source = 1;
        this.reserv.rebate = this.reserv.rebate ? this.reserv.rebate : 0.0;
        this.reserv.taxFees = this.reserv.taxFees ? this.reserv.taxFees : 0.0;
        this.reserv.origBeginDate = this.reserv.beginDate;
        this.reserv.origEndDate = this.reserv.endDate;
        this.reserv.offline = 0;
        this.reserv.storeDay = new Date();
        this.reserv.hours = this.reserv.hours ? this.reserv.hours : 0;
        this.appService.saveWithUrl('/service/hospitality/reserve', this.reserv)
            .subscribe(function (savedRes) {
            console.log(savedRes);
            _this.booking = false;
            if (savedRes.errors === null || savedRes.errors.length === 0) {
                if (savedRes.status === 5) {
                    _this.translate.get(['MESSAGE.PAYMENT_UNSUCCESS']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.PAYMENT_UNSUCCESS'];
                    });
                }
                else {
                    _this.step = 3;
                    _this.reserv = savedRes;
                    _this.router.navigate(['/rooms/reservations/' + _this.reserv.id], { queryParams: {} });
                }
            }
            else {
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                });
            }
        });
    };
    BookDetailComponent.prototype.goToStep2 = function () {
        this.step = 2;
        if (this.reserv.pymtMethodCode === 'CREDIT_CARD') {
            this.initPaymentMethod();
        }
    };
    BookDetailComponent.prototype.goToStep1 = function () {
        this.step = 1;
        this.copyUserInfo();
    };
    BookDetailComponent.prototype.hasLoggedIn = function () {
        return this.appService.tokenStorage.getUserId() && Number(this.appService.tokenStorage.getUserId()) > 0;
    };
    BookDetailComponent.prototype.onTogglePmntMethodChange = function ($event) {
        var _this = this;
        this.step = 2;
        this.reserv.pymtMethodCode = $event.value;
        if ($event.value === 'CREDIT_CARD') {
            setTimeout(function () {
                _this.initPaymentMethod();
            }, 0);
        }
    };
    BookDetailComponent.prototype.payAtRegister = function () {
        this.step = 3;
        this.reserv.pymtMethodCode = 'PAY_AT_REGISTER';
        // this.reserv.phone = '';
    };
    BookDetailComponent.prototype.editUserInfo = function () {
        this.step = 1;
    };
    BookDetailComponent.prototype.editPymtInfo = function () {
        this.step = 2;
        this.initPaymentMethod();
    };
    BookDetailComponent.prototype.gotoConfirmation = function () {
        this.step = 3;
    };
    BookDetailComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorRooms', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], BookDetailComponent.prototype, "roomsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], BookDetailComponent.prototype, "roomsSort", void 0);
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            templateUrl: './BookDetail.component.html',
            styleUrls: ['./BookDetail.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["MediaObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookReceiptComponent", function() { return BookReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(545);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(434);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(487);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(493);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(549);
/* harmony import */ var _app_AdminPanel_baseComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1712);
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










var BookReceiptComponent = /** @class */ (function (_super) {
    __extends(BookReceiptComponent, _super);
    function BookReceiptComponent(appService, translate, mediaObserver, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.mediaObserver = mediaObserver;
        _this.activatedRoute = activatedRoute;
        _this.roomsColumns = ['roomTypeName', 'price', 'actions'];
        _this.backgroundColor = '#4c76b2';
        _this.color = '#fff';
        return _this;
    }
    BookReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.reservId) {
                _this.reservId = params.reservId;
                _this.getReserv();
            }
        });
    };
    BookReceiptComponent.prototype.getReserv = function () {
        var _this = this;
        this.messages = '';
        if (this.reservId) {
            this.appService.saveWithUrl("/service/hospitality/reservationWithRooms", { reservationId: this.reservId })
                .subscribe(function (data) {
                if (data && data.length > 0) {
                    _this.reserv = data[0];
                    console.log(_this.reserv);
                    // this.getBillDtls();
                    // const images: any[] = [];
                    // const image = {
                    //   link: 'assets/images/pohdrs/' + this.bill.id + '/' + this.bill.image,
                    //   preview: 'assets/images/pohdrs/' + this.bill.id + '/' + this.bill.image
                    // };
                    // images.push(image);
                    // this.picture = images;
                }
                else {
                    _this.reserv = new _app_models__WEBPACK_IMPORTED_MODULE_8__["ReservationVO"]();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    BookReceiptComponent.prototype.setDataSource = function (data) {
        this.roomsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data);
        this.roomsDatasource.paginator = this.roomsPaginator;
        this.roomsDatasource.sort = this.roomsSort;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorRooms', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], BookReceiptComponent.prototype, "roomsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], BookReceiptComponent.prototype, "roomsSort", void 0);
    BookReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-receipt',
            templateUrl: './BookReceipt.component.html',
            styleUrls: ['./BookReceipt.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["MediaObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BookReceiptComponent);
    return BookReceiptComponent;
}(_app_AdminPanel_baseComponent__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"]));



/***/ }),

/***/ 2152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsSearchComponent", function() { return RoomsSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(493);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(209);
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







var RoomsSearchComponent = /** @class */ (function () {
    function RoomsSearchComponent(appService, translate, mediaObserver, sanitizer, activatedRoute) {
        this.appService = appService;
        this.translate = translate;
        this.mediaObserver = mediaObserver;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.storeCatId = 0;
        this.marketId = 0;
        this.searchText = '0';
        this.storeId = 0;
        this.page = 'list';
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCritCopy = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.minDate = new Date();
        this.minCheckoutDate = new Date();
        this.sortSelect = 1;
        this.running = false;
        this.stores = [];
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonLabel = 'Go';
        this.hasInvalidDates = false;
        this.BEGIN_HOURS = ['00', '01', '03', '04', '05', '06', '07', '08',
            '09', '10', '11', '12', '13', '14', '15', '16', '17', '18',
            '19', '20', '21', '22', '23'];
        this.END_HOURS = ['00', '01', '03', '04', '05', '06', '07', '08', '09',
            '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
            '20', '21', '22', '23'];
    }
    RoomsSearchComponent.prototype.ngOnInit = function () {
        this.activatedRoute.queryParams.subscribe(function (params) {
        });
        this.getLocations();
    };
    // tslint:disable-next-line:use-lifecycle-interface
    RoomsSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.page === 'detail') {
            this.translate.get(['COMMON.CHANGE_SEARCH']).subscribe(function (res) {
                _this.buttonLabel = res['COMMON.CHANGE_SEARCH'];
            });
        }
    };
    RoomsSearchComponent.prototype.getLocations = function () {
        var _this = this;
        this.appService.getObjects('/service/hospitality/buildingLocations/').subscribe(function (data) {
            _this.cities = data;
            _this.filteredCities = _this.cities;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all building locations complete'); });
    };
    // Getting all the product based on the Top Search
    RoomsSearchComponent.prototype.getRooms = function () {
        var _this = this;
        this.running = true;
        this.errors = '';
        if (this.searchCriteria.checkinDate > this.searchCriteria.checkoutDate) {
            this.hasInvalidDates = true;
            this.running = false;
            return;
        }
        if (this.selectedStore) {
            this.searchCriteria.storeId = this.selectedStore.id;
        }
        var beginDateStr = new Date(this.searchCriteria.checkinDate.getTime()
            - (this.searchCriteria.checkinDate.getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
        if (this.searchCriteria.beginHr) {
            this.searchCriteria.checkinTS = new Date(beginDateStr + 'T' + this.searchCriteria.beginHr + ':00:00');
        }
        else {
            this.searchCriteria.checkinTS = new Date(beginDateStr + 'T00:00:00');
        }
        if (this.searchCriteria.endHr) {
            this.searchCriteria.checkoutTS = new Date(beginDateStr + 'T' + this.searchCriteria.endHr + ':59:59');
        }
        else {
            var endDateStr = new Date(this.searchCriteria.checkoutDate.getTime()
                - (this.searchCriteria.checkoutDate.getTimezoneOffset() * 60000))
                .toISOString()
                .split('T')[0];
            this.searchCriteria.checkoutTS = new Date(endDateStr + 'T23:59:59');
        }
        this.searchCriteria.languageId = this.appService.appInfoStorage.language.id;
        var diffInMs = Math.abs(this.searchCriteria.checkoutDate.valueOf() - this.searchCriteria.checkinDate.valueOf());
        this.searchCriteria.days = Math.round(diffInMs / (1000 * 60 * 60 * 24)) + 1;
        this.searchCritCopy = __assign({}, this.searchCriteria);
        this.appService.saveWithUrl('/service/hospitality/getRoomsForSale/', this.searchCriteria).subscribe(function (data) {
            _this.running = false;
            console.log(data);
            if (!data || !data.roomStoreVOs || !(data.roomStoreVOs.length > 0)) {
                _this.errors = '-';
            }
            _this.searchEvent.emit(data);
        }, function (error) {
            console.log(error);
            _this.running = false;
        }, function () {
            console.log('Get all getRoomsOnSale complete');
            _this.running = false;
        });
    };
    RoomsSearchComponent.prototype.onCheckinDateChange = function (event) {
        this.minCheckoutDate = this.searchCriteria.checkinDate;
        // this.searchCriteria.checkoutDate = undefined;
    };
    RoomsSearchComponent.prototype.beginHourSelected = function (event) {
        this.END_HOURS = [];
        for (var i = Number(event.value) + 1; i <= 23; i++) {
            this.END_HOURS.push(i <= 9 ? '0' + i : '' + i);
        }
    };
    RoomsSearchComponent.prototype.selectStore = function (aStore) {
        this.selectedStore = aStore;
        this.searchCriteria.location = aStore.cityCountryName;
        this.searchCriteria.address = aStore.address;
    };
    RoomsSearchComponent.prototype.unSelectStore = function () {
        this.selectedStore = undefined;
        this.searchCriteria.storeId = undefined;
        this.searchCriteria.location = undefined;
        this.searchCriteria.address = undefined;
    };
    RoomsSearchComponent.prototype.filterOptions = function (val) {
        if (val) {
            this.filteredCities = this.cities.filter(function (city) {
                return city.toLowerCase().indexOf(val.toLowerCase()) !== -1;
            });
        }
        else {
            this.filteredCities = this.cities;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomsSearchComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], RoomsSearchComponent.prototype, "searchCriteria", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RoomsSearchComponent.prototype, "stores", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RoomsSearchComponent.prototype, "filteredStores", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RoomsSearchComponent.prototype, "searchEvent", void 0);
    RoomsSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-search',
            templateUrl: './RoomsSearch.component.html',
            styleUrls: ['./RoomsSearch.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoomsSearchComponent);
    return RoomsSearchComponent;
}());



/***/ })

};;