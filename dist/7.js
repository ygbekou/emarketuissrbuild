exports.ids = [7];
exports.modules = {

/***/ 2163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(439);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(493);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
/* harmony import */ var _About_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2164);
/* harmony import */ var _AboutUs_AboutUs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2165);
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2166);
/* harmony import */ var _Faq_Faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2167);
/* harmony import */ var _TermAndCondition_TermAndCondition_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2168);
/* harmony import */ var _PrivacyPolicy_PrivacyPolicy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2169);
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(566);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_About_routing__WEBPACK_IMPORTED_MODULE_6__["AboutRoutes"]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_12__["GlobalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _AboutUs_AboutUs_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _Faq_Faq_component__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"],
                _TermAndCondition_TermAndCondition_component__WEBPACK_IMPORTED_MODULE_10__["TermAndConditionComponent"],
                _PrivacyPolicy_PrivacyPolicy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyPolicyComponent"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ 2164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutes", function() { return AboutRoutes; });
/* harmony import */ var _AboutUs_AboutUs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2165);
/* harmony import */ var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2166);
/* harmony import */ var _Faq_Faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var _TermAndCondition_TermAndCondition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2168);
/* harmony import */ var _PrivacyPolicy_PrivacyPolicy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2169);





var AboutRoutes = [
    {
        path: 'about',
        component: _AboutUs_AboutUs_component__WEBPACK_IMPORTED_MODULE_0__["AboutUsComponent"]
    },
    {
        path: 'contact',
        component: _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]
    },
    {
        path: 'faq',
        component: _Faq_Faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]
    },
    {
        path: 'term-condition',
        component: _TermAndCondition_TermAndCondition_component__WEBPACK_IMPORTED_MODULE_3__["TermAndConditionComponent"]
    },
    {
        path: 'privacy-policy',
        component: _PrivacyPolicy_PrivacyPolicy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyComponent"]
    }
];


/***/ }),

/***/ 2165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(appService) {
        this.appService = appService;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.getAboutInfo();
        this.getMissionVision();
        this.getTestimonialData();
        this.getTeamData();
    };
    AboutUsComponent.prototype.getAboutInfo = function () {
        var _this = this;
        this.appService.getAboutInfo().valueChanges().subscribe(function (res) { _this.aboutInfo = res; });
    };
    AboutUsComponent.prototype.getMissionVision = function () {
        var _this = this;
        this.appService.getMissionVision().valueChanges().subscribe(function (res) { _this.missionVisionData = res; });
    };
    AboutUsComponent.prototype.getTeamData = function () {
        var _this = this;
        this.appService.getTeam().valueChanges().subscribe(function (res) { _this.teamData = res; });
    };
    AboutUsComponent.prototype.getTestimonialData = function () {
        var _this = this;
        this.appService.getTestimonial().valueChanges().subscribe(function (res) { _this.testimonialData = res; });
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-AboutUs',
            templateUrl: './AboutUs.component.html',
            styleUrls: ['./AboutUs.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ 2166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.appService.getContactInfo().valueChanges().subscribe(function (res) { _this.contactInfo = res; });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            templateUrl: './Contact.component.html',
            styleUrls: ['./Contact.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ 2167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = /** @class */ (function () {
    function FaqComponent(appService) {
        this.appService = appService;
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getFaq().valueChanges().subscribe(function (res) { _this.faqData = res; });
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Faq',
            templateUrl: './Faq.component.html',
            styleUrls: ['./Faq.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ 2168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermAndConditionComponent", function() { return TermAndConditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermAndConditionComponent = /** @class */ (function () {
    function TermAndConditionComponent(appService) {
        this.appService = appService;
    }
    TermAndConditionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getTermCondition().valueChanges().subscribe(function (res) { _this.termContions = res; });
    };
    TermAndConditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-TermAndCondition',
            templateUrl: './TermAndCondition.component.html',
            styleUrls: ['./TermAndCondition.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], TermAndConditionComponent);
    return TermAndConditionComponent;
}());



/***/ }),

/***/ 2169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(appService) {
        this.appService = appService;
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getPrivacyPolicy().valueChanges().subscribe(function (res) { _this.privacyPolicyData = res; });
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-PrivacyPolicy',
            templateUrl: './PrivacyPolicy.component.html',
            styleUrls: ['./PrivacyPolicy.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ })

};;