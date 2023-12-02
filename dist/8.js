exports.ids = [8];
exports.modules = {

/***/ 2170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsModule", function() { return BlogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(493);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(439);
/* harmony import */ var _Blogs_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2171);
/* harmony import */ var _Details_Details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2172);
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(566);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var BlogsModule = /** @class */ (function () {
    function BlogsModule() {
    }
    BlogsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Blogs_routing__WEBPACK_IMPORTED_MODULE_6__["BlogsRoutes"]),
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__["GlobalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [
                _Details_Details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"]
            ]
        })
    ], BlogsModule);
    return BlogsModule;
}());



/***/ }),

/***/ 2171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsRoutes", function() { return BlogsRoutes; });
/* harmony import */ var _Details_Details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2172);

var BlogsRoutes = [
    {
        path: 'detail',
        component: _Details_Details_component__WEBPACK_IMPORTED_MODULE_0__["DetailsComponent"]
    },
    {
        path: 'detail/:id',
        component: _Details_Details_component__WEBPACK_IMPORTED_MODULE_0__["DetailsComponent"]
    }
];


/***/ }),

/***/ 2172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(439);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(545);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(appService, route, router, formGroup) {
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.formGroup = formGroup;
        this.emailPattern = /\S+@\S+\.\S+/;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentForm = this.formGroup.group({
            first_name: [''],
            last_name: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)],
            message: ['']
        });
        this.route.params.subscribe(function (res) {
            _this.blogId = res.id;
            _this.getBlodDetails();
        });
    };
    DetailsComponent.prototype.getBlodDetails = function () {
        var _this = this;
        this.blogId = (this.blogId) ? this.blogId : 1;
        this.appService.getBlogList().valueChanges().
            subscribe(function (res) { _this.getBlogDetailsResponse(res); });
    };
    DetailsComponent.prototype.getBlogDetailsResponse = function (response) {
        for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
            var data = response_1[_i];
            if (data.id == this.blogId) {
                this.blogDetails = data;
                break;
            }
        }
    };
    DetailsComponent.prototype.submitForm = function () {
        this.commentForm.value;
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Details',
            templateUrl: './Details.component.html',
            styleUrls: ['./Details.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ })

};;