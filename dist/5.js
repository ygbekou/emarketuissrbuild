exports.ids = [5];
exports.modules = {

/***/ 2153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(439);
/* harmony import */ var ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1715);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(493);
/* harmony import */ var _Checkout_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2154);
/* harmony import */ var _Payment_Payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2156);
/* harmony import */ var _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2155);
/* harmony import */ var _FinalReceipt_FinalReceipt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2161);
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(566);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(434);
/* harmony import */ var _Cart_Cart_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1714);
/* harmony import */ var _Payment_PaymentCurrency_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2157);
/* harmony import */ var _Payment_PaymentDeliveryStepper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2162);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Checkout_routing__WEBPACK_IMPORTED_MODULE_7__["CheckoutRoutes"]),
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_11__["GlobalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"],
                ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                _Cart_Cart_module__WEBPACK_IMPORTED_MODULE_13__["CartModule"]
            ],
            declarations: [
                _Payment_Payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"],
                _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"],
                _FinalReceipt_FinalReceipt_component__WEBPACK_IMPORTED_MODULE_10__["FinalReceiptComponent"],
                _Payment_PaymentCurrency_component__WEBPACK_IMPORTED_MODULE_14__["PaymentCurrencyComponent"],
                _Payment_PaymentDeliveryStepper_component__WEBPACK_IMPORTED_MODULE_15__["PaymentDeliveryStepper"]
            ]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());



/***/ }),

/***/ 2154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutRoutes", function() { return CheckoutRoutes; });
/* harmony import */ var _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2155);
/* harmony import */ var _Payment_Payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2156);
/* harmony import */ var _FinalReceipt_FinalReceipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2161);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/PaymentChangeModel/PaymentChangeModel.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/PaymentChangeAddress/PaymentChangeAddress.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var CheckoutRoutes = [
    {
        path: '',
        component: _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"]
    },
    {
        path: 'signin',
        component: _Signin_Signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"]
    },
    {
        path: 'payment',
        component: _Payment_Payment_component__WEBPACK_IMPORTED_MODULE_1__["PaymentComponent"]
    },
    {
        path: 'cards',
        component: !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/PaymentChangeModel/PaymentChangeModel.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        path: 'addresses',
        component: !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/PaymentChangeAddress/PaymentChangeAddress.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        path: 'final-receipt',
        component: _FinalReceipt_FinalReceipt_component__WEBPACK_IMPORTED_MODULE_2__["FinalReceiptComponent"]
    }
];


/***/ }),

/***/ 2155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        if (this.appService.tokenStorage.getUserId() != null) {
            this.router.navigate(['/checkout/payment']);
        }
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.toggleRightSidenav = function () {
        this.appService.paymentSidenavOpen = !this.appService.paymentSidenavOpen;
    };
    SigninComponent.prototype.getCartProducts = function () {
        var total = 0;
        if (this.appService.localStorageCartProducts && this.appService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.appService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                total += (product.price * product.quantity);
            }
            total += (this.appService.shipping + this.appService.tax);
            return total;
        }
        return total;
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Signin',
            templateUrl: './Signin.component.html',
            styleUrls: ['./Signin.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ 2156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _PaymentCurrency_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2157);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(appService, router, translate, activatedRoute) {
        this.appService = appService;
        this.router = router;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.step = 0;
        this.isDisabledPaymentStepTwo = true;
        this.isDisabledPaymentStepThree = false;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.appService.removeBuyProducts();
        this.user.shippingAddress = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.user.billingAddress = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.user.creditCard = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.getUser(Number(this.appService.tokenStorage.getUserId()));
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.deliveryMode = localStorage.getItem('deliveryMode');
        if (!this.deliveryMode) {
            this.deliveryMode = '0';
            this.deliveryOptionChange(null);
        }
        console.log('Payment init called');
        this.appService.recalculateCart(true);
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
    };
    PaymentComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.appService.getOneWithChildsAndFiles(userId, 'User')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.user = result;
                if (_this.user.paymentMethodCode === 'CREDIT_CARD') {
                    _this.appService.getObject('/service/order/customer/' + userId + '/active_card')
                        .subscribe(function (data) {
                        _this.user.creditCard = data;
                        _this.setAllStepDone();
                        _this.redirectToUserInfo();
                    }, function (error) { return console.log(error); }, function () { return console.log('Get user active CreditCard complete for userId=' + userId); });
                }
                else {
                    // this.processPaymentConfirmation();
                    _this.setAllStepDone();
                    _this.redirectToUserInfo();
                }
            }
            else {
                _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                    _this.error = res['MESSAGE.READ_FAILED'];
                });
            }
        });
    };
    PaymentComponent.prototype.isUserLoggedIn = function () {
        return this.appService.tokenStorage.getUserId() !== null;
    };
    PaymentComponent.prototype.updateOrder = function (order) {
        var _this = this;
        this.order = order;
        this.message = '';
        console.log(this.appService.localStorageCartProducts);
        if (this.appService.localStorageCartProducts
            && this.appService.localStorageCartProducts.length > 1) {
            console.log('more products?');
            this.translate.get('MESSAGE.PARTIAL_ORDER_SUCCESS', { storeName: order.storeName }).subscribe(function (res) {
                _this.message = res;
            });
        }
    };
    PaymentComponent.prototype.setAllStepDone = function () {
        if (this.deliveryMode === '1') {
            this.allStepDone = this.user.shippingAddress && this.user.shippingAddress.id
                && this.user.billingAddress && this.user.billingAddress.id
                && ((this.user.creditCard !== null && this.user.creditCard.stripePaymentMethodId !== null)
                    || (this.user.tmoney !== null && this.user.tmoney.id > 0)
                    || (this.user.flooz !== null && this.user.flooz.id > 0));
        }
        else if (this.deliveryMode === '0') {
            this.allStepDone = this.user.billingAddress && this.user.billingAddress.id
                && ((this.user.creditCard !== null && this.user.creditCard.stripePaymentMethodId !== null)
                    || (this.user.tmoney !== null && this.user.tmoney.id > 0)
                    || (this.user.flooz !== null && this.user.flooz.id > 0));
        }
        // this.deliveryMode = deliveryInfo.deliveryMode;
    };
    PaymentComponent.prototype.deliveryOptionChange = function (event) {
        localStorage.setItem('deliveryMode', this.deliveryMode);
    };
    PaymentComponent.prototype.redirectToUserInfo = function () {
        if (this.deliveryMode && !this.user.shippingAddress && !this.user.billingAddress) {
            this.router.navigate(['/checkout/addresses'], { queryParams: { addressType: 0, fromPage: 'checkout' } });
        }
        else if (this.deliveryMode === '0' && !this.user.shippingAddress) {
            this.router.navigate(['/checkout/addresses'], { queryParams: { addressType: 1, fromPage: 'checkout' } });
        }
        else if (this.deliveryMode && !this.user.billingAddress) {
            this.router.navigate(['/checkout/addresses'], { queryParams: { addressType: 2, fromPage: 'checkout' } });
        }
        else if (this.deliveryMode && ((this.user.creditCard === null || !this.user.creditCard.stripePaymentMethodId)
            && (this.user.tmoney === null || this.user.tmoney.id <= 0)
            && (this.user.flooz === null || this.user.flooz.id <= 0))) {
            this.router.navigate(['/checkout/cards'], { queryParams: { fromPage: 'checkout' } });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_PaymentCurrency_component__WEBPACK_IMPORTED_MODULE_5__["PaymentCurrencyComponent"], { static: false }),
        __metadata("design:type", _PaymentCurrency_component__WEBPACK_IMPORTED_MODULE_5__["PaymentCurrencyComponent"])
    ], PaymentComponent.prototype, "paymentCurrencyComponent", void 0);
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Payment',
            templateUrl: './Payment.component.html',
            styleUrls: ['./Payment.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ 2157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCurrencyComponent", function() { return PaymentCurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2158);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Cart_Cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(564);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PaymentCurrencyComponent = /** @class */ (function () {
    function PaymentCurrencyComponent(appService, router, translate, datePipe) {
        this.appService = appService;
        this.router = router;
        this.translate = translate;
        this.datePipe = datePipe;
        this.step = 0;
        this.isDisabledPaymentStepTwo = true;
        this.isDisabledPaymentStepThree = false;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.notify = false;
        this.order = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.allStepDone = false;
        this.orderCompleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.timePeriodMap = new Map();
        this.payCash = false;
    }
    PaymentCurrencyComponent.prototype.ngOnInit = function () {
        this.processPaymentConfirmation();
        this.error = '';
        if (!this.order) {
            this.order = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        }
        this.appService.navbarCartDeliveryMap[this.storeId] = localStorage.getItem('deliveryMode');
        this.getStore();
    };
    PaymentCurrencyComponent.prototype.ngAfterViewInit = function () {
        this.minutes = ['00', '15', '30', '45'];
    };
    PaymentCurrencyComponent.prototype.getStore = function () {
        var _this = this;
        if (this.storeId > 0) {
            this.appService.getOne(this.storeId, 'Store')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.store = result;
                    if (_this.pickUp === '1') {
                        _this.isStoreOpen();
                    }
                    else {
                        _this.getZoneToGeoZone();
                    }
                    _this.validatePaymentMethodAndCurrency();
                }
            });
        }
    };
    PaymentCurrencyComponent.prototype.validatePaymentMethodAndCurrency = function () {
        var _this = this;
        this.appService.navbarCartStorePayCash[this.store.id] = this.payCash;
        this.paymentMethodError = '';
        if (!this.payCash && this.store.currency.code !== 'XOF'
            && (this.user.paymentMethodCode === 'TMONEY' || this.user.paymentMethodCode === 'FLOOZ')) {
            this.translate.get('MESSAGE.INVALID_PAYMENT_METHOD', {
                payment_method: this.user.paymentMethodCode,
                currency_code: this.store.currency.title
            }).subscribe(function (res) {
                _this.paymentMethodError = res;
            });
        }
    };
    PaymentCurrencyComponent.prototype.getDates = function () {
        this.minScheduleDate = new Date(this.nextOpenDateTime);
        this.maxScheduleDate = new Date(this.nextOpenDateTime);
        this.maxScheduleDate.setDate(this.maxScheduleDate.getDate() + 7);
        if (!this.order.preorderDate) {
            this.order.preorderDate = this.minScheduleDate;
        }
        this.getHours();
    };
    PaymentCurrencyComponent.prototype.getHours = function () {
        this.hours = [];
        // const dayNumber = this.order.preorderDate.getDay();
        // let openTime = null;
        // let closeTime = null;
        // if (this.pickUp === '0') {
        //   openTime = JSON.parse(JSON.stringify(this.zoneToGeoZone.geoZone))['delStart' + dayNumber];
        //   closeTime = JSON.parse(JSON.stringify(this.zoneToGeoZone.geoZone))['delEnd' + dayNumber];
        // } else {
        //   openTime = JSON.parse(JSON.stringify(this.store))['openTime' + dayNumber];
        //   closeTime = JSON.parse(JSON.stringify(this.store))['closeTime' + dayNumber];
        // }
        // let openHour = this.storeOpen || this.deliveryOpen ? new Date().getHours() : openTime.split(':')[0];
        // const closeHour = closeTime.split(':')[0];
        // if (!this.storeOpen && !this.deliveryOpen && this.minScheduleDate.getDate() === this.order.preorderDate.getDate()) {
        //   openHour = this.nextOpenDateTime.getHours();
        // }
        var openHour = 0;
        var closeHour = 24;
        var j = 0;
        for (var i = openHour; i < closeHour; i++) {
            this.hours[j] = Number(i);
            j++;
        }
        this.hours.sort(function (a, b) { return a - b; });
    };
    PaymentCurrencyComponent.prototype.isStoreOpen = function () {
        var _this = this;
        console.log(this.store);
        console.log(this.store.timeZone);
        this.nextOpenDateTime = undefined;
        this.nextCloseDateTime = undefined;
        this.storeOpen = false;
        var newDay = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
        var dayNumber = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()(newDay, null).tz(this.store.timeZone.name).format('YYYY-MM-DD HH:mm')).getDay();
        var openTime = JSON.parse(JSON.stringify(this.store))['openTime' + dayNumber];
        var closeTime = JSON.parse(JSON.stringify(this.store))['closeTime' + dayNumber];
        var nextDayNumber = dayNumber === 6 ? 0 : dayNumber + 1;
        var nextOpenTime = null;
        var nextCloseTime = null;
        var iterCount = 0;
        for (var i = 0; i <= 6; i++) {
            iterCount++;
            console.log('i= ' + i + ', iterCount =' + iterCount + ', nextDayNumber =' + nextDayNumber);
            nextOpenTime = JSON.parse(JSON.stringify(this.store))['openTime' + nextDayNumber];
            nextCloseTime = JSON.parse(JSON.stringify(this.store))['closeTime' + nextDayNumber];
            if (nextOpenTime != null && nextOpenTime.length >= 3 &&
                nextCloseTime !== null && nextCloseTime.length >= 3) {
                break;
            }
            else {
                nextDayNumber += i;
                nextDayNumber = nextDayNumber === 7 ? 0 : nextDayNumber;
            }
        }
        var now = new Date();
        this.openLater = false;
        var openDateTime = null;
        var closeDateTime = null;
        if (openTime != null && openTime.length >= 3 &&
            closeTime !== null && closeTime.length >= 3) {
            var newDay1 = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
            var today = this.datePipe.transform(new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()(newDay1, null).tz(this.store.timeZone.name).format('YYYY-MM-DD HH:mm')), 'yyyy-MM-dd ');
            openDateTime = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default.a.tz(today + openTime, this.store.timeZone.name).format());
            closeDateTime = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default.a.tz(today + closeTime, this.store.timeZone.name).format());
            if (openDateTime.getTime() <= now.getTime() && now.getTime() <= closeDateTime.getTime()) {
                this.storeOpen = true;
                this.nextOpenDateTime = openDateTime;
                this.nextCloseDateTime = closeDateTime;
            }
            if (now.getTime() < closeDateTime.getTime() && now.getTime() < openDateTime.getTime()) {
                this.openLater = true;
                this.nextOpenDateTime = openDateTime;
                this.nextCloseDateTime = closeDateTime;
            }
            console.log('openDateTime = ' + openDateTime);
            console.log('closeDateTime = ' + closeDateTime);
        }
        console.log('nextOpenDateTime = ' + nextOpenTime);
        console.log('nextCloseDateTime = ' + nextCloseTime);
        if (nextOpenTime != null && nextOpenTime.length >= 3 &&
            nextCloseTime !== null && nextCloseTime.length >= 3) {
            var newDay2 = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
            var tomorrow = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()(newDay2, null).tz(this.store.timeZone.name).format('YYYY-MM-DD HH:mm'));
            tomorrow.setDate(tomorrow.getDate() + iterCount);
            var tomorrowD = this.datePipe.transform(tomorrow, 'yyyy-MM-dd ');
            var nextOpenDateTime_1 = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default.a.tz(tomorrowD + nextOpenTime, this.store.timeZone.name).format());
            var nextCloseDateTime_1 = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default.a.tz(tomorrowD + nextCloseTime, this.store.timeZone.name).format());
            if (!this.storeOpen) {
                if (this.openLater) {
                    // same day
                    this.translate.get('MESSAGE.STORE_CLOSED1', {
                        store_name: this.appService.navbarCartCurrencyMap[this.storeId].storeName,
                        open_time: this.datePipe.transform(openDateTime, 'HH:mm'),
                        close_time: this.datePipe.transform(closeDateTime, 'HH:mm'),
                    }).subscribe(function (res) {
                        _this.storeHoursMessage = res;
                        console.log(_this.storeHoursMessage);
                    });
                }
                else if (iterCount === 1) {
                    this.translate.get('MESSAGE.STORE_CLOSED', {
                        store_name: this.appService.navbarCartCurrencyMap[this.storeId].storeName,
                        open_time: this.datePipe.transform(nextOpenDateTime_1, 'HH:mm'),
                        close_time: this.datePipe.transform(nextCloseDateTime_1, 'HH:mm'),
                    }).subscribe(function (res) {
                        _this.storeHoursMessage = res;
                        console.log(_this.storeHoursMessage);
                    });
                    this.nextOpenDateTime = nextOpenDateTime_1;
                    this.nextCloseDateTime = nextCloseDateTime_1;
                }
                else {
                    this.translate.get('WEEKDAYLONG.' + nextDayNumber).subscribe(function (res1) {
                        _this.translate.get('MESSAGE.STORE_CLOSED2', {
                            store_name: _this.appService.navbarCartCurrencyMap[_this.storeId].storeName,
                            open_time: _this.datePipe.transform(nextOpenDateTime_1, 'HH:mm'),
                            close_time: _this.datePipe.transform(nextCloseDateTime_1, 'HH:mm'),
                            day: res1,
                        }).subscribe(function (res) {
                            _this.storeHoursMessage = res;
                            console.log(_this.storeHoursMessage);
                        });
                    });
                    this.nextOpenDateTime = nextOpenDateTime_1;
                    this.nextCloseDateTime = nextCloseDateTime_1;
                }
            }
        }
        else {
            this.purchasePossible = false;
            this.translate.get('MESSAGE.STORE_PICKUP_NOT_AVAILABLE', { store_name: this.appService.navbarCartCurrencyMap[this.storeId].storeName }).subscribe(function (res) {
                _this.error = res;
            });
        }
        this.disableForStoreClose();
    };
    PaymentCurrencyComponent.prototype.isDeliveryOpen = function () {
        var _this = this;
        this.nextOpenDateTime = undefined;
        this.nextCloseDateTime = undefined;
        this.deliveryOpen = false;
        var newDay = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
        var dayNumber = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()(newDay, null).tz(this.store.timeZone.name).format('YYYY-MM-DD HH:mm')).getDay();
        var openTime = JSON.parse(JSON.stringify(this.zoneToGeoZone.geoZone))['delStart' + dayNumber];
        var closeTime = JSON.parse(JSON.stringify(this.zoneToGeoZone.geoZone))['delEnd' + dayNumber];
        var nextDayNumber = dayNumber === 6 ? 0 : dayNumber + 1;
        var nextOpenTime = null;
        var nextCloseTime = null;
        var iterCount = 0;
        for (var i = 0; i <= 6; i++) {
            iterCount++;
            console.log('i= ' + i + ', iterCount =' + iterCount + ', nextDayNumber =' + nextDayNumber);
            nextOpenTime = JSON.parse(JSON.stringify(this.zoneToGeoZone.geoZone))['delStart' + nextDayNumber];
            nextCloseTime = JSON.parse(JSON.stringify(this.zoneToGeoZone.geoZone))['delEnd' + nextDayNumber];
            if (nextOpenTime != null && nextOpenTime.length >= 3 &&
                nextCloseTime !== null && nextCloseTime.length >= 3) {
                break;
            }
            else {
                nextDayNumber += i;
                nextDayNumber = nextDayNumber === 7 ? 0 : nextDayNumber;
            }
        }
        var now = new Date();
        this.openLater = false;
        var openDateTime = null;
        var closeDateTime = null;
        if (openTime != null && openTime.length >= 3 &&
            closeTime !== null && closeTime.length >= 3) {
            var newDay1 = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
            var today = this.datePipe.transform(new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()(newDay1, null).tz(this.store.timeZone.name).format('YYYY-MM-DD HH:mm')), 'yyyy-MM-dd ');
            openDateTime = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default.a.tz(today + openTime, this.store.timeZone.name).format());
            closeDateTime = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default.a.tz(today + closeTime, this.store.timeZone.name).format());
            if (openDateTime.getTime() <= now.getTime() && now.getTime() <= closeDateTime.getTime()) {
                this.deliveryOpen = true;
                this.nextOpenDateTime = openDateTime;
                this.nextCloseDateTime = closeDateTime;
            }
            if (now.getTime() < closeDateTime.getTime() && now.getTime() < openDateTime.getTime()) {
                this.openLater = true;
                this.nextOpenDateTime = openDateTime;
                this.nextCloseDateTime = closeDateTime;
            }
        }
        if (nextOpenTime != null && nextOpenTime.length >= 3 &&
            nextCloseTime !== null && nextCloseTime.length >= 3) {
            var newDay2 = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
            var tomorrow = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()(newDay2, null).tz(this.store.timeZone.name).format('YYYY-MM-DD HH:mm'));
            tomorrow.setDate(tomorrow.getDate() + iterCount);
            var tomorrowD = this.datePipe.transform(tomorrow, 'yyyy-MM-dd ');
            var nextOpenDateTime_2 = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default.a.tz(tomorrowD + nextOpenTime, this.store.timeZone.name).format());
            var nextCloseDateTime_2 = new Date(moment_timezone__WEBPACK_IMPORTED_MODULE_6___default.a.tz(tomorrowD + nextCloseTime, this.store.timeZone.name).format());
            if (!this.deliveryOpen) {
                console.log(this.datePipe.transform(now, 'yyyy-MM-dd'));
                console.log(this.datePipe.transform(nextOpenDateTime_2, 'yyyy-MM-dd'));
                if (this.openLater) {
                    // same day
                    this.translate.get('MESSAGE.NO_DELIVERY_PERIOD1', {
                        store_name: this.appService.navbarCartCurrencyMap[this.storeId].storeName,
                        open_time: this.datePipe.transform(openDateTime, 'HH:mm'),
                        close_time: this.datePipe.transform(closeDateTime, 'HH:mm'),
                    }).subscribe(function (res) {
                        _this.storeHoursMessage = res;
                        console.log(_this.storeHoursMessage);
                    });
                }
                else if (iterCount === 1) {
                    this.translate.get('MESSAGE.NO_DELIVERY_PERIOD', {
                        store_name: this.appService.navbarCartCurrencyMap[this.storeId].storeName,
                        open_time: this.datePipe.transform(nextOpenDateTime_2, 'HH:mm'),
                        close_time: this.datePipe.transform(nextCloseDateTime_2, 'HH:mm'),
                    }).subscribe(function (res) {
                        _this.storeHoursMessage = res;
                        console.log(_this.storeHoursMessage);
                    });
                    this.nextOpenDateTime = nextOpenDateTime_2;
                    this.nextCloseDateTime = nextCloseDateTime_2;
                }
                else {
                    this.translate.get('WEEKDAYLONG.' + nextDayNumber).subscribe(function (res1) {
                        _this.translate.get('MESSAGE.NO_DELIVERY_PERIOD2', {
                            store_name: _this.appService.navbarCartCurrencyMap[_this.storeId].storeName,
                            open_time: _this.datePipe.transform(nextOpenDateTime_2, 'HH:mm'),
                            close_time: _this.datePipe.transform(nextCloseDateTime_2, 'HH:mm'),
                            day: res1,
                        }).subscribe(function (res) {
                            _this.storeHoursMessage = res;
                            console.log(_this.storeHoursMessage);
                        });
                    });
                    this.nextOpenDateTime = nextOpenDateTime_2;
                    this.nextCloseDateTime = nextCloseDateTime_2;
                }
            }
        }
        else {
            console.log('purchase possible');
            this.purchasePossible = true;
            this.deliveryOpen = true;
            /* this.translate.get('MESSAGE.STORE_DOESNOT_SHIP_TO_ADDRESS',
               { store_name: this.appService.navbarCartCurrencyMap[this.storeId].storeName }).subscribe((res) => {
                  this.error = res;
               }); */
        }
        this.disableForStoreClose();
    };
    PaymentCurrencyComponent.prototype.getZoneToGeoZone = function () {
        var _this = this;
        if (this.user.shippingAddress && this.user.shippingAddress.zone) {
            console.log('Calling Geozone for Store id: ' + this.storeId + ' and Shipping Address id ' + this.user.shippingAddress.zone.id);
            this.appService.saveWithUrl('/service/order/getZoneToGeoZone/', {
                'storeId': this.storeId,
                'zoneId': this.user.shippingAddress.zone.id,
                'countryId': this.user.shippingAddress.country.id
            })
                .subscribe(function (data) {
                if (data !== null && data.errors !== null && data.errors !== undefined) {
                    _this.error = data.errors[0];
                }
                else {
                    _this.zoneToGeoZone = data;
                    _this.appService.navbarCartShippingGeoZoneMap[_this.storeId] = _this.zoneToGeoZone;
                    console.log(_this.zoneToGeoZone);
                    if (data === null) {
                        _this.translate.get('MESSAGE.STORE_DOESNOT_SHIP_TO_ADDRESS', { store_name: _this.appService.navbarCartCurrencyMap[_this.storeId].storeName }).subscribe(function (res) {
                            _this.error = res;
                        });
                    }
                    else {
                        _this.isDeliveryOpen();
                    }
                }
                console.log('Calling Recalculate ...');
                // this.appService.recalculateCart(false);
                _this.calculateShippingCost();
            }, function (error) { return console.log(error); }, function () { return console.log('ZoneToGeoZone retrieved '); });
        }
    };
    PaymentCurrencyComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.appService.getOneWithChildsAndFiles(userId, 'User')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.user = result;
                if (_this.user.paymentMethodCode === 'CREDIT_CARD') {
                    _this.appService.getObject('/service/order/customer/' + userId + '/active_card')
                        .subscribe(function (data) {
                        _this.user.creditCard = data;
                    }, function (error) { return console.log(error); }, function () { return console.log('Get user active CreditCard complete for userId=' + userId); });
                }
            }
            else {
                _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                    _this.error = res['MESSAGE.READ_FAILED'];
                });
            }
        });
    };
    PaymentCurrencyComponent.prototype.getCartProducts = function () {
        var total = 0;
        var totalShippingWeight = 0;
        var shippingPrice = 0;
        if (this.appService.localStorageCartProducts && this.appService.localStorageCartProducts.length > 0) {
            for (var _i = 0, _a = this.appService.localStorageCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                total += (product.price * product.quantity);
                totalShippingWeight += product.shippingWeight;
            }
            shippingPrice = this.zoneToGeoZone.geoZone.weightRate * Math.ceil(totalShippingWeight / this.zoneToGeoZone.geoZone.shippingWeight);
            this.appService.navbarCartShippingMap[this.storeId] = shippingPrice;
            total += (shippingPrice + this.appService.tax);
            return total;
        }
        this.orderTotal = total;
        return total;
    };
    PaymentCurrencyComponent.prototype.isUserLoggedIn = function () {
        return this.appService.tokenStorage.getUserId() !== null;
    };
    PaymentCurrencyComponent.prototype.placeYourOrder = function () {
        var _this = this;
        var orderId = this.order === null ? this.order.id : null;
        this.order.errors = [];
        this.order.id = orderId;
        this.order.storeId = this.storeId;
        this.order.products = this.appService.localStorageCartProductsMap[this.storeId];
        this.order.total = this.appService.navbarCartTotalMap[this.storeId];
        this.order.shippingCost = this.appService.navbarCartShippingMap[this.storeId];
        this.order.pointsValue = this.appService.navbarCartPointsValueMap[this.storeId];
        this.order.walletAmount = this.appService.navbarCartWalletMap[this.storeId];
        this.order.userId = this.user.id;
        this.order.language = this.appService.appInfoStorage.language;
        this.order.userAgent = this.appService.getUserAgent();
        var preorderDate = this.datePipe.transform(this.order.preorderDate, 'yyyy-MM-dd ');
        var storeTimeZoneMoment = moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()(preorderDate + this.order.preorderHour + ':'
            + this.order.preorderMinute, null)
            .tz(this.store.timeZone.name).format('YYYY-MM-DD HH:mm');
        var preorderDatetime = new Date(storeTimeZoneMoment);
        this.order.expected = preorderDatetime;
        var orderPreorderDate = this.order.preorderDate;
        var orderPreorderHour = this.order.preorderHour;
        var orderPreorderMinute = this.order.preorderMinute;
        if (!this.user.paymentMethodCode && !this.payCash) {
            this.translate.get('VALIDATION.SELECT_PAYMENT_METHOD').subscribe(function (res) {
                _this.error = res;
                _this.cartComponent.error = res;
            });
        }
        else if (!this.user.billingAddress || !this.user.billingAddress.city) {
            this.translate.get('VALIDATION.SELECT_BILLING_ADDRESS').subscribe(function (res) {
                _this.error = res;
                _this.cartComponent.error = res;
            });
        }
        else if (this.pickUp === '0' && (!this.user.shippingAddress || !this.user.shippingAddress.city)) {
            this.translate.get('VALIDATION.SELECT_SHIPPING_ADDRESS').subscribe(function (res) {
                _this.error = res;
                _this.cartComponent.error = res;
            });
        }
        else {
            if (this.pickUp === '1') {
                this.order.shippingMethod = 'PICKUP';
                this.order.shippingCode = 'PICKUP';
            }
            else {
                this.order.shippingMethod = 'DELIVERY';
                this.order.shippingCode = 'DELIVERY';
            }
            if (this.payCash) {
                this.order.paymentCode = 'CASH';
                this.order.paymentMethod = 'CASH';
                this.order.paymentInfo = 'CASH';
            }
            else if (this.user.paymentMethodCode === 'CREDIT_CARD' && this.user.creditCard) {
                this.order.paymentInfo = this.user.creditCard.cardType +
                    ' - xxx' + this.user.creditCard.last4Digits +
                    ' - Exp: ' + this.user.creditCard.expMonth + '/' +
                    this.user.creditCard.expYear;
            }
            this.appService.getIp()
                .subscribe(function (data1) {
                _this.order.ip = data1.ip;
                _this.appService.timerCountDownPopup(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ORDER_WAIT_TIME);
                console.log('before call');
                _this.appService.saveWithUrl('/service/order/proceedCheckout/', _this.order)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.appService.timerCountDownPopupClose();
                    _this.order = data;
                    if (data.errors !== null && data.errors !== undefined) {
                        _this.translate.get('MESSAGE.' + data.errors[0]).subscribe(function (res) {
                            _this.error = res;
                            _this.cartComponent.error = res;
                            _this.order.preorderDate = orderPreorderDate;
                            _this.order.preorderHour = orderPreorderHour;
                            _this.order.preorderMinute = orderPreorderMinute;
                        });
                    }
                    else {
                        _this.appService.completeOrder(+_this.storeId);
                        _this.orderCompleteEvent.emit(_this.order);
                    }
                }, function (error) {
                    console.log(error);
                    console.log('Error');
                    _this.appService.timerCountDownPopupClose();
                }, function () { return console.log('Place Order complete'); });
            }, function (error) { return console.log(error); }, function () { return console.log('Get IP complete'); });
        }
    };
    PaymentCurrencyComponent.prototype.processPaymentConfirmation = function () {
        var _this = this;
        if (this.appService.getStoredOrderId() && this.appService.getStoredOrderId() > 0) {
            this.appService.saveWithUrl('/service/order/payment/confirm/', {
                'identifier': this.appService.getStoredOrderId()
            }).subscribe(function (data) {
                _this.order = data;
                if (data.errors !== null && data.errors !== undefined) {
                    if ('ORDER_ALREADY_PROCESSED' === data.errors[0]) {
                        _this.appService.clearOrderId();
                        return;
                    }
                    else {
                        _this.error = data.errors[0];
                        _this.cartComponent.error = data.errors[0];
                    }
                }
                _this.appService.clearOrderId();
            }, function (error) { return console.log(error); }, function () { return console.log('Changing Payment Method complete'); });
        }
    };
    PaymentCurrencyComponent.prototype.updateOrder = function (order) {
        var _this = this;
        if (order.errors !== null && order.errors !== undefined) {
            this.translate.get('MESSAGE.' + order.errors[0]).subscribe(function (res) {
                _this.error = res;
            });
        }
        else {
            this.orderCompleteEvent.emit(order);
        }
    };
    PaymentCurrencyComponent.prototype.generateMessage = function () {
        if (this.user.shippingAddress && this.user.shippingAddress.phone) {
            this.order.shippingCustomField = ('+' + this.user.shippingAddress.country.code) +
                this.user.shippingAddress.phone;
        }
        else {
            this.order.shippingCustomField = (this.user.shippingAddress && this.user.shippingAddress.country) ?
                ('+' + this.user.shippingAddress.country.code) : '';
        }
        this.order.customField = this.getNoteToRecipient();
    };
    PaymentCurrencyComponent.prototype.getNoteToRecipient = function () {
        var hi = '';
        var thank = '';
        var pickup = '';
        var delivery = '';
        this.translate.get(['COMMON.HI', 'COMMON.ERROR']).subscribe(function (res) {
            hi = res['COMMON.HI'];
        });
        this.translate.get(['COMMON.THANK_YOU', 'COMMON.ERROR']).subscribe(function (res) {
            thank = res['COMMON.THANK_YOU'];
        });
        this.translate.get(['COMMON.BOUGHT_FOR_PICKUP', 'COMMON.ERROR']).subscribe(function (res) {
            pickup = res['COMMON.BOUGHT_FOR_PICKUP'];
        });
        this.translate.get(['COMMON.BOUGHT_FOR_DELIVERY', 'COMMON.ERROR']).subscribe(function (res) {
            delivery = res['COMMON.BOUGHT_FOR_DELIVERY'];
        });
        var buff = hi + ' '
            + (this.user.shippingAddress ? this.user.shippingAddress.firstName : '') + '. '
            + (this.pickUp ? pickup : delivery) + ' ';
        return buff;
    };
    PaymentCurrencyComponent.prototype.deliveryOptionChange = function (event) {
        this.error = '';
        this.storeHoursMessage = '';
        console.log(this.store);
        this.appService.navbarCartDeliveryMap[this.storeId] = this.pickUp;
        this.scheduleForLaterChecked(null);
        localStorage.setItem('deliveryMode', this.pickUp);
        if (this.pickUp === '1') {
            if (this.store === null || this.store === undefined) {
                this.getStore();
            }
            else {
                this.isStoreOpen();
            }
        }
        else {
            if (this.store === null || this.store === undefined) {
                this.getStore();
            }
            else {
                if (!this.zoneToGeoZone) {
                    this.getZoneToGeoZone();
                }
                else {
                    this.isDeliveryOpen();
                }
            }
        }
        this.getDates();
        this.calculateShippingCost();
        // this.appService.recalculateCart(false);
    };
    PaymentCurrencyComponent.prototype.scheduleForLaterChecked = function (event) {
        if (event && event.checked) {
            this.getDates();
        }
        else {
            this.order.preorderDate = null;
            this.order.preorderHour = null;
            this.order.preorderMinute = null;
            this.order.preorderTimePeriod = null;
        }
        this.disableForStoreClose();
    };
    PaymentCurrencyComponent.prototype.hourSelectionChange = function (event) {
        this.timePeriods = this.timePeriodMap.get(event.value);
        this.disableForStoreClose();
    };
    PaymentCurrencyComponent.prototype.minuteSelectionChange = function (event) {
        this.disableForStoreClose();
    };
    PaymentCurrencyComponent.prototype.timePeriodSelectionChange = function (event) {
        this.disableForStoreClose();
    };
    PaymentCurrencyComponent.prototype.showPreorder = function () {
        var canShowPreorder = ((this.store && this.store.presentPreorderScreen && this.store.presentPreorderScreen.name === 'ALWAYS')
            || (!this.storeOpen && this.store && this.store.presentPreorderScreen
                && this.store.presentPreorderScreen.name === 'WHEN_CLOSED'));
        return canShowPreorder;
    };
    PaymentCurrencyComponent.prototype.disableForStoreClose = function () {
        var disable = ((!this.storeOpen && this.pickUp === '1') || (!this.deliveryOpen && this.pickUp === '0'))
            && (!this.order.preorderDate || !this.order.preorderHour || !this.order.preorderMinute);
        this.appService.navbarCartStoreAllowOrderMap[this.store.id] = disable;
        console.log('disable = ' + disable);
        return disable;
    };
    PaymentCurrencyComponent.prototype.generateDeliveryEstimationTimeMessage = function () {
        var _this = this;
        var deliveryTimeUnitDesc = '';
        this.translate.get(['COMMON.MINUTES_SHORT', 'COMMON.HOURS_SHORT', 'COMMON.DAYS_SHORT']).subscribe(function (res) {
            if (_this.zoneToGeoZone.deliveryTimeUnit === 'M') {
                deliveryTimeUnitDesc = res['COMMON.MINUTES_SHORT'];
            }
            else if (_this.zoneToGeoZone.deliveryTimeUnit === 'H') {
                deliveryTimeUnitDesc = res['COMMON.HOURS_SHORT'];
            }
            else if (_this.zoneToGeoZone.deliveryTimeUnit === 'D') {
                deliveryTimeUnitDesc = res['COMMON.DAYS_SHORT'];
            }
        });
        return deliveryTimeUnitDesc;
    };
    PaymentCurrencyComponent.prototype.isCashAllowed = function () {
        if (this.store && this.store.acceptDeliveryCash === 1 && this.pickUp === '0') {
            return true;
        }
        if (this.store && this.store.acceptPickupCash === 1 && this.pickUp === '1') {
            return true;
        }
        return false;
    };
    PaymentCurrencyComponent.prototype.calculateShippingCost = function () {
        var _this = this;
        console.log('Calculating shipping cost');
        this.appService.distance = 0.0;
        console.log(this.store);
        console.log(this.user.shippingAddress);
        console.log('shippingMode = ' + this.appService.navbarCartShippingGeoZoneMap[this.storeId].geoZone.shippingMode);
        if (this.appService.navbarCartShippingGeoZoneMap[this.storeId].geoZone.shippingMode === 2
            && (!this.user.shippingAddress ||
                !this.user.shippingAddress.latitude
                || !this.user.shippingAddress.longitude)) {
            this.translate.get('MESSAGE.UPDATE_ADDRESS_POSITION').subscribe(function (res) {
                _this.error = res;
                // this.maxDistExceeded = res;
            });
        }
        else {
            if (this.store.latitude && this.store.longitude
                && this.user.shippingAddress &&
                this.user.shippingAddress.latitude
                && this.user.shippingAddress.longitude) {
                var distance = Math.ceil(google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.user.shippingAddress.latitude, this.user.shippingAddress.longitude), new google.maps.LatLng(this.store.latitude, this.store.longitude)) / 1000.0);
                console.log('Distance = ' + distance);
                console.log('this.store.maxDistance = ' + this.store.maxDistance);
                if (this.store.maxDistance
                    && distance > this.store.maxDistance) {
                    this.appService.distance = distance;
                    this.purchasePossible = false;
                    this.translate.get('MESSAGE.MAX_DELIVERY_DIST_EXCEEDED', {
                        store_name: this.store.name,
                        max_distance: this.store.maxDistance,
                    }).subscribe(function (res) {
                        _this.error = res;
                        // this.maxDistExceeded = res;
                    });
                }
                else {
                    console.log('Recalculate based on distance');
                    this.purchasePossible = true;
                    this.appService.distance = distance;
                    this.appService.recalculateCart(false);
                }
            }
            else {
                this.purchasePossible = true;
                this.appService.recalculateCart(false);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Cart_Cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"], { static: false }),
        __metadata("design:type", _Cart_Cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"])
    ], PaymentCurrencyComponent.prototype, "cartComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], PaymentCurrencyComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaymentCurrencyComponent.prototype, "pickUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PaymentCurrencyComponent.prototype, "scheduleForLater", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaymentCurrencyComponent.prototype, "storeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaymentCurrencyComponent.prototype, "orderCompleteEvent", void 0);
    PaymentCurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Payment-Currency',
            templateUrl: './PaymentCurrency.component.html',
            styleUrls: ['./Payment.component.scss'],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], PaymentCurrencyComponent);
    return PaymentCurrencyComponent;
}());



/***/ }),

/***/ 2161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalReceiptComponent", function() { return FinalReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(545);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinalReceiptComponent = /** @class */ (function () {
    function FinalReceiptComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.todayDate = new Date();
        this.getDeliveryDate();
        this.userDetails = JSON.parse(localStorage.getItem('user'));
    }
    FinalReceiptComponent.prototype.ngOnInit = function () {
    };
    FinalReceiptComponent.prototype.getDeliveryDate = function () {
        this.deliveryDate = new Date();
        this.deliveryDate.setDate(this.deliveryDate.getDate() + 5);
    };
    FinalReceiptComponent.prototype.calculateProductSinglePrice = function (product, value) {
        var price = 0;
        if (!value) {
            value = 1;
        }
        price = product.price * value;
        return price;
    };
    FinalReceiptComponent.prototype.calculateTotalPrice = function () {
        var subtotal = 0;
        if (this.appService.buyUserCartProducts && this.appService.buyUserCartProducts.length > 0) {
            for (var _i = 0, _a = this.appService.buyUserCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                subtotal += (product.price * product.quantity);
            }
            return subtotal;
        }
        return subtotal;
    };
    FinalReceiptComponent.prototype.getTotalPrice = function () {
        var total = 0;
        if (this.appService.buyUserCartProducts && this.appService.buyUserCartProducts.length > 0) {
            for (var _i = 0, _a = this.appService.buyUserCartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                if (!product.quantity) {
                    product.quantity = 1;
                }
                total += (product.price * product.quantity);
            }
            total += (this.appService.shipping + this.appService.tax);
            return total;
        }
        return total;
    };
    FinalReceiptComponent.prototype.goToHome = function () {
        this.appService.removeBuyProducts();
        this.router.navigate(['/']);
    };
    FinalReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-FinalReceipt',
            templateUrl: './FinalReceipt.component.html',
            styleUrls: ['./FinalReceipt.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FinalReceiptComponent);
    return FinalReceiptComponent;
}());



/***/ }),

/***/ 2162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDeliveryStepper", function() { return PaymentDeliveryStepper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentDeliveryStepper = /** @class */ (function () {
    function PaymentDeliveryStepper(appService, router, translate) {
        this.appService = appService;
        this.router = router;
        this.translate = translate;
        this.step = 0;
        this.isDisabledPaymentStepTwo = true;
        this.isDisabledPaymentStepThree = false;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.setAllStepDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.user.shippingAddress = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.user.billingAddress = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.user.creditCard = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.getUser(Number(this.appService.tokenStorage.getUserId()));
    }
    PaymentDeliveryStepper.prototype.ngOnInit = function () {
    };
    PaymentDeliveryStepper.prototype.ngAfterViewInit = function () {
    };
    PaymentDeliveryStepper.prototype.getUser = function (userId) {
        var _this = this;
        this.appService.getOneWithChildsAndFiles(userId, 'User')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.user = result;
                if (_this.user.paymentMethodCode === 'CREDIT_CARD') {
                    _this.appService.getObject('/service/order/customer/' + userId + '/active_card')
                        .subscribe(function (data) {
                        _this.user.creditCard = data;
                        _this.deliveryOptionChange(null);
                    }, function (error) { return console.log(error); }, function () { return console.log('Get user active CreditCard complete for userId=' + userId); });
                }
                else {
                    _this.deliveryOptionChange(null);
                }
            }
            else {
                _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                    _this.error = res['MESSAGE.READ_FAILED'];
                });
            }
        });
    };
    PaymentDeliveryStepper.prototype.isUserLoggedIn = function () {
        return this.appService.tokenStorage.getUserId() !== null;
    };
    PaymentDeliveryStepper.prototype.deliveryOptionChange = function (event) {
        localStorage.setItem('deliveryMode', this.pickUp);
        if (this.pickUp === '1') {
            if (this.hasAllPickupInfoSet()) {
                this.setAllStepDone.emit({ status: true, deliveryMode: this.pickUp });
            }
            else {
                this.setSelectedIndex();
            }
        }
        else if (this.pickUp === '0') {
            if (this.hasAllDeliveryInfoSet()) {
                this.setAllStepDone.emit({ status: true, deliveryMode: this.pickUp });
            }
            else {
                this.setSelectedIndex();
            }
        }
    };
    PaymentDeliveryStepper.prototype.setSelectedIndex = function () {
        if (!this.user.shippingAddress) {
            this.stepper.selectedIndex++;
        }
        else if (!this.user.billingAddress) {
            this.stepper.selectedIndex++;
            this.stepper.selectedIndex++;
        }
        else {
            this.stepper.selectedIndex++;
            this.stepper.selectedIndex++;
            this.stepper.selectedIndex++;
        }
    };
    PaymentDeliveryStepper.prototype.hasPaymentMethod = function () {
        return ((this.user.paymentMethodCode === 'CREDIT_CARD' && this.user.creditCard !== null)
            || (this.user.paymentMethodCode === 'FLOOZ' && this.user.flooz.phoneNumber !== null)
            || (this.user.paymentMethodCode === 'TMONEY' && this.user.tmoney.phoneNumber !== null));
    };
    PaymentDeliveryStepper.prototype.hasAllDeliveryInfoSet = function () {
        return this.hasPaymentMethod()
            && this.user.shippingAddress !== null
            && this.user.billingAddress !== null;
    };
    PaymentDeliveryStepper.prototype.hasAllPickupInfoSet = function () {
        return this.hasPaymentMethod()
            && this.user.billingAddress !== null;
    };
    PaymentDeliveryStepper.prototype.scheduleForLaterChecked = function (event) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepper"])
    ], PaymentDeliveryStepper.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaymentDeliveryStepper.prototype, "pickUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PaymentDeliveryStepper.prototype, "scheduleForLater", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaymentDeliveryStepper.prototype, "setAllStepDone", void 0);
    PaymentDeliveryStepper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Payment-DeliveryStepper',
            templateUrl: './PaymentDeliveryStepper.component.html',
            styleUrls: ['./Payment.component.scss']
        }),
        __metadata("design:paramtypes", [_Services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], PaymentDeliveryStepper);
    return PaymentDeliveryStepper;
}());



/***/ })

};;