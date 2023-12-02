exports.ids = [3];
exports.modules = {

/***/ 2141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1729);
/* harmony import */ var _Session_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2142);
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(566);
/* harmony import */ var _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(639);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(493);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(440);
/* harmony import */ var _Register_Register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2143);
/* harmony import */ var _SignIn_SignIn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2144);
/* harmony import */ var _ForgotPassword_ForgotPassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2145);
/* harmony import */ var _ThankYou_ThankYou_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2146);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(439);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Session_routing__WEBPACK_IMPORTED_MODULE_4__["SessionRoutes"]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_5__["GlobalModule"],
                _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            declarations: [
                _Register_Register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _SignIn_SignIn_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                _ThankYou_ThankYou_component__WEBPACK_IMPORTED_MODULE_12__["ThankYouComponent"],
                _ForgotPassword_ForgotPassword_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
            ],
            exports: [
                _ForgotPassword_ForgotPassword_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
                _Register_Register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
            ]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ 2142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRoutes", function() { return SessionRoutes; });
/* harmony import */ var _Register_Register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2143);
/* harmony import */ var _SignIn_SignIn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2144);
/* harmony import */ var _ForgotPassword_ForgotPassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2145);
/* harmony import */ var _ThankYou_ThankYou_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2146);




var SessionRoutes = [
    {
        path: '',
        component: _SignIn_SignIn_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"]
    },
    {
        path: 'signin',
        component: _SignIn_SignIn_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"]
    },
    {
        path: 'signup',
        component: _Register_Register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]
    },
    {
        path: 'thank-you',
        component: _ThankYou_ThankYou_component__WEBPACK_IMPORTED_MODULE_3__["ThankYouComponent"]
    },
    {
        path: 'forgot-password',
        component: _ForgotPassword_ForgotPassword_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
    }
];


/***/ }),

/***/ 2143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/token.storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/utils/app-validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, route, tokenStorage, snackBar, translate, appService) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.tokenStorage = tokenStorage;
        this.snackBar = snackBar;
        this.translate = translate;
        this.appService = appService;
        this.hide = true;
        this.error = '';
        this.message = '';
        this.fromPage = '';
        this.verified = false;
        this.pageStatus = 'verify_email';
        this.registerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.route.params.subscribe(function () {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.fromPage = queryParams['fromPage'];
                console.log('from page : ' + _this.fromPage);
            });
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.emailForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/utils/app-validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])],
            confirmEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/utils/app-validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])]
        }, { validator: this.matchingStr('email', 'confirmEmail') });
        this.verificationCodeForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/utils/app-validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])),
            verificationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmVerificationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.matchingStr('verificationCode', 'confirmVerificationCode') });
        this.registerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // userName: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/utils/app-validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])),
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            receiveNewsletter: true
        }, { validator: !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/utils/app-validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('password', 'confirmPassword') });
    };
    RegisterComponent.prototype.onRegisterFormSubmit = function (values) {
        var _this = this;
        this.message = '';
        this.error = '';
        values.email = this.verificationCodeForm.controls.email.value;
        if (this.registerForm.valid) {
            console.log(values);
            var user = values;
            user.type = 'User';
            console.log(user);
            this.appService.saveUserAndLogin(user)
                .subscribe(function (data) {
                if (data.token === 'E') {
                    _this.translate.get(['VALIDATION.EMAIL_USED', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.error = res['VALIDATION.EMAIL_USED'];
                    });
                }
                else if (data.token === 'S') {
                    _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.error = res['MESSAGE.ERROR_OCCURRED'];
                    });
                }
                else {
                    _this.tokenStorage.saveAuthData(data);
                    _this.appService.updateToken();
                    if (_this.registerEvent) {
                        _this.registerEvent.emit(1);
                        return;
                    }
                    if (_this.fromPage === 'checkout') {
                        _this.router.navigate(['/checkout/payment']);
                        return;
                    }
                    if (_this.appService.tokenStorage.getRole() === '1') { // client
                        _this.router.navigate(['/account/profile']);
                    }
                    else if (_this.appService.tokenStorage.getRole() === '2') { // seller
                        _this.router.navigate(['/account/profile']);
                    }
                    else if (_this.appService.tokenStorage.getRole() === '3') { // admin
                        _this.router.navigate(['/admin']);
                    }
                }
            });
        }
    };
    RegisterComponent.prototype.matchingStr = function (str1Key, str2Key) {
        return function (group) {
            var str1 = group.controls[str1Key];
            var str2 = group.controls[str2Key];
            if (str1.value !== str2.value) {
                return str2.setErrors({ mismatchedStrings: true });
            }
        };
    };
    RegisterComponent.prototype.verifyEmail = function (values) {
        var _this = this;
        this.message = '';
        this.error = '';
        values.type = 'EmailVerification';
        var lang = this.appService.navigator.language;
        if (lang) {
            lang = lang.substring(0, 2);
        }
        values.lang = lang;
        console.log(values);
        if (this.emailForm.valid) {
            this.appService.saveWithUrl('/service/user/forgot/registration/verifyEmail', values)
                .subscribe(function (data) {
                if (!data.errors || data.errors.length === 0) {
                    _this.translate.get(['MESSAGE.EMAIL_VERIFICATION_CODE_SENT', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.message = res['MESSAGE.EMAIL_VERIFICATION_CODE_SENT'];
                    });
                    _this.verificationCodeForm.setValue({
                        email: data.email,
                        verificationCode: '',
                        confirmVerificationCode: ''
                    });
                    _this.pageStatus = 'verify_code';
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Verify Email complete'); });
        }
    };
    RegisterComponent.prototype.verifyCode = function (values) {
        var _this = this;
        this.message = '';
        this.error = '';
        var lang = this.appService.navigator.language;
        if (lang) {
            lang = lang.substring(0, 2);
        }
        values.lang = lang;
        values.type = 'EmailVerification';
        values.email = this.emailForm.controls.email.value;
        console.log(values);
        if (this.emailForm.valid) {
            this.appService.saveWithUrl('/service/user/forgot/registration/verifyCode', values)
                .subscribe(function (data) {
                if (!data.errors || data.errors.length === 0) {
                    _this.translate.get(['MESSAGE.EMAIL_VERIFICATION_CODE_SENT', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.message = res['MESSAGE.EMAIL_VERIFICATION_CODE_SENT'];
                    });
                    _this.registerForm.controls.email.setValue(values.email);
                    _this.pageStatus = 'submit_registration';
                }
                else {
                    _this.translate.get(['MESSAGE.INVALID_VERIFICATION_CODE', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.error = res['MESSAGE.INVALID_VERIFICATION_CODE'];
                    });
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Verification code complete'); });
        }
    };
    RegisterComponent.prototype.isVerifyEmail = function () {
        return this.pageStatus === 'verify_email';
    };
    RegisterComponent.prototype.isVerifyCode = function () {
        return this.pageStatus === 'verify_code';
    };
    RegisterComponent.prototype.isSubmitRegistration = function () {
        return this.pageStatus === 'submit_registration';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "registerEvent", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            templateUrl: './Register.component.html',
            styleUrls: ['./Register.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/token.storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ 2144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(translate) {
        this.translate = translate;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sign-in',
            templateUrl: './SignIn.component.html',
            styleUrls: ['./SignIn.component.scss']
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ 2145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/token.storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/utils/app-validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, router, tokenStorage, translate, appService) {
        this.fb = fb;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.translate = translate;
        this.appService = appService;
        this.hide = true;
        this.sendPasswordEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/utils/app-validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])],
        });
    };
    ForgotPasswordComponent.prototype.sendPassword = function (values) {
        var _this = this;
        try {
            console.log(values);
            var user = values;
            user.type = 'User';
            console.log(user);
            if (user.email) {
                this.appService.resetPassword(user)
                    .subscribe(function () {
                    _this.sendPasswordEvent.emit(_this.translate.get(['MESSAGE.PASSWORD_SENT', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.error = res['MESSAGE.PASSWORD_SENT'];
                    }));
                    _this.translate.get(['MESSAGE.PASSWORD_SENT', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.error = res['MESSAGE.PASSWORD_SENT'];
                    });
                });
            }
        }
        catch (e) {
            this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                _this.error = res['MESSAGE.ERROR_OCCURRED'];
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ForgotPasswordComponent.prototype, "sendPasswordEvent", void 0);
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'embryo-ForgotPassword',
            templateUrl: './ForgotPassword.component.html',
            styleUrls: ['./ForgotPassword.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/token.storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ 2146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'embryo-ThankYou',
            templateUrl: './ThankYou.component.html',
            styleUrls: ['./ThankYou.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ })

};;