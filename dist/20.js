exports.ids = [20];
exports.modules = {

/***/ 2341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccountModule", function() { return AdminAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(493);
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2342);
/* harmony import */ var _AccountSetting_AccountSetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2343);
/* harmony import */ var _Collaboration_Collaboration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2344);
/* harmony import */ var _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2345);
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2346);
/* harmony import */ var _AdminAccount_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2347);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdminAccountModule = /** @class */ (function () {
    function AdminAccountModule() {
    }
    AdminAccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _Account_Account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"],
                _AccountSetting_AccountSetting_component__WEBPACK_IMPORTED_MODULE_7__["AccountSettingComponent"],
                _Collaboration_Collaboration_component__WEBPACK_IMPORTED_MODULE_8__["CollaborationComponent"],
                _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_AdminAccount_routing__WEBPACK_IMPORTED_MODULE_11__["AdminAccountRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
            ]
        })
    ], AdminAccountModule);
    return AdminAccountModule;
}());



/***/ }),

/***/ 2342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
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

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Account',
            templateUrl: './Account.component.html',
            styleUrls: ['./Account.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ 2343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingComponent", function() { return AccountSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(663);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountSettingComponent = /** @class */ (function () {
    function AccountSettingComponent(service) {
        this.service = service;
        this.selected = "1 month";
        this.reasons = [
            "This is temporary. I'll be back.",
            "My account was hacked.",
            "I have a privacy concern.",
            "Other"
        ];
        this.howLongDeactivate = [
            "1 week",
            "1 month",
            "6 months",
            "1 year"
        ];
    }
    AccountSettingComponent.prototype.ngOnInit = function () {
    };
    /**
     *onDelete method is used to open a delete dialog.
     */
    AccountSettingComponent.prototype.onDelete = function () {
        var _this = this;
        this.service.deleteDialog("Are you sure you want to delete this account permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.popUpDeleteUserResponse; });
    };
    AccountSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-setting',
            templateUrl: './AccountSetting.component.html',
            styleUrls: ['./AccountSetting.component.scss']
        }),
        __metadata("design:paramtypes", [_Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"]])
    ], AccountSettingComponent);
    return AccountSettingComponent;
}());



/***/ }),

/***/ 2344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationComponent", function() { return CollaborationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(663);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollaborationComponent = /** @class */ (function () {
    function CollaborationComponent(service) {
        this.service = service;
        this.displayedColumns = ['image', 'name', 'email', 'access', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.collaborationData);
    }
    CollaborationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCollaborationContent().valueChanges().subscribe(function (res) { return _this.getCollaborationData(res); });
    };
    //getCollaborationData method is used to get the collaboration data.
    CollaborationComponent.prototype.getCollaborationData = function (response) {
        this.collaborationData = response;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.collaborationData);
    };
    /**
     *onDelete method is used to open a delete dialog.
     */
    CollaborationComponent.prototype.onDelete = function (i) {
        var _this = this;
        this.service.deleteDialog("Are you sure you want to delete this user permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteUserResponse, i); });
    };
    /**
      * getDeleteResponse method is used to delete a user from the user list.
      */
    CollaborationComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == "yes") {
            this.dataSource.data.splice(i, 1);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataSource.data);
        }
    };
    /**
      * addNewUserDialog method is used to open a add new client dialog.
      */
    CollaborationComponent.prototype.addNewUserDialog = function () {
        var _this = this;
        this.service.addNewUserDialog().
            subscribe(function (res) { _this.popUpNewUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getAddUserPopupResponse(_this.popUpNewUserResponse); });
    };
    /**
      *getAddUserPopupResponse method is used to get a new client dialog response.
      *if response will be get then add new client into client list.
      */
    CollaborationComponent.prototype.getAddUserPopupResponse = function (response) {
        if (response) {
            var addUser = {
                image: "assets/images/user-edit.png",
                name: response.name,
                email: response.email,
                access: response.accessType
            };
            this.collaborationData.push(addUser);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.collaborationData);
        }
    };
    CollaborationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collaboration',
            templateUrl: './Collaboration.component.html',
            styleUrls: ['./Collaboration.component.scss']
        }),
        __metadata("design:paramtypes", [_Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"]])
    ], CollaborationComponent);
    return CollaborationComponent;
}());



/***/ }),

/***/ 2345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(439);
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(route, router, formGroup, toastyService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.formGroup = formGroup;
        this.toastyService = toastyService;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.toastOption = {
            title: "Account Information",
            msg: "Your account information updated successfully!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.type = queryParams['type'];
            });
        });
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.info = this.formGroup.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['male'],
            date: [],
            phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]]
        });
    };
    /**
     * Function is used to submit the profile info.
     * If form value is valid, redirect to profile page.
     */
    EditProfileComponent.prototype.submitProfileInfo = function () {
        var _this = this;
        if (this.info.valid) {
            this.router.navigate(['/admin/account/profile']).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }
        else {
            for (var i in this.info.controls) {
                this.info.controls[i].markAsTouched();
            }
        }
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-EditProfile',
            templateUrl: './EditProfile.component.html',
            styleUrls: ['./EditProfile.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toasta__WEBPACK_IMPORTED_MODULE_3__["ToastaService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ 2346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            templateUrl: './Profile.component.html',
            styleUrls: ['./Profile.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ 2347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccountRoutes", function() { return AdminAccountRoutes; });
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2346);
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2342);
/* harmony import */ var _AccountSetting_AccountSetting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2343);
/* harmony import */ var _Collaboration_Collaboration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2344);
/* harmony import */ var _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2345);





var AdminAccountRoutes = [
    {
        path: '',
        component: _Account_Account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"],
        children: [
            {
                path: 'profile',
                component: _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]
            },
            {
                path: 'settings',
                component: _AccountSetting_AccountSetting_component__WEBPACK_IMPORTED_MODULE_2__["AccountSettingComponent"]
            },
            {
                path: 'collaboration',
                component: _Collaboration_Collaboration_component__WEBPACK_IMPORTED_MODULE_3__["CollaborationComponent"]
            },
            {
                path: 'profile/edit',
                component: _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileComponent"]
            },
        ]
    }
];


/***/ })

};;