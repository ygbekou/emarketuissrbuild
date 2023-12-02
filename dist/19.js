exports.ids = [19];
exports.modules = {

/***/ 2332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalitiesModule", function() { return HospitalitiesModule; });
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
/* harmony import */ var _Amenities_Amenity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2333);
/* harmony import */ var _Amenities_Amenities_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2334);
/* harmony import */ var _Hospitalities_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2335);
/* harmony import */ var _Reservations_Reservations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2336);
/* harmony import */ var _Reservations_ReservationView_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2337);
/* harmony import */ var _Reservations_ReservationHistory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2340);
/* harmony import */ var _Icons_Icons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2338);
/* harmony import */ var _Icons_Icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2339);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var HospitalitiesModule = /** @class */ (function () {
    function HospitalitiesModule() {
    }
    HospitalitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _Amenities_Amenity_component__WEBPACK_IMPORTED_MODULE_10__["AmenityComponent"],
                _Amenities_Amenities_component__WEBPACK_IMPORTED_MODULE_11__["AmenitiesComponent"],
                _Reservations_Reservations_component__WEBPACK_IMPORTED_MODULE_13__["ReservationsComponent"],
                _Reservations_ReservationView_component__WEBPACK_IMPORTED_MODULE_14__["ReservationViewComponent"],
                _Reservations_ReservationHistory_component__WEBPACK_IMPORTED_MODULE_15__["ReservationHistoryComponent"],
                _Icons_Icon_component__WEBPACK_IMPORTED_MODULE_17__["IconComponent"],
                _Icons_Icons_component__WEBPACK_IMPORTED_MODULE_16__["IconsComponent"]
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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Hospitalities_routing__WEBPACK_IMPORTED_MODULE_12__["HospitalitiesRoutes"]),
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
                _Reservations_Reservations_component__WEBPACK_IMPORTED_MODULE_13__["ReservationsComponent"], _Reservations_ReservationView_component__WEBPACK_IMPORTED_MODULE_14__["ReservationViewComponent"]
            ]
        })
    ], HospitalitiesModule);
    return HospitalitiesModule;
}());



/***/ }),

/***/ 2333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityComponent", function() { return AmenityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
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






var AmenityComponent = /** @class */ (function (_super) {
    __extends(AmenityComponent, _super);
    function AmenityComponent(activatedRoute, translate, appService) {
        var _this = _super.call(this, translate) || this;
        _this.activatedRoute = activatedRoute;
        _this.translate = translate;
        _this.appService = appService;
        _this.messages = '';
        _this.formData = new FormData();
        _this.picture = [];
        _this.saving = false;
        _this.justSubmitted = false;
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.AmenityDesc';
        _this.ICON_CLASS_NAME = 'com.softenza.emarket.model.IconDesc';
        _this.amenitySaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    AmenityComponent.prototype.ngOnInit = function () {
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
        this.getIcons();
    };
    AmenityComponent.prototype.clearMessages = function ($event) {
        this.messages = '';
    };
    AmenityComponent.prototype.setAmenity = function ($event) {
        this.amenity = $event;
    };
    AmenityComponent.prototype.clear = function () {
        this.amenity = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.amenity.amenityDescs = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var ad = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            ad.language = lang;
            ad.name = '';
            this.amenity.amenityDescs.push(ad);
        }
    };
    AmenityComponent.prototype.getIcons = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |langCode|' + this.appService.appInfoStorage.language.id + '|Integer');
        parameters.push('e.icon.status = |staCode|1|Integer');
        this.appService.getAllByCriteria(this.ICON_CLASS_NAME, parameters)
            .subscribe(function (data) {
            _this.iconDescs = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all OrderStatus complete'); });
    };
    AmenityComponent.prototype.getDescriptions = function (amenityId) {
        var _this = this;
        this.messages = '';
        var parameters = [];
        if (amenityId != null) {
            parameters.push('e.amenity.id = |amenityId|' + amenityId + '|Integer');
        }
        this.appService.getAllByCriteria(this.CLASS_NAME, parameters)
            .subscribe(function (data) {
            if (data !== null && data.length > 0) {
                _this.amenity = data[0].amenity;
                _this.amenity.amenityDescs = data;
                var images = [];
                var image = {
                    link: 'assets/images/amenities/' + _this.amenity.id + '/' + _this.amenity.image,
                    preview: 'assets/images/amenities/' + _this.amenity.id + '/' + _this.amenity.image
                };
                images.push(image);
                _this.picture = images;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all amenity desc complete'); });
    };
    AmenityComponent.prototype.setToggles = function () {
        this.amenity.status = (this.amenity.status == null
            || this.amenity.status.toString() === 'false'
            || this.amenity.status.toString() === '0') ? 0 : 1;
    };
    AmenityComponent.prototype.cleanDescriptions = function (amenity) {
        amenity.amenityDescs.forEach(function (element) {
            element.amenity = undefined;
            var language = element.language;
            element.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            element.language.id = language.id;
        });
    };
    AmenityComponent.prototype.save = function () {
        var _this = this;
        console.log('Saving Amenity ... ');
        if (this.justSubmitted) {
            this.justSubmitted = false;
            console.log('Just submitted');
            return;
        }
        this.saving = true;
        this.messages = '';
        this.setToggles();
        var thisAmenity = __assign({}, this.amenity);
        this.cleanDescriptions(thisAmenity);
        try {
            this.formData = new FormData();
            if (this.picture && this.picture.length > 0 && this.picture[0].file) {
                this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
            }
            this.appService.saveWithFile(thisAmenity, this.CLASS_NAME, this.formData, 'saveWithFile')
                .subscribe(function (result) {
                _this.processResult(result, _this.amenity, null);
                _this.amenity = __assign({}, result);
                _this.amenitySaveEvent.emit(_this.amenity);
                _this.clear();
                _this.saving = false;
                _this.picture = [];
            }, function (error) {
                _this.saving = false;
                console.log(error);
            }, function () {
                _this.saving = false;
                console.log('Save Amenity complete');
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AmenityComponent.prototype, "amenitySaveEvent", void 0);
    AmenityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amenity',
            templateUrl: './Amenity.component.html',
            styleUrls: ['./Amenity.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], AmenityComponent);
    return AmenityComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesComponent", function() { return AmenitiesComponent; });
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
/* harmony import */ var _Amenity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2333);
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












var AmenitiesComponent = /** @class */ (function (_super) {
    __extends(AmenitiesComponent, _super);
    function AmenitiesComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.amenitiesColumns = ['name', 'desc', 'image', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.Amenity';
        _this.RTD_CLASS_NAME = 'com.softenza.emarket.model.hospitality.AmenityDesc';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.amenityDescs = [];
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        return _this;
    }
    AmenitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.getAmenities();
        this.setDataSource([]);
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    AmenitiesComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
    };
    AmenitiesComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    AmenitiesComponent.prototype.changeOrderType = function (event) {
    };
    AmenitiesComponent.prototype.getAmenities = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |languageId|' + this.appService.appInfoStorage.language.id + '|Integer');
        this.appService.getAllByCriteria(this.RTD_CLASS_NAME, parameters)
            .subscribe(function (data) {
            _this.setDataSource(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get amenity descs for building complete'); });
    };
    AmenitiesComponent.prototype.setDataSource = function (data) {
        this.amenitiesDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.amenitiesDatasource.paginator = this.amenitiesPaginator;
        this.amenitiesDatasource.sort = this.amenitiesSort;
    };
    AmenitiesComponent.prototype.applyFilter = function (filterValue) {
        this.amenitiesDatasource.filter = filterValue.trim().toLowerCase();
        if (this.amenitiesDatasource.paginator) {
            this.amenitiesDatasource.paginator.firstPage();
        }
    };
    AmenitiesComponent.prototype.getAmenityDetails = function (amenityDesc) {
        this.amenityComponent.getDescriptions(amenityDesc.amenity.id);
    };
    AmenitiesComponent.prototype.amenitySaved = function ($event) {
        var _this = this;
        var amenity = $event;
        amenity.amenityDescs.forEach(function (element) {
            if (element.language.id === _this.appService.appInfoStorage.language.id) {
                element.amenity = amenity;
                if (!_this.amenitiesDatasource.data) {
                    _this.amenitiesDatasource.data = [];
                }
                _this.updateDataTable(element);
            }
        });
    };
    AmenitiesComponent.prototype.updateDataTable = function (amenityDesc) {
        this.updateDatasourceData(this.amenitiesDatasource, this.amenitiesPaginator, this.amenitiesSort, amenityDesc);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorAmenities', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AmenitiesComponent.prototype, "amenitiesPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AmenitiesComponent.prototype, "amenitiesSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Amenity_component__WEBPACK_IMPORTED_MODULE_9__["AmenityComponent"], { static: false }),
        __metadata("design:type", _Amenity_component__WEBPACK_IMPORTED_MODULE_9__["AmenityComponent"])
    ], AmenitiesComponent.prototype, "amenityComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AmenitiesComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AmenitiesComponent.prototype, "isAdminPage", void 0);
    AmenitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amenities',
            templateUrl: './Amenities.component.html',
            styleUrls: ['./Amenities.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], AmenitiesComponent);
    return AmenitiesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalitiesRoutes", function() { return HospitalitiesRoutes; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Amenities_Amenities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2334);
/* harmony import */ var _Reservations_Reservations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2336);
/* harmony import */ var _Reservations_ReservationView_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2337);
/* harmony import */ var _Icons_Icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2338);






var HospitalitiesRoutes = [
    {
        path: '',
        redirectTo: 'AmenitiesComponent',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'amenities',
                component: _Amenities_Amenities_component__WEBPACK_IMPORTED_MODULE_1__["AmenitiesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'reservations',
                component: _Reservations_Reservations_component__WEBPACK_IMPORTED_MODULE_2__["ReservationsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'amenities',
                component: _Amenities_Amenities_component__WEBPACK_IMPORTED_MODULE_1__["AmenitiesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'icons',
                component: _Icons_Icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            },
            {
                path: 'reservation-detail/:id',
                component: _Reservations_ReservationView_component__WEBPACK_IMPORTED_MODULE_3__["ReservationViewComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Administrator']
                }
            }
        ]
    }
];


/***/ }),

/***/ 2336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function() { return ReservationsComponent; });
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








var ReservationsComponent = /** @class */ (function (_super) {
    __extends(ReservationsComponent, _super);
    function ReservationsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.onlineReservationsColumns = ['id', 'customer', 'beginDate', 'endDate', 'total', 'city', 'country', 'status'];
        _this.storeReservationsColumns = ['id', 'cashier', 'beginDate', 'endDate', 'total', 'status'];
        _this.messages = '';
        _this.fromAdmin = false;
        _this.button = 'filter';
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.colors = ['primary', 'secondary'];
        _this.stores = [];
        return _this;
    }
    ReservationsComponent.prototype.ngOnInit = function () {
        if (!(this.userId === undefined)) {
            this.fromAdmin = true;
        }
        this.clear();
        this.getStores();
        // this.search();
        this.getOrderStatuses();
    };
    ReservationsComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    ReservationsComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores && _this.stores.length === 1) {
                _this.selectedStore = _this.stores[0];
                _this.storeSelected(_this.selectedStore);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    ReservationsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
        }, 500);
    };
    ReservationsComponent.prototype.clear = function () {
        var oType = this.searchCriteria ? this.searchCriteria.source : 2;
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria.source = oType;
        this.searchCriteria.userId = this.userId;
        this.searchCriteria.langId = this.appService.appInfoStorage.language.id;
    };
    ReservationsComponent.prototype.changeOrderSource = function (event) {
        if (event.index === 0) {
            this.searchCriteria.source = 1;
        }
        if (event.index === 1) {
            this.searchCriteria.source = 2;
        }
        this.search();
    };
    ReservationsComponent.prototype.getOrderStatuses = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |langCode|' + this.appService.appInfoStorage.language.id + '|Integer');
        parameters.push('e.status = |staCode|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.OrderStatus', parameters)
            .subscribe(function (data) {
            _this.orderStatuses = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all OrderStatus complete'); });
    };
    ReservationsComponent.prototype.search = function () {
        var _this = this;
        if (this.searchCriteria.storeId) {
            if (this.button.endsWith('clear')) {
                this.clear();
            }
            else {
                if (this.searchCriteria.source === 1) {
                    this.appService.saveWithUrl('/service/hospitality/onlineReservations', this.searchCriteria)
                        .subscribe(function (data) {
                        _this.onlineDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                        _this.onlineDS.paginator = _this.onlinePG;
                        _this.onlineDS.sort = _this.onlineST;
                    }, function (error) { return console.log(error); }, function () { return console.log('Get online Reservations complete'); });
                }
                else if (this.searchCriteria.source === 2) {
                    this.appService.saveWithUrl('/service/hospitality/storeReservations', this.searchCriteria)
                        .subscribe(function (data) {
                        _this.storeDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                        _this.storeDS.paginator = _this.storePG;
                        _this.storeDS.sort = _this.storeST;
                    }, function (error) { return console.log(error); }, function () { return console.log('Get store Reservations complete'); });
                }
            }
        }
    };
    ReservationsComponent.prototype.applyFilter = function (filterValue) {
        if (this.searchCriteria.source === 1) {
            this.onlineDS.filter = filterValue.trim().toLowerCase();
            if (this.onlineDS.paginator) {
                this.onlineDS.paginator.firstPage();
            }
        }
        else if (this.searchCriteria.source === 2) {
            this.storeDS.filter = filterValue.trim().toLowerCase();
            if (this.storeDS.paginator) {
                this.storeDS.paginator.firstPage();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorO', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReservationsComponent.prototype, "onlinePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReservationsComponent.prototype, "onlineST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorS', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReservationsComponent.prototype, "storePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReservationsComponent.prototype, "storeST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ReservationsComponent.prototype, "userId", void 0);
    ReservationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservations',
            templateUrl: './Reservations.component.html',
            styleUrls: ['./Reservations.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReservationsComponent);
    return ReservationsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationViewComponent", function() { return ReservationViewComponent; });
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










var ReservationViewComponent = /** @class */ (function (_super) {
    __extends(ReservationViewComponent, _super);
    function ReservationViewComponent(appService, translate, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.displayedColumns = ['room', 'price', 'total'];
        _this.displayedTaxesColumns = ['taxes', 'emptyFooter7', 'taxAmount'];
        _this.displayedTotalColumns = ['totalAmountTitle', 'emptyFooter4', 'totalAmount'];
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.constants = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.reservationType = 'r';
        _this.deviceInfo = null;
        _this.canEdit = false;
        _this.saving = false;
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.Reservation';
        _this.RR_CLASS_NAME = 'com.softenza.emarket.model.hospitality.ReservationRoom';
        return _this;
    }
    ReservationViewComponent.prototype.ngOnInit = function () {
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
                _this.reservationType = paramId.charAt(0);
                _this.getReservation(Number(paramId.substring(1)));
            }
        });
    };
    ReservationViewComponent.prototype.setCanEdit = function () {
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
    ReservationViewComponent.prototype.clear = function () {
        this.reservation = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.store.currency = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    ReservationViewComponent.prototype.getStore = function (id) {
        var _this = this;
        var parameters = [];
        parameters.push('e.id = |stta|' + id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.Store', parameters, ' ')
            .subscribe(function (data) {
            _this.store = data[0];
            _this.setCanEdit();
        }, function (error) { return console.log(error); }, function () { return console.log('Get Store complete'); });
    };
    ReservationViewComponent.prototype.getReservation = function (reservationId) {
        var _this = this;
        if (reservationId > 0) {
            this.appService.getOne(reservationId, this.CLASS_NAME)
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.reservation = result;
                    console.log(_this.reservation);
                    _this.getStore(_this.reservation.storeId);
                    _this.getReservationDetails();
                }
                else {
                    _this.reservation = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    ReservationViewComponent.prototype.getReservationDetails = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.reservId = |rId|' + this.reservation.id + '|Integer');
        this.appService.getAllByCriteria(this.RR_CLASS_NAME, parameters)
            .subscribe(function (data) {
            if (data && data.length > 0) {
                _this.reservation.reservationRooms = data;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.reservation.reservationRooms);
                _this.dataSource.paginator = _this.dataSourcePG;
                _this.dataSource.sort = _this.dataSourceST;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Reservation Rooms complete'); });
    };
    ReservationViewComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ReservationViewComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    ReservationViewComponent.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        if (win) {
            win.focus();
        }
    };
    ReservationViewComponent.prototype.generatePdf = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rep;
            var _this = this;
            return __generator(this, function (_a) {
                this.errors = '';
                this.saving = true;
                rep = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                rep.reportFormat = 'pdf';
                rep.reportName = 'hotel_receipt';
                rep.parameters = [];
                rep.parameters.push(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('resvId', this.reservation.id + ''));
                rep.parameters.push(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('storeId', this.reservation.storeId + ''));
                console.log(rep);
                this.appService.saveWithUrl('/service/report/run/', rep)
                    .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log(data);
                        this.saving = false;
                        if (data && data.length > 0 && !data[0].startsWith('ERROR :')) {
                            this.openInNewTab(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).webServer + '/assets/reports/' + data[0]);
                        }
                        else {
                            this.translate.get(['MESSAGE.GOV_ERROR_OCCURRED']).subscribe(function (res) {
                                _this.errors = res['MESSAGE.GOV_ERROR_OCCURRED'] + ' ' + data[0];
                            });
                        }
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                    console.log(error);
                    _this.saving = false;
                }, function () {
                    console.log('generatePdf complete ');
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorO', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReservationViewComponent.prototype, "dataSourcePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReservationViewComponent.prototype, "dataSourceST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ReservationViewComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], ReservationViewComponent.prototype, "reservation", void 0);
    ReservationViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservations-overview',
            templateUrl: './ReservationView.component.html',
            styleUrls: ['./Reservations.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ReservationViewComponent);
    return ReservationViewComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var _Icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2339);
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








var IconsComponent = /** @class */ (function (_super) {
    __extends(IconsComponent, _super);
    function IconsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['code', 'name', 'status', 'actions'];
        _this.messages = '';
        return _this;
    }
    IconsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    IconsComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.code = |langCode|' + this.appService.appInfoStorage.language.code + '|String');
        this.appService.getAllByCriteria('IconDesc', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all IconDesc complete'); });
    };
    IconsComponent.prototype.remove = function (iDesc) {
        var _this = this;
        this.messages = '';
        this.appService.delete(iDesc.icon.id, 'Icon')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(iDesc);
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
    IconsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    IconsComponent.prototype.onSave = function ($event) {
        var _this = this;
        var icon = $event;
        icon.iconDescs.forEach(function (element) {
            if (element.language.id === _this.appService.appInfoStorage.language.id) {
                icon.iconDescs[0].icon = icon;
                if (!_this.dataSource.data) {
                    _this.dataSource.data = [];
                }
                _this.updateDatasourceData(_this.dataSource, _this.paginator, _this.sort, icon.iconDescs[0]);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], { static: false }),
        __metadata("design:type", _Icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"])
    ], IconsComponent.prototype, "iconView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], IconsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], IconsComponent.prototype, "sort", void 0);
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            templateUrl: './Icons.component.html',
            styleUrls: ['./Icons.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], IconsComponent);
    return IconsComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ 2339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
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






var IconComponent = /** @class */ (function (_super) {
    __extends(IconComponent, _super);
    function IconComponent(activatedRoute, translate, appService) {
        var _this = _super.call(this, translate) || this;
        _this.activatedRoute = activatedRoute;
        _this.translate = translate;
        _this.appService = appService;
        _this.messages = '';
        _this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    IconComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ttttttttttttttttttt');
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getDescs(params.id);
            }
        });
    };
    IconComponent.prototype.clearMessages = function ($event) {
        this.messages = '';
    };
    IconComponent.prototype.setIcon = function ($event) {
        this.icon = $event;
    };
    IconComponent.prototype.clear = function () {
        this.icon = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.icon.iconDescs = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var id = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            id.language = lang;
            id.name = '';
            this.icon.iconDescs.push(id);
        }
    };
    IconComponent.prototype.getDescs = function (id) {
        var _this = this;
        this.messages = '';
        var parameters = [];
        if (id != null) {
            parameters.push('e.icon.id = |iconId|' + id + '|Integer');
        }
        this.appService.getAllByCriteria('IconDesc', parameters)
            .subscribe(function (data) {
            if (data !== null && data.length > 0) {
                _this.icon = data[0].icon;
                _this.icon.iconDescs = data;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Icon Description complete'); });
    };
    IconComponent.prototype.setToggles = function () {
        this.icon.status = (this.icon.status == null
            || this.icon.status.toString() === 'false'
            || this.icon.status.toString() === '0') ? 0 : 1;
    };
    IconComponent.prototype.cleanDescs = function (icon) {
        icon.iconDescs.forEach(function (element) {
            element.icon = undefined;
            var language = element.language;
            element.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            element.language.id = language.id;
        });
    };
    IconComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        try {
            this.setToggles();
            var thisIcon = __assign({}, this.icon);
            this.cleanDescs(thisIcon);
            this.appService.save(thisIcon, 'Icon')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.processResult(result, _this.icon, null);
                    _this.icon = __assign({}, result);
                    _this.saveEvent.emit(_this.icon);
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
    ], IconComponent.prototype, "saveEvent", void 0);
    IconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon',
            templateUrl: './Icon.component.html',
            styleUrls: ['./Icons.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], IconComponent);
    return IconComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ 2340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationHistoryComponent", function() { return ReservationHistoryComponent; });
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








var ReservationHistoryComponent = /** @class */ (function (_super) {
    __extends(ReservationHistoryComponent, _super);
    function ReservationHistoryComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['dateAdded', 'user', 'comment', 'status'];
        _this.messages = '';
        _this.errors = '';
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.ReservationHistory';
        _this.reservationHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.canEdit = false;
        return _this;
    }
    ReservationHistoryComponent.prototype.ngOnInit = function () {
        this.reservationHistory.reservation.id = this.reservation.id;
        this.reservationHistory.notify = 1;
        this.getReservationHistories();
    };
    ReservationHistoryComponent.prototype.getReservationHistories = function () {
        var _this = this;
        var parameters = [];
        if (this.reservation.id !== null && this.reservation.id !== undefined) {
            parameters.push('e.reservation.id = |reservationId|' + this.reservation.id + '|Integer');
        }
        this.appService.getAllByCriteria(this.CLASS_NAME, parameters, ' ORDER BY e.createDate DESC')
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.setCanEdit();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all ReservationHistory complete'); });
    };
    ReservationHistoryComponent.prototype.edit = function (reservationHistoryId) {
        var _this = this;
        if (reservationHistoryId > 0) {
            this.appService.getOne(reservationHistoryId, this.CLASS_NAME)
                .subscribe(function (result) {
                if (result) {
                    if (result.id > 0) {
                        _this.reservationHistory = result;
                    }
                    else {
                        _this.reservationHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                        _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                            _this.messages = res['MESSAGE.READ_FAILED'];
                        });
                    }
                }
            });
        }
    };
    ReservationHistoryComponent.prototype.remove = function (reservationHistoryId) {
        var _this = this;
        this.messages = '';
        this.appService.delete(reservationHistoryId, this.CLASS_NAME)
            .subscribe(function (resp) {
            _this.processDataSourceDeleteResult(resp, _this.messages, _this.reservationHistory, _this.dataSource);
        });
    };
    ReservationHistoryComponent.prototype.addNew = function () {
        this.messages = '';
        this.errors = '';
        this.reservationHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.reservationHistory.status = this.reservation.status;
    };
    ReservationHistoryComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        console.log(this.reservationHistory);
        if ((!this.reservationHistory.status || !(this.reservationHistory.status > 0))
            && (!this.reservationHistory.comment || this.reservationHistory.comment.trim() === '')) {
            this.translate.get(['VALIDATION.COMMENT_OR_STATUS', 'COMMON.SUCCESS']).subscribe(function (res) {
                _this.messages = res['VALIDATION.COMMENT_OR_STATUS'];
            });
        }
        else {
            try {
                this.reservationHistory.reservation.id = this.reservation.id;
                this.reservationHistory.user.id = Number(this.appService.tokenStorage.getUserId());
                if (!this.reservationHistory.status || !(this.reservationHistory.status > 0)) {
                    this.reservationHistory.status = this.reservation.status;
                }
                this.setToggleValues();
                this.appService.saveWithUrl('/service/hospitality/saveReservationHistory', this.reservationHistory)
                    .subscribe(function (result) {
                    _this.processResult(result, _this.reservation, null);
                    if (result.id > 0) {
                        _this.reservationHistory.status = _this.reservationHistory.status;
                        _this.reservationHistory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                        window.location.reload();
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
    };
    ReservationHistoryComponent.prototype.setToggleValues = function () {
        this.reservationHistory.notify = (this.reservationHistory.notify === null
            || this.reservationHistory.notify.toString() === 'false'
            || this.reservationHistory.notify.toString() === '0') ? 0 : 1;
    };
    ReservationHistoryComponent.prototype.setCanEdit = function () {
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
    ReservationHistoryComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    ReservationHistoryComponent.prototype.onToggleGroupChange = function (event) {
        console.log(event.value);
        this.reservationHistory.status = event.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReservationHistoryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReservationHistoryComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReservationHistoryComponent.prototype, "reservationType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], ReservationHistoryComponent.prototype, "reservation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ReservationHistoryComponent.prototype, "storeOwnerId", void 0);
    ReservationHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservation-history',
            templateUrl: './ReservationHistory.component.html',
            styleUrls: ['./Reservations.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReservationHistoryComponent);
    return ReservationHistoryComponent;
}(_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ })

};;