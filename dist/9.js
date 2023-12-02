exports.ids = [9];
exports.modules = {

/***/ 2173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(438);
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1729);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(493);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(439);
/* harmony import */ var _UserAccount_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2174);
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2175);
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2176);
/* harmony import */ var _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2177);
/* harmony import */ var _Stores_Stores_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2180);
/* harmony import */ var _OrderHistory_OrderHistory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2178);
/* harmony import */ var _GridProduct_GridProduct_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2179);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(434);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(628);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2229);
/* harmony import */ var _SellProduct_SellProduct_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2181);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Templates/Templates.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MyProducts_MyProducts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2183);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/Global.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Sales_dashboard_Sales_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2184);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Reports/Reports.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Sales_orders_Sales_orders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2185);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Sales/Sales.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Order_detail_Order_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2186);
/* harmony import */ var _Client_dashboard_Client_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2187);
/* harmony import */ var _Open_orders_Open_orders_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2188);
/* harmony import */ var _OrderCancel_OrderCancel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2189);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/Products.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Reports_Reports_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2190);
/* harmony import */ var _ShippingZones_ShippingZones_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2191);
/* harmony import */ var _Deliveries_Deliveries_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2192);
/* harmony import */ var _Sales_summaries_SellerSalesSummaries_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2193);
/* harmony import */ var _Deliveries_summaries_SellerDeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2225);
/* harmony import */ var _Sales_payouts_SellerPayouts_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2194);
/* harmony import */ var _SellerIngredients_StoreIngredient_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2196);
/* harmony import */ var _SellerIngredients_StoreIngredients_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(2195);
/* harmony import */ var _SellerMenus_StoreMenu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(2198);
/* harmony import */ var _SellerMenus_StoreMenus_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(2197);
/* harmony import */ var _SellerPurchaseOrders_PurchaseOrder_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(2200);
/* harmony import */ var _SellerPurchaseOrders_PurchaseOrders_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(2199);
/* harmony import */ var _SellerPurchaseOrders_PurchaseOrderDetails_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(2201);
/* harmony import */ var _SellerTransactions_Transaction_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(2203);
/* harmony import */ var _SellerTransactions_Transactions_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(2202);
/* harmony import */ var _SellerBillings_SellerBills_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(2204);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Finances/Finances.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MyShippers_MyShippers_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(2205);
/* harmony import */ var _Sales_finance_dashboard_Sales_finance_dashboard_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(2206);
/* harmony import */ var _Buildings_Building_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(2208);
/* harmony import */ var _Buildings_Buildings_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(2207);
/* harmony import */ var _rooms_Room_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(2210);
/* harmony import */ var _rooms_Rooms_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(2209);
/* harmony import */ var _roomTypes_RoomType_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(2213);
/* harmony import */ var _roomTypes_RoomTypes_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(2212);
/* harmony import */ var _roomTypes_RoomTypeAmenity_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(2214);
/* harmony import */ var _Sales_reservations_Sales_reservations_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(2215);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Hospitalities/Hospitalities.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Reservation_detail_Reservation_detail_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(2216);
/* harmony import */ var _SellerTransfers_ProductTransfer_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(2231);
/* harmony import */ var _SellerTransfers_Transfers_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(2217);
/* harmony import */ var _SellerTransfers_IngredientTransfer_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(2232);
/* harmony import */ var _SellerTransferHistories_TransferHistories_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(2218);
/* harmony import */ var _SellerTransferHistories_PrdTransferHistories_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(2233);
/* harmony import */ var _SellerTransferHistories_IngTransferHistories_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(2234);
/* harmony import */ var _SellerFunds_Fund_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(2220);
/* harmony import */ var _SellerFunds_Funds_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(2219);
/* harmony import */ var _Buildings_BldgImages_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(2211);
/* harmony import */ var _Sales_audit_Tranlogs_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(2221);
/* harmony import */ var _Sales_audit_Tranlog_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(2222);
/* harmony import */ var _Open_reservations_Open_reservations_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(2223);
/* harmony import */ var _Open_reservations_Cancel_reservations_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(2224);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductLink/ComboProduct.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Deliveries/Deliveries.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Wallets_Wallets_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(2226);
/* harmony import */ var _Wallets_Wallet_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(2235);
/* harmony import */ var _Rewards_Rewards_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(2227);
/* harmony import */ var _Store_Rewards_Stores_rewards_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(2228);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































































var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_UserAccount_routing__WEBPACK_IMPORTED_MODULE_7__["UserAccountRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                ngx_input_file__WEBPACK_IMPORTED_MODULE_15__["InputFileModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/Global.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Templates/Templates.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Reports/Reports.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Sales/Sales.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Deliveries/Deliveries.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Hospitalities/Hospitalities.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/Products.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Finances/Finances.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                ngx_quill__WEBPACK_IMPORTED_MODULE_16__["QuillModule"].forRoot({
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
            declarations: [
                _Account_Account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
                _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"],
                _Stores_Stores_component__WEBPACK_IMPORTED_MODULE_11__["StoresComponent"],
                _Wallets_Wallet_component__WEBPACK_IMPORTED_MODULE_67__["WalletComponent"],
                _Wallets_Wallets_component__WEBPACK_IMPORTED_MODULE_66__["WalletsComponent"],
                _OrderHistory_OrderHistory_component__WEBPACK_IMPORTED_MODULE_12__["OrderHistoryComponent"],
                _GridProduct_GridProduct_component__WEBPACK_IMPORTED_MODULE_13__["GridProductComponent"],
                _SellProduct_SellProduct_component__WEBPACK_IMPORTED_MODULE_17__["SellProductComponent"],
                _MyProducts_MyProducts_component__WEBPACK_IMPORTED_MODULE_19__["MyProductsComponent"],
                _Sales_dashboard_Sales_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["SalesDashboardComponent"],
                _Sales_finance_dashboard_Sales_finance_dashboard_component__WEBPACK_IMPORTED_MODULE_43__["SalesFinanceDashboardComponent"],
                _Sales_orders_Sales_orders_component__WEBPACK_IMPORTED_MODULE_21__["SalesOrdersComponent"],
                _Sales_summaries_SellerSalesSummaries_component__WEBPACK_IMPORTED_MODULE_29__["SellerSalesSummariesComponent"],
                _Deliveries_summaries_SellerDeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_30__["SellerDeliveriesSummariesComponent"],
                _Sales_payouts_SellerPayouts_component__WEBPACK_IMPORTED_MODULE_31__["SellerPayoutsComponent"],
                _Order_detail_Order_detail_component__WEBPACK_IMPORTED_MODULE_22__["OrderDetailComponent"],
                _Client_dashboard_Client_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["ClientDashboardComponent"],
                _Open_orders_Open_orders_component__WEBPACK_IMPORTED_MODULE_24__["OpenOrdersComponent"],
                _OrderCancel_OrderCancel_component__WEBPACK_IMPORTED_MODULE_25__["OrderCancelComponent"],
                _Reports_Reports_component__WEBPACK_IMPORTED_MODULE_26__["ReportsComponent"],
                _ShippingZones_ShippingZones_component__WEBPACK_IMPORTED_MODULE_27__["ShippingZonesComponent"],
                _Deliveries_Deliveries_component__WEBPACK_IMPORTED_MODULE_28__["DeliveriesComponent"],
                _SellerIngredients_StoreIngredient_component__WEBPACK_IMPORTED_MODULE_32__["StoreIngredientComponent"],
                _SellerIngredients_StoreIngredients_component__WEBPACK_IMPORTED_MODULE_33__["StoreIngredientsComponent"],
                _SellerMenus_StoreMenu_component__WEBPACK_IMPORTED_MODULE_34__["StoreMenuComponent"],
                _SellerMenus_StoreMenus_component__WEBPACK_IMPORTED_MODULE_35__["StoreMenusComponent"],
                _SellerPurchaseOrders_PurchaseOrder_component__WEBPACK_IMPORTED_MODULE_36__["PurchaseOrderComponent"],
                _SellerPurchaseOrders_PurchaseOrders_component__WEBPACK_IMPORTED_MODULE_37__["PurchaseOrdersComponent"],
                _SellerPurchaseOrders_PurchaseOrderDetails_component__WEBPACK_IMPORTED_MODULE_38__["PurchaseOrderDetailsComponent"],
                _SellerTransactions_Transaction_component__WEBPACK_IMPORTED_MODULE_39__["TransactionComponent"],
                _SellerTransactions_Transactions_component__WEBPACK_IMPORTED_MODULE_40__["TransactionsComponent"],
                _SellerBillings_SellerBills_component__WEBPACK_IMPORTED_MODULE_41__["SellerBillsComponent"],
                _MyShippers_MyShippers_component__WEBPACK_IMPORTED_MODULE_42__["MyShippersComponent"],
                _Buildings_Building_component__WEBPACK_IMPORTED_MODULE_44__["BuildingComponent"],
                _Buildings_Buildings_component__WEBPACK_IMPORTED_MODULE_45__["BuildingsComponent"],
                _rooms_Room_component__WEBPACK_IMPORTED_MODULE_46__["RoomComponent"],
                _rooms_Rooms_component__WEBPACK_IMPORTED_MODULE_47__["RoomsComponent"],
                _roomTypes_RoomType_component__WEBPACK_IMPORTED_MODULE_48__["RoomTypeComponent"],
                _roomTypes_RoomTypes_component__WEBPACK_IMPORTED_MODULE_49__["RoomTypesComponent"],
                _roomTypes_RoomTypeAmenity_component__WEBPACK_IMPORTED_MODULE_50__["RoomTypeAmenityComponent"],
                _Sales_reservations_Sales_reservations_component__WEBPACK_IMPORTED_MODULE_51__["SalesReservationsComponent"],
                _Reservation_detail_Reservation_detail_component__WEBPACK_IMPORTED_MODULE_52__["ReservationDetailComponent"],
                _SellerTransfers_Transfers_component__WEBPACK_IMPORTED_MODULE_54__["TransfersComponent"],
                _SellerTransfers_ProductTransfer_component__WEBPACK_IMPORTED_MODULE_53__["ProductTransferComponent"],
                _SellerTransfers_IngredientTransfer_component__WEBPACK_IMPORTED_MODULE_55__["IngredientTransferComponent"],
                _SellerTransferHistories_TransferHistories_component__WEBPACK_IMPORTED_MODULE_56__["TransferHistoriesComponent"],
                _SellerTransferHistories_PrdTransferHistories_component__WEBPACK_IMPORTED_MODULE_57__["PrdTransferHistoriesComponent"],
                _SellerTransferHistories_IngTransferHistories_component__WEBPACK_IMPORTED_MODULE_58__["IngTransferHistoriesComponent"],
                _SellerFunds_Fund_component__WEBPACK_IMPORTED_MODULE_59__["FundComponent"],
                _SellerFunds_Funds_component__WEBPACK_IMPORTED_MODULE_60__["FundsComponent"],
                _Buildings_BldgImages_component__WEBPACK_IMPORTED_MODULE_61__["BldgImagesComponent"],
                _Sales_audit_Tranlogs_component__WEBPACK_IMPORTED_MODULE_62__["TranlogsComponent"],
                _Sales_audit_Tranlog_component__WEBPACK_IMPORTED_MODULE_63__["TranlogComponent"],
                _Buildings_BldgImages_component__WEBPACK_IMPORTED_MODULE_61__["BldgImagesComponent"],
                _Open_reservations_Open_reservations_component__WEBPACK_IMPORTED_MODULE_64__["OpenReservationsComponent"],
                _Open_reservations_Cancel_reservations_component__WEBPACK_IMPORTED_MODULE_65__["CancelReservationsComponent"],
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductLink/ComboProduct.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                _Rewards_Rewards_component__WEBPACK_IMPORTED_MODULE_68__["RewardsComponent"],
                _Store_Rewards_Stores_rewards_component__WEBPACK_IMPORTED_MODULE_69__["StoresRewardsComponent"]
            ],
            exports: [
                _Stores_Stores_component__WEBPACK_IMPORTED_MODULE_11__["StoresComponent"],
                _Wallets_Wallet_component__WEBPACK_IMPORTED_MODULE_67__["WalletComponent"],
                _Wallets_Wallets_component__WEBPACK_IMPORTED_MODULE_66__["WalletsComponent"],
                _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"]
            ]
        })
    ], UserAccountModule);
    return UserAccountModule;
}());



/***/ }),

/***/ 2174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountRoutes", function() { return UserAccountRoutes; });
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2175);
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2176);
/* harmony import */ var _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2177);
/* harmony import */ var _OrderHistory_OrderHistory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2178);
/* harmony import */ var _GridProduct_GridProduct_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2179);
/* harmony import */ var _Stores_Stores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2180);
/* harmony import */ var _SellProduct_SellProduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2181);
/* harmony import */ var _MyProducts_MyProducts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2183);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/PaymentChangeModel/PaymentChangeModel.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/PaymentChangeAddress/PaymentChangeAddress.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Sales_dashboard_Sales_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2184);
/* harmony import */ var _Sales_orders_Sales_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2185);
/* harmony import */ var _Order_detail_Order_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2186);
/* harmony import */ var _Client_dashboard_Client_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2187);
/* harmony import */ var _Open_orders_Open_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2188);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _OrderCancel_OrderCancel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2189);
/* harmony import */ var _Reports_Reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2190);
/* harmony import */ var _ShippingZones_ShippingZones_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2191);
/* harmony import */ var _Deliveries_Deliveries_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2192);
/* harmony import */ var _Sales_summaries_SellerSalesSummaries_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2193);
/* harmony import */ var _Sales_payouts_SellerPayouts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2194);
/* harmony import */ var _SellerIngredients_StoreIngredients_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2195);
/* harmony import */ var _SellerMenus_StoreMenus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2197);
/* harmony import */ var _SellerPurchaseOrders_PurchaseOrders_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2199);
/* harmony import */ var _SellerTransactions_Transactions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2202);
/* harmony import */ var _SellerBillings_SellerBills_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2204);
/* harmony import */ var _MyShippers_MyShippers_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2205);
/* harmony import */ var _Sales_finance_dashboard_Sales_finance_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2206);
/* harmony import */ var _Buildings_Buildings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2207);
/* harmony import */ var _roomTypes_RoomTypes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2212);
/* harmony import */ var _Sales_reservations_Sales_reservations_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2215);
/* harmony import */ var _Reservation_detail_Reservation_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2216);
/* harmony import */ var _SellerTransfers_Transfers_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2217);
/* harmony import */ var _SellerTransferHistories_TransferHistories_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2218);
/* harmony import */ var _SellerFunds_Funds_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(2219);
/* harmony import */ var _Sales_audit_Tranlogs_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(2221);
/* harmony import */ var _Open_reservations_Open_reservations_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(2223);
/* harmony import */ var _Open_reservations_Cancel_reservations_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(2224);
/* harmony import */ var _Deliveries_summaries_SellerDeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(2225);
/* harmony import */ var _Wallets_Wallets_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(2226);
/* harmony import */ var _Rewards_Rewards_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(2227);
/* harmony import */ var _Store_Rewards_Stores_rewards_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(2228);












































var UserAccountRoutes = [
    {
        path: '',
        component: _Account_Account_component__WEBPACK_IMPORTED_MODULE_0__["AccountComponent"],
        children: [
            {
                path: 'profile',
                component: _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'deliveries',
                component: _Deliveries_Deliveries_component__WEBPACK_IMPORTED_MODULE_17__["DeliveriesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'cards',
                component: !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/PaymentChangeModel/PaymentChangeModel.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'addresses',
                component: !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Global/PaymentChangeAddress/PaymentChangeAddress.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'order-history',
                component: _OrderHistory_OrderHistory_component__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'profile/edit',
                component: _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'grid-product',
                component: _GridProduct_GridProduct_component__WEBPACK_IMPORTED_MODULE_4__["GridProductComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'stores',
                component: _Stores_Stores_component__WEBPACK_IMPORTED_MODULE_5__["StoresComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'wallets',
                component: _Wallets_Wallets_component__WEBPACK_IMPORTED_MODULE_38__["WalletsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'rewards',
                component: _Rewards_Rewards_component__WEBPACK_IMPORTED_MODULE_39__["RewardsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'sell-item',
                component: _SellProduct_SellProduct_component__WEBPACK_IMPORTED_MODULE_6__["SellProductComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'my-items',
                component: _MyProducts_MyProducts_component__WEBPACK_IMPORTED_MODULE_7__["MyProductsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'sales-dashboard',
                component: _Sales_dashboard_Sales_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["SalesDashboardComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'sales-finance-dashboard',
                component: _Sales_finance_dashboard_Sales_finance_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["SalesFinanceDashboardComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'sales-orders',
                component: _Sales_orders_Sales_orders_component__WEBPACK_IMPORTED_MODULE_10__["SalesOrdersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'sales-summaries',
                component: _Sales_summaries_SellerSalesSummaries_component__WEBPACK_IMPORTED_MODULE_18__["SellerSalesSummariesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'deliveries-summaries',
                component: _Deliveries_summaries_SellerDeliveriesSummaries_component__WEBPACK_IMPORTED_MODULE_37__["SellerDeliveriesSummariesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'payouts/:id',
                component: _Sales_payouts_SellerPayouts_component__WEBPACK_IMPORTED_MODULE_19__["SellerPayoutsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'allpayouts',
                component: _Sales_payouts_SellerPayouts_component__WEBPACK_IMPORTED_MODULE_19__["SellerPayoutsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'order-detail/:id',
                component: _Order_detail_Order_detail_component__WEBPACK_IMPORTED_MODULE_11__["OrderDetailComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'order-cancel/:orderId',
                component: _OrderCancel_OrderCancel_component__WEBPACK_IMPORTED_MODULE_14__["OrderCancelComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'client-dashboard',
                component: _Client_dashboard_Client_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["ClientDashboardComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'open-orders',
                component: _Open_orders_Open_orders_component__WEBPACK_IMPORTED_MODULE_13__["OpenOrdersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'reports/:rptType',
                component: _Reports_Reports_component__WEBPACK_IMPORTED_MODULE_15__["ReportsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'shipping-zones',
                component: _ShippingZones_ShippingZones_component__WEBPACK_IMPORTED_MODULE_16__["ShippingZonesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'store-ingredients',
                component: _SellerIngredients_StoreIngredients_component__WEBPACK_IMPORTED_MODULE_20__["StoreIngredientsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'store-menus',
                component: _SellerMenus_StoreMenus_component__WEBPACK_IMPORTED_MODULE_21__["StoreMenusComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'purchase-orders',
                component: _SellerPurchaseOrders_PurchaseOrders_component__WEBPACK_IMPORTED_MODULE_22__["PurchaseOrdersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'transactions',
                component: _SellerTransactions_Transactions_component__WEBPACK_IMPORTED_MODULE_23__["TransactionsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'funds',
                component: _SellerFunds_Funds_component__WEBPACK_IMPORTED_MODULE_33__["FundsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'seller-bills',
                component: _SellerBillings_SellerBills_component__WEBPACK_IMPORTED_MODULE_24__["SellerBillsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'my-shippers',
                component: _MyShippers_MyShippers_component__WEBPACK_IMPORTED_MODULE_25__["MyShippersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'room-types',
                component: _roomTypes_RoomTypes_component__WEBPACK_IMPORTED_MODULE_28__["RoomTypesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'rooms',
                component: _Buildings_Buildings_component__WEBPACK_IMPORTED_MODULE_27__["BuildingsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'sales-reservations',
                component: _Sales_reservations_Sales_reservations_component__WEBPACK_IMPORTED_MODULE_29__["SalesReservationsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'reservationdetail/:id',
                component: _Reservation_detail_Reservation_detail_component__WEBPACK_IMPORTED_MODULE_30__["ReservationDetailComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'transfers',
                component: _SellerTransfers_Transfers_component__WEBPACK_IMPORTED_MODULE_31__["TransfersComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'transferHistories',
                component: _SellerTransferHistories_TransferHistories_component__WEBPACK_IMPORTED_MODULE_32__["TransferHistoriesComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'sales-audit',
                component: _Sales_audit_Tranlogs_component__WEBPACK_IMPORTED_MODULE_34__["TranlogsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'open-reservations',
                component: _Open_reservations_Open_reservations_component__WEBPACK_IMPORTED_MODULE_35__["OpenReservationsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'reservation-cancel/:reservationId',
                component: _Open_reservations_Cancel_reservations_component__WEBPACK_IMPORTED_MODULE_36__["CancelReservationsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            },
            {
                path: 'stores-rewards',
                component: _Store_Rewards_Stores_rewards_component__WEBPACK_IMPORTED_MODULE_40__["StoresRewardsComponent"],
                canActivate: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/auth-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/role-guard.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
                data: {
                    expectedRole: ['Buyer', 'Seller', 'Administrator']
                }
            }
        ]
    }
];


/***/ }),

/***/ 2175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(491);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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






var TREE_DATA_EN = [
    {
        name: 'Account',
        url: '/account/profile',
        icon: '',
        children: [
            { name: 'Profile', url: '/account/profile', icon: 'account_circle' },
            { name: 'Addresses', url: '/account/addresses', icon: 'location_on' },
            { name: 'Saved cards', url: '/account/cards', icon: 'credit_card' },
            { name: 'My Wallets', url: '/account/wallets', icon: 'account_balance_wallet' },
            { name: 'My Rewards', url: '/account/rewards', icon: 'stars' }
        ]
    },
    {
        name: 'Orders',
        url: '/account/buying',
        icon: '',
        children: [
            { name: 'Orders dashboard', url: '/account/client-dashboard', icon: 'dashboard' },
            { name: 'Orders details', url: '/account/open-orders', icon: 'shopping_cart' },
        ]
    }, {
        name: 'Sales',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Stores', url: '/account/stores', icon: 'store' },
            { name: 'Sales dashboard', url: '/account/sales-dashboard', icon: 'dashboard' },
            { name: 'Sales summary', url: '/account/sales-summaries', icon: 'summarize' },
            { name: 'Sales details', url: '/account/sales-orders', icon: 'shopping_cart' },
            { name: 'Sales audit', url: '/account/sales-audit', icon: 'content_copy' },
            { name: 'Rewards', url: '/account/stores-rewards', icon: 'stars' },
        ]
    }, {
        name: 'Products',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Sell a product', url: '/account/sell-item', icon: 'sell' },
            { name: 'My store products', url: '/account/my-items', icon: 'qr_code_2' },
            { name: 'Composite products', url: '/account/store-ingredients', icon: 'category' },
            { name: 'Menu (Restaurant)', url: '/account/store-menus', icon: 'restaurant_menu' },
            { name: 'Inventory Transfer', url: '/account/transfers', icon: 'sync_alt' },
            { name: 'Product history', url: '/account/transferHistories', icon: 'history' },
        ]
    }, {
        name: 'Accounting',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Accounting dashboard', url: '/account/sales-finance-dashboard', icon: 'dashboard' },
            { name: 'Expenses', url: '/account/transactions', icon: 'receipt_long' },
            { name: 'Purchase Orders', url: '/account/purchase-orders', icon: 'shopping_basket' },
            { name: 'Bills', url: '/account/seller-bills', icon: 'receipt' },
            { name: 'Funds', url: '/account/funds', icon: 'money' },
        ]
    }, {
        name: 'Shipping',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Shipping zones', url: '/account/shipping-zones', icon: 'local_shipping' },
            { name: 'My shippers', url: '/account/my-shippers', icon: 'directions_run' },
            { name: 'My stores', url: '/account/deliveries', icon: 'store' },
            { name: 'My deliveries', url: '/account/deliveries-summaries', icon: 'local_shipping' },
        ]
    }, {
        name: 'Hospitality',
        url: '/account/hospitality',
        icon: 'account_circle',
        children: [
            { name: 'Rooms', url: '/account/rooms', icon: 'hotel' },
            { name: 'Room Types', url: '/account/room-types', icon: 'room' },
            { name: 'Reservations', url: '/account/sales-reservations', icon: 'room' },
            { name: 'My Reservations', url: '/account/open-reservations', icon: 'room' }
        ]
    }, {
        name: 'Reports',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Inventory Reports', url: '/account/reports/1', icon: 'inventory' },
            { name: 'Sales Reports', url: '/account/reports/2', icon: 'point_of_sale' },
            { name: 'Expenses Reports', url: '/account/reports/3', icon: 'exposure' },
        ]
    }
];
var TREE_DATA_FR = [
    {
        name: 'Compte',
        url: '/account/profile',
        icon: '',
        children: [
            { name: 'Profile', url: '/account/profile', icon: 'account_circle' },
            { name: 'Adresses', url: '/account/addresses', icon: 'location_on' },
            { name: 'Cartes enregistrées', url: '/account/cards', icon: 'credit_card' },
            { name: 'Portefeuilles', url: '/account/wallets', icon: 'account_balance_wallet' },
            { name: 'Mes Points gagnés', url: '/account/rewards', icon: 'stars' }
        ]
    },
    {
        name: 'Achats',
        url: '/account/buying',
        icon: '',
        children: [
            { name: 'Tableau de bord', url: '/account/client-dashboard', icon: 'dashboard' },
            { name: 'Détails Achats', url: '/account/open-orders', icon: 'shopping_cart' },
        ]
    }, {
        name: 'Ventes',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Boutiques', url: '/account/stores', icon: 'store' },
            { name: 'Tableau de bord', url: '/account/sales-dashboard', icon: 'dashboard' },
            { name: 'Détails ventes', url: '/account/sales-orders', icon: 'shopping_cart' },
            { name: 'Payements', url: '/account/sales-summaries', icon: 'summarize' },
            { name: 'Audit des ventes', url: '/account/sales-audit', icon: 'content_copy' },
            { name: 'Points gagnés', url: '/account/stores-rewards', icon: 'stars' },
        ]
    }, {
        name: 'Produits',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Vendre un produit', url: '/account/sell-item', icon: 'sell' },
            { name: 'Produits en vente', url: '/account/my-items', icon: 'qr_code_2' },
            { name: 'Produits Composites', url: '/account/store-ingredients', icon: 'category' },
            { name: 'Menu (Restaurant)', url: '/account/store-menus', icon: 'restaurant_menu' },
            { name: 'Transfer d\'inventaire', url: '/account/transfers', icon: 'sync_alt' },
            { name: 'Historique produits', url: '/account/transferHistories', icon: 'history' },
        ]
    }, {
        name: 'Comptabilité',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Tableau de bord', url: '/account/sales-finance-dashboard', icon: 'dashboard' },
            { name: 'Dépenses', url: '/account/transactions', icon: 'receipt_long' },
            { name: 'Commandes', url: '/account/purchase-orders', icon: 'shopping_basket' },
            { name: 'Factures', url: '/account/seller-bills', icon: 'receipt' },
            { name: 'Fonds', url: '/account/funds', icon: 'money' },
        ]
    }, {
        name: 'Livraisons',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Zones d\'expédition', url: '/account/shipping-zones', icon: 'local_shipping' },
            { name: 'Mes livreurs', url: '/account/my-shippers', icon: 'directions_run' },
            { name: 'Mes boutiques', url: '/account/deliveries', icon: 'store' },
            { name: 'Mes livraisons', url: '/account/deliveries-summaries', icon: 'local_shipping' },
        ]
    }, {
        name: 'Hotel',
        url: '/account/hospitality',
        icon: 'account_circle',
        children: [
            { name: 'Chambres', url: '/account/rooms', icon: 'hotel' },
            { name: 'Type de chambres', url: '/account/room-types', icon: 'room' },
            { name: 'Réservations', url: '/account/sales-reservations', icon: 'room' },
            { name: 'Mes Réservations', url: '/account/open-reservations', icon: 'room' }
        ]
    }, {
        name: 'Etats',
        url: '/account/selling',
        icon: 'account_circle',
        children: [
            { name: 'Etats d\'inventaire', url: '/account/reports/1', icon: 'inventory' },
            { name: 'Etats de ventes', url: '/account/reports/2', icon: 'point_of_sale' },
            { name: 'Etats de dépenses', url: '/account/reports/3', icon: 'exposure' },
        ]
    }
];
/**
 * @title Tree with flat nodes
 */
var AccountComponent = /** @class */ (function () {
    function AccountComponent(translate, appService) {
        this.translate = translate;
        this.appService = appService;
        this.showMenu = true;
        this._transformer = function (node, level) {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                url: node.url,
                icon: node.icon,
                level: level,
            };
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.hasChild = function (_, node) { return node.expandable; };
        var lang = this.appService.navigator.language;
        if (lang) {
            lang = lang.substring(0, 2);
        }
        // if (this.cookieService.get('lang')) {
        //   lang = this.cookieService.get('lang');
        //   console.log('Using cookie lang=' + this.cookieService.get('lang'));
        // } else if (lang) {
        //   console.log('Using browser lang=' + lang);
        //   // this.translate.use(lang);
        // } else {
        //   lang = 'fr';
        //   console.log('Using default lang=fr');
        // }
        if (appService.appInfoStorage.language) {
            lang = appService.appInfoStorage.language.code;
        }
        if (lang === 'fr') {
            this.dataSource.data = TREE_DATA_FR;
        }
        else {
            this.dataSource.data = TREE_DATA_EN;
        }
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getStores();
    };
    AccountComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.appService.appInfoStorage.STORES = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    AccountComponent.prototype.toggleSidebar = function () {
        this.showMenu = !this.showMenu;
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            templateUrl: './Account.component.html',
            styleUrls: ['./Account.component.scss']
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ 2176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
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
    function ProfileComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.iconSize = 'lg';
        this.iconColor = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser(Number(this.appService.tokenStorage.getUserId()));
    };
    ProfileComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.appService.getOneWithChildsAndFiles(userId, 'User')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.user = result;
            }
            else {
                _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                    _this.error = res['MESSAGE.READ_FAILED'];
                });
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            templateUrl: './Profile.component.html',
            styleUrls: ['./Profile.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ 2177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(438);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(439);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(209);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Finances/StoreServices/StoreServices.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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










var EditProfileComponent = /** @class */ (function (_super) {
    __extends(EditProfileComponent, _super);
    function EditProfileComponent(route, appService, router, translate, sanitizer, formGroup, location) {
        var _this = _super.call(this, translate) || this;
        _this.route = route;
        _this.appService = appService;
        _this.router = router;
        _this.translate = translate;
        _this.sanitizer = sanitizer;
        _this.formGroup = formGroup;
        _this.location = location;
        _this.countries = [];
        _this.zones = [];
        _this.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.shippers = [];
        _this.creditCardBackground = 'background-image: url(assets/images/cards/card-edit.png)';
        _this.address = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.card = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.picture = [];
        _this.picture1 = [];
        _this.picture2 = [];
        _this.picture0 = [];
        _this.storeShippers = [];
        _this.addresses = [];
        _this.sId = -1;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.currencies = [];
        _this.presentPreorderScreens = [];
        _this.timeZones = [];
        _this.addressTypes = [
            { id: 1, name: 'Shipping address' },
            { id: 2, name: 'Billing address' }
        ];
        _this.emailPattern = /\S+@\S+\.\S+/;
        _this.isAdminPage = false;
        _this.displaySaveButton = true;
        _this.route.params.subscribe(function () {
            if (_this.appService.appInfoStorage.language.code === 'fr') {
                _this.addressTypes = [
                    { id: 1, name: 'Adresse d\'expédition' },
                    { id: 2, name: 'Adresse de Facturation' }
                ];
            }
            _this.generateStoreCode();
            _this.route.queryParams.forEach(function (queryParams) {
                _this.type = queryParams['type'];
                _this.getAddress(queryParams['adrId']);
                _this.getCard(queryParams['cId']);
                if (queryParams['sId']) {
                    _this.sId = queryParams['sId'];
                }
                _this.getStore(queryParams['sId']);
            });
        });
        return _this;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCurrencies();
        this.getUser();
        this.getCountries();
        this.getAddresses();
        this.getTimeZones();
        this.getPresentPreorderScreens();
        this.cardForm = this.formGroup.group({
            card_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            month: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.route.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    EditProfileComponent.prototype.getAddresses = function () {
        var _this = this;
        console.log('Get addresses called');
        var userId = Number(this.appService.tokenStorage.getUserId());
        if (userId > 0) {
            var parameters = [];
            parameters.push('e.user.id = |userId|' + userId + '|Integer');
            this.appService.getAllByCriteria('com.softenza.emarket.model.Address', parameters)
                .subscribe(function (data) {
                _this.addresses = data;
                console.log(_this.addresses);
                if (_this.sId !== -1) {
                    if (!_this.addresses || _this.addresses.length === 0) {
                        console.log('rerouting');
                        _this.router.navigate(['/account/addresses'], { queryParams: { fromPage: 'fromStore' } });
                    }
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Get all addresses complete for userId=' + userId); });
        }
    };
    EditProfileComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    EditProfileComponent.prototype.getBackground = function () {
        this.creditCardBackground = 'background-image: url(assets/images/cards/'
            + this.card.cardNumber.substring(0, 1) + '.png)';
        return this.sanitizer.bypassSecurityTrustStyle("url(" + this.creditCardBackground + ")");
    };
    EditProfileComponent.prototype.getCurrencies = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.status = |abc|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.Currency', parameters, ' order by e.code ')
            .subscribe(function (data) {
            _this.currencies = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all CategoryDescription complete'); });
    };
    EditProfileComponent.prototype.getPresentPreorderScreens = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.status = |abc|1|Integer');
        parameters.push('e.language.id = |languageId|' + this.appService.appInfoStorage.language.id + '|Integer');
        this.appService.getAllByCriteria('PresentPreorderScreen', parameters, ' order by e.id ')
            .subscribe(function (data) {
            _this.presentPreorderScreens = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all PresentPreorderScreen complete'); });
    };
    EditProfileComponent.prototype.get = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.status = |abc|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.Currency', parameters, ' order by e.code ')
            .subscribe(function (data) {
            _this.currencies = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all CategoryDescription complete'); });
    };
    EditProfileComponent.prototype.getTimeZones = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.TimeZone', parameters, ' order by e.description ')
            .subscribe(function (data) {
            _this.timeZones = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all TimeZone complete'); });
    };
    EditProfileComponent.prototype.getZones = function (country) {
        var _this = this;
        if (country) {
            var parameters = [];
            parameters.push('e.country.id = |countryId|' + country.id + '|Integer');
            this.appService.getAllByCriteria('com.softenza.emarket.model.Zone', parameters)
                .subscribe(function (data) {
                _this.zones = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all GeoZone complete'); });
        }
    };
    EditProfileComponent.prototype.getCountries = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Country', parameters)
            .subscribe(function (data) {
            _this.countries = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Countries complete'); });
    };
    /**
     * Function is used to submit the profile info.
     * If form value is valid, redirect to profile page.
     */
    EditProfileComponent.prototype.submitProfileInfo = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.user.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.saveWithFile(this.user, 'User', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.user, null);
            _this.user = data;
        });
    };
    EditProfileComponent.prototype.generateStoreCode = function () {
        var d = new Date();
        this.store.code = (this.user.firstName ?
            this.user.firstName.charAt(0) : '') + (this.user.lastName ?
            this.user.lastName.charAt(0) : '')
            + d.getTime();
    };
    EditProfileComponent.prototype.submitStoreInfo = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.store.status = (this.store.status == null
            || this.store.status.toString() === 'false'
            || this.store.status.toString() === '0') ? 0 : 1;
        this.store.onlineStore = (this.store.onlineStore == null
            || this.store.onlineStore.toString() === 'false'
            || this.store.onlineStore.toString() === '0') ? 0 : 1;
        this.store.acceptDeliveryCash = (this.store.acceptDeliveryCash == null
            || this.store.acceptDeliveryCash.toString() === 'false'
            || this.store.acceptDeliveryCash.toString() === '0') ? 0 : 1;
        this.store.acceptPickupCash = (this.store.acceptPickupCash == null
            || this.store.acceptPickupCash.toString() === 'false'
            || this.store.acceptPickupCash.toString() === '0') ? 0 : 1;
        this.store.sendSMSNewOrder = (this.store.sendSMSNewOrder == null
            || this.store.sendSMSNewOrder.toString() === 'false'
            || this.store.sendSMSNewOrder.toString() === '0') ? 0 : 1;
        this.store.sendSMSOrderCancel = (this.store.sendSMSOrderCancel == null
            || this.store.sendSMSOrderCancel.toString() === 'false'
            || this.store.sendSMSOrderCancel.toString() === '0') ? 0 : 1;
        this.store.sendSMSLowInventory = (this.store.sendSMSLowInventory == null
            || this.store.sendSMSLowInventory.toString() === 'false'
            || this.store.sendSMSLowInventory.toString() === '0') ? 0 : 1;
        this.store.sendSMSShipper = (this.store.sendSMSShipper == null
            || this.store.sendSMSShipper.toString() === 'false'
            || this.store.sendSMSShipper.toString() === '0') ? 0 : 1;
        this.store.autoUpload = (this.store.autoUpload == null
            || this.store.autoUpload.toString() === 'false'
            || this.store.autoUpload.toString() === '0') ? 0 : 1;
        this.store.useMenu = (this.store.useMenu == null
            || this.store.useMenu.toString() === 'false'
            || this.store.useMenu.toString() === '0') ? 0 : 1;
        this.store.allowPickup = (this.store.allowPickup == null
            || this.store.allowPickup.toString() === 'false'
            || this.store.allowPickup.toString() === '0') ? 0 : 1;
        this.store.waitressClose = (this.store.waitressClose == null
            || this.store.waitressClose.toString() === 'false'
            || this.store.waitressClose.toString() === '0') ? 0 : 1;
        this.store.waitressPrint = (this.store.waitressPrint == null
            || this.store.waitressPrint.toString() === 'false'
            || this.store.waitressPrint.toString() === '0') ? 0 : 1;
        this.store.allowReopen = (this.store.allowReopen == null
            || this.store.allowReopen.toString() === 'false'
            || this.store.allowReopen.toString() === '0') ? 0 : 1;
        this.store.trackGuestCnt = (this.store.trackGuestCnt == null
            || this.store.trackGuestCnt.toString() === 'false'
            || this.store.trackGuestCnt.toString() === '0') ? 0 : 1;
        this.store.reasonRequired = (this.store.reasonRequired == null
            || this.store.reasonRequired.toString() === 'false'
            || this.store.reasonRequired.toString() === '0') ? 0 : 1;
        this.store.pymtMethodReq = (this.store.pymtMethodReq == null
            || this.store.pymtMethodReq.toString() === 'false'
            || this.store.pymtMethodReq.toString() === '0') ? 0 : 1;
        this.store.isHotel = (this.store.isHotel == null
            || this.store.isHotel.toString() === 'false'
            || this.store.isHotel.toString() === '0') ? 0 : 1;
        this.store.isLive = (this.store.isLive == null
            || this.store.isLive.toString() === 'false'
            || this.store.isLive.toString() === '0') ? 0 : 1;
        this.store.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.store.owner = this.user;
        console.log(this.store);
        this.formData = new FormData();
        if (this.picture1 && this.picture1.length > 0 && this.picture1[0].file) {
            this.formData.append('file[]', this.picture1[0].file, 'picture.' + this.picture1[0].file.name);
        }
        if (this.picture2 && this.picture2.length > 0 && this.picture2[0].file) {
            this.formData.append('file[]', this.picture2[0].file, 'banner.' + this.picture2[0].file.name);
        }
        if (this.picture0 && this.picture0.length > 0 && this.picture0[0].file) {
            this.formData.append('file[]', this.picture0[0].file, 'storeFrontImage.' + this.picture0[0].file.name);
        }
        this.appService.saveWithFile(this.store, 'Store', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.store, null);
            _this.store = data;
        });
    };
    EditProfileComponent.prototype.getAddress = function (addressId) {
        var _this = this;
        if (addressId > 0) {
            var parameters = [];
            parameters.push('e.id = |addressId|' + addressId + '|Integer');
            this.appService.getOne(addressId, 'Address')
                .subscribe(function (data) {
                _this.address = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all address complete for addressId=' + addressId); });
        }
    };
    EditProfileComponent.prototype.changeStoreShipper = function (user) {
        var _this = this;
        this.user.isShipper = (this.user.isShipper == null
            || this.user.isShipper.toString() === 'false'
            || this.user.isShipper.toString() === '0') ? 0 : 1;
        this.appService.saveWithUrl('/service/user/user/changeShipperSettings', user)
            .subscribe(function (data) {
            console.log(data);
            if (data.result === 'SUCCESS') {
                _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.SAVE_UNSUCCESS'] + ' : ' + data.result;
                });
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all changeStoreShipper complete'); });
    };
    EditProfileComponent.prototype.getCard = function (cardId) {
        var _this = this;
        if (cardId > 0) {
            var parameters = [];
            parameters.push('e.id = |cardId|' + cardId + '|Integer');
            this.appService.getOne(cardId, 'CreditCard')
                .subscribe(function (data) {
                _this.card = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all CreditCard complete for CreditCard=' + cardId); });
        }
    };
    EditProfileComponent.prototype.getStore = function (storeId) {
        var _this = this;
        console.log(storeId);
        if (storeId > 0) {
            this.picture1 = [];
            this.picture2 = [];
            this.picture0 = [];
            this.appService.getOneWithChildsAndFiles(storeId, 'Store')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.store = result;
                    _this.store.goLiveDate = new Date(_this.store.goLiveDate);
                    console.log(_this.store);
                    var images = [];
                    var image = {
                        link: 'assets/images/stores/' + _this.store.id + '/' + _this.store.image,
                        preview: 'assets/images/stores/' + _this.store.id + '/' + _this.store.image
                    };
                    images.push(image);
                    _this.picture1 = images;
                    var images0 = [];
                    var image0 = {
                        link: 'assets/images/stores/' + _this.store.id + '/' + _this.store.storeFrontImage,
                        preview: 'assets/images/stores/' + _this.store.id + '/' + _this.store.storeFrontImage
                    };
                    images0.push(image0);
                    _this.picture0 = images0;
                    var images2 = [];
                    var image2 = {
                        link: 'assets/images/stores/' + _this.store.id + '/' + _this.store.banner,
                        preview: 'assets/images/stores/' + _this.store.id + '/' + _this.store.banner
                    };
                    images2.push(image2);
                    _this.picture2 = images2;
                }
                else {
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    EditProfileComponent.prototype.getUser = function () {
        var _this = this;
        var userId = Number(this.appService.tokenStorage.getUserId());
        if (userId > 0) {
            this.appService.getOneWithChildsAndFiles(userId, 'User')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.user = result;
                    console.log(_this.user);
                    _this.user.confirmPassword = _this.user.password;
                    var images_1 = [];
                    _this.user.fileNames.forEach(function (item) {
                        var image = {
                            link: 'assets/images/users/' + userId + '/' + item,
                            preview: 'assets/images/users/' + userId + '/' + item
                        };
                        images_1.push(image);
                    });
                    _this.picture = images_1;
                    console.log(_this.user);
                }
                else {
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
    };
    /**
     * Function is used to submit the profile address.
     * If form value is valid, redirect to address page.
     */
    EditProfileComponent.prototype.submitAddress = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.address.user = this.user;
        console.log(this.address);
        this.appService.save(this.address, 'Address')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                });
            }
        });
    };
    /**
     * Function is used to submit the profile card.
     * If form value is valid, redirect to card page.
     */
    EditProfileComponent.prototype.submitCard = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.card.user = this.user;
        this.card.cardType = this.getCardType();
        console.log(this.card);
        if (this.card.cardType === '') {
            this.translate.get(['MESSAGE.INVALID_CARD', 'COMMON.ERROR']).subscribe(function (res) {
                _this.errors = res['MESSAGE.INVALID_CARD'];
            });
        }
        else {
            this.appService.save(this.card, 'CreditCard')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                    });
                }
            });
        }
    };
    EditProfileComponent.prototype.getCardType = function () {
        if (this.card.cardNumber && this.card.cardNumber.length > 1) {
            var firstDigit = this.card.cardNumber.substring(0, 1);
            if (firstDigit === '3') {
                return 'Amex';
            }
            else if (firstDigit === '4') {
                return 'Visa';
            }
            else if (firstDigit === '5') {
                return 'MasterCard';
            }
            else if (firstDigit === '6') {
                return 'Discover';
            }
        }
        return '';
    };
    EditProfileComponent.prototype.storeTabChanged = function ($event) {
        var _this = this;
        this.displaySaveButton = $event.index !== 4;
        if ($event.index === 4) {
            setTimeout(function () {
                if (_this.storeServicesComponent) {
                    _this.storeServicesComponent.selectedStore.id = _this.store.id;
                    _this.storeServicesComponent.searchCriteria.storeId = _this.store.id;
                    _this.storeServicesComponent.search();
                }
            }, 500);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Finances/StoreServices/StoreServices.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { static: false }),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Finances/StoreServices/StoreServices.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], EditProfileComponent.prototype, "storeServicesComponent", void 0);
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            templateUrl: './EditProfile.component.html',
            styleUrls: ['./EditProfile.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
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

var order_history = [
    { position: 1, orderid: 1801, name: 'LEGITIM', price: 1.0079, status: 'Sent', action: '' },
    { position: 2, orderid: 1832, name: 'GRUNDTAL', price: 4.0026, status: 'In processing', action: '' },
    { position: 3, orderid: 1881, name: 'BOHOLMEN', price: 6.941, status: 'Sent', action: '' },
    { position: 4, orderid: 1832, name: 'ROSTAD LÖK', price: 9.0122, status: 'Return', action: '' },
    { position: 5, orderid: 1810, name: 'TÅRTA CHOKLADKROKANT', price: 10.811, status: 'Sent', action: '' },
];
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
        this.displayedColumns = ['position', 'orderid', 'name', 'price', 'status', 'action'];
        this.dataSource = order_history;
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-OrderHistory',
            templateUrl: './OrderHistory.component.html',
            styleUrls: ['./OrderHistory.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ 2179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridProductComponent", function() { return GridProductComponent; });
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

var GridProductComponent = /** @class */ (function () {
    function GridProductComponent() {
    }
    GridProductComponent.prototype.ngOnInit = function () {
    };
    GridProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-product',
            templateUrl: './GridProduct.component.html',
            styleUrls: ['./GridProduct.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], GridProductComponent);
    return GridProductComponent;
}());



/***/ }),

/***/ 2180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoresComponent = /** @class */ (function () {
    function StoresComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.stores = [];
        this.fromAdmin = false;
    }
    StoresComponent.prototype.ngOnInit = function () {
        if (this.userId === undefined) {
            this.userId = Number(this.appService.tokenStorage.getUserId());
        }
        else {
            this.fromAdmin = true;
        }
        this.getStores();
    };
    StoresComponent.prototype.getStores = function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoresComponent.prototype, "userId", void 0);
    StoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stores',
            templateUrl: './Stores.component.html',
            styleUrls: ['./Stores.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], StoresComponent);
    return StoresComponent;
}());



/***/ }),

/***/ 2181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellProductComponent", function() { return SellProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(493);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2182);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
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








var SellProductComponent = /** @class */ (function (_super) {
    __extends(SellProductComponent, _super);
    function SellProductComponent(appService, translate, mediaObserver) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.mediaObserver = mediaObserver;
        _this.categories = [];
        _this.categoryId = 0;
        _this.productId = 0;
        _this.finalSelectedCatDescs = [];
        _this.finalDeletedCatDescs = [];
        _this.selectedCatDescs = [];
        _this.depth = 0;
        _this.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.productDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selectedStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.options = ['One', 'Two'];
        _this.products = [];
        _this.currentFilteredProducts = [];
        _this.productSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.productStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.sidenavOpen = true;
        _this.psConfig = {
            wheelPropagation: true
        };
        _this.viewType = 'grid';
        _this.viewCol = 33.3;
        _this.count = 6;
        _this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, _this.count, null, 2, 0, 0);
        _this.formData = new FormData();
        _this.picture = [];
        _this.justSubmitted = false;
        _this.saving = false;
        _this.productDesc.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.watcher = mediaObserver.media$.subscribe(function (change) {
            if (change.mqAlias === 'xs') {
                _this.sidenavOpen = false;
                _this.viewCol = 100;
            }
            else if (change.mqAlias === 'sm') {
                _this.sidenavOpen = false;
                _this.viewCol = 50;
            }
            else if (change.mqAlias === 'md') {
                _this.viewCol = 50;
                _this.sidenavOpen = true;
            }
            else {
                _this.viewCol = 33.3;
                _this.sidenavOpen = true;
            }
        });
        return _this;
    }
    SellProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.saving = false;
        this.getStores();
        this.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        for (var counter = 0; counter < 10; counter++) {
            console.log('for loop executed : ' + counter);
            this.categories[counter] = [];
        }
        setTimeout(function () {
            _this.categories.splice(1);
        }, 1000);
        this.getParentCategoryDescriptions();
        this.getProductCategoryDescriptions();
    };
    SellProductComponent.prototype.getProductCategoryDescriptions = function () {
        var _this = this;
        this.depth = 0;
        this.categories = [];
        this.appService.getObjects('/service/catalog/productcategorydescriptions/'
            + this.productId + '/' + this.appService.appInfoStorage.language.id)
            .subscribe(function (data) {
            _this.finalSelectedCatDescs = data;
            _this.finalSelectedCatDescs.forEach(function (element) {
                element.id = element.category.id;
            });
        }, function (error) { return console.log(error); }, function () { return console.log('Get all CategoryDescription complete'); });
    };
    SellProductComponent.prototype.getStores = function () {
        var _this = this;
        var storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        storeSearchCriteria.status = 1;
        storeSearchCriteria.aprvStatus = 1;
        storeSearchCriteria.userId = Number(this.appService.tokenStorage.getUserId());
        console.log(storeSearchCriteria);
        this.appService.saveWithUrl('/service/catalog/stores', storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores.length === 1) {
                _this.selectedStore = _this.stores[0];
                _this.stepper.selectedIndex = 1;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    SellProductComponent.prototype.getParentCategoryDescriptions = function () {
        var _this = this;
        this.depth = 0;
        this.categories = [];
        this.appService.getObjects('/service/catalog/categorydescriptions/'
            + this.appService.appInfoStorage.language.id + '/' + this.productId)
            .subscribe(function (data) {
            _this.categories[_this.depth] = data;
            _this.depth++;
            _this.categories[_this.depth] = [];
            setTimeout(function () {
                _this.categories.splice(_this.depth);
            }, 5);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all CategoryDescription complete'); });
    };
    SellProductComponent.prototype.categorySelected = function (indexOfElement) {
        var _this = this;
        var indexIncrement = indexOfElement + 1;
        this.categories.splice(indexIncrement);
        this.selectedCatDescs.splice(indexIncrement);
        this.depth = indexIncrement;
        if (this.selectedCatDescs[indexOfElement].category.childCount > 0) {
            this.appService.getObjects('/service/catalog/categorydescriptions/' + this.appService.appInfoStorage.language.id
                + '/' + this.selectedCatDescs[indexOfElement].category.id + '/' + this.productId)
                .subscribe(function (data) {
                _this.categories[_this.depth] = data;
                _this.depth++;
                _this.categories[_this.depth] = [];
                setTimeout(function () {
                    _this.categories.splice(_this.depth);
                }, 5);
            }, function (error) { return console.log(error); }, function () { return console.log('Get all CategoryDescription complete'); });
        }
        else {
            this.getProducts(this.selectedCatDescs[indexOfElement]);
        }
    };
    SellProductComponent.prototype.getProducts = function (cat) {
        var _this = this;
        console.log(cat);
        console.log(this.selectedStore);
        console.log(this.appService.appInfoStorage.language);
        this.appService.getObjects('/service/catalog/getProductsForCategoryForSale/' + this.appService.appInfoStorage.language.id
            + '/' + cat.category.id + '/' + this.selectedStore.id)
            .subscribe(function (data) {
            _this.currentFilteredProducts = undefined;
            _this.products = data;
            _this.stepper.selectedIndex = 2;
            _this.createDatasource(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getProductsForCategoryForSale complete'); });
    };
    SellProductComponent.prototype.createDatasource = function (listData) {
        var _this = this;
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
        this.message = null;
        var result = this.filterData(listData);
        if (result.data.length === 0) {
            this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
            this.translate.get(['COMMON.SAVE', 'MESSAGE.NO_RESULT_FOUND']).subscribe(function (res) {
                _this.message = res['MESSAGE.NO_RESULT_FOUND'];
            });
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](result.data);
        this.pagination = result.pagination;
    };
    SellProductComponent.prototype.filterProductDataBySearchCriteria = function (searchCriteria) {
        var filteredData = this.products.filter(function (data) {
            var found = true;
            if (searchCriteria.text) {
                if (!(data.name.toLowerCase().indexOf(searchCriteria.text.toLowerCase()) > -1)) {
                    found = false;
                }
            }
            console.log('Filter Predicate called.');
            return found;
        });
        this.currentFilteredProducts = filteredData;
        return filteredData;
    };
    SellProductComponent.prototype.searchClicked = function (data) {
        this.productSearchCriteria.text = data.trim().toLowerCase();
        this.firstPagePagination();
        this.createDatasource(this.filterProductDataBySearchCriteria(this.productSearchCriteria));
        this.resetPagination();
    };
    SellProductComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SellProductComponent.prototype.addToCart = function (value) {
        this.appService.addToCart(value);
    };
    SellProductComponent.prototype.addToWishList = function (value) {
        this.appService.addToWishlist(value);
    };
    SellProductComponent.prototype.transformHits = function (hits) {
        hits.forEach(function (hit) {
            hit.stars = [];
            for (var i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    };
    SellProductComponent.prototype.changeCount = function (count) {
        this.count = count;
        // this.products.length = 0;
        this.resetPagination();
        this.filterProducts();
    };
    SellProductComponent.prototype.changeSorting = function (sort) {
        this.sort = sort;
        this.filterProducts();
    };
    SellProductComponent.prototype.changeViewType = function (obj) {
        if (obj.viewType === 'list') {
            this.changeCount(1);
        }
        else if (this.count === 1) {
            this.changeCount(6);
        }
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    };
    SellProductComponent.prototype.onPageChange = function (e) {
        this.pagination.page = e.pageIndex + 1;
        this.filterProducts();
        // window.scrollTo(0, 0);
    };
    SellProductComponent.prototype.resetPagination = function () {
        console.log('resetPagination called');
        this.firstPagePagination();
        this.pagination.totalPages = Math.ceil(this.pagination.total / this.count);
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    };
    SellProductComponent.prototype.firstPagePagination = function () {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
            this.paginator.firstPage();
        }
    };
    SellProductComponent.prototype.filterProducts = function () {
        var _this = this;
        var result = this.filterData(this.products);
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
    SellProductComponent.prototype.filterData = function (data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    };
    SellProductComponent.prototype.selectForSaleProduct = function ($event) {
        this.productDesc = $event;
        this.productStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.productStore.dateAvailable = new Date();
        this.productStore.minimum = 0;
        this.productStore.quantity = 0;
        this.productStore.maxQty = 0;
        this.productStore.sortOrder = 0;
        this.productStore.availableOnline = 1;
        this.productStore.price = this.productDesc.product.price ?
            this.productDesc.product.price : 0;
        this.productStore.vipPrice = this.productDesc.product.price ?
            this.productDesc.product.price : 0;
        this.productStore.shippingWeight = this.productDesc.product.shippingWeight ?
            this.productDesc.product.shippingWeight : 0;
        this.productStore.points = Number(this.productDesc.product.price ?
            this.productDesc.product.price.toFixed(0) : 0);
        this.productStore.status = 1;
        this.stepper.selectedIndex = 3;
    };
    SellProductComponent.prototype.quickSell = function ($event) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.productDesc = $event;
        this.productStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.productStore.dateAvailable = new Date();
        this.productStore.minimum = 0;
        this.productStore.maxQty = 0;
        this.productStore.quantity = 0;
        this.productStore.sortOrder = 0;
        this.productStore.availableOnline = 1;
        this.productStore.price = this.productDesc.product.price ?
            this.productDesc.product.price : 0;
        this.productStore.vipPrice = this.productDesc.product.price ?
            this.productDesc.product.price : 0;
        this.productStore.shippingWeight = this.productDesc.product.shippingWeight ?
            this.productDesc.product.shippingWeight : 0;
        this.productStore.points = Number(this.productDesc.product.price ?
            this.productDesc.product.price.toFixed(0) : 0);
        this.productStore.status = 1;
        // this.stepper.selectedIndex = 3;
        this.productStore.product = this.productDesc.product;
        this.productStore.store = this.selectedStore;
        this.productStore.modifiedBy = +this.appService.tokenStorage.getUserId();
        console.log(this.productStore);
        // const index: number = this.products.indexOf(this.productDesc);
        this.appService.saveWithUrl('/service/catalog/quickSellProduct', this.productStore)
            .subscribe(function (result) {
            if (result.id > 0) {
                if (result.id > 0) {
                    var index = _this.dataSource.data.indexOf(_this.productDesc);
                    if (index !== -1) {
                        _this.dataSource.data.splice(index, 1);
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                    }
                    _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                    });
                }
            }
        });
    };
    SellProductComponent.prototype.sell = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.productStore.product = this.productDesc.product;
        this.productStore.store = this.selectedStore;
        this.productStore.availableOnline = 1;
        this.productStore.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.productStore.status = (this.productStore.status == null
            || this.productStore.status.toString() === 'false'
            || this.productStore.status.toString() === '0') ? 0 : 1;
        this.appService.save(this.productStore, 'ProductStore')
            .subscribe(function (result) {
            if (result.id > 0) {
                if (result.id > 0) {
                    _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                    });
                }
            }
        });
    };
    SellProductComponent.prototype.importProducts = function () {
        var _this = this;
        console.log('Import product started ...');
        if (this.justSubmitted) {
            this.justSubmitted = false;
            console.log('Just submitted');
            return;
        }
        this.saving = true;
        this.messages = '';
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.downloadWithFileUsingUrl('/service/catalog/importProducts', {
            storeId: this.selectedStore.id,
            modifiedBy: +this.appService.tokenStorage.getUserId()
        }, this.formData)
            .subscribe(function (data) {
            _this.saving = false;
            var blob = new Blob([data], { type: 'application/vnd.ms-excel;charset=utf-8' });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, 'productImportResult.xlsx');
            _this.translate.get(['MESSAGE.PRODUCTS_IMPORT_COMPLETED']).subscribe(function (res) {
                _this.messages = res['MESSAGE.PRODUCTS_IMPORT_COMPLETED'];
            });
            //this.picture = [];
        }, function (error) {
            _this.saving = false;
            console.log(error);
        }, function () {
            _this.saving = false;
            console.log('Save Transaction complete');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], SellProductComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], SellProductComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], SellProductComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepper"])
    ], SellProductComponent.prototype, "stepper", void 0);
    SellProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell-product',
            templateUrl: './SellProduct.component.html',
            styleUrls: ['./SellProduct.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]])
    ], SellProductComponent);
    return SellProductComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2182:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ 2183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductsComponent", function() { return MyProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(493);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductStoreOptions/ProductStoreOptions.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductStoreIngredients/ProductStoreIngredients.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductLink/ComboProduct.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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











var MyProductsComponent = /** @class */ (function (_super) {
    __extends(MyProductsComponent, _super);
    function MyProductsComponent(appService, translate, mediaObserver) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.mediaObserver = mediaObserver;
        _this.displayedColumns = ['priority', 'quantity', 'price', 'percentage', 'dateStart', 'dateEnd', 'hourStart', 'hourEnd', 'status', 'actions'];
        _this.categories = [];
        _this.categoryId = 0;
        _this.productId = 0;
        _this.finalSelectedCatDescs = [];
        _this.finalDeletedCatDescs = [];
        _this.selectedCatDescs = [];
        _this.depth = 0;
        _this.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.productDesc = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selectedStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.options = ['One', 'Two'];
        _this.products = [];
        _this.currentFilteredProducts = [];
        _this.productSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.copyOptionsProducts = [];
        _this.copyOptionsStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.copyOptionsPrdStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.productStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.sidenavOpen = true;
        _this.psConfig = {
            wheelPropagation: true
        };
        _this.viewType = 'grid';
        _this.viewCol = 33.3;
        _this.count = 48;
        _this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, _this.count, null, 2, 0, 0);
        _this.allInvnReport = '';
        _this.lowInvnReport = '';
        _this.reportRun = false;
        _this.productDesc.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.watcher = mediaObserver.media$.subscribe(function (change) {
            if (change.mqAlias === 'xs') {
                _this.sidenavOpen = false;
                _this.viewCol = 100;
            }
            else if (change.mqAlias === 'sm') {
                _this.sidenavOpen = false;
                _this.viewCol = 50;
            }
            else if (change.mqAlias === 'md') {
                _this.viewCol = 50;
                _this.sidenavOpen = true;
            }
            else {
                _this.viewCol = 33.3;
                _this.sidenavOpen = true;
            }
        });
        return _this;
    }
    MyProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getStores();
        this.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        for (var counter = 0; counter < 10; counter++) {
            this.categories[counter] = [];
        }
        setTimeout(function () {
            _this.categories.splice(1);
        }, 1000);
    };
    MyProductsComponent.prototype.getStoreProducts = function (store) {
        this.selectedStore = store;
        this.stepper.selectedIndex = 1;
        this.getProducts(store);
    };
    MyProductsComponent.prototype.getStores = function () {
        var _this = this;
        var storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        storeSearchCriteria.status = 1;
        storeSearchCriteria.aprvStatus = 1;
        storeSearchCriteria.userId = Number(this.appService.tokenStorage.getUserId());
        console.log(storeSearchCriteria);
        this.appService.saveWithUrl('/service/catalog/stores', storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores.length === 1) {
                _this.selectedStore = _this.stores[0];
                _this.getProducts(_this.stores[0]);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    MyProductsComponent.prototype.getProducts = function (store) {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getProductsOnSale/', new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.appService.appInfoStorage.language.id, store.id, 0, 0, '0', 0, 0, 0, 0, 0, 1))
            .subscribe(function (data) {
            _this.currentFilteredProducts = undefined;
            _this.products = data.productDescVOs;
            _this.stepper.selectedIndex = 1;
            _this.createDatasource(data.productDescVOs);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getProductsForCategoryForSale complete'); });
    };
    MyProductsComponent.prototype.getCopyOptionProducts = function (store) {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getProductsOnSale/', new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.appService.appInfoStorage.language.id, store.id, 0, 0, '0', 0, 0, 0, 0, 0, 1))
            .subscribe(function (data) {
            _this.copyOptionsProducts = data.productDescVOs;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all store product complete'); });
    };
    MyProductsComponent.prototype.createDatasource = function (listData) {
        var _this = this;
        console.log('createDatasource');
        this.message = null;
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
        var result = this.filterData(listData);
        if (result.data.length === 0) {
            this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, 2, 0, 0);
            this.translate.get(['COMMON.SAVE', 'MESSAGE.NO_RESULT_FOUND']).subscribe(function (res) {
                _this.message = res['MESSAGE.NO_RESULT_FOUND'];
            });
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](result.data);
        this.pagination = result.pagination;
    };
    MyProductsComponent.prototype.filterProductDataBySearchCriteria = function (searchCriteria) {
        var filteredData = this.products.filter(function (data) {
            var found = true;
            if (searchCriteria.text) {
                if (!(data.name.toLowerCase().indexOf(searchCriteria.text.toLowerCase()) > -1)) {
                    found = false;
                }
            }
            console.log('Filter Predicate called.');
            return found;
        });
        this.currentFilteredProducts = filteredData;
        return filteredData;
    };
    MyProductsComponent.prototype.searchClicked = function (data) {
        this.productSearchCriteria.text = data.trim().toLowerCase();
        this.firstPagePagination();
        this.createDatasource(this.filterProductDataBySearchCriteria(this.productSearchCriteria));
        this.resetPagination();
    };
    MyProductsComponent.prototype.addToCart = function (value) {
        this.appService.addToCart(value);
    };
    MyProductsComponent.prototype.addToWishList = function (value) {
        this.appService.addToWishlist(value);
    };
    MyProductsComponent.prototype.transformHits = function (hits) {
        hits.forEach(function (hit) {
            hit.stars = [];
            for (var i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    };
    MyProductsComponent.prototype.changeCount = function (count) {
        console.log('changeCount');
        this.count = count;
        // this.products.length = 0;
        this.resetPagination();
        this.filterProducts();
    };
    MyProductsComponent.prototype.changeSorting = function (sort) {
        this.sort = sort;
        this.filterProducts();
    };
    MyProductsComponent.prototype.changeViewType = function (obj) {
        if (obj.viewType === 'list') {
            this.changeCount(1);
        }
        else if (this.count === 1) {
            this.changeCount(6);
        }
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    };
    MyProductsComponent.prototype.onPageChange = function (e) {
        this.pagination.page = e.pageIndex + 1;
        this.filterProducts();
        // window.scrollTo(0, 0);
    };
    MyProductsComponent.prototype.resetPagination = function () {
        console.log('resetPagination called');
        this.firstPagePagination();
        this.pagination.totalPages = Math.ceil(this.pagination.total / this.count);
        this.pagination = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    };
    MyProductsComponent.prototype.firstPagePagination = function () {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
            this.paginator.firstPage();
        }
    };
    MyProductsComponent.prototype.filterProducts = function () {
        var _this = this;
        var result = this.filterData(this.products);
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
    MyProductsComponent.prototype.filterData = function (data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    };
    MyProductsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MyProductsComponent.prototype.selectForSaleProduct = function ($event) {
        var _this = this;
        this.productDesc = $event;
        this.prdStoreOptView.reset();
        this.appService.getObject('/service/catalog/getProductToStore/' + this.selectedStore.id + '/' + this.productDesc.product.id)
            .subscribe(function (data) {
            if (data !== null && data.id > 0) {
                _this.productStore = data;
                _this.originalQty = data.quantity;
                _this.prdStoreOptView.getProductToStoreSelectedOptions(data.id);
                _this.prdStoreOptView.getProductToStoreUnselectedOptions(data.id);
            }
            else {
                _this.productStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                _this.productStore.availableOnline = _this.selectedStore.onlineStore;
                _this.productStore.productDiscounts.push(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
                _this.productStore.productStoreIngredients.push(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
            }
            _this.productDiscountDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.productStore.productDiscounts);
            _this.productDiscountDatasource.paginator = _this.productDiscountPaginator;
            _this.productDiscountDatasource.sort = _this.productDiscountSort;
            _this.prdStoreIngredientsView.productToStoreId = _this.productStore.id;
            _this.prdStoreIngredientsView.storeId = _this.productStore.store.id;
            _this.prdStoreIngredientsView.resetDatasource(_this.productStore.productStoreIngredients);
            _this.comboProductView.productToStore = _this.productStore;
            _this.comboProductView.storeId = _this.productStore.store.id;
            _this.comboProductView.getProductParentDescriptions();
            _this.comboProductView.getMenus();
        }, function (error) { return console.log(error); }, function () { return console.log('Get ProductToStore complete for store=' + _this.selectedStore.id + ' and ' + _this.productDesc.product.id); });
        this.stepper.selectedIndex = 2;
    };
    MyProductsComponent.prototype.getCommentPopupResponse = function (response, value) {
        if (response) {
            console.log('Value returned from comment popup... ');
            console.log(value);
            this.productStore.quantityComment = value;
        }
    };
    MyProductsComponent.prototype.sell = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (this.selectedStore.reasonRequired === 1 && this.originalQty !== this.productStore.quantity) {
            this.appService.commentPopup(this.productStore).
                subscribe(function (res) {
                _this.popupResponse = res;
                if (res.shouldSave && _this.productStore.quantityComment && _this.productStore.quantityComment.trim().length > 0) {
                    _this.productStore.shouldPerformExtraUpdate = true;
                    _this.productStore.diffQty = _this.productStore.quantity - _this.originalQty;
                    _this.proceedSell();
                }
            }, function (err) { return console.log(err); }, function () { return _this.getCommentPopupResponse(_this.popupResponse, _this.productStore); });
        }
        else {
            this.proceedSell();
        }
    };
    MyProductsComponent.prototype.proceedSell = function () {
        var _this = this;
        this.productStore.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.productStore.product.id = this.productDesc.product.id;
        this.productStore.store = this.selectedStore;
        this.productStore.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.productStore.status = (this.productStore.status == null
            || this.productStore.status.toString() === 'false'
            || this.productStore.status.toString() === '0') ? 0 : 1;
        this.productStore.availableOnline = (this.productStore.availableOnline == null
            || this.productStore.availableOnline.toString() === 'false'
            || this.productStore.availableOnline.toString() === '0') ? 0 : 1;
        this.productStore.subtract = (this.productStore.subtract == null
            || this.productStore.subtract.toString() === 'false'
            || this.productStore.subtract.toString() === '0') ? 0 : 1;
        this.productStore.allowNegInvn = (this.productStore.allowNegInvn == null
            || this.productStore.allowNegInvn.toString() === 'false'
            || this.productStore.allowNegInvn.toString() === '0') ? 0 : 1;
        console.log(this.productStore);
        this.appService.save(this.productStore, 'ProductStore')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.originalQty = _this.productStore.quantity;
                _this.productStore.quantityComment = '';
                _this.productStore.shouldPerformExtraUpdate = false;
                _this.productStore.diffQty = 0;
                _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                });
            }
        });
    };
    MyProductsComponent.prototype.addDiscount = function () {
        this.productDiscountDatasource.data.unshift(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
        this.productDiscountDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.productDiscountDatasource.data);
        this.productDiscountDatasource.paginator = this.productDiscountPaginator;
        this.productDiscountDatasource.sort = this.productDiscountSort;
    };
    MyProductsComponent.prototype.deleteProductDiscount = function (productDiscount, index) {
        var _this = this;
        if (productDiscount.id === undefined || productDiscount.id === null) {
            this.productDiscountDatasource = this.resetDatasource(this.productDiscountDatasource, index);
            return;
        }
        this.appService.delete(productDiscount.id, 'ProductDiscount')
            .subscribe(function (data) {
            _this.productDiscountDatasource = _this.processDataSourceDeleteResult(data, _this.messages, productDiscount, _this.productDiscountDatasource);
        });
    };
    MyProductsComponent.prototype.saveProductDiscount = function (productDiscount) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.setToggleValues(productDiscount);
        if (!this.validateProductDiscount(productDiscount)) {
            return;
        }
        productDiscount.storeId = this.selectedStore.id;
        productDiscount.ptsId = this.productStore.id;
        productDiscount.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.save(productDiscount, 'ProducDiscount')
            .subscribe(function (result) {
            _this.processResult(result, productDiscount, null);
        });
    };
    MyProductsComponent.prototype.validateProductDiscount = function (productDiscount) {
        var _this = this;
        if (this.isBlank(productDiscount.priority) ||
            this.isBlank(productDiscount.dateStart) ||
            this.isBlank(productDiscount.dateEnd)) {
            this.translate.get(['VALIDATION.START_FIELD_REQUIRED', 'COMMON.ERROR']).subscribe(function (res) {
                _this.errors = res['VALIDATION.START_FIELD_REQUIRED'];
            });
            return false;
        }
        if (this.isBlank(productDiscount.price) && this.isBlank(productDiscount.percentage)) {
            this.translate.get(['VALIDATION.PRICE_OR_PERCENT', 'COMMON.ERROR']).subscribe(function (res) {
                _this.errors = res['VALIDATION.PRICE_OR_PERCENT'];
            });
            return false;
        }
        if ((this.isBlank(productDiscount.price) && !this.isBlank(productDiscount.quantity))
            || (!this.isBlank(productDiscount.price) && this.isBlank(productDiscount.quantity))) {
            this.translate.get(['VALIDATION.PRICE_AND_QTY', 'COMMON.ERROR']).subscribe(function (res) {
                _this.errors = res['VALIDATION.PRICE_AND_QTY'];
            });
            return false;
        }
        if (new Date(productDiscount.dateStart) > new Date(productDiscount.dateEnd)) {
            this.translate.get(['VALIDATION.BEGIN_G_END', 'COMMON.ERROR']).subscribe(function (res) {
                _this.errors = res['VALIDATION.BEGIN_G_END'];
            });
            return false;
        }
        for (var _i = 0, _a = this.productStore.productDiscounts; _i < _a.length; _i++) {
            var pd = _a[_i];
            if (pd.priority === productDiscount.quantity
                && productDiscount.status === 1 && pd.status === 1) {
                this.translate.get(['VALIDATION.DUPLICATE_PRIORITY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['VALIDATION.DUPLICATE_PRIORITY'];
                });
                return false;
            }
        }
        return true;
    };
    MyProductsComponent.prototype.setToggleValues = function (productDiscount) {
        productDiscount.status = (!productDiscount.status
            || productDiscount.status === null
            || productDiscount.status.toString() === 'false'
            || productDiscount.status.toString() === '0') ? 0 : 1;
    };
    MyProductsComponent.prototype.togglePrice = function (productDiscount) {
        productDiscount.price = undefined;
        productDiscount.quantity = undefined;
        productDiscount.disablePrice = !this.isBlank(productDiscount.percentage);
    };
    MyProductsComponent.prototype.togglePercentage = function (productDiscount) {
        productDiscount.percentage = undefined;
        productDiscount.disablePercentage = !this.isBlank(productDiscount.price);
    };
    MyProductsComponent.prototype.isBlank = function (value) {
        return value === undefined || value === null || value.toString() === '';
    };
    MyProductsComponent.prototype.changeTab = function ($event) {
        console.log('Tab changed');
        this.messages = '';
        this.prdStoreIngredientsView.getProductToStoreSelectedOptions(this.productStore.id);
        this.prdStoreIngredientsView.getProductStoreOptionValues(this.productStore.id, null);
    };
    MyProductsComponent.prototype.runReport = function (type) {
        var _this = this;
        this.reportRun = false;
        this.allInvnReport = '';
        this.lowInvnReport = '';
        var qtyMax = 0;
        if (type === 1) { // all inventory
            qtyMax = 999999999;
        }
        var rep = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        rep.reportName = 'inventory';
        var parm1 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pStoreId', this.selectedStore.id + '');
        var parm2 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pLang', this.appService.appInfoStorage.language.code);
        var parm3 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pQtyMax', qtyMax + '');
        rep.parameters = [];
        rep.parameters.push(parm1, parm2, parm3);
        this.appService.saveWithUrl('/service/report/run/', rep)
            .subscribe(function (data) {
            console.log(data);
            _this.openInNewTab(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).webServer + '/assets/reports/' + data[0]);
            /*  if (type === 1) { // all inventory
               this.allInvnReport = Constants.webServer + '/assets/reports/' + data[0];
             } else {
               this.lowInvnReport = Constants.webServer + '/assets/reports/' + data[0];
             } */
        }, function (error) { return console.log(error); }, function () { return console.log('Get ProductToStore complete for store=' + _this.selectedStore.id + ' and ' + _this.productDesc.product.id); });
    };
    MyProductsComponent.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    MyProductsComponent.prototype.deletePts = function (ptsId) {
        var _this = this;
        var message = 'Are you sure you want to delete this product from the store?';
        this.appService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.proceedDeletePts(_this.popupResponse, ptsId); });
    };
    MyProductsComponent.prototype.proceedDeletePts = function (response, ptsId) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (response) {
            this.appService.updateObject('/service/catalog/deleteProductFromStore/' + ptsId)
                .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (data.result === 'SUCCESS') {
                        this.translate.get(['MESSAGE.DELETE_SUCCESS']).subscribe(function (res) {
                            _this.errors = res['MESSAGE.DELETE_SUCCESS'];
                        });
                        this.stepper.selectedIndex = 0;
                        this.createDatasource([]);
                    }
                    else if (data.result === 'OBJECT_HAS_CHILD') {
                        this.translate.get(['MESSAGE.OBJECT_HAS_CHILD']).subscribe(function (res) {
                            _this.errors = res['MESSAGE.OBJECT_HAS_CHILD'];
                        });
                    }
                    else {
                        this.translate.get(['MESSAGE.DELETE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                            _this.errors = res['MESSAGE.DELETE_UNSUCCESS'];
                        });
                    }
                    return [2 /*return*/];
                });
            }); }, function (error) { return console.log(error); }, function () { return console.log('closeTab complete'); });
        }
    };
    MyProductsComponent.prototype.productSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.messages = '';
            _this.errors = '';
            _this.appService.getObject('/service/catalog/getProductToStore/' + _this.copyOptionsStore.id + '/' + _this.selectedPrd.product.id)
                .subscribe(function (data) {
                if (data !== null && data.id > 0) {
                    _this.copyOptionsPrdStore = data;
                    _this.copyPrdStoreOptView.getProductToStoreSelectedOptions(_this.copyOptionsPrdStore.id);
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Get ProductToStore complete for store=' + _this.selectedStore.id + ' and ' + _this.productDesc.product.id); });
        }, 500);
    };
    MyProductsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getCopyOptionProducts(_this.copyOptionsStore);
        }, 500);
    };
    MyProductsComponent.prototype.copyOptionsFromPts = function () {
        var _this = this;
        var message = 'Are you sure you want to copy these options?';
        this.appService.confirmationPopup(message).
            subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.proceedCopyOptionsFromPts(_this.popupResponse); });
    };
    MyProductsComponent.prototype.proceedCopyOptionsFromPts = function (response) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (response) {
            this.appService.updateObject('/service/catalog/copyOptionsFromPts/'
                + this.copyOptionsStore.id + '/' + this.selectedPrd.product.id + '/'
                + this.productStore.id + '/' + this.appService.tokenStorage.getUserId())
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
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], MyProductsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MyProductsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], MyProductsComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepper"])
    ], MyProductsComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], MyProductsComponent.prototype, "productDiscountPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MyProductsComponent.prototype, "productDiscountSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ProductStoreOptionsComponent', { static: false }),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductStoreOptions/ProductStoreOptions.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], MyProductsComponent.prototype, "prdStoreOptView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductStoreIngredients/ProductStoreIngredients.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { static: false }),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductStoreIngredients/ProductStoreIngredients.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], MyProductsComponent.prototype, "prdStoreIngredientsView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductLink/ComboProduct.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { static: false }),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductLink/ComboProduct.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], MyProductsComponent.prototype, "comboProductView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('copyOptionsProductStoreOptionsComponent', { static: false }),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Products/ProductStoreOptions/ProductStoreOptions.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], MyProductsComponent.prototype, "copyPrdStoreOptView", void 0);
    MyProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-products',
            templateUrl: './MyProducts.component.html',
            styleUrls: ['./MyProducts.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]])
    ], MyProductsComponent);
    return MyProductsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDashboardComponent", function() { return SalesDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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






var SalesDashboardComponent = /** @class */ (function (_super) {
    __extends(SalesDashboardComponent, _super);
    function SalesDashboardComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.sidenavOpen = true;
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        return _this;
    }
    SalesDashboardComponent.prototype.ngOnInit = function () {
        this.getStores();
    };
    SalesDashboardComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.appService.appInfoStorage.STORES = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SalesDashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SalesDashboardComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], SalesDashboardComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
    ], SalesDashboardComponent.prototype, "stepper", void 0);
    SalesDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-dashboard',
            templateUrl: './Sales-dashboard.component.html',
            styleUrls: ['./Sales-dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SalesDashboardComponent);
    return SalesDashboardComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesOrdersComponent", function() { return SalesOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
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





var SalesOrdersComponent = /** @class */ (function (_super) {
    __extends(SalesOrdersComponent, _super);
    function SalesOrdersComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.sidenavOpen = true;
        return _this;
    }
    SalesOrdersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SalesOrdersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SalesOrdersComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], SalesOrdersComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
    ], SalesOrdersComponent.prototype, "stepper", void 0);
    SalesOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-orders',
            templateUrl: './Sales-orders.component.html',
            styleUrls: ['./Sales-orders.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SalesOrdersComponent);
    return SalesOrdersComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
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




var OrderDetailComponent = /** @class */ (function (_super) {
    __extends(OrderDetailComponent, _super);
    function OrderDetailComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.sidenavOpen = true;
        return _this;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
    };
    OrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            templateUrl: './Order-detail.component.html',
            styleUrls: ['./Order-detail.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDashboardComponent", function() { return ClientDashboardComponent; });
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





var ClientDashboardComponent = /** @class */ (function () {
    function ClientDashboardComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.tag = '3months';
        this.tagValue = '0';
        this.index = 1;
        this.chartType = 'bar';
        this.colors = ['primary', 'secondary', 'secondary', 'secondary', 'secondary', 'secondary'];
        this.onlineOrdersColumns = ['orderId', 'createDate', 'status', 'storeName', 'city', 'country', 'total'];
        this.storeOrdersColumns = ['orderId', 'date', 'status', 'store', 'type', 'price', 'rebate', 'total'];
    }
    ClientDashboardComponent.prototype.ngOnInit = function () {
        if (!this.storeId) {
            this.storeId = 0;
        }
        if (!this.userId) {
            this.userId = 0;
        }
        this.getDashboard();
    };
    ClientDashboardComponent.prototype.getDashboard = function () {
        var _this = this;
        var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        searchCriteria.userId = this.userId;
        searchCriteria.storeId = this.storeId;
        searchCriteria.miscNum1 = Number(this.appService.tokenStorage.getUserId());
        searchCriteria.langId = this.appService.appInfoStorage.language.id;
        console.log(searchCriteria);
        this.appService.saveWithUrl('/service/catalog/getDashboard', searchCriteria)
            .subscribe(function (data) {
            _this.dashboard = data[0];
            _this.chartDataChange(_this.tag, _this.index);
            console.log(_this.dashboard);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getDashboard complete'); });
    };
    ClientDashboardComponent.prototype.getSalesDtl = function () {
        var _this = this;
        var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        searchCriteria.userId = this.userId;
        searchCriteria.storeId = this.storeId;
        searchCriteria.miscText1 = this.tag;
        searchCriteria.miscText2 = this.tagValue;
        searchCriteria.langId = this.appService.appInfoStorage.language.id;
        searchCriteria.miscNum1 = Number(this.appService.tokenStorage.getUserId());
        this.appService.saveWithUrl('/service/catalog/getSalesDtl', searchCriteria)
            .subscribe(function (data) {
            if (data) {
                _this.ordersVO = data[0];
                _this.onlineDS = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data[0].online);
                _this.onlineDS.paginator = _this.onlinePG;
                _this.onlineDS.sort = _this.onlineST;
                _this.storeDS = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data[0].store);
                _this.storeDS.paginator = _this.storePG;
                _this.storeDS.sort = _this.storeST;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getSalesDtl complete'); });
    };
    ClientDashboardComponent.prototype.chartClick = function ($event) {
        this.tagValue = $event;
        this.getSalesDtl();
    };
    // chartDataChange method is used to change the chart data according to button event.
    ClientDashboardComponent.prototype.chartDataChange = function (tag, i) {
        this.tag = tag;
        this.index = i;
        for (var j = 0; j < 6; j++) {
            this.colors[j] = 'secondary';
        }
        this.colors[i] = 'primary';
        this.getSalesDtl();
    };
    ClientDashboardComponent.prototype.filterOnlineOrder = function (status) {
        this.onlineDS.filter = status.trim().toLowerCase();
        if (this.onlineDS.paginator) {
            this.onlineDS.paginator.firstPage();
        }
    };
    ClientDashboardComponent.prototype.filterStoreOrder = function (status) {
        console.log(status);
        this.storeDS.filter = status.trim().toLowerCase();
        if (this.storeDS.paginator) {
            this.storeDS.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorO', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ClientDashboardComponent.prototype, "onlinePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ClientDashboardComponent.prototype, "onlineST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorS', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ClientDashboardComponent.prototype, "storePG", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ClientDashboardComponent.prototype, "storeST", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientDashboardComponent.prototype, "storeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientDashboardComponent.prototype, "userId", void 0);
    ClientDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-dashboard',
            templateUrl: './Client-dashboard.component.html',
            styleUrls: ['./Client-dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ClientDashboardComponent);
    return ClientDashboardComponent;
}());



/***/ }),

/***/ 2188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenOrdersComponent", function() { return OpenOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
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






var OpenOrdersComponent = /** @class */ (function (_super) {
    __extends(OpenOrdersComponent, _super);
    function OpenOrdersComponent(appService, router, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.router = router;
        _this.translate = translate;
        _this.messages = '';
        _this.orders = [];
        _this.products = [];
        return _this;
    }
    OpenOrdersComponent.prototype.ngOnInit = function () {
        console.log('login : ' + this.appService.tokenStorage.getUserId());
        if (!this.appService.tokenStorage.getUserId()) {
            console.log('navigating.. to signin');
            this.router.navigate(['/session/signin'], { queryParams: { fromPage: '/account/open-orders' } });
        }
        else {
            this.getOpenOrders();
            this.getBoughtProducts();
        }
    };
    OpenOrdersComponent.prototype.getOpenOrders = function () {
        var _this = this;
        this.messages = '';
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria.orderType = 0;
        this.searchCriteria.miscText1 = "'PENDING','PROCESSING','PROCESSED','SHIPPED'";
        this.searchCriteria.miscNum1 = Number(this.appService.tokenStorage.getUserId());
        this.searchCriteria.langId = this.appService.appInfoStorage.language.id;
        console.log(this.searchCriteria);
        this.appService.saveWithUrl('/service/order/onlineOrders', this.searchCriteria)
            .subscribe(function (data) {
            _this.orders = data;
            // console.log(data);
            if (data.length > 0) {
                // for (const o of this.orders) {
                //   this.setOrderDetails(o);
                // }
                // console.log(this.orders);
            }
            else {
                _this.translate.get(['MESSAGE.NO_OPEN_ORDER', 'MESSAGE.NO_RESULT_FOUND']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.NO_OPEN_ORDER'];
                });
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Orders complete'); });
    };
    OpenOrdersComponent.prototype.getBoughtProducts = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getBoughtProducts/', new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.appService.appInfoStorage.language.id, 0, 0, 0, '0', 1, 0, 10, Number(this.appService.tokenStorage.getUserId()), 0, 0))
            .subscribe(function (data) {
            _this.products = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getBoughtProducts complete'); });
    };
    OpenOrdersComponent.prototype.addToCart = function (orderProduct) {
        var _this = this;
        this.appService.getObject('/service/catalog/getProductOnSale/' +
            this.appService.appInfoStorage.language.id + '/' + orderProduct.ptsId)
            .subscribe(function (data) {
            _this.addPrdToCart(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all getProductOnSale complete'); });
    };
    OpenOrdersComponent.prototype.addPrdToCart = function (value) {
        var _this = this;
        if (value.product.hasOption === 1) {
            this.appService.productOptionPopup(value).subscribe(function (res) { _this.popupResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getCartPopupResponse(_this.popupResponse, value); });
        }
        else {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            ci.quantity = 1;
            this.appService.addToCart(ci);
        }
    };
    OpenOrdersComponent.prototype.getCartPopupResponse = function (response, value) {
        if (response) {
            var ci = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
            ci.quantity = value.quantity;
            this.appService.addToCart(ci);
        }
    };
    OpenOrdersComponent.prototype.cancel = function () {
        this.router.navigate(['/checkout']);
    };
    OpenOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-orders',
            templateUrl: './Open-orders.component.html',
            styleUrls: ['./Open-orders.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], OpenOrdersComponent);
    return OpenOrdersComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCancelComponent", function() { return OrderCancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
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






var OrderCancelComponent = /** @class */ (function (_super) {
    __extends(OrderCancelComponent, _super);
    function OrderCancelComponent(appService, translate, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.messages = '';
        _this.errors = '';
        _this.canEdit = false;
        _this.theaction = 'cancelling';
        _this.isAdmin = false;
        return _this;
    }
    OrderCancelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCancellationReasons();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdmin = (value && value.expectedRole && value.expectedRole[0] === 'Administrator');
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.getOrder(params.orderId);
        });
    };
    OrderCancelComponent.prototype.getOrder = function (id) {
        var _this = this;
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria.orderId = id;
        this.searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/order/onlineOrders', this.searchCriteria)
            .subscribe(function (data) {
            _this.order = data[0];
            if (data.length > 0) {
                console.log(_this.order);
            }
            else {
                _this.translate.get(['MESSAGE.NO_OPEN_ORDER', 'MESSAGE.NO_RESULT_FOUND']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.NO_OPEN_ORDER'];
                });
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Order complete'); });
    };
    OrderCancelComponent.prototype.getCancellationReasons = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |langId|' + this.appService.appInfoStorage.language.id + '|Integer');
        this.appService.getAllByCriteria('CancellationReason', parameters)
            .subscribe(function (data) {
            _this.cancellationReasons = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all CancellationReasons complete'); });
    };
    OrderCancelComponent.prototype.cancel = function () {
        var _this = this;
        var order = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        order.id = this.order.orderId;
        order.cancellationReason = this.cancellationReason;
        this.appService.saveWithUrl('/service/order/cancelOrder/', order)
            .subscribe(function (data) {
            if (data.errors) {
                // there was an issue.
                _this.translate.get(['MESSAGE.' + data.errors[0]]).subscribe(function (res) {
                    _this.errors = res['MESSAGE.' + data.errors[0]];
                    if (data.errors[0] === 'ORDER_CANCELLED_NO_REFUND') {
                        _this.theaction = 'cancelled';
                    }
                });
            }
            else {
                _this.theaction = 'cancelled';
                _this.translate.get('MESSAGE.ORDER_CANCELLATION_SUCCESSFUL', { order_number: order.id }).subscribe(function (res) {
                    _this.messages = res;
                });
            }
        }, function (error) {
            console.log(error);
        }, function () { return console.log('Cancel order complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrderCancelComponent.prototype, "reviewType", void 0);
    OrderCancelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-cancel',
            templateUrl: './OrderCancel.component.html',
            styleUrls: ['./OrderCancel.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderCancelComponent);
    return OrderCancelComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
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
    function ReportsComponent(appService, datePipe, route, translate) {
        var _this = this;
        this.appService = appService;
        this.datePipe = datePipe;
        this.route = route;
        this.translate = translate;
        this.stores = [];
        this.showParams = false;
        this.showFormatParams = false;
        this.fromAdmin = false;
        this.reportFormat = 'pdf';
        this.percentPrint = 100;
        this.running = false;
        this.allowExRcpt = false;
        this.subRpt = 1;
        this.rptType = 0;
        this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.rptType = params.rptType;
            console.log('Report type = ' + _this.rptType);
            /* this.route.queryParams.forEach(queryParams => {
              console.log(queryParams);
              this.rptType = queryParams['rptType'];
              console.log('Report type = ' + this.rptType);
            }); */
        });
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.showParams = false;
        this.showFormatParams = false;
        this.running = false;
        if (this.userId === undefined) {
            this.userId = Number(this.appService.tokenStorage.getUserId());
        }
        else {
            this.fromAdmin = true;
        }
        this.getStores();
    };
    ReportsComponent.prototype.delete = function (cardId) {
        var _this = this;
        this.appService.delete(cardId, 'com.softenza.emarket.model.Store')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                _this.getStores();
            }
        });
    };
    ReportsComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
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
            console.log(_this.stores);
            if (_this.stores) {
                if (_this.stores && _this.stores.length === 1) {
                    _this.selectedStore = _this.stores[0];
                }
                _this.stores.forEach(function (st) {
                    if (st.allowExRcpt === 1) {
                        _this.allowExRcpt = true;
                    }
                });
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    ReportsComponent.prototype.runInvnReport = function (type) {
        var _this = this;
        this.showParams = false;
        this.showFormatParams = true;
        this.error = '';
        if (type >= 3) {
            this.showParams = true;
        }
        if (type > 0) {
            this.subRpt = type;
            return;
        }
        var qtyMax = 0;
        if (type === 1) { // all inventory
            qtyMax = 999999999;
        }
        var rep = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        rep.reportName = 'inventory';
        var parm1 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pUserId', this.appService.tokenStorage.getUserId());
        var parm2 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pLang', this.appService.appInfoStorage.language.code);
        var parm3 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pQtyMax', qtyMax + '');
        var parm4 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('storeId', this.selectedStore.id + '');
        rep.parameters = [];
        rep.parameters.push(parm1, parm2, parm3, parm4);
        this.running = true;
        this.appService.saveWithUrl('/service/report/run/', rep)
            .subscribe(function (data) {
            console.log(data);
            _this.running = false;
            if (data && data.length > 0 && !data[0].startsWith('ERROR :')) {
                _this.showParams = false;
                _this.showFormatParams = false;
                _this.openInNewTab(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).webServer + '/assets/reports/' + data[0]);
            }
            else {
                _this.translate.get(['MESSAGE.GOV_ERROR_OCCURRED']).subscribe(function (res) {
                    _this.error = res['MESSAGE.GOV_ERROR_OCCURRED'] + ' ' + data[0];
                });
            }
        }, function (error) {
            console.log(error);
            _this.running = false;
        }, function () {
            console.log('runInvnReport complete ');
            _this.running = false;
        });
    };
    ReportsComponent.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        if (win) {
            win.focus();
        }
    };
    ReportsComponent.prototype.runRpt = function () {
        var _this = this;
        this.running = true;
        this.error = '';
        var rep = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        rep.reportFormat = this.reportFormat;
        if (this.subRpt <= 2) {
            rep.reportName = 'inventory';
        }
        else if (this.subRpt === 6) {
            rep.reportName = 'receipts';
        }
        else if (this.subRpt > 2 && this.subRpt < 9) {
            rep.reportName = 'sales';
        }
        else if (this.subRpt === 9) {
            rep.reportName = 'expenses';
        }
        else if (this.subRpt === 10) {
            rep.reportName = 'pos';
        }
        else if (this.subRpt === 11) {
            rep.reportName = 'sales';
        }
        else if (this.subRpt === 12) {
            rep.reportName = 'bilan';
        }
        else if (this.subRpt === 13) {
            rep.reportName = 'hotel_rooms_history';
        }
        else if (this.subRpt === 14) {
            rep.reportName = 'hotel_sales';
        }
        else if (this.subRpt === 15) {
            rep.reportName = 'sales';
        }
        else if (this.subRpt === 16) {
            rep.reportName = 'po_extract';
        }
        var parm1 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pUserId', this.appService.tokenStorage.getUserId());
        var parm2 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pLang', this.appService.appInfoStorage.language.code);
        if (this.subRpt <= 2) {
            var qtyMax = 0;
            if (this.subRpt === 1) { // all inventory
                qtyMax = 999999999;
            }
            var parm3 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pQtyMax', qtyMax + '');
            rep.parameters = [];
            rep.parameters.push(parm1, parm2, parm3);
        }
        else {
            var parm3 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('dateDebut', this.datePipe.transform(this.beginDate, 'MM/dd/yyyy') + ' 00:00:00');
            var parm4 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('dateFin', this.datePipe.transform(this.endDate, 'MM/dd/yyyy') + ' 23:59:59');
            var parm5 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('subRptId', '' + this.subRpt);
            var parm6 = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('percentPrint', '' + this.percentPrint);
            rep.parameters = [];
            rep.parameters.push(parm1, parm2, parm3, parm4, parm5, parm6);
        }
        rep.parameters.push(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('storeId', this.selectedStore.id + ''));
        console.log(rep);
        this.appService.saveWithUrl('/service/report/run/', rep)
            .subscribe(function (data) {
            console.log(data);
            _this.running = false;
            if (data && data.length > 0 && !data[0].startsWith('ERROR :')) {
                _this.showParams = false;
                _this.showFormatParams = false;
                _this.openInNewTab(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).webServer + '/assets/reports/' + data[0]);
            }
            else {
                _this.translate.get(['MESSAGE.GOV_ERROR_OCCURRED']).subscribe(function (res) {
                    _this.error = res['MESSAGE.GOV_ERROR_OCCURRED'] + ' ' + data[0];
                });
            }
        }, function (error) {
            console.log(error);
            _this.running = false;
        }, function () {
            console.log('runInvnReport complete ');
            _this.running = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportsComponent.prototype, "userId", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-reports',
            templateUrl: './Reports.component.html',
            styleUrls: ['./Reports.component.scss'],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ 2191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingZonesComponent", function() { return ShippingZonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShippingZonesComponent = /** @class */ (function () {
    function ShippingZonesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.displayedColumns = ['id', 'name', 'description', 'shippingMode', 'flatRate', 'weightRate', 'weight'];
        this.displayedColumns2 = ['id', 'country', 'zone', 'deliveryTimeBegin', 'deliveryTimeEnd', 'deliveryTimeUnit', 'actions'];
        this.geoZone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.countries = [];
        this.zones = [];
        this.messages = '';
        this.errors = '';
        this.allZones = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.stores = [];
        this.shippers = [];
        this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.selectedTab = 0;
    }
    ShippingZonesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get(['COMMON.ALL_ZONES', 'COMMON.ERROR']).subscribe(function (res) {
            _this.allZones.name = res['COMMON.ALL_ZONES'];
        });
        this.getCountries();
        this.getStores();
        this.getShippers();
    };
    ShippingZonesComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    ShippingZonesComponent.prototype.compareZones = function (o1, o2) {
        if ((!o1 && o2 && !(o2.id > 0)) || (!o2 && o1 && !(o1.id > 0))) {
            return true;
        }
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    ShippingZonesComponent.prototype.getStores = function () {
        var _this = this;
        var storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        storeSearchCriteria.status = 1;
        storeSearchCriteria.aprvStatus = 1;
        storeSearchCriteria.userId = Number(this.appService.tokenStorage.getUserId());
        console.log(storeSearchCriteria);
        this.appService.saveWithUrl('/service/catalog/stores', storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores.length > 0) {
                _this.store = _this.stores[0];
                _this.getAll();
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    ShippingZonesComponent.prototype.getShippers = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.status= |abc|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.Shipper', parameters)
            .subscribe(function (data) {
            _this.shippers = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Shipper complete'); });
    };
    ShippingZonesComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.store.id = |abc|' + this.store.id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.GeoZone', parameters)
            .subscribe(function (data) {
            console.log(data);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all GeoZone complete'); });
    };
    ShippingZonesComponent.prototype.getZones = function (country) {
        var _this = this;
        if (country) {
            var parameters = [];
            parameters.push('e.country.id = |countryId|' + country.id + '|Integer');
            this.appService.getAllByCriteria('com.softenza.emarket.model.Zone', parameters)
                .subscribe(function (data) {
                country.zones = data;
                country.zones.unshift(_this.allZones);
            }, function (error) { return console.log(error); }, function () { return console.log('Get all GeoZone complete'); });
        }
    };
    ShippingZonesComponent.prototype.getZoneToGeoZones = function () {
        var _this = this;
        console.log('Get zoneToGeoZones for Store id: ' + this.store.id + ' and Geo Zone id '
            + this.geoZone.id);
        this.appService.saveWithUrl('/service/order/getZoneToGeoZones/', {
            'storeId': this.store.id,
            'geoZoneId': this.geoZone.id,
            'lang': this.appService.appInfoStorage.language.code
        }).subscribe(function (data) {
            console.log("Zone to Geo Zones .... ");
            console.log(data);
            _this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.zoneToGeoZoneDS.paginator = _this.paginator;
            _this.zoneToGeoZoneDS.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('ZoneToGeoZone retrieved '); });
    };
    ShippingZonesComponent.prototype.addNewZoneToGeoZone = function () {
        this.errors = '';
        this.messages = '';
        if (!this.zoneToGeoZoneDS || this.zoneToGeoZoneDS == null || !this.zoneToGeoZoneDS.data) {
            var data = [];
            this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            this.zoneToGeoZoneDS.data = [];
        }
        this.zoneToGeoZoneDS.data.unshift(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
        this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.zoneToGeoZoneDS.data);
        this.zoneToGeoZoneDS.paginator = this.paginator;
        this.zoneToGeoZoneDS.sort = this.sort;
    };
    ShippingZonesComponent.prototype.saveZoneToGeoZone = function (zoneToGeoZone) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if ((zoneToGeoZone.deliveryTimeBegin && !zoneToGeoZone.deliveryTimeEnd)
            || (!zoneToGeoZone.deliveryTimeBegin && zoneToGeoZone.deliveryTimeEnd)
            || (zoneToGeoZone.deliveryTimeBegin > zoneToGeoZone.deliveryTimeEnd)) {
            this.translate.get(['MESSAGE.INVALID_DELIVERY_TIME']).subscribe(function (res) {
                _this.errors = res['MESSAGE.INVALID_DELIVERY_TIME'];
            });
            return;
        }
        else {
            if (zoneToGeoZone.deliveryTimeBegin <= zoneToGeoZone.deliveryTimeEnd) {
                if (!zoneToGeoZone.deliveryTimeUnit || zoneToGeoZone.deliveryTimeUnit === '0') {
                    this.translate.get(['MESSAGE.INVALID_DELIVERY_UNIT']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.INVALID_DELIVERY_UNIT'];
                    });
                    return;
                }
            }
        }
        if (zoneToGeoZone.country) {
            if (!zoneToGeoZone.zone || !zoneToGeoZone.zone.id || !(zoneToGeoZone.zone.id > 0)) {
                zoneToGeoZone.zone = null;
            }
            zoneToGeoZone.geoZone = this.geoZone;
            zoneToGeoZone.store = this.store;
            try {
                this.messages = '';
                console.log(zoneToGeoZone);
                // const index: number = this.currentTab.tabDtls.findIndex((tbd) => tbd.id === tabDtl.id);
                var index_1 = this.zoneToGeoZoneDS.data.indexOf(zoneToGeoZone);
                this.appService.save(zoneToGeoZone, 'ZoneToGeoZone')
                    .subscribe(function (result) {
                    if (result.id > 0) {
                        if (index_1 !== -1) {
                            _this.zoneToGeoZoneDS.data.splice(index_1, 1);
                        }
                        console.log(result);
                        _this.zoneToGeoZoneDS.data.push(result);
                        _this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.zoneToGeoZoneDS.data);
                        _this.zoneToGeoZoneDS.paginator = _this.paginator;
                        _this.zoneToGeoZoneDS.sort = _this.sort;
                        _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                            _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                        });
                    }
                    else {
                        _this.selectedTab = 1;
                        _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                            _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                        });
                    }
                }, function (error) { return console.log(error); }, function () { return console.log('Get Tab Dtl complete'); });
            }
            catch (e) {
                console.log(e);
                this.selectedTab = 1;
                this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                });
            }
        }
    };
    ShippingZonesComponent.prototype.deleteZoneToGeoZone = function (zoneToGeoZone) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        if (!(zoneToGeoZone.id > 0)) {
            var index = this.zoneToGeoZoneDS.data.indexOf(zoneToGeoZone);
            if (index !== -1) {
                this.zoneToGeoZoneDS.data.splice(index, 1);
                this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.zoneToGeoZoneDS.data);
                this.zoneToGeoZoneDS.paginator = this.paginator;
                this.zoneToGeoZoneDS.sort = this.sort;
            }
        }
        else {
            this.appService.delete(zoneToGeoZone.id, 'com.softenza.emarket.model.ZoneToGeoZone')
                .subscribe(function (resp) {
                if (resp.result === 'SUCCESS') {
                    var index = _this.zoneToGeoZoneDS.data.indexOf(zoneToGeoZone);
                    if (index !== -1) {
                        _this.zoneToGeoZoneDS.data.splice(index, 1);
                        _this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.zoneToGeoZoneDS.data);
                        _this.zoneToGeoZoneDS.paginator = _this.paginator;
                        _this.zoneToGeoZoneDS.sort = _this.sort;
                    }
                }
                else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                    _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                    });
                }
            });
        }
    };
    ShippingZonesComponent.prototype.getCountries = function () {
        var _this = this;
        var parameters = [];
        this.appService.getAllByCriteria('com.softenza.emarket.model.Country', parameters)
            .subscribe(function (data) {
            _this.countries = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Countries complete'); });
    };
    ShippingZonesComponent.prototype.remove = function (geoZone) {
        var _this = this;
        this.messages = '';
        this.errors = '';
        this.appService.delete(geoZone.id, 'com.softenza.emarket.model.GeoZone')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(geoZone);
                if (index !== -1) {
                    _this.dataSource.data.splice(index, 1);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
            else if (resp.result === 'FOREIGN_KEY_FAILURE') {
                _this.translate.get(['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.DELETE_UNSUCCESS_FOREIGN_KEY'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.ERROR_OCCURRED', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.ERROR_OCCURRED'];
                });
            }
        });
    };
    ShippingZonesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ShippingZonesComponent.prototype.clear = function () {
        this.geoZone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.geoZone.store = this.store;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        var data = [];
        this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.zoneToGeoZoneDS.data = [];
    };
    ShippingZonesComponent.prototype.addSectionItem = function () {
        this.errors = '';
        this.messages = '';
        this.selectedTab = 1;
        this.geoZone = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.geoZone.store = this.store;
        var data = [];
        this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.zoneToGeoZoneDS.data = [];
    };
    ShippingZonesComponent.prototype.edit = function (si) {
        this.errors = '';
        this.messages = '';
        this.geoZone = si;
        var data = [];
        this.zoneToGeoZoneDS = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.zoneToGeoZoneDS.data = [];
        this.getZoneToGeoZones();
        this.selectedTab = 1;
    };
    ShippingZonesComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.errors = '';
        try {
            this.messages = '';
            console.log(this.geoZone);
            this.geoZone.store = this.store;
            this.geoZone.status = (this.geoZone.status == null
                || this.geoZone.status.toString() === 'false'
                || this.geoZone.status.toString() === '0') ? 0 : 1;
            var index_2 = this.dataSource.data.indexOf(this.geoZone);
            this.appService.save(this.geoZone, 'GeoZone')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.geoZone = result;
                    if (index_2 !== -1) {
                        _this.dataSource.data.splice(index_2, 1);
                    }
                    _this.dataSource.data.push(result);
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    _this.selectedTab = 1;
                    _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ShippingZonesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ShippingZonesComponent.prototype, "sort", void 0);
    ShippingZonesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geo-zone',
            templateUrl: './ShippingZones.component.html',
            styleUrls: ['./ShippingZones.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ShippingZonesComponent);
    return ShippingZonesComponent;
}());



/***/ }),

/***/ 2192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveriesComponent", function() { return DeliveriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeliveriesComponent = /** @class */ (function () {
    function DeliveriesComponent(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.iconSize = 'lg';
        this.storeShippers = [];
        this.iconColor = '';
    }
    DeliveriesComponent.prototype.ngOnInit = function () {
        this.getUser(Number(this.appService.tokenStorage.getUserId()));
        this.getStoreShippers(Number(this.appService.tokenStorage.getUserId()));
    };
    DeliveriesComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.appService.getOneWithChildsAndFiles(userId, 'User')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.user = result;
            }
            else {
                _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.READ_FAILED'];
                });
            }
        });
    };
    DeliveriesComponent.prototype.getStoreShippers = function (userId) {
        var _this = this;
        if (userId > 0) {
            this.storeShippers = [];
            var parameters = [];
            parameters.push('e.shipper.user.id = |userId|' + userId + '|Integer');
            this.appService.getAllByCriteria('com.softenza.emarket.model.StoreShipper', parameters)
                .subscribe(function (data) {
                console.log(data);
                _this.storeShippers = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreShipper complete for userId=' + userId); });
        }
    };
    DeliveriesComponent.prototype.isPhoneValid = function (phone) {
        if (phone && phone.startsWith('+') && phone.length > 8) {
            return true;
        }
        else {
            return false;
        }
    };
    DeliveriesComponent.prototype.changeStoreShip = function (val) {
        var _this = this;
        this.errors = '';
        console.log(this.user);
        if (val === 1 && !this.isPhoneValid(this.user.mobilePhone)) {
            this.translate.get(['VALIDATION.INVALID_PHONE', 'COMMON.ERROR']).subscribe(function (res) {
                _this.translate.get(['COMMON.PHONE_FORMAT', 'COMMON.ERROR']).subscribe(function (res2) {
                    _this.translate.get(['MESSAGE.SET_PHONE', 'COMMON.ERROR']).subscribe(function (res3) {
                        _this.errors = res['VALIDATION.INVALID_PHONE'] + ' : ' + _this.user.mobilePhone +
                            '. ' + res2['COMMON.PHONE_FORMAT'] +
                            '. ' + res3['MESSAGE.SET_PHONE'];
                    });
                });
            });
        }
        else {
            this.user.isShipper = val;
            this.appService.saveWithUrl('/service/user/user/changeShipperSettings', this.user)
                .subscribe(function (data) {
                console.log(data);
                _this.getStoreShippers(_this.user.id);
                if (data.result === 'SUCCESS') {
                    _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.errors = res['MESSAGE.SAVE_UNSUCCESS'] + ' : ' + data.result;
                    });
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Get all changeStoreShipper complete'); });
        }
    };
    DeliveriesComponent.prototype.changeStoreShipper = function (storeShipper) {
        var _this = this;
        storeShipper.shipperStatus = (storeShipper.shipperStatus == null
            || storeShipper.shipperStatus.toString() === 'false'
            || storeShipper.shipperStatus.toString() === '0') ? 0 : 1;
        console.log(storeShipper);
        this.appService.save(storeShipper, 'StoreShipper')
            .subscribe(function (result) {
            if (result.id > 0) {
                // this. getStoreShippers(Number(this.appService.tokenStorage.getUserId()));
                _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                });
            }
        });
    };
    DeliveriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            templateUrl: './Deliveries.component.html',
            styleUrls: ['./Deliveries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], DeliveriesComponent);
    return DeliveriesComponent;
}());



/***/ }),

/***/ 2193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerSalesSummariesComponent", function() { return SellerSalesSummariesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
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




var SellerSalesSummariesComponent = /** @class */ (function (_super) {
    __extends(SellerSalesSummariesComponent, _super);
    function SellerSalesSummariesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        return _this;
    }
    SellerSalesSummariesComponent.prototype.ngOnInit = function () {
    };
    SellerSalesSummariesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sellersales-summaries',
            templateUrl: './SellerSalesSummaries.component.html',
            styleUrls: ['./SellerSalesSummaries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SellerSalesSummariesComponent);
    return SellerSalesSummariesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerPayoutsComponent", function() { return SellerPayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
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




var SellerPayoutsComponent = /** @class */ (function (_super) {
    __extends(SellerPayoutsComponent, _super);
    function SellerPayoutsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        return _this;
    }
    SellerPayoutsComponent.prototype.ngOnInit = function () {
    };
    SellerPayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-payouts',
            templateUrl: './SellerPayouts.component.html',
            styleUrls: ['./SellerPayouts.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SellerPayoutsComponent);
    return SellerPayoutsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreIngredientsComponent", function() { return StoreIngredientsComponent; });
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
/* harmony import */ var _StoreIngredient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2196);
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












var StoreIngredientsComponent = /** @class */ (function (_super) {
    __extends(StoreIngredientsComponent, _super);
    function StoreIngredientsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.storeIngredientsColumns = ['ingredientName', 'quantity', 'minimumQty', 'maximumQty', 'status'];
        _this.lowInventoryColumns = ['ingredientName', 'quantity', 'minimumQty', 'maximumQty', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        return _this;
    }
    StoreIngredientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.getStores();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    StoreIngredientsComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    StoreIngredientsComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
        this.search();
    };
    StoreIngredientsComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    StoreIngredientsComponent.prototype.changeOrderType = function (event) {
    };
    StoreIngredientsComponent.prototype.getStores = function () {
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
    StoreIngredientsComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
            this.searchCriteria.languageId = +this.appService.appInfoStorage.language.id;
            this.appService.saveWithUrl('/service/catalog/getStoreIngredients', this.searchCriteria)
                .subscribe(function (data) {
                _this.storeIngredientsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.storeIngredientsDatasource.paginator = _this.storeIngredientsPaginator;
                _this.storeIngredientsDatasource.sort = _this.storeIngredientsSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get store ingredients complete'); });
        }
    };
    StoreIngredientsComponent.prototype.searchLowInventory = function () {
        var _this = this;
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria.languageId = +this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/catalog/getStoreIngredients', this.searchCriteria)
            .subscribe(function (data) {
            _this.lowInventoryDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.lowInventoryDatasource.paginator = _this.lowInventoryPaginator;
            _this.lowInventoryDatasource.sort = _this.lowInventorySort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get low inventories complete'); });
    };
    StoreIngredientsComponent.prototype.applyFilter = function (filterValue) {
        this.storeIngredientsDatasource.filter = filterValue.trim().toLowerCase();
        if (this.storeIngredientsDatasource.paginator) {
            this.storeIngredientsDatasource.paginator.firstPage();
        }
    };
    StoreIngredientsComponent.prototype.applyLowInventoryFilter = function (filterValue) {
        this.lowInventoryDatasource.filter = filterValue.trim().toLowerCase();
        if (this.lowInventoryDatasource.paginator) {
            this.lowInventoryDatasource.paginator.firstPage();
        }
    };
    StoreIngredientsComponent.prototype.getStoreIngredientDetails = function (storeIngredient) {
        this.storeIngredientComponent.getStoreIngredient(storeIngredient);
        this.storeIngredientComponent.getStoreUnassignedIngredients();
        this.selected.setValue(1);
    };
    StoreIngredientsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.inventoryLevel = null;
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
            _this.lowInventoryDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
            _this.lowInventoryDatasource.paginator = _this.lowInventoryPaginator;
            _this.lowInventoryDatasource.sort = _this.lowInventorySort;
            if (_this.storeIngredientComponent) {
                if (event && event.value) {
                    _this.storeIngredientComponent.store = event.value;
                }
                else {
                    _this.storeIngredientComponent.store = event;
                }
                _this.storeIngredientComponent.clear();
                _this.storeIngredientComponent.getStoreUnassignedIngredients();
            }
        }, 500);
    };
    StoreIngredientsComponent.prototype.updateDataTable = function (storeIngredient) {
        this.updateDatasourceData(this.storeIngredientsDatasource, this.storeIngredientsPaginator, this.storeIngredientsSort, storeIngredient);
        // this.selected.setValue(0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorStoreIngredients', { static: false }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StoreIngredientsComponent.prototype, "storeIngredientsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StoreIngredientsComponent.prototype, "storeIngredientsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorLowInventory', { static: false }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StoreIngredientsComponent.prototype, "lowInventoryPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StoreIngredientsComponent.prototype, "lowInventorySort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_StoreIngredient_component__WEBPACK_IMPORTED_MODULE_9__["StoreIngredientComponent"], { static: false }),
        __metadata("design:type", _StoreIngredient_component__WEBPACK_IMPORTED_MODULE_9__["StoreIngredientComponent"])
    ], StoreIngredientsComponent.prototype, "storeIngredientComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StoreIngredientsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreIngredientsComponent.prototype, "isAdminPage", void 0);
    StoreIngredientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-ingredients',
            templateUrl: './StoreIngredients.component.html',
            styleUrls: ['./StoreIngredients.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], StoreIngredientsComponent);
    return StoreIngredientsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreIngredientComponent", function() { return StoreIngredientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
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








var StoreIngredientComponent = /** @class */ (function (_super) {
    __extends(StoreIngredientComponent, _super);
    function StoreIngredientComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.inventoryColumns = ['quantity', 'description', 'createdBy', 'createdDate'];
        _this.messages = '';
        _this.storeIngredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.ingredientDescriptions = [];
        _this.storeIngredientInventory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeIngredientSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.addNew = false;
        _this.ingredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        return _this;
    }
    StoreIngredientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.storeIngredient.id = params.id;
                _this.clear();
                _this.getStoreIngredient(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    StoreIngredientComponent.prototype.ngAfterViewInit = function () {
        this.inventoryDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.inventoryDatasource.paginator = this.inventoryPaginator;
    };
    StoreIngredientComponent.prototype.clear = function () {
        this.messages = '';
        this.storeIngredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.currentOption = '';
    };
    StoreIngredientComponent.prototype.getStoreIngredient = function (storeIngredient) {
        var _this = this;
        this.messages = '';
        if (storeIngredient && storeIngredient.id > 0) {
            this.getStoreIngredientInventory(storeIngredient.id);
            this.appService.getOneWithChildsAndFiles(storeIngredient.id, 'StoreIngredient')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.storeIngredient = result;
                    _this.storeIngredient.ingredientName = storeIngredient.ingredient.name;
                }
                else {
                    _this.storeIngredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear();
        }
    };
    StoreIngredientComponent.prototype.getStoreUnassignedIngredients = function () {
        var _this = this;
        this.searchCriteria.storeId = this.store.id;
        this.searchCriteria.languageId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/catalog/getStoreUnassignedIngredients', this.searchCriteria)
            .subscribe(function (data) {
            _this.ingredientDescriptions = data;
            _this.ingredientOptions = data;
            _this.filteredIngredientOptions = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get ingredients complete'); });
    };
    StoreIngredientComponent.prototype.getStoreIngredientInventory = function (storeIngredientId) {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getStoreIngredientInventory', { 'storeIngredientId': storeIngredientId })
            .subscribe(function (data) {
            _this.inventoryDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.inventoryDatasource.paginator = _this.inventoryPaginator;
            _this.inventoryDatasource.sort = _this.inventorySort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get store ingredient inventory complete'); });
    };
    StoreIngredientComponent.prototype.filterOptions = function (val) {
        if (val) {
            var filterValue_1 = typeof val === 'string' ? val.toLowerCase() : val.name.toLowerCase();
            this.filteredIngredientOptions = this.ingredientOptions
                .filter(function (ingredientDesc) { return ingredientDesc.name.toLowerCase().startsWith(filterValue_1); });
        }
        else {
            this.filteredIngredientOptions = this.ingredientOptions;
        }
    };
    StoreIngredientComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.storeIngredient.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (!this.storeIngredient.store.id) {
            this.storeIngredient.store.id = this.store.id;
        }
        this.currentOption = this.storeIngredient.ingredientName;
        this.setToggleValues();
        this.appService.save(this.storeIngredient, 'StoreIngredient')
            .subscribe(function (data) {
            _this.processResult(data, _this.storeIngredient, null);
            _this.storeIngredient = data;
            _this.storeIngredient.storeName = _this.store.name;
            _this.storeIngredient.ingredientName = _this.currentOption;
            _this.storeIngredientSaveEvent.emit(_this.storeIngredient);
        }, function (error) { return console.log(error); }, function () { return console.log('Save StoreIngredient complete'); });
    };
    StoreIngredientComponent.prototype.validateSelectedIngredient = function () {
        var _this = this;
        if (!this.storeIngredient.ingredient && typeof (this.storeIngredient.ingredientName) === 'string') {
            var index = this.ingredientOptions.findIndex(function (x) { return x.name === _this.storeIngredient.ingredientName; });
            if (index === -1) {
                return false;
            }
            else {
                this.storeIngredient.ingredient = this.ingredientOptions[index].ingredient;
            }
        }
        if (!this.storeIngredient.ingredient || !this.storeIngredient.ingredient.id) {
            return false;
        }
        return true;
    };
    StoreIngredientComponent.prototype.addQuantity = function () {
        var _this = this;
        this.messages = '';
        this.storeIngredientInventory.modBy = +this.appService.tokenStorage.getUserId();
        if (!this.storeIngredientInventory.storeIngredient.id) {
            this.storeIngredientInventory.storeIngredient.id = this.storeIngredient.id;
        }
        this.appService.save(this.storeIngredientInventory, 'StoreIngredientInventory')
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.storeIngredientInventory, null);
            _this.storeIngredientInventory = data;
            _this.addQuantityToStoreIngredient(_this.storeIngredientInventory.quantity);
            _this.storeIngredientInventory.addByFirstName = _this.appService.tokenStorage.getUser().firstName;
            _this.storeIngredientInventory.addByLastName = _this.appService.tokenStorage.getUser().lastName;
            _this.updateDatasourceData(_this.inventoryDatasource, _this.inventoryPaginator, _this.inventorySort, _this.storeIngredientInventory);
            _this.storeIngredientInventory = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            _this.storeIngredientSaveEvent.emit(_this.storeIngredient);
        }, function (error) { return console.log(error); }, function () { return console.log('Save StoreIngredientInventory complete'); });
    };
    StoreIngredientComponent.prototype.addQuantityToStoreIngredient = function (quantity) {
        if (!this.storeIngredient.quantity) {
            this.storeIngredient.quantity = 0;
        }
        this.storeIngredient.quantity = Number(this.storeIngredient.quantity) + Number(quantity);
    };
    StoreIngredientComponent.prototype.setToggleValues = function () {
        this.storeIngredient.status = (this.storeIngredient.status == null
            || this.storeIngredient.status.toString() === 'false'
            || this.storeIngredient.status.toString() === '0') ? 0 : 1;
    };
    StoreIngredientComponent.prototype.setSelectedIngredient = function (ingredientDesc) {
        this.storeIngredient.ingredient = ingredientDesc.ingredient;
    };
    StoreIngredientComponent.prototype.isEmpty = function (value) {
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    StoreIngredientComponent.prototype.saveIngredient = function () {
        var _this = this;
        this.messages = '';
        this.ingredient.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.setIngredientToggleValues();
        this.appService.save(this.ingredient, 'Ingredient')
            .subscribe(function (data) {
            _this.processResult(data, _this.ingredient, null);
            _this.ingredient = data;
            _this.storeIngredient.ingredient = _this.ingredient;
            _this.addNew = false;
            for (var _i = 0, _a = _this.ingredient.ingredientDescriptions; _i < _a.length; _i++) {
                var ingDesc = _a[_i];
                if (ingDesc.language.id === _this.appService.appInfoStorage.language.id) {
                    _this.storeIngredient.ingredientName = ingDesc.name;
                }
            }
            _this.save();
        }, function (error) { return console.log(error); }, function () { return console.log('Save StoreMenu complete'); });
    };
    StoreIngredientComponent.prototype.addNewMenu = function () {
        this.addNew = true;
        this.storeIngredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.ingredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.ingredient.ingredientDescriptions = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var id = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            id.language = lang;
            id.name = '';
            this.ingredient.ingredientDescriptions.push(id);
        }
    };
    StoreIngredientComponent.prototype.cancel = function () {
        this.addNew = false;
        this.storeIngredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.ingredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.ingredient.ingredientDescriptions = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var id = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            id.language = lang;
            id.name = '';
            this.ingredient.ingredientDescriptions.push(id);
        }
    };
    StoreIngredientComponent.prototype.setIngredientToggleValues = function () {
        this.ingredient.status = (this.ingredient.status == null
            || this.ingredient.status.toString() === 'false'
            || this.ingredient.status.toString() === '0') ? 0 : 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], StoreIngredientComponent.prototype, "inventoryPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], StoreIngredientComponent.prototype, "inventorySort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreIngredientComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreIngredientComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreIngredientComponent.prototype, "store", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StoreIngredientComponent.prototype, "storeIngredientSaveEvent", void 0);
    StoreIngredientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-ingredient',
            templateUrl: './StoreIngredient.component.html',
            styleUrls: ['./StoreIngredients.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], StoreIngredientComponent);
    return StoreIngredientComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreMenusComponent", function() { return StoreMenusComponent; });
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
/* harmony import */ var _StoreMenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2198);
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












var StoreMenusComponent = /** @class */ (function (_super) {
    __extends(StoreMenusComponent, _super);
    function StoreMenusComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.storeMenusColumns = ['menuName', 'showInKitchen', 'showInBar', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        return _this;
    }
    StoreMenusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.getStores();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    StoreMenusComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    StoreMenusComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
        this.search();
    };
    StoreMenusComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    StoreMenusComponent.prototype.changeOrderType = function (event) {
        if (this.storeMenuComponent.addNew === true) {
            this.storeMenuComponent.cancel();
        }
    };
    StoreMenusComponent.prototype.getStores = function () {
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
    StoreMenusComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
            this.searchCriteria.languageId = +this.appService.appInfoStorage.language.id;
            this.appService.saveWithUrl('/service/catalog/getStoreMenus', this.searchCriteria)
                .subscribe(function (data) {
                _this.storeMenusDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.storeMenusDatasource.paginator = _this.storeMenusPaginator;
                _this.storeMenusDatasource.sort = _this.storeMenusSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get store menus complete'); });
        }
    };
    StoreMenusComponent.prototype.applyFilter = function (filterValue) {
        this.storeMenusDatasource.filter = filterValue.trim().toLowerCase();
        if (this.storeMenusDatasource.paginator) {
            this.storeMenusDatasource.paginator.firstPage();
        }
    };
    StoreMenusComponent.prototype.getStoreMenuDetails = function (storeMenu) {
        this.storeMenuComponent.getStoreMenu(storeMenu);
        this.storeMenuComponent.getStoreUnassignedMenus();
        this.selected.setValue(1);
    };
    StoreMenusComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
            if (_this.storeMenuComponent) {
                if (event && event.value) {
                    _this.storeMenuComponent.store = event.value;
                }
                else {
                    _this.storeMenuComponent.store = event;
                }
                _this.storeMenuComponent.clear();
                _this.storeMenuComponent.getStoreUnassignedMenus();
            }
        }, 500);
    };
    StoreMenusComponent.prototype.updateDataTable = function (storeMenu) {
        this.updateDatasourceData(this.storeMenusDatasource, this.storeMenusPaginator, this.storeMenusSort, storeMenu);
        // this.selected.setValue(0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorStoreMenus', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StoreMenusComponent.prototype, "storeMenusPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StoreMenusComponent.prototype, "storeMenusSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_StoreMenu_component__WEBPACK_IMPORTED_MODULE_9__["StoreMenuComponent"], { static: false }),
        __metadata("design:type", _StoreMenu_component__WEBPACK_IMPORTED_MODULE_9__["StoreMenuComponent"])
    ], StoreMenusComponent.prototype, "storeMenuComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StoreMenusComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreMenusComponent.prototype, "isAdminPage", void 0);
    StoreMenusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-menus',
            templateUrl: './StoreMenus.component.html',
            styleUrls: ['./StoreMenus.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], StoreMenusComponent);
    return StoreMenusComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreMenuComponent", function() { return StoreMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
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








var StoreMenuComponent = /** @class */ (function (_super) {
    __extends(StoreMenuComponent, _super);
    function StoreMenuComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.aProductColumns = ['image', 'productName', 'actions'];
        _this.sProductColumns = ['image', 'productName', 'actions'];
        _this.messages = '';
        _this.storeMenu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.menuDescriptions = [];
        _this.storeProductMenu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.menu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeMenuSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.addNew = false;
        return _this;
    }
    StoreMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Init called');
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.storeMenu.id = params.id;
                _this.clear();
                _this.getStoreMenu(params.id);
                console.log(_this.storeMenu);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.aProductDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
    };
    StoreMenuComponent.prototype.ngAfterViewInit = function () {
        this.aProductDatasource.paginator = this.aProductPaginator;
        this.sProductDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.sProductDatasource.paginator = this.sProductPaginator;
    };
    StoreMenuComponent.prototype.clear = function () {
        this.messages = '';
        this.storeMenu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.currentOption = '';
    };
    StoreMenuComponent.prototype.getStoreMenuUnassignedProducts = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getStoreMenuUnassignedProductStores/', {
            storeId: this.store.id,
            storeMenuId: this.storeMenu.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.aProductDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.aProductDatasource.paginator = _this.aProductPaginator;
            _this.aProductDatasource.sort = _this.aProductSort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all store menu unassigned products complete'); });
    };
    StoreMenuComponent.prototype.getStoreMenu = function (storeMenu) {
        var _this = this;
        this.messages = '';
        if (storeMenu && storeMenu.id > 0) {
            this.appService.getOneWithChildsAndFiles(storeMenu.id, 'StoreMenu')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.addNew = false;
                    _this.storeMenu = result;
                    _this.storeMenu.menuName = storeMenu.menuName;
                    _this.storeMenu.menu.name = storeMenu.menuName;
                    _this.getStoreMenuUnassignedProducts();
                    _this.getStoreMenuProducts();
                }
                else {
                    _this.storeMenu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear();
        }
    };
    StoreMenuComponent.prototype.getStoreUnassignedMenus = function () {
        var _this = this;
        this.searchCriteria.storeId = this.store.id;
        this.searchCriteria.languageId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/catalog/getStoreUnassignedMenus', this.searchCriteria)
            .subscribe(function (data) {
            if (data) {
                data.push(_this.storeMenu);
            }
            _this.menuDescriptions = data;
            _this.menuOptions = data;
            _this.filteredMenuOptions = data;
            console.log(_this.storeMenu);
        }, function (error) { return console.log(error); }, function () { return console.log('Get menus complete'); });
    };
    StoreMenuComponent.prototype.getStoreMenuProducts = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getProductStoreMenus', {
            storeId: this.storeMenu.store.id,
            storeMenuId: this.storeMenu.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.sProductDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.sProductDatasource.paginator = _this.sProductPaginator;
            _this.sProductDatasource.sort = _this.sProductSort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get store menu products complete'); });
    };
    StoreMenuComponent.prototype.filterOptions = function (val) {
        if (val) {
            var filterValue_1 = typeof val === 'string' ? val.toLowerCase() : val.name.toLowerCase();
            this.filteredMenuOptions = this.menuOptions
                .filter(function (menuDesc) { menuDesc.name && menuDesc.name.toLowerCase().startsWith(filterValue_1); });
        }
        else {
            this.filteredMenuOptions = this.menuOptions;
        }
    };
    StoreMenuComponent.prototype.save = function () {
        var _this = this;
        this.messages = '';
        this.storeMenu.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (!this.storeMenu.store.id) {
            this.storeMenu.store.id = this.store.id;
        }
        this.currentOption = this.storeMenu.menuName;
        this.setToggleValues();
        this.appService.save(this.storeMenu, 'StoreMenu')
            .subscribe(function (data) {
            _this.processResult(data, _this.storeMenu, null);
            _this.storeMenu = data;
            _this.storeMenu.storeName = _this.store.name;
            _this.storeMenu.menuName = _this.currentOption;
            _this.storeMenuSaveEvent.emit(_this.storeMenu);
            _this.getStoreMenu(_this.storeMenu);
        }, function (error) { return console.log(error); }, function () { return console.log('Save StoreMenu complete'); });
    };
    StoreMenuComponent.prototype.saveMenu = function () {
        var _this = this;
        this.messages = '';
        this.menu.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.setMenuToggleValues();
        this.appService.save(this.menu, 'Menu')
            .subscribe(function (data) {
            _this.processResult(data, _this.menu, null);
            _this.menu = data;
            _this.storeMenu.menu = _this.menu;
            _this.addNew = false;
            for (var _i = 0, _a = _this.menu.menuDescriptions; _i < _a.length; _i++) {
                var menuDesc = _a[_i];
                if (menuDesc.language.id === _this.appService.appInfoStorage.language.id) {
                    _this.storeMenu.menuName = menuDesc.name;
                }
            }
            _this.save();
        }, function (error) { return console.log(error); }, function () { return console.log('Save StoreMenu complete'); });
    };
    StoreMenuComponent.prototype.addNewMenu = function () {
        this.addNew = true;
        this.storeMenu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.menu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.menu.menuDescriptions = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var md = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            md.language = lang;
            md.name = '';
            this.menu.menuDescriptions.push(md);
        }
    };
    StoreMenuComponent.prototype.cancel = function () {
        this.addNew = false;
        this.storeMenu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.menu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.menu.menuDescriptions = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var md = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            md.language = lang;
            md.name = '';
            this.menu.menuDescriptions.push(md);
        }
    };
    StoreMenuComponent.prototype.validateSelectedMenu = function () {
        var _this = this;
        console.log(this.storeMenu);
        if (typeof (this.storeMenu.menuName) === 'string') {
            var index = this.menuOptions.findIndex(function (x) { return x.name === _this.storeMenu.menuName; });
            if (index === -1) {
                console.log('1');
                if (this.storeMenu.id && this.storeMenu.id > 0) {
                    return true;
                }
                return false;
            }
            else {
                this.storeMenu.menu = this.menuOptions[index].menu;
            }
        }
        if (!this.storeMenu.menu || !this.storeMenu.menu.id) {
            console.log('2');
            return false;
        }
        console.log('3');
        return true;
    };
    StoreMenuComponent.prototype.setToggleValues = function () {
        this.storeMenu.status = (this.storeMenu.status == null
            || this.storeMenu.status.toString() === 'false'
            || this.storeMenu.status.toString() === '0') ? 0 : 1;
        this.storeMenu.showInKitchen = (this.storeMenu.showInKitchen == null
            || this.storeMenu.showInKitchen.toString() === 'false'
            || this.storeMenu.showInKitchen.toString() === '0') ? 0 : 1;
        this.storeMenu.showInBar = (this.storeMenu.showInBar == null
            || this.storeMenu.showInBar.toString() === 'false'
            || this.storeMenu.showInBar.toString() === '0') ? 0 : 1;
    };
    StoreMenuComponent.prototype.setMenuToggleValues = function () {
        this.menu.status = (this.menu.status == null
            || this.menu.status.toString() === 'false'
            || this.menu.status.toString() === '0') ? 0 : 1;
        this.menu.showInKitchen = (this.menu.showInKitchen == null
            || this.menu.showInKitchen.toString() === 'false'
            || this.menu.showInKitchen.toString() === '0') ? 0 : 1;
    };
    StoreMenuComponent.prototype.setSelectedMenu = function (menuDesc) {
        this.storeMenu.id = undefined;
        this.storeMenu.menu = menuDesc.menu;
        this.storeMenu.showInKitchen = menuDesc.menu.showInKitchen;
        this.storeMenu.menuName = menuDesc.name;
        this.aProductDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.aProductDatasource.paginator = this.aProductPaginator;
        this.aProductDatasource.sort = this.aProductSort;
        this.sProductDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.sProductDatasource.paginator = this.sProductPaginator;
        this.sProductDatasource.sort = this.sProductSort;
    };
    StoreMenuComponent.prototype.isEmpty = function (value) {
        '';
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    StoreMenuComponent.prototype.saveProductStoreMenu = function (productStore) {
        var _this = this;
        var productStoreMenu = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        var oldProductName = productStore.productName;
        var oldProductImage = productStore.image;
        productStoreMenu.productStoreId = productStore.id;
        productStoreMenu.storeMenuId = this.storeMenu.id;
        productStoreMenu.menu = this.storeMenu.menu;
        productStoreMenu.productId = productStore.product.id;
        productStoreMenu.storeId = productStore.store.id;
        this.appService.saveWithUrl('/service/crud/ProductStoreMenu/save/', productStoreMenu)
            .subscribe(function (data) {
            _this.processResult(data, productStoreMenu, null);
            productStoreMenu.id = data.id;
            productStoreMenu.productName = oldProductName;
            productStoreMenu.image = oldProductImage;
            productStoreMenu.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            productStoreMenu.product.id = productStoreMenu.productId;
            _this.updateDatasourceData(_this.sProductDatasource, _this.sProductPaginator, _this.sProductSort, productStoreMenu);
            _this.processDataSourceDeleteResult({ result: 'SUCCESS' }, _this.messages, productStore, _this.aProductDatasource);
            _this.aProductDatasource.data = Array.from(_this.aProductDatasource.data);
        }, function (error) { return console.log(error); }, function () { return console.log('Save selected product store menu complete'); });
    };
    StoreMenuComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    StoreMenuComponent.prototype.deleteProductStoreMenu = function (productStoreMenu, index) {
        var _this = this;
        this.messages = '';
        var productStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        productStore.id = productStoreMenu.productStoreId;
        productStore.productName = productStoreMenu.productName;
        productStore.product = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        productStore.product.id = productStoreMenu.product.id;
        productStore.image = productStoreMenu.image;
        productStore.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        productStore.store.id = productStoreMenu.storeId;
        this.appService.delete(productStoreMenu.id, 'ProductStoreMenu')
            .subscribe(function (data) {
            _this.updateDatasourceData(_this.aProductDatasource, _this.aProductPaginator, _this.aProductSort, productStore);
            _this.processDataSourceDeleteResult(data, _this.messages, productStoreMenu, _this.sProductDatasource);
            _this.sProductDatasource.data = Array.from(_this.sProductDatasource.data);
        });
    };
    StoreMenuComponent.prototype.applyAvailableProductFilter = function (filterValue) {
        this.aProductDatasource.filter = filterValue.trim().toLowerCase();
        if (this.aProductDatasource.paginator) {
            this.aProductDatasource.paginator.firstPage();
        }
    };
    StoreMenuComponent.prototype.applySelectedProductFilter = function (filterValue) {
        this.sProductDatasource.filter = filterValue.trim().toLowerCase();
        if (this.sProductDatasource.paginator) {
            this.sProductDatasource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aProductPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], StoreMenuComponent.prototype, "aProductPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], StoreMenuComponent.prototype, "aProductSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sProductPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], StoreMenuComponent.prototype, "sProductPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], StoreMenuComponent.prototype, "sProductSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreMenuComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreMenuComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StoreMenuComponent.prototype, "store", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StoreMenuComponent.prototype, "storeMenuSaveEvent", void 0);
    StoreMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-menu',
            templateUrl: './StoreMenu.component.html',
            styleUrls: ['./StoreMenus.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], StoreMenuComponent);
    return StoreMenuComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrdersComponent", function() { return PurchaseOrdersComponent; });
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
/* harmony import */ var _PurchaseOrder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2200);
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












var PurchaseOrdersComponent = /** @class */ (function (_super) {
    __extends(PurchaseOrdersComponent, _super);
    function PurchaseOrdersComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        // purchaseOrdersColumns: string[] = ['purchaser', 'supplier', 'poDate', 'subTotal', 'taxes', 'discount', 'amount', 'status', 'actions'];
        _this.purchaseOrdersColumns = ['purchaser', 'supplier', 'poDate', 'amount', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeEmployees = [];
        _this.suppliers = [];
        return _this;
    }
    PurchaseOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Page Purchase Order Loaded ...');
        this.clear();
        this.getStores();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    PurchaseOrdersComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    PurchaseOrdersComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
        this.search();
        this.getSuppliers();
    };
    PurchaseOrdersComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    PurchaseOrdersComponent.prototype.getStores = function () {
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
    PurchaseOrdersComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.searchCriteria.storeId) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.searchCriteria.storeId + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    PurchaseOrdersComponent.prototype.getSuppliers = function () {
        var _this = this;
        var parameters = [];
        //parameters.push('e.store.id = |sId|' + this.store.id + '|Integer');
        parameters.push('e.status = |supplierStatus|1|Integer');
        this.appService.getAllByCriteria('Supplier', parameters, ' ')
            .subscribe(function (data) {
            _this.suppliers = data;
            console.log(_this.suppliers);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Suppliers complete'); });
    };
    PurchaseOrdersComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
            this.appService.saveWithUrl('/service/finance/getPurchaseOrders', this.searchCriteria)
                .subscribe(function (data) {
                _this.purchaseOrdersDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.purchaseOrdersDatasource.paginator = _this.purchaseOrdersPaginator;
                _this.purchaseOrdersDatasource.sort = _this.purchaseOrdersSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get purchase orders complete'); });
        }
    };
    PurchaseOrdersComponent.prototype.applyFilter = function (filterValue) {
        this.purchaseOrdersDatasource.filter = filterValue.trim().toLowerCase();
        if (this.purchaseOrdersDatasource.paginator) {
            this.purchaseOrdersDatasource.paginator.firstPage();
        }
    };
    PurchaseOrdersComponent.prototype.getPurchaseOrderDetails = function (poHdr) {
        this.selected.setValue(1);
        this.purchaseOrderComponent.getPoHdr(poHdr);
    };
    PurchaseOrdersComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
            _this.selected.setValue(0);
            _this.getMyStoreEmployees();
            if (_this.purchaseOrderComponent) {
                if (event && event.value) {
                    _this.purchaseOrderComponent.store = event.value;
                }
                else {
                    _this.purchaseOrderComponent.store = event;
                }
                _this.purchaseOrderComponent.getMyStoreEmployees();
                _this.purchaseOrderComponent.getSuppliers();
                //this.purchaseOrderComponent.getStoreProducts();
                _this.purchaseOrderComponent.clear([]);
            }
        }, 500);
    };
    PurchaseOrdersComponent.prototype.updateDataTable = function (poHdr) {
        this.updateDatasourceData(this.purchaseOrdersDatasource, this.purchaseOrdersPaginator, this.purchaseOrdersSort, poHdr);
        //this.selected.setValue(0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorPurchaseOrders', { static: false }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], PurchaseOrdersComponent.prototype, "purchaseOrdersPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PurchaseOrdersComponent.prototype, "purchaseOrdersSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_PurchaseOrder_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseOrderComponent"], { static: false }),
        __metadata("design:type", _PurchaseOrder_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseOrderComponent"])
    ], PurchaseOrdersComponent.prototype, "purchaseOrderComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PurchaseOrdersComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PurchaseOrdersComponent.prototype, "isAdminPage", void 0);
    PurchaseOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-orders',
            templateUrl: './PurchaseOrders.component.html',
            styleUrls: ['./PurchaseOrders.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], PurchaseOrdersComponent);
    return PurchaseOrdersComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderComponent", function() { return PurchaseOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _PurchaseOrderDetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2201);
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








var PurchaseOrderComponent = /** @class */ (function (_super) {
    __extends(PurchaseOrderComponent, _super);
    function PurchaseOrderComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.messages = '';
        _this.poHdr = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeEmployees = [];
        _this.suppliers = [];
        _this.poDtls = [];
        _this.formData = new FormData();
        _this.picture = [];
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.poHdrSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.supplier = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.saving = false;
        _this.justSubmitted = false;
        _this.addNew = false;
        return _this;
    }
    PurchaseOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear([]);
            }
            else {
                _this.poHdr.id = params.id;
                _this.clear([]);
                _this.getPoHdr(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.getMyStoreEmployees();
        this.clear([]);
    };
    PurchaseOrderComponent.prototype.ngAfterViewInit = function () {
        console.log('Loading Purchase Order completed.');
    };
    PurchaseOrderComponent.prototype.clear = function (data) {
        this.messages = '';
        this.poHdr = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.setDatasource([]);
        this.picture = [];
    };
    PurchaseOrderComponent.prototype.setDatasource = function (data) {
        var _this = this;
        setTimeout(function () {
            var prdPoDtls = data.filter(function (poDtl) { return poDtl.product && poDtl.product.id > 0; });
            if (_this.productsComponent) {
                _this.productsComponent.poHdr = _this.poHdr;
                _this.productsComponent.setDatasource(prdPoDtls);
                _this.productsComponent.getStoreProducts(_this.store.id);
            }
            var igdPoDtls = data.filter(function (poDtl) { return poDtl.ingredient && poDtl.ingredient.id > 0; });
            if (_this.ingredientsComponent) {
                _this.ingredientsComponent.poHdr = _this.poHdr;
                _this.ingredientsComponent.setDatasource(igdPoDtls);
                _this.ingredientsComponent.getStoreIngredients(_this.store.id);
            }
        }, 1000);
    };
    PurchaseOrderComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.store.id) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.store.id + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
                _this.storeEmployees.forEach(function (se) {
                    if (+_this.appService.tokenStorage.getUserId() === se.employee.id) {
                        _this.storeEmployee = se;
                    }
                });
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    PurchaseOrderComponent.prototype.getSuppliers = function () {
        var _this = this;
        var parameters = [];
        //parameters.push('e.store.id = |sId|' + this.store.id + '|Integer');
        parameters.push('e.status = |supplierStatus|1|Integer');
        this.appService.getAllByCriteria('Supplier', parameters, ' ')
            .subscribe(function (data) {
            _this.suppliers = data;
            console.log(_this.suppliers);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Suppliers complete'); });
    };
    PurchaseOrderComponent.prototype.getPoHdr = function (poHdr) {
        var _this = this;
        this.messages = '';
        if (poHdr && poHdr.id > 0) {
            this.appService.getOneWithChildsAndFiles(poHdr.id, 'PoHdr')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.poHdr = result;
                    _this.getPoDtls();
                    var images = [];
                    var image = {
                        link: 'assets/images/pohdrs/' + _this.poHdr.id + '/' + _this.poHdr.image,
                        preview: 'assets/images/pohdrs/' + _this.poHdr.id + '/' + _this.poHdr.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.poHdr = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear([]);
        }
    };
    PurchaseOrderComponent.prototype.getPoDtls = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/finance/getPurchaseOrderDetails', {
            poHdrId: this.poHdr.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.setDatasource(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get purchase order products complete'); });
    };
    PurchaseOrderComponent.prototype.save = function () {
        var _this = this;
        console.log('Save called');
        if (this.justSubmitted) {
            this.justSubmitted = false;
            console.log('Just submitted');
            return;
        }
        this.saving = true;
        this.messages = '';
        this.poHdr.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (!this.poHdr.store.id) {
            this.poHdr.store.id = this.store.id;
        }
        this.setToggleValues();
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        this.appService.saveWithFile(this.poHdr, 'PoHdr', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.poHdr, null);
            _this.poHdr = data;
            _this.poHdr.storeName = _this.store.name;
            _this.poHdrSaveEvent.emit(_this.poHdr);
            _this.getPoDtls();
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Save PoHdr complete'); });
    };
    PurchaseOrderComponent.prototype.submit = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.poHdr.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/submitPoHdr/', this.poHdr)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.poHdr, null);
            _this.poHdr = data;
            _this.poHdr.storeName = _this.store.name;
            _this.poHdrSaveEvent.emit(_this.poHdr);
            _this.getPoDtls();
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Submit PoHrd complete'); });
    };
    PurchaseOrderComponent.prototype.reopen = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.poHdr.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/reopenPoHdr/', this.poHdr)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.poHdr, null);
            _this.poHdr = data;
            _this.poHdr.storeName = _this.store.name;
            _this.poHdrSaveEvent.emit(_this.poHdr);
            _this.getPoDtls();
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Reopen PoHrd complete'); });
    };
    PurchaseOrderComponent.prototype.approve = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.poHdr.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.poHdr.approvedBy = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.poHdr.approvedBy.id = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/approvePoHdr/', this.poHdr)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.poHdr, null);
            _this.poHdr = data;
            _this.poHdr.storeName = _this.store.name;
            _this.poHdrSaveEvent.emit(_this.poHdr);
            _this.getPoDtls();
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Approve PoHrd complete'); });
    };
    PurchaseOrderComponent.prototype.cancel = function () {
        var _this = this;
        this.poHdr.status = 9;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.poHdr.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.save(this.poHdr, 'PoHdr')
            .subscribe(function (data) {
            _this.processResult(data, _this.poHdr, null);
            _this.poHdr = data;
            _this.poHdr.storeName = _this.store.name;
            _this.poHdrSaveEvent.emit(_this.poHdr);
            _this.getPoDtls();
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Save PoHdr complete'); });
    };
    PurchaseOrderComponent.prototype.setToggleValues = function () {
        this.poHdr.status = (this.poHdr.status == null
            || this.poHdr.status.toString() === 'false'
            || this.poHdr.status.toString() === '0') ? 0 : 1;
    };
    PurchaseOrderComponent.prototype.changeTab = function ($event) {
        if ($event.index === 0) {
            this.productsComponent.poDtlColumns[2] = 'productName';
        }
        else if ($event.index === 1) {
            this.ingredientsComponent.poDtlColumns[2] = 'ingredientName';
        }
    };
    PurchaseOrderComponent.prototype.calculateAmount = function () {
        if (this.poHdr.subTotal) {
            this.poHdr.amount = Number(this.poHdr.subTotal);
        }
        if (this.poHdr.taxes) {
            if (!this.poHdr.amount) {
                this.poHdr.amount = 0;
            }
            this.poHdr.amount += Number(this.poHdr.taxes);
        }
        if (this.poHdr.discount) {
            if (!this.poHdr.amount) {
                this.poHdr.amount = 0;
            }
            this.poHdr.amount -= Number(this.poHdr.discount);
        }
    };
    PurchaseOrderComponent.prototype.addNewSupplier = function () {
        this.addNew = true;
        this.supplier = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    PurchaseOrderComponent.prototype.saveSupplier = function () {
        var _this = this;
        this.messages = '';
        this.supplier.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.setSupplierToggleValues();
        this.appService.save(this.supplier, 'Supplier')
            .subscribe(function (data) {
            _this.processResult(data, _this.supplier, null);
            _this.supplier = data;
            _this.poHdr.supplier = _this.supplier;
            _this.addNew = false;
            _this.suppliers.push(_this.supplier);
        }, function (error) { return console.log(error); }, function () { return console.log('Save Supplier complete'); });
    };
    PurchaseOrderComponent.prototype.setSupplierToggleValues = function () {
        this.supplier.status = (this.supplier.status == null
            || this.supplier.status.toString() === 'false'
            || this.supplier.status.toString() === '0') ? 0 : 1;
    };
    PurchaseOrderComponent.prototype.cancelSupplier = function () {
        this.addNew = false;
        this.supplier = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    PurchaseOrderComponent.prototype.uploadFile = function () {
        console.log('File uploding ...');
        if (this.poHdr.id) {
            this.save();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ProductsComponent', { static: false }),
        __metadata("design:type", _PurchaseOrderDetails_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderDetailsComponent"])
    ], PurchaseOrderComponent.prototype, "productsComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('IngredientsComponent', { static: false }),
        __metadata("design:type", _PurchaseOrderDetails_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderDetailsComponent"])
    ], PurchaseOrderComponent.prototype, "ingredientsComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PurchaseOrderComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PurchaseOrderComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PurchaseOrderComponent.prototype, "store", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PurchaseOrderComponent.prototype, "poHdrSaveEvent", void 0);
    PurchaseOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-order',
            templateUrl: './PurchaseOrder.component.html',
            styleUrls: ['./PurchaseOrders.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], PurchaseOrderComponent);
    return PurchaseOrderComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderDetailsComponent", function() { return PurchaseOrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
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








var PurchaseOrderDetailsComponent = /** @class */ (function (_super) {
    __extends(PurchaseOrderDetailsComponent, _super);
    function PurchaseOrderDetailsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.poDtlColumns = ['id', 'image', 'productName', 'quantity', 'unitPrice', 'totalAmount', 'actions'];
        _this.messages = '';
        _this.poHdr = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.poDtls = [];
        _this.saving = false;
        return _this;
    }
    PurchaseOrderDetailsComponent.prototype.ngOnInit = function () {
        this.clear([]);
    };
    PurchaseOrderDetailsComponent.prototype.ngAfterViewInit = function () {
    };
    PurchaseOrderDetailsComponent.prototype.clear = function (data) {
        this.messages = '';
        this.currentOption = '';
        this.setDatasource([]);
    };
    PurchaseOrderDetailsComponent.prototype.setDatasource = function (data) {
        this.poDtlDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.poDtlDatasource.paginator = this.poDtlPaginator;
        this.poDtlDatasource.sort = this.poDtlSort;
        this.poDtls = data;
    };
    PurchaseOrderDetailsComponent.prototype.getStoreProducts = function (storeId) {
        var _this = this;
        this.appService.getObjects('/service/catalog/getMyProductsOnSale/'
            + this.appService.appInfoStorage.language.id + '/' + storeId)
            .subscribe(function (data) {
            _this.filteredProductOptions = data;
            _this.productOptions = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all store product complete'); });
    };
    PurchaseOrderDetailsComponent.prototype.getStoreIngredients = function (storeId) {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getStoreIngredients', {
            languageId: +this.appService.appInfoStorage.language.id,
            storeId: storeId
        })
            .subscribe(function (data) {
            _this.filteredIngredientOptions = data;
            _this.ingredientOptions = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get store ingredients complete'); });
    };
    PurchaseOrderDetailsComponent.prototype.filterOptions = function (val) {
        if (val) {
            var filterValue_1 = typeof val === 'string' ? val.toLowerCase() : val.name.toLowerCase();
            this.filteredProductOptions = this.productOptions
                .filter(function (productDesc) { return productDesc.name.toLowerCase().startsWith(filterValue_1); });
        }
        else {
            this.filteredProductOptions = this.productOptions;
        }
    };
    PurchaseOrderDetailsComponent.prototype.filterIngredientOptions = function (val) {
        if (val) {
            var filterValue_2 = typeof val === 'string' ? val.toLowerCase() : val.name.toLowerCase();
            this.filteredIngredientOptions = this.ingredientOptions
                .filter(function (ingredienttDesc) { return ingredienttDesc.name.toLowerCase().startsWith(filterValue_2); });
        }
        else {
            this.filteredIngredientOptions = this.ingredientOptions;
        }
    };
    PurchaseOrderDetailsComponent.prototype.addPoDtl = function () {
        this.messages = '';
        this.poDtlDatasource.data.unshift(new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
        this.poDtlDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.poDtlDatasource.data);
        this.poDtlDatasource.paginator = this.poDtlPaginator;
        this.poDtlDatasource.sort = this.poDtlSort;
    };
    PurchaseOrderDetailsComponent.prototype.savePoDtl = function (poDtl, index) {
        var _this = this;
        this.saving = true;
        this.messages = '';
        poDtl.isSubmitted = true;
        poDtl.modifiedBy = +this.appService.tokenStorage.getUserId();
        poDtl.poHdr = this.poHdr;
        if (poDtl.product.id > 0) {
            poDtl.ingredient = null;
        }
        else if (poDtl.ingredient.id > 0) {
            poDtl.product = null;
        }
        this.appService.saveWithUrl('/service/finance/savePoDtl/', poDtl)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, poDtl, null);
            poDtl = data;
            poDtl.isTouched = false;
            _this.poDtlDatasource.data[index] = data;
            _this.setDatasource(_this.poDtlDatasource.data);
            _this.saving = false;
            if (poDtl.product.id > 0) {
                _this.filteredProductOptions = _this.productOptions;
            }
            else if (poDtl.ingredient.id > 0) {
                _this.filteredIngredientOptions = _this.ingredientOptions;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all PoDtl complete'); });
    };
    PurchaseOrderDetailsComponent.prototype.removePoDtl = function (poDtl, index) {
        var _this = this;
        if (!poDtl.id) {
            this.resetDatasource(this.poDtlDatasource, index);
            this.setDatasource(this.poDtlDatasource.data);
            return;
        }
        this.messages = '';
        this.appService.delete(poDtl.id, 'PoDtl')
            .subscribe(function (data) {
            _this.processDataSourceDeleteResult(data, _this.messages, poDtl, _this.poDtlDatasource);
            _this.poDtlDatasource.data = Array.from(_this.poDtlDatasource.data);
            _this.setDatasource(_this.poDtlDatasource.data);
        });
    };
    PurchaseOrderDetailsComponent.prototype.validateSelectedProduct = function (poDtl) {
        if (typeof (poDtl.productName) === 'string' && this.productOptions) {
            var index = this.productOptions.findIndex(function (x) { return x.name === poDtl.productName; });
            if (index === -1) {
                index = this.poDtls.findIndex(function (x) { return x.id === poDtl.id; });
                if (index === -1) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                poDtl.product = this.productOptions[index].product;
            }
        }
        if (!poDtl.product || !poDtl.product.id) {
            return false;
        }
        return true;
    };
    PurchaseOrderDetailsComponent.prototype.validateSelectedIngredient = function (poDtl) {
        if (typeof (poDtl.ingredientName) === 'string' && this.ingredientOptions) {
            var index = this.ingredientOptions.findIndex(function (x) { return x.name === poDtl.ingredientName; });
            if (index === -1) {
                index = this.poDtls.findIndex(function (x) { return x.id === poDtl.id; });
                if (index === -1) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                poDtl.ingredient = this.ingredientOptions[index].ingredient;
            }
        }
        if (!poDtl.ingredient || !poDtl.ingredient.id) {
            return false;
        }
        return true;
    };
    PurchaseOrderDetailsComponent.prototype.setSelectedProduct = function (poDtl, productDesc) {
        poDtl.product = productDesc.product;
    };
    PurchaseOrderDetailsComponent.prototype.calculateTotalAmount = function (poDtl) {
        if (!poDtl.unitAmount || !poDtl.quantity) {
            poDtl.totalAmount = undefined;
            return;
        }
        poDtl.totalAmount = Number((poDtl.unitAmount * poDtl.quantity).toFixed(2));
    };
    PurchaseOrderDetailsComponent.prototype.calculateUnitAmount = function (poDtl) {
        if (!poDtl.totalAmount || !poDtl.quantity) {
            poDtl.unitAmount = undefined;
            return;
        }
        poDtl.unitAmount = Number((poDtl.totalAmount / poDtl.quantity).toFixed(2));
    };
    PurchaseOrderDetailsComponent.prototype.changeTab = function ($event) {
        console.log('Tab changed');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('poDtlPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], PurchaseOrderDetailsComponent.prototype, "poDtlPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], PurchaseOrderDetailsComponent.prototype, "poDtlSort", void 0);
    PurchaseOrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-order-details',
            templateUrl: './PurchaseOrderDetails.component.html',
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], PurchaseOrderDetailsComponent);
    return PurchaseOrderDetailsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
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
/* harmony import */ var _Transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2203);
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












var TransactionsComponent = /** @class */ (function (_super) {
    __extends(TransactionsComponent, _super);
    function TransactionsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        // transactionsColumns: string[] = ['transactionType', 'paidBy', 'receiver', 'transactionDate', 'salaryDate', 'amount', 'actions'];
        _this.transactionsColumns = ['id', 'transactionType', 'paidBy', 'receiver', 'description', 'transactionDate', 'amount', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeEmployees = [];
        return _this;
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.getStores();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    TransactionsComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    TransactionsComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
        this.search();
    };
    TransactionsComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        var d = new Date();
        d.setDate(d.getDate() - 30);
        this.searchCriteria.beginDate = d;
        this.searchCriteria.endDate = new Date();
    };
    TransactionsComponent.prototype.changeOrderType = function (event) {
    };
    TransactionsComponent.prototype.getStores = function () {
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
    TransactionsComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.searchCriteria.storeId) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.searchCriteria.storeId + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    TransactionsComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
            this.appService.saveWithUrl('/service/finance/getTransactions', this.searchCriteria)
                .subscribe(function (data) {
                _this.transactionsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.transactionsDatasource.paginator = _this.paginator;
                _this.transactionsDatasource.sort = _this.transactionsSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get transactions complete'); });
        }
    };
    TransactionsComponent.prototype.applyFilter = function (filterValue) {
        this.transactionsDatasource.filter = filterValue.trim().toLowerCase();
        if (this.transactionsDatasource.paginator) {
            this.transactionsDatasource.paginator.firstPage();
        }
    };
    TransactionsComponent.prototype.getTransaction = function (transaction) {
        this.selected.setValue(1);
        this.transactionComponent.getTransaction(transaction);
    };
    TransactionsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
            _this.selected.setValue(0);
            _this.getMyStoreEmployees();
            if (_this.transactionComponent) {
                if (event && !event.value) {
                    _this.transactionComponent.store = event;
                }
                else {
                    _this.transactionComponent.store = event.value;
                }
                console.log(event);
                _this.transactionComponent.getMyStoreEmployees();
                _this.transactionComponent.clear([]);
            }
        }, 500);
    };
    TransactionsComponent.prototype.updateDataTable = function (transaction) {
        var copyTransaction = __assign({}, transaction);
        copyTransaction.transactionType.name = this.getTranName(transaction.transactionType);
        this.updateDatasourceData(this.transactionsDatasource, this.paginator, this.transactionsSort, copyTransaction);
    };
    TransactionsComponent.prototype.getTranName = function (tType) {
        for (var _i = 0, _a = this.appService.appInfoStorage.transactionTypes; _i < _a.length; _i++) {
            var t = _a[_i];
            if (t.transactionType.id === tType.id) {
                return t.name;
            }
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TransactionsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TransactionsComponent.prototype, "transactionsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Transaction_component__WEBPACK_IMPORTED_MODULE_9__["TransactionComponent"], { static: false }),
        __metadata("design:type", _Transaction_component__WEBPACK_IMPORTED_MODULE_9__["TransactionComponent"])
    ], TransactionsComponent.prototype, "transactionComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TransactionsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionsComponent.prototype, "isAdminPage", void 0);
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            templateUrl: './Transactions.component.html',
            styleUrls: ['./Transactions.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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







var TransactionComponent = /** @class */ (function (_super) {
    __extends(TransactionComponent, _super);
    function TransactionComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.messages = '';
        _this.transaction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeEmployees = [];
        _this.formData = new FormData();
        _this.picture = [];
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.transactionSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.saving = false;
        _this.justSubmitted = false;
        _this.transactionTypes = [];
        return _this;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear([]);
            }
            else {
                _this.transaction.id = params.id;
                _this.clear([]);
                _this.getTransaction(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.getMyStoreEmployees();
        this.clear([]);
    };
    TransactionComponent.prototype.filterTransactionTypes = function () {
        var _this = this;
        this.transactionTypes = [];
        this.appService.appInfoStorage.transactionTypes.forEach(function (tt) {
            if (_this.storeEmployee.canApprove || tt.transactionType.approverOnly !== 1) {
                _this.transactionTypes.push(tt);
            }
        });
    };
    TransactionComponent.prototype.clear = function (data) {
        this.messages = '';
        //this.currentOption = '';
        this.transaction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.setDatasource([]);
        this.picture = [];
    };
    TransactionComponent.prototype.setDatasource = function (data) {
    };
    TransactionComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.store.id) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.store.id + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
                _this.storeEmployees.forEach(function (se) {
                    if (+_this.appService.tokenStorage.getUserId() === se.employee.id) {
                        _this.storeEmployee = se;
                        _this.filterTransactionTypes();
                    }
                });
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    TransactionComponent.prototype.getTransaction = function (transaction) {
        var _this = this;
        this.messages = '';
        if (transaction && transaction.id > 0) {
            this.appService.getOneWithChildsAndFiles(transaction.id, 'Transaction')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.transaction = result;
                    var images = [];
                    var image = {
                        link: 'assets/images/transactions/' + _this.transaction.id + '/' + _this.transaction.image,
                        preview: 'assets/images/transactions/' + _this.transaction.id + '/' + _this.transaction.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.transaction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear([]);
        }
    };
    TransactionComponent.prototype.save = function () {
        var _this = this;
        console.log('Save called');
        if (this.justSubmitted) {
            this.justSubmitted = false;
            console.log('Just submitted');
            return;
        }
        this.saving = true;
        this.messages = '';
        this.transaction.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (!this.transaction.store.id) {
            this.transaction.store.id = this.store.id;
        }
        this.setToggleValues();
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        console.log(this.transaction);
        this.appService.saveWithFile(this.transaction, 'Transaction', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.transaction, null);
            _this.transaction = data;
            _this.transaction.storeName = _this.store.name;
            _this.transactionSaveEvent.emit(_this.transaction);
            _this.transaction = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            _this.saving = false;
            _this.setDatasource([]);
            _this.picture = [];
        }, function (error) {
            _this.saving = false;
            console.log(error);
        }, function () {
            _this.saving = false;
            console.log('Save Transaction complete');
        });
    };
    TransactionComponent.prototype.submit = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.transaction.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/submitTransaction/', this.transaction)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.transaction, null);
            _this.transaction = data;
            _this.transaction.storeName = _this.store.name;
            _this.transactionSaveEvent.emit(_this.transaction);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Submit Transaction complete'); });
    };
    TransactionComponent.prototype.reopen = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.transaction.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/reopenTransaction/', this.transaction)
            .subscribe(function (data) {
            _this.processResult(data, _this.transaction, null);
            _this.transaction = data;
            _this.transaction.storeName = _this.store.name;
            _this.transactionSaveEvent.emit(_this.transaction);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Reopen Transaction complete'); });
    };
    TransactionComponent.prototype.reject = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.transaction.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/rejectTransaction/', this.transaction)
            .subscribe(function (data) {
            _this.processResult(data, _this.transaction, null);
            _this.transaction = data;
            _this.transaction.storeName = _this.store.name;
            _this.transactionSaveEvent.emit(_this.transaction);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Reopen Transaction complete'); });
    };
    TransactionComponent.prototype.approve = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.transaction.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.transaction.approvedBy = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.transaction.approvedBy.id = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/approveTransaction/', this.transaction)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.transaction, null);
            _this.transaction = data;
            _this.transaction.storeName = _this.store.name;
            _this.transactionSaveEvent.emit(_this.transaction);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Approve PoHrd complete'); });
    };
    TransactionComponent.prototype.cancel = function () {
        var _this = this;
        this.transaction.status = 9;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.transaction.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.save(this.transaction, 'Transaction')
            .subscribe(function (data) {
            _this.processResult(data, _this.transaction, null);
            _this.transaction = data;
            _this.transaction.storeName = _this.store.name;
            _this.transactionSaveEvent.emit(_this.transaction);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Save Transaction complete'); });
    };
    TransactionComponent.prototype.setToggleValues = function () {
        this.transaction.status = (this.transaction.status == null
            || this.transaction.status.toString() === 'false'
            || this.transaction.status.toString() === '0') ? 0 : 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "store", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "transactionSaveEvent", void 0);
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction',
            templateUrl: './Transaction.component.html',
            styleUrls: ['./Transactions.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], TransactionComponent);
    return TransactionComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerBillsComponent", function() { return SellerBillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
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




var SellerBillsComponent = /** @class */ (function (_super) {
    __extends(SellerBillsComponent, _super);
    function SellerBillsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        return _this;
    }
    SellerBillsComponent.prototype.ngOnInit = function () {
    };
    SellerBillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-bills',
            templateUrl: './SellerBills.component.html',
            styleUrls: ['./SellerBills.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SellerBillsComponent);
    return SellerBillsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShippersComponent", function() { return MyShippersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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





var MyShippersComponent = /** @class */ (function (_super) {
    __extends(MyShippersComponent, _super);
    function MyShippersComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.storeShippers = [];
        _this.shippers = [];
        return _this;
    }
    MyShippersComponent.prototype.ngOnInit = function () {
        this.getStores();
        this.getShippers();
    };
    MyShippersComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    MyShippersComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores && _this.stores.length === 1) {
                _this.store = _this.stores[0];
                _this.getStoreShippers();
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    MyShippersComponent.prototype.storeSelected = function () {
        this.getStoreShippers();
    };
    MyShippersComponent.prototype.getShippers = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.status= |abc|1|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.Shipper', parameters)
            .subscribe(function (data) {
            _this.shippers = data;
            _this.storeShippers.forEach(function (ss) {
                var index = _this.shippers.findIndex(function (tb) { return tb.id === ss.shipper.id; });
                if (index !== -1) {
                    _this.shippers.splice(index, 1);
                }
            });
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Shipper complete'); });
    };
    MyShippersComponent.prototype.getStoreShippers = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.store.id= |abc|' + this.store.id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.StoreShipper', parameters)
            .subscribe(function (data) {
            _this.storeShippers = data;
            _this.getShippers();
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Shipper complete'); });
    };
    MyShippersComponent.prototype.deleteStoreShipper = function (id) {
        var _this = this;
        this.appService.delete(id, 'com.softenza.emarket.model.StoreShipper')
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                _this.getStoreShippers();
            }
        });
    };
    MyShippersComponent.prototype.changeShipper = function (storeShipper) {
        var _this = this;
        storeShipper.storeStatus = (storeShipper.storeStatus == null
            || storeShipper.storeStatus.toString() === 'false'
            || storeShipper.storeStatus.toString() === '0') ? 0 : 1;
        console.log(storeShipper);
        this.appService.save(storeShipper, 'StoreShipper')
            .subscribe(function (result) {
            if (result.id > 0) {
                // this. getStoreShippers(Number(this.appService.tokenStorage.getUserId()));
                _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                });
            }
        });
    };
    MyShippersComponent.prototype.addShipper = function (shipper) {
        var _this = this;
        var ss = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        ss.shipper = shipper;
        ss.store = this.store;
        ss.storeStatus = 1;
        ss.shipperStatus = 0;
        ss.shipCount = 0;
        this.appService.save(ss, 'StoreShipper')
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.getStoreShippers();
                _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                });
            }
            else {
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.SAVE_UNSUCCESS'];
                });
            }
        });
    };
    MyShippersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-orders',
            templateUrl: './MyShippers.component.html',
            styleUrls: ['./MyShippers.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], MyShippersComponent);
    return MyShippersComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesFinanceDashboardComponent", function() { return SalesFinanceDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
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





var SalesFinanceDashboardComponent = /** @class */ (function (_super) {
    __extends(SalesFinanceDashboardComponent, _super);
    function SalesFinanceDashboardComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.sidenavOpen = true;
        return _this;
    }
    SalesFinanceDashboardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SalesFinanceDashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SalesFinanceDashboardComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], SalesFinanceDashboardComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
    ], SalesFinanceDashboardComponent.prototype, "stepper", void 0);
    SalesFinanceDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-finance-dashboard',
            templateUrl: './Sales-finance-dashboard.component.html',
            styleUrls: ['./Sales-finance-dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SalesFinanceDashboardComponent);
    return SalesFinanceDashboardComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsComponent", function() { return BuildingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(487);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Building_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2208);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(439);
/* harmony import */ var _rooms_Rooms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2209);
/* harmony import */ var _BldgImages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2211);
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












var BuildingsComponent = /** @class */ (function (_super) {
    __extends(BuildingsComponent, _super);
    function BuildingsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.displayedColumns = ['name', 'buildingType', 'status'];
        _this.messages = '';
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](0);
        _this.className = 'com.softenza.emarket.model.hospitality.Building';
        return _this;
    }
    BuildingsComponent.prototype.ngOnInit = function () {
        this.getStores();
    };
    BuildingsComponent.prototype.getStores = function () {
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
    BuildingsComponent.prototype.getAll = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.storeId = |sId|' + this.selectedStore.id + '|Integer');
        this.appService.getAllByCriteria('com.softenza.emarket.model.hospitality.Building', parameters)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Building complete'); });
    };
    BuildingsComponent.prototype.remove = function (building) {
        var _this = this;
        this.messages = '';
        this.appService.delete(building.id, this.className)
            .subscribe(function (resp) {
            if (resp.result === 'SUCCESS') {
                var index = _this.dataSource.data.indexOf(building);
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
    BuildingsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BuildingsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.selected.setValue(0);
            _this.getAll();
            if (_this.buildingView) {
                _this.buildingView.clear();
                if (event && !event.value) {
                    _this.buildingView.selectedStore = event;
                }
                else {
                    _this.buildingView.selectedStore = event.value;
                }
            }
        }, 500);
    };
    BuildingsComponent.prototype.selectBuilding = function (building) {
        var _this = this;
        this.selectedBldgId = building.id;
        setTimeout(function () {
            if (_this.buildingView) {
                _this.buildingView.getBuilding(building);
            }
            if (_this.bldgImagesView) {
                _this.bldgImagesView.bldgId = building.id;
                _this.bldgImagesView.getBldg();
            }
            if (_this.roomsView) {
                _this.roomsView.building = building;
                _this.roomsView.getRooms();
                _this.roomsView.roomComponent.building = building;
                _this.roomsView.roomComponent.deriveFloorList();
                _this.roomsView.roomComponent.getRoomTypes();
            }
            _this.selected.setValue(1);
        }, 500);
    };
    BuildingsComponent.prototype.onBuildingSave = function ($event) {
        this.updateDatasourceData(this.dataSource, this.paginator, this.sort, $event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Building_component__WEBPACK_IMPORTED_MODULE_6__["BuildingComponent"], { static: false }),
        __metadata("design:type", _Building_component__WEBPACK_IMPORTED_MODULE_6__["BuildingComponent"])
    ], BuildingsComponent.prototype, "buildingView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_BldgImages_component__WEBPACK_IMPORTED_MODULE_9__["BldgImagesComponent"], { static: false }),
        __metadata("design:type", _BldgImages_component__WEBPACK_IMPORTED_MODULE_9__["BldgImagesComponent"])
    ], BuildingsComponent.prototype, "bldgImagesView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_rooms_Rooms_component__WEBPACK_IMPORTED_MODULE_8__["RoomsComponent"], { static: false }),
        __metadata("design:type", _rooms_Rooms_component__WEBPACK_IMPORTED_MODULE_8__["RoomsComponent"])
    ], BuildingsComponent.prototype, "roomsView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BuildingsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BuildingsComponent.prototype, "sort", void 0);
    BuildingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buildings',
            templateUrl: './Buildings.component.html',
            styleUrls: ['./Buildings.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], BuildingsComponent);
    return BuildingsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuildingComponent = /** @class */ (function (_super) {
    __extends(BuildingComponent, _super);
    function BuildingComponent(activatedRoute, translate, appService) {
        var _this = _super.call(this, translate) || this;
        _this.activatedRoute = activatedRoute;
        _this.translate = translate;
        _this.appService = appService;
        _this.messages = '';
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.Building';
        _this.addresses = [];
        _this.formData = new FormData();
        _this.picture = [];
        _this.saving = false;
        _this.justSubmitted = false;
        _this.buildingSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    BuildingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAddresses();
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getBuilding(params.id);
            }
        });
    };
    BuildingComponent.prototype.getAddresses = function () {
        var _this = this;
        console.log('Get addresses called');
        var userId = Number(this.appService.tokenStorage.getUserId());
        if (userId > 0) {
            var parameters = [];
            parameters.push('e.user.id = |userId|' + userId + '|Integer');
            this.appService.getAllByCriteria('com.softenza.emarket.model.Address', parameters)
                .subscribe(function (data) {
                _this.addresses = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all addresses complete for userId=' + userId); });
        }
    };
    BuildingComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    BuildingComponent.prototype.clearMessages = function ($event) {
        this.messages = '';
    };
    BuildingComponent.prototype.setImage = function ($event) {
        console.log('Setting image' + $event);
        this.building.image = $event;
    };
    BuildingComponent.prototype.clear = function () {
        this.building = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    BuildingComponent.prototype.getBuilding = function (building) {
        var _this = this;
        this.messages = '';
        if (building && building.id > 0) {
            this.appService.getOneWithChildsAndFiles(building.id, this.CLASS_NAME)
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.building = result;
                    var images = [];
                    var image = {
                        link: 'assets/images/buildings/' + _this.building.id + '/' + _this.building.image,
                        preview: 'assets/images/buildings/' + _this.building.id + '/' + _this.building.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.building = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear();
        }
    };
    BuildingComponent.prototype.setToggles = function () {
        this.building.status = (this.building.status == null
            || this.building.status.toString() === 'false'
            || this.building.status.toString() === '0') ? 0 : 1;
        this.building.principal = (this.building.principal == null
            || this.building.principal.toString() === 'false'
            || this.building.principal.toString() === '0') ? 0 : 1;
        this.building.fullRental = (this.building.fullRental == null
            || this.building.fullRental.toString() === 'false'
            || this.building.fullRental.toString() === '0') ? 0 : 1;
        this.building.onlineBooking = (this.building.onlineBooking == null
            || this.building.onlineBooking.toString() === 'false'
            || this.building.onlineBooking.toString() === '0') ? 0 : 1;
        this.building.topProperty = (this.building.topProperty == null
            || this.building.topProperty.toString() === 'false'
            || this.building.topProperty.toString() === '0') ? 0 : 1;
    };
    BuildingComponent.prototype.save = function () {
        var _this = this;
        console.log('Saving Building ... ');
        if (this.justSubmitted) {
            this.justSubmitted = false;
            console.log('Just submitted');
            return;
        }
        this.setToggles();
        this.saving = true;
        this.building.storeId = this.selectedStore.id;
        this.messages = '';
        try {
            this.formData = new FormData();
            if (this.picture && this.picture.length > 0 && this.picture[0].file) {
                this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
            }
            this.appService.saveWithFile(this.building, this.CLASS_NAME, this.formData, 'saveWithFile')
                .subscribe(function (data) {
                _this.processResult(data, _this.building, null);
                _this.building = data;
                _this.buildingSaveEvent.emit(_this.building);
                _this.clear();
                _this.saving = false;
                _this.picture = [];
            }, function (error) {
                _this.saving = false;
                console.log(error);
            }, function () {
                _this.saving = false;
                console.log('Save Building complete');
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BuildingComponent.prototype, "buildingSaveEvent", void 0);
    BuildingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-building',
            templateUrl: './Building.component.html',
            styleUrls: ['./Building.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], BuildingComponent);
    return BuildingComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
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
/* harmony import */ var _Room_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2210);
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












var RoomsComponent = /** @class */ (function (_super) {
    __extends(RoomsComponent, _super);
    function RoomsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.roomsColumns = ['roomTypeName', 'roomNbr', 'floorNbr', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.Room';
        _this.RT_CLASS_NAME = 'com.softenza.emarket.model.hospitality.RoomType';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.roomTypeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.roomTypeDescs = [];
        _this.rooms = [];
        _this.colors = ['primary', 'secondary'];
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        return _this;
    }
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.setDataSource([]);
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    RoomsComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    RoomsComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
        this.search();
    };
    RoomsComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    RoomsComponent.prototype.changeOrderType = function (event) {
    };
    RoomsComponent.prototype.setDataSource = function (data) {
        this.roomsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.roomsDatasource.paginator = this.roomsPaginator;
        this.roomsDatasource.sort = this.roomsSort;
    };
    RoomsComponent.prototype.getRooms = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.building.id = |bId|' + this.building.id + '|Integer');
        this.appService.getAllByCriteria(this.CLASS_NAME, parameters)
            .subscribe(function (data) {
            console.log(data);
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var room = data_1[_i];
                _this.setRoomTypeName(room);
            }
            _this.setDataSource(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get rooms for building complete'); });
    };
    RoomsComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
            this.searchCriteria.languageId = +this.appService.appInfoStorage.language.id;
            this.appService.saveWithUrl('/service/hospitality/getRooms', this.searchCriteria)
                .subscribe(function (data) {
                console.log(data);
                _this.roomsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.roomsDatasource.paginator = _this.roomsPaginator;
                _this.roomsDatasource.sort = _this.roomsSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get rooms complete'); });
        }
    };
    RoomsComponent.prototype.applyFilter = function (filterValue) {
        this.roomsDatasource.filter = filterValue.trim().toLowerCase();
        if (this.roomsDatasource.paginator) {
            this.roomsDatasource.paginator.firstPage();
        }
    };
    RoomsComponent.prototype.setRoomTypeName = function (room) {
        for (var _i = 0, _a = room.roomTypeDescs; _i < _a.length; _i++) {
            var roomTypeDesc = _a[_i];
            if (roomTypeDesc.language.id === this.appService.appInfoStorage.language.id) {
                room.roomTypeName = roomTypeDesc.name;
                return;
            }
        }
        return '';
    };
    RoomsComponent.prototype.getRoomDetails = function (room) {
        this.roomComponent.getRoom(room);
    };
    RoomsComponent.prototype.updateDataTable = function (room) {
        this.updateDatasourceData(this.roomsDatasource, this.roomsPaginator, this.roomsSort, room);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorRooms', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], RoomsComponent.prototype, "roomsPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], RoomsComponent.prototype, "roomsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Room_component__WEBPACK_IMPORTED_MODULE_9__["RoomComponent"], { static: false }),
        __metadata("design:type", _Room_component__WEBPACK_IMPORTED_MODULE_9__["RoomComponent"])
    ], RoomsComponent.prototype, "roomComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RoomsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomsComponent.prototype, "isAdminPage", void 0);
    RoomsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rooms',
            templateUrl: './Rooms.component.html',
            styleUrls: ['./Rooms.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], RoomsComponent);
    return RoomsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomComponent = /** @class */ (function (_super) {
    __extends(RoomComponent, _super);
    function RoomComponent(activatedRoute, translate, appService) {
        var _this = _super.call(this, translate) || this;
        _this.activatedRoute = activatedRoute;
        _this.translate = translate;
        _this.appService = appService;
        _this.messages = '';
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.Room';
        _this.RTD_CLASS_NAME = 'com.softenza.emarket.model.hospitality.RoomTypeDesc';
        _this.saving = false;
        _this.justSubmitted = false;
        _this.floors = [];
        _this.roomTypeDescs = [];
        _this.roomSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.clear();
                _this.getRoom(params.id);
            }
        });
    };
    RoomComponent.prototype.clearMessages = function ($event) {
        this.messages = '';
    };
    RoomComponent.prototype.setImage = function ($event) {
        console.log('Setting image' + $event);
        this.building.image = $event;
    };
    RoomComponent.prototype.clear = function () {
        this.room = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    RoomComponent.prototype.getRoomTypes = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |languageId|' + this.appService.appInfoStorage.language.id + '|Integer');
        parameters.push('e.roomType.storeId = |stId|' + this.building.storeId + '|Integer');
        this.appService.getAllByCriteria(this.RTD_CLASS_NAME, parameters)
            .subscribe(function (data) {
            _this.roomTypeDescs = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get room type descs for store complete'); });
    };
    RoomComponent.prototype.getRoom = function (room) {
        var _this = this;
        this.messages = '';
        if (room && room.id > 0) {
            this.appService.getOneWithChildsAndFiles(room.id, this.CLASS_NAME)
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.room = result;
                }
                else {
                    _this.room = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear();
        }
    };
    RoomComponent.prototype.setToggles = function () {
        this.room.status = (this.room.status == null
            || this.room.status.toString() === 'false'
            || this.room.status.toString() === '0') ? 0 : 1;
    };
    RoomComponent.prototype.save = function () {
        var _this = this;
        console.log('Saving Building ... ');
        if (this.justSubmitted) {
            this.justSubmitted = false;
            console.log('Just submitted');
            return;
        }
        this.setToggles();
        this.room.building = this.building;
        this.saving = true;
        this.messages = '';
        try {
            this.appService.saveWithUrl('/service/hospitality/saveRoom/', this.room)
                .subscribe(function (data) {
                _this.processResult(data, _this.room, null);
                _this.room = data;
                for (var _i = 0, _a = _this.roomTypeDescs; _i < _a.length; _i++) {
                    var rtd = _a[_i];
                    if (_this.room.roomType.id === rtd.roomType.id) {
                        _this.room.roomTypeName = rtd.name;
                    }
                }
                _this.roomSaveEvent.emit(_this.room);
                _this.clear();
                _this.saving = false;
            }, function (error) {
                _this.saving = false;
                console.log(error);
            }, function () {
                _this.saving = false;
                console.log('Save Room complete');
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    RoomComponent.prototype.deriveFloorList = function () {
        this.floors = Array.from({ length: this.building.nbrFloors }, function (v, k) { return k + 1; });
    };
    RoomComponent.prototype.compareFloors = function (o1, o2) {
        return o1 && o2 ? (o1 === o2) : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RoomComponent.prototype, "roomSaveEvent", void 0);
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            templateUrl: './Room.component.html',
            styleUrls: ['./Room.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], RoomComponent);
    return RoomComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BldgImagesComponent", function() { return BldgImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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




var BldgImagesComponent = /** @class */ (function (_super) {
    __extends(BldgImagesComponent, _super);
    function BldgImagesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.className = 'com.softenza.emarket.model.hospitality.Building';
        return _this;
    }
    BldgImagesComponent.prototype.ngOnInit = function () {
        console.log('Bldg image loaded');
    };
    BldgImagesComponent.prototype.getBldg = function () {
        var _this = this;
        this.mainFiles = [];
        this.image1Files = [];
        this.image2Files = [];
        this.files = [];
        this.appService.getOneWithChildsAndFiles(this.bldgId, this.className)
            .subscribe(function (result) {
            if (result.id > 0) {
                _this.bldg = result;
                console.log(result);
                var images_1 = [];
                _this.mainFiles = [];
                _this.files = [];
                _this.bldg.fileNames.forEach(function (item) {
                    if (item === _this.bldg.image) {
                        _this.mainFiles.push({
                            link: 'assets/images/buildings/' + _this.bldgId + '/' + item,
                            preview: 'assets/images/buildings/' + _this.bldgId + '/' + item
                        });
                    }
                    else if (item === _this.bldg.image1) {
                        _this.image1Files.push({
                            link: 'assets/images/buildings/' + _this.bldgId + '/' + item,
                            preview: 'assets/images/buildings/' + _this.bldgId + '/' + item
                        });
                    }
                    else if (item === _this.bldg.image2) {
                        _this.image2Files.push({
                            link: 'assets/images/buildings/' + _this.bldgId + '/' + item,
                            preview: 'assets/images/buildings/' + _this.bldgId + '/' + item
                        });
                    }
                    else {
                        var image = {
                            link: 'assets/images/buildings/' + _this.bldgId + '/' + item,
                            preview: 'assets/images/buildings/' + _this.bldgId + '/' + item
                        };
                        images_1.push(image);
                    }
                });
                _this.files = images_1;
            }
            else {
                _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.READ_FAILED'];
                });
            }
        });
    };
    BldgImagesComponent.prototype.saveFiles = function () {
        var _this = this;
        var bldg = __assign({}, this.bldg);
        bldg.remainingFileNames = [];
        bldg.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.formData = new FormData();
        console.log(this.files);
        console.log(this.mainFiles);
        // tslint:disable-next-line: prefer-for-of
        this.listFiles(bldg, this.mainFiles, 'main_picture.');
        this.listFiles(bldg, this.image1Files, 'image1.');
        this.listFiles(bldg, this.image2Files, 'image2.');
        this.listFiles(bldg, this.files, 'picture.');
        bldg.singleImage = false;
        if (this.files.length > 0 || this.mainFiles.length > 0 || this.image1Files.length > 0
            || this.image2Files.length > 0) {
            console.log(bldg);
            this.appService.saveWithFile(bldg, this.className, this.formData, 'manageFiles')
                .subscribe(function (result) {
                if (result.id > 0) {
                    console.log('manageFiles');
                    _this.bldg.image = result.image;
                    _this.translate.get(['MESSAGE.SAVE_SUCCESS', 'COMMON.SUCCESS']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_SUCCESS'];
                    });
                }
                else {
                    _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'COMMON.ERROR']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.SAVE_UNSUCCESS'];
                    });
                }
            });
        }
    };
    BldgImagesComponent.prototype.listFiles = function (bldg, files, fileName) {
        for (var i = 0; i < files.length; i++) {
            if (files[i].file) {
                this.formData.append('file[]', files[i].file, fileName + files[i].file.name);
            }
            else {
                var pathSplitArray = files[i].link.split('/');
                bldg.remainingFileNames.push(pathSplitArray[pathSplitArray.length - 1]);
            }
        }
    };
    BldgImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bldg-images',
            templateUrl: './BldgImages.component.html',
            styleUrls: ['./Buildings.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], BldgImagesComponent);
    return BldgImagesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomTypesComponent", function() { return RoomTypesComponent; });
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
/* harmony import */ var _RoomType_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2213);
/* harmony import */ var _RoomTypeAmenity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2214);
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













var RoomTypesComponent = /** @class */ (function (_super) {
    __extends(RoomTypesComponent, _super);
    function RoomTypesComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.roomTypesColumns = ['name', 'price', 'qty', 'availableQty', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.RoomType';
        _this.RTD_CLASS_NAME = 'com.softenza.emarket.model.hospitality.RoomTypeDesc';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.roomTypeDescs = [];
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        return _this;
    }
    RoomTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getStores();
        //this.clear();
        //this.setDataSource([]);
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    RoomTypesComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    RoomTypesComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
    };
    RoomTypesComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    RoomTypesComponent.prototype.getStores = function () {
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
    RoomTypesComponent.prototype.getRoomTypes = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |languageId|' + this.appService.appInfoStorage.language.id + '|Integer');
        parameters.push('e.roomType.storeId = |stId|' + this.selectedStore.id + '|Integer');
        this.appService.getAllByCriteria(this.RTD_CLASS_NAME, parameters)
            .subscribe(function (data) {
            _this.setDataSource(data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get room type descs for building complete'); });
    };
    RoomTypesComponent.prototype.setDataSource = function (data) {
        this.roomTypesDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
        this.roomTypesDatasource.paginator = this.roomTypesPaginator;
        this.roomTypesDatasource.sort = this.roomTypesSort;
    };
    RoomTypesComponent.prototype.applyFilter = function (filterValue) {
        this.roomTypesDatasource.filter = filterValue.trim().toLowerCase();
        if (this.roomTypesDatasource.paginator) {
            this.roomTypesDatasource.paginator.firstPage();
        }
    };
    RoomTypesComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getRoomTypes();
            _this.roomTypeComponent.storeId = _this.selectedStore.id;
        }, 500);
    };
    RoomTypesComponent.prototype.getRoomTypeDetails = function (roomTypeDesc) {
        this.roomTypeComponent.getDescriptions(roomTypeDesc.roomType.id);
        this.roomTypeAmenityComponent.roomType = roomTypeDesc.roomType;
        this.roomTypeAmenityComponent.getRoomTypeUnassignedAmenities();
        this.roomTypeAmenityComponent.getRoomTypeAmenities();
    };
    RoomTypesComponent.prototype.roomTypeSaved = function ($event) {
        var _this = this;
        var roomType = $event;
        roomType.roomTypeDescs.forEach(function (element) {
            if (element.language.id === _this.appService.appInfoStorage.language.id) {
                element.roomType = roomType;
                if (!_this.roomTypesDatasource.data) {
                    _this.roomTypesDatasource.data = [];
                }
                _this.updateDataTable(element);
            }
        });
    };
    RoomTypesComponent.prototype.roomTypeCleared = function () {
        if (this.roomTypeAmenityComponent) {
            this.roomTypeAmenityComponent.clear();
            this.roomTypeAmenityComponent.roomType = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        }
    };
    RoomTypesComponent.prototype.updateDataTable = function (roomTypeDesc) {
        this.updateDatasourceData(this.roomTypesDatasource, this.roomTypesPaginator, this.roomTypesSort, roomTypeDesc);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginatorRoomTypes', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], RoomTypesComponent.prototype, "roomTypesPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], RoomTypesComponent.prototype, "roomTypesSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_RoomType_component__WEBPACK_IMPORTED_MODULE_9__["RoomTypeComponent"], { static: false }),
        __metadata("design:type", _RoomType_component__WEBPACK_IMPORTED_MODULE_9__["RoomTypeComponent"])
    ], RoomTypesComponent.prototype, "roomTypeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_RoomTypeAmenity_component__WEBPACK_IMPORTED_MODULE_10__["RoomTypeAmenityComponent"], { static: false }),
        __metadata("design:type", _RoomTypeAmenity_component__WEBPACK_IMPORTED_MODULE_10__["RoomTypeAmenityComponent"])
    ], RoomTypesComponent.prototype, "roomTypeAmenityComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RoomTypesComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomTypesComponent.prototype, "isAdminPage", void 0);
    RoomTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roomTypes',
            templateUrl: './RoomTypes.component.html',
            styleUrls: ['./RoomTypes.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], RoomTypesComponent);
    return RoomTypesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomTypeComponent", function() { return RoomTypeComponent; });
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






var RoomTypeComponent = /** @class */ (function (_super) {
    __extends(RoomTypeComponent, _super);
    function RoomTypeComponent(activatedRoute, translate, appService) {
        var _this = _super.call(this, translate) || this;
        _this.activatedRoute = activatedRoute;
        _this.translate = translate;
        _this.appService = appService;
        _this.messages = '';
        _this.formData = new FormData();
        _this.picture = [];
        _this.saving = false;
        _this.justSubmitted = false;
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.RoomTypeDesc';
        _this.roomTypeSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    RoomTypeComponent.prototype.ngOnInit = function () {
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
    };
    RoomTypeComponent.prototype.clearMessages = function ($event) {
        this.messages = '';
    };
    RoomTypeComponent.prototype.setRoomType = function ($event) {
        this.roomType = $event;
    };
    RoomTypeComponent.prototype.clear = function () {
        this.roomType = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.roomType.roomTypeDescs = [];
        for (var _i = 0, _a = this.appService.appInfoStorage.languages; _i < _a.length; _i++) {
            var lang = _a[_i];
            var rtd = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            rtd.language = lang;
            rtd.name = '';
            this.roomType.roomTypeDescs.push(rtd);
        }
        this.clearEvent.emit();
    };
    RoomTypeComponent.prototype.getDescriptions = function (roomTypeId) {
        var _this = this;
        this.messages = '';
        var parameters = [];
        if (roomTypeId != null) {
            parameters.push('e.roomType.id = |roomTypeId|' + roomTypeId + '|Integer');
        }
        this.appService.getAllByCriteria(this.CLASS_NAME, parameters)
            .subscribe(function (data) {
            if (data !== null && data.length > 0) {
                _this.roomType = data[0].roomType;
                _this.roomType.roomTypeDescs = data;
                var images = [];
                var image = {
                    link: 'assets/images/roomtypes/' + _this.roomType.id + '/' + _this.roomType.image,
                    preview: 'assets/images/roomtypes/' + _this.roomType.id + '/' + _this.roomType.image
                };
                images.push(image);
                _this.picture = images;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all roomType desc complete'); });
    };
    RoomTypeComponent.prototype.setToggles = function () {
        this.roomType.status = (this.roomType.status == null
            || this.roomType.status.toString() === 'false'
            || this.roomType.status.toString() === '0') ? 0 : 1;
    };
    RoomTypeComponent.prototype.cleanDescriptions = function (roomType) {
        roomType.roomTypeDescs.forEach(function (element) {
            element.roomType = undefined;
            var language = element.language;
            element.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            element.language.id = language.id;
        });
    };
    RoomTypeComponent.prototype.save = function () {
        var _this = this;
        console.log('Saving Room Type ... ');
        if (this.justSubmitted) {
            this.justSubmitted = false;
            console.log('Just submitted');
            return;
        }
        this.saving = true;
        this.messages = '';
        this.roomType.storeId = this.storeId;
        this.setToggles();
        var thisRoomType = __assign({}, this.roomType);
        this.cleanDescriptions(thisRoomType);
        try {
            this.formData = new FormData();
            if (this.picture && this.picture.length > 0 && this.picture[0].file) {
                this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
            }
            this.appService.saveWithFile(thisRoomType, this.CLASS_NAME, this.formData, 'saveWithFile')
                .subscribe(function (result) {
                _this.processResult(result, _this.roomType, null);
                _this.roomType = __assign({}, result);
                _this.roomTypeSaveEvent.emit(_this.roomType);
                _this.clear();
                _this.saving = false;
                _this.picture = [];
            }, function (error) {
                _this.saving = false;
                console.log(error);
            }, function () {
                _this.saving = false;
                console.log('Save Room Type complete');
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RoomTypeComponent.prototype, "roomTypeSaveEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RoomTypeComponent.prototype, "clearEvent", void 0);
    RoomTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roomType',
            templateUrl: './RoomType.component.html',
            styleUrls: ['./RoomType.component.scss']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())])
    ], RoomTypeComponent);
    return RoomTypeComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomTypeAmenityComponent", function() { return RoomTypeAmenityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
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








var RoomTypeAmenityComponent = /** @class */ (function (_super) {
    __extends(RoomTypeAmenityComponent, _super);
    function RoomTypeAmenityComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.aAmenityColumns = ['image', 'amenityName', 'actions'];
        _this.sAmenityColumns = ['image', 'amenityName', 'actions'];
        _this.messages = '';
        _this.panelOpenState = false;
        _this.CLASS_NAME = 'com.softenza.emarket.model.hospitality.RoomTypeAmenity';
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.roomTypeAmenity = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.roomType = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.addNew = false;
        return _this;
    }
    RoomTypeAmenityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            if (params.id === undefined || params.id === 0) {
                _this.clear();
            }
            else {
                _this.roomType.id = params.id;
                _this.clear();
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.aAmenityDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
    };
    RoomTypeAmenityComponent.prototype.ngAfterViewInit = function () {
        this.aAmenityDatasource.paginator = this.aAmenityPaginator;
        this.sAmenityDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.sAmenityDatasource.paginator = this.sAmenityPaginator;
    };
    RoomTypeAmenityComponent.prototype.clear = function () {
        this.messages = '';
        this.aAmenityDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.sAmenityDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
    };
    RoomTypeAmenityComponent.prototype.getRoomTypeUnassignedAmenities = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/hospitality/getRoomTypeUnassignedAmenities/', {
            roomTypeId: this.roomType.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.aAmenityDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.aAmenityDatasource.paginator = _this.aAmenityPaginator;
            _this.aAmenityDatasource.sort = _this.aAmenitySort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all room type unassigned amenity complete'); });
    };
    RoomTypeAmenityComponent.prototype.getRoomTypeAmenities = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/hospitality/getRoomTypeAmenities', {
            roomTypeId: this.roomType.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.sAmenityDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.sAmenityDatasource.paginator = _this.sAmenityPaginator;
            _this.sAmenityDatasource.sort = _this.sAmenitySort;
        }, function (error) { return console.log(error); }, function () { return console.log('Get room type assigned amenities complete'); });
    };
    RoomTypeAmenityComponent.prototype.isEmpty = function (value) {
        '';
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    RoomTypeAmenityComponent.prototype.saveRoomTypeAmenity = function (amenity) {
        var _this = this;
        var roomTypeAmenity = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        var oldAmenityImage = amenity.image;
        roomTypeAmenity.roomType = __assign({}, this.roomType);
        roomTypeAmenity.roomType.roomTypeDescs = [];
        roomTypeAmenity.amenity = amenity;
        this.appService.saveWithUrl('/service/crud/RoomTypeAmenity/save/', roomTypeAmenity)
            .subscribe(function (data) {
            _this.processResult(data, roomTypeAmenity, null);
            roomTypeAmenity.id = data.id;
            roomTypeAmenity.image = oldAmenityImage;
            _this.updateDatasourceData(_this.sAmenityDatasource, _this.sAmenityPaginator, _this.sAmenitySort, roomTypeAmenity);
            _this.processDataSourceDeleteResult({ result: 'SUCCESS' }, _this.messages, amenity, _this.aAmenityDatasource);
            _this.aAmenityDatasource.data = Array.from(_this.aAmenityDatasource.data);
        }, function (error) { return console.log(error); }, function () { return console.log('Save selected room type amenity complete'); });
    };
    RoomTypeAmenityComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    RoomTypeAmenityComponent.prototype.deleteRoomTypeAmenity = function (roomTypeAmenity, index) {
        var _this = this;
        this.messages = '';
        var amenity = roomTypeAmenity.amenity;
        this.appService.delete(roomTypeAmenity.id, this.CLASS_NAME)
            .subscribe(function (data) {
            _this.updateDatasourceData(_this.aAmenityDatasource, _this.aAmenityPaginator, _this.aAmenitySort, amenity);
            _this.processDataSourceDeleteResult(data, _this.messages, roomTypeAmenity, _this.sAmenityDatasource);
            _this.sAmenityDatasource.data = Array.from(_this.sAmenityDatasource.data);
        });
    };
    RoomTypeAmenityComponent.prototype.applyAvailableAmenityFilter = function (filterValue) {
        this.aAmenityDatasource.filter = filterValue.trim().toLowerCase();
        if (this.aAmenityDatasource.paginator) {
            this.aAmenityDatasource.paginator.firstPage();
        }
    };
    RoomTypeAmenityComponent.prototype.applySelectedAmenityFilter = function (filterValue) {
        this.sAmenityDatasource.filter = filterValue.trim().toLowerCase();
        if (this.sAmenityDatasource.paginator) {
            this.sAmenityDatasource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aAmenityPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], RoomTypeAmenityComponent.prototype, "aAmenityPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], RoomTypeAmenityComponent.prototype, "aAmenitySort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sAmenityPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], RoomTypeAmenityComponent.prototype, "sAmenityPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], RoomTypeAmenityComponent.prototype, "sAmenitySort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomTypeAmenityComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomTypeAmenityComponent.prototype, "canAcknowledge", void 0);
    RoomTypeAmenityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rt-amenity',
            templateUrl: './RoomTypeAmenity.component.html'
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], RoomTypeAmenityComponent);
    return RoomTypeAmenityComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReservationsComponent", function() { return SalesReservationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
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





var SalesReservationsComponent = /** @class */ (function (_super) {
    __extends(SalesReservationsComponent, _super);
    function SalesReservationsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.sidenavOpen = true;
        return _this;
    }
    SalesReservationsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SalesReservationsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SalesReservationsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], SalesReservationsComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
    ], SalesReservationsComponent.prototype, "stepper", void 0);
    SalesReservationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-reservations',
            templateUrl: './Sales-reservations.component.html',
            styleUrls: ['./Sales-reservations.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SalesReservationsComponent);
    return SalesReservationsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationDetailComponent", function() { return ReservationDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
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




var ReservationDetailComponent = /** @class */ (function (_super) {
    __extends(ReservationDetailComponent, _super);
    function ReservationDetailComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.sidenavOpen = true;
        return _this;
    }
    ReservationDetailComponent.prototype.ngOnInit = function () {
    };
    ReservationDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservation-detail',
            templateUrl: './Reservation-detail.component.html',
            styleUrls: ['./Reservation-detail.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ReservationDetailComponent);
    return ReservationDetailComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfersComponent", function() { return TransfersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
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







var TransfersComponent = /** @class */ (function (_super) {
    __extends(TransfersComponent, _super);
    function TransfersComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.isAdminPage = false;
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0);
        return _this;
    }
    TransfersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    TransfersComponent.prototype.changeOrderType = function (event) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TransfersComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransfersComponent.prototype, "isAdminPage", void 0);
    TransfersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfers',
            templateUrl: './Transfers.component.html',
            styleUrls: ['./Transfers.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], TransfersComponent);
    return TransfersComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferHistoriesComponent", function() { return TransferHistoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(484);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
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










var TransferHistoriesComponent = /** @class */ (function (_super) {
    __extends(TransferHistoriesComponent, _super);
    function TransferHistoriesComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.transactionsColumns = ['transactionType', 'paidBy', 'receiver', 'transactionDate', 'amount', 'status'];
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0);
        return _this;
    }
    TransferHistoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    TransferHistoriesComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TransferHistoriesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TransferHistoriesComponent.prototype, "transactionsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TransferHistoriesComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransferHistoriesComponent.prototype, "isAdminPage", void 0);
    TransferHistoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-TransferHistories',
            templateUrl: './TransferHistories.component.html',
            styleUrls: ['./TransferHistories.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], TransferHistoriesComponent);
    return TransferHistoriesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundsComponent", function() { return FundsComponent; });
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
/* harmony import */ var _Fund_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2220);
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












var FundsComponent = /** @class */ (function (_super) {
    __extends(FundsComponent, _super);
    function FundsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.fundsColumns = ['id', 'fundType', 'paidBy', 'receivedBy', 'description', 'fundDate', 'amount', 'status'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeEmployees = [];
        return _this;
    }
    FundsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.getStores();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    FundsComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    FundsComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.storeId = 0;
        if (this.isAdminPage) {
            this.searchCriteria.status = 1;
        }
        this.search();
    };
    FundsComponent.prototype.clear = function () {
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    FundsComponent.prototype.changeOrderType = function (event) {
    };
    FundsComponent.prototype.getStores = function () {
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
    FundsComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.searchCriteria.storeId) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.searchCriteria.storeId + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    FundsComponent.prototype.search = function () {
        var _this = this;
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else {
            this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
            this.appService.saveWithUrl('/service/finance/getFunds', this.searchCriteria)
                .subscribe(function (data) {
                _this.fundsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.fundsDatasource.paginator = _this.paginator;
                _this.fundsDatasource.sort = _this.fundsSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get funds complete'); });
        }
    };
    FundsComponent.prototype.applyFilter = function (filterValue) {
        this.fundsDatasource.filter = filterValue.trim().toLowerCase();
        if (this.fundsDatasource.paginator) {
            this.fundsDatasource.paginator.firstPage();
        }
    };
    FundsComponent.prototype.getFund = function (fund) {
        this.selected.setValue(1);
        this.fundComponent.getFund(fund);
    };
    FundsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
            _this.selected.setValue(0);
            _this.getMyStoreEmployees();
            if (_this.fundComponent) {
                if (event && !event.value) {
                    _this.fundComponent.store = event;
                }
                else {
                    _this.fundComponent.store = event.value;
                }
                console.log(event);
                _this.fundComponent.getMyStoreEmployees();
                _this.fundComponent.clear([]);
            }
        }, 500);
    };
    FundsComponent.prototype.updateDataTable = function (fund) {
        var copyFund = __assign({}, fund);
        copyFund.fundType.name = this.getFundName(fund.fundType);
        this.updateDatasourceData(this.fundsDatasource, this.paginator, this.fundsSort, copyFund);
    };
    FundsComponent.prototype.getFundName = function (fundType) {
        for (var _i = 0, _a = this.appService.appInfoStorage.fundTypes; _i < _a.length; _i++) {
            var ft = _a[_i];
            if (ft.fundType.id === fundType.id) {
                return ft.name;
            }
        }
        return null;
    };
    FundsComponent.prototype.calculateTotal = function () {
        return this.fundsDatasource ? this.fundsDatasource.data.reduce(function (accum, curr) { return accum + curr.amount; }, 0) : 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], FundsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FundsComponent.prototype, "fundsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Fund_component__WEBPACK_IMPORTED_MODULE_9__["FundComponent"], { static: false }),
        __metadata("design:type", _Fund_component__WEBPACK_IMPORTED_MODULE_9__["FundComponent"])
    ], FundsComponent.prototype, "fundComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FundsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FundsComponent.prototype, "isAdminPage", void 0);
    FundsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-funds',
            templateUrl: './Funds.component.html',
            styleUrls: ['./Funds.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], FundsComponent);
    return FundsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundComponent", function() { return FundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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







var FundComponent = /** @class */ (function (_super) {
    __extends(FundComponent, _super);
    function FundComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.messages = '';
        _this.fund = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeEmployees = [];
        _this.formData = new FormData();
        _this.picture = [];
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.fundSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.saving = false;
        _this.justSubmitted = false;
        _this.fundTypes = [];
        return _this;
    }
    FundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                _this.clear([]);
            }
            else {
                _this.fund.id = params.id;
                _this.clear([]);
                _this.getFund(params.id);
            }
        });
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.getMyStoreEmployees();
        this.clear([]);
    };
    FundComponent.prototype.filterFundTypes = function () {
        var _this = this;
        this.fundTypes = [];
        this.appService.appInfoStorage.fundTypes.forEach(function (ft) {
            if (_this.storeEmployee.canApprove || ft.fundType.approverOnly !== 1) {
                _this.fundTypes.push(ft);
            }
        });
    };
    FundComponent.prototype.clear = function (data) {
        this.messages = '';
        this.fund = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.setDatasource([]);
        this.picture = [];
    };
    FundComponent.prototype.setDatasource = function (data) {
    };
    FundComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.store.id) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.store.id + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
                _this.storeEmployees.forEach(function (se) {
                    if (+_this.appService.tokenStorage.getUserId() === se.employee.id) {
                        _this.storeEmployee = se;
                        _this.filterFundTypes();
                    }
                });
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    FundComponent.prototype.getFund = function (fund) {
        var _this = this;
        this.messages = '';
        if (fund && fund.id > 0) {
            this.appService.getOneWithChildsAndFiles(fund.id, 'Fund')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.fund = result;
                    var images = [];
                    var image = {
                        link: 'assets/images/funds/' + _this.fund.id + '/' + _this.fund.image,
                        preview: 'assets/images/funds/' + _this.fund.id + '/' + _this.fund.image
                    };
                    images.push(image);
                    _this.picture = images;
                }
                else {
                    _this.fund = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            this.clear([]);
        }
    };
    FundComponent.prototype.save = function () {
        var _this = this;
        console.log('Save called');
        if (this.justSubmitted) {
            this.justSubmitted = false;
            console.log('Just submitted');
            return;
        }
        this.saving = true;
        this.messages = '';
        this.fund.modifiedBy = +this.appService.tokenStorage.getUserId();
        if (!this.fund.store.id) {
            this.fund.store.id = this.store.id;
        }
        this.setToggleValues();
        this.formData = new FormData();
        if (this.picture && this.picture.length > 0 && this.picture[0].file) {
            this.formData.append('file[]', this.picture[0].file, 'picture.' + this.picture[0].file.name);
        }
        console.log(this.fund);
        this.appService.saveWithFile(this.fund, 'Fund', this.formData, 'saveWithFile')
            .subscribe(function (data) {
            _this.processResult(data, _this.fund, null);
            _this.fund = data;
            _this.fund.storeName = _this.store.name;
            _this.fundSaveEvent.emit(_this.fund);
            _this.fund = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            _this.saving = false;
            _this.setDatasource([]);
            _this.picture = [];
        }, function (error) {
            _this.saving = false;
            console.log(error);
        }, function () {
            _this.saving = false;
            console.log('Save Fund complete');
        });
    };
    FundComponent.prototype.submit = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.fund.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/submitFund/', this.fund)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.fund, null);
            _this.fund = data;
            _this.fund.storeName = _this.store.name;
            _this.fundSaveEvent.emit(_this.fund);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Submit Fund complete'); });
    };
    FundComponent.prototype.reopen = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.fund.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/reopenFund/', this.fund)
            .subscribe(function (data) {
            _this.processResult(data, _this.fund, null);
            _this.fund = data;
            _this.fund.storeName = _this.store.name;
            _this.fundSaveEvent.emit(_this.fund);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Reopen Fund complete'); });
    };
    FundComponent.prototype.reject = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.fund.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/rejectTransaction/', this.fund)
            .subscribe(function (data) {
            _this.processResult(data, _this.fund, null);
            _this.fund = data;
            _this.fund.storeName = _this.store.name;
            _this.fundSaveEvent.emit(_this.fund);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Reopen Fund complete'); });
    };
    FundComponent.prototype.approve = function () {
        var _this = this;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.fund.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.fund.approvedBy = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.fund.approvedBy.id = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/finance/approveFund/', this.fund)
            .subscribe(function (data) {
            console.log(data);
            _this.processResult(data, _this.fund, null);
            _this.fund = data;
            _this.fund.storeName = _this.store.name;
            _this.fundSaveEvent.emit(_this.fund);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Approve PoHrd complete'); });
    };
    FundComponent.prototype.cancel = function () {
        var _this = this;
        this.fund.status = 9;
        this.justSubmitted = true;
        this.saving = true;
        this.messages = '';
        this.fund.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.appService.save(this.fund, 'Transaction')
            .subscribe(function (data) {
            _this.processResult(data, _this.fund, null);
            _this.fund = data;
            _this.fund.storeName = _this.store.name;
            _this.fundSaveEvent.emit(_this.fund);
            _this.saving = false;
        }, function (error) { return console.log(error); }, function () { return console.log('Save Fund complete'); });
    };
    FundComponent.prototype.setToggleValues = function () {
        this.fund.status = (this.fund.status == null
            || this.fund.status.toString() === 'false'
            || this.fund.status.toString() === '0') ? 0 : 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FundComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FundComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FundComponent.prototype, "store", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FundComponent.prototype, "fundSaveEvent", void 0);
    FundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund',
            templateUrl: './Fund.component.html',
            styleUrls: ['./Funds.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], FundComponent);
    return FundComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranlogsComponent", function() { return TranlogsComponent; });
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
/* harmony import */ var _Tranlog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2222);
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












var TranlogsComponent = /** @class */ (function (_super) {
    __extends(TranlogsComponent, _super);
    function TranlogsComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        // tranlogsColumns: string[] = ['tranlogType', 'paidBy', 'receiver', 'tranlogDate', 'salaryDate', 'amount', 'actions'];
        _this.tranlogsColumns = ['tranlogDate', 'author', 'oldQty', 'newQty',
            'oldPrice', 'newPrice', 'oldRebate', 'newRebate', 'operation'];
        _this.messages = '';
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeEmployees = [];
        return _this;
    }
    TranlogsComponent.prototype.ngOnInit = function () {
        this.clear();
        this.getStores();
    };
    TranlogsComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    /*   ngAfterViewInit() {
        this.search();
      }
     */
    TranlogsComponent.prototype.clear = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria.storeId = this.selectedStore ? this.selectedStore.id : 0;
        var d = new Date();
        d.setDate(d.getDate() - 1);
        this.searchCriteria.beginDate = d;
        this.searchCriteria.endDate = new Date();
    };
    TranlogsComponent.prototype.changeOrderType = function (event) {
    };
    TranlogsComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores && _this.stores.length > 0) {
                _this.selectedStore = _this.stores[0];
                _this.getMyStoreEmployees();
                _this.storeSelected(_this.selectedStore);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    TranlogsComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        this.storeEmployees = [];
        if (this.selectedStore) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.selectedStore.id + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    TranlogsComponent.prototype.search = function () {
        var _this = this;
        var diff = Math.ceil((this.searchCriteria.endDate.getTime() - this.searchCriteria.beginDate.getTime()) / (1000 * 3600 * 24));
        console.log(diff);
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else if (!(diff >= 0 && diff <= 30)) {
            this.translate.get(['VALIDATION.INVALID_DATE_RANGE', 'COMMON.ERROR']).subscribe(function (res) {
                _this.messages = res['VALIDATION.INVALID_DATE_RANGE'];
            });
        }
        else {
            this.appService.saveWithUrl('/service/order/tranlogs', this.searchCriteria)
                .subscribe(function (data) {
                // console.log(data);
                _this.tranlogsDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.tranlogsDatasource.paginator = _this.paginator;
                _this.tranlogsDatasource.sort = _this.tranlogsSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get tranlogs complete'); });
        }
    };
    TranlogsComponent.prototype.applyFilter = function (filterValue) {
        this.tranlogsDatasource.filter = filterValue.trim().toLowerCase();
        if (this.tranlogsDatasource.paginator) {
            this.tranlogsDatasource.paginator.firstPage();
        }
    };
    TranlogsComponent.prototype.getTranlog = function (tranlog) {
        this.selected.setValue(1);
        this.tranlogComponent.getTranlog(tranlog);
    };
    TranlogsComponent.prototype.storeSelected = function (event) {
        var _this = this;
        this.getMyStoreEmployees();
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TranlogsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TranlogsComponent.prototype, "tranlogsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_Tranlog_component__WEBPACK_IMPORTED_MODULE_9__["TranlogComponent"], { static: false }),
        __metadata("design:type", _Tranlog_component__WEBPACK_IMPORTED_MODULE_9__["TranlogComponent"])
    ], TranlogsComponent.prototype, "tranlogComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TranlogsComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TranlogsComponent.prototype, "isAdminPage", void 0);
    TranlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tranlogs',
            templateUrl: './Tranlogs.component.html',
            styleUrls: ['./Tranlogs.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], TranlogsComponent);
    return TranlogsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranlogComponent", function() { return TranlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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








var TranlogComponent = /** @class */ (function (_super) {
    __extends(TranlogComponent, _super);
    function TranlogComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.tranlogsColumns = ['id', 'author', 'oldQty', 'newQty',
            'oldPrice', 'newPrice', 'oldRebate', 'newRebate', 'tranlogDate', 'operation'];
        _this.messages = '';
        _this.tranlog = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeEmployees = [];
        _this.formData = new FormData();
        _this.picture = [];
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.store = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.tranlogSaveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.saving = false;
        _this.justSubmitted = false;
        _this.tranlogTypes = [];
        return _this;
    }
    TranlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params.id === undefined || params.id === 0) {
                // do nothing
            }
            else {
                _this.tranlog.id = params.id;
                _this.getTranlog(params.id);
            }
        });
    };
    TranlogComponent.prototype.getTranlog = function (tranlog) {
        this.tranlog = tranlog;
        this.search();
    };
    TranlogComponent.prototype.getTranlogOld = function (tranlog) {
        var _this = this;
        this.messages = '';
        if (tranlog && tranlog.id > 0) {
            this.appService.getOneWithChildsAndFiles(tranlog.id, 'TranLog')
                .subscribe(function (result) {
                if (result.id > 0) {
                    _this.tranlog = result;
                }
                else {
                    _this.tranlog = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    _this.translate.get(['COMMON.READ', 'MESSAGE.READ_FAILED']).subscribe(function (res) {
                        _this.messages = res['MESSAGE.READ_FAILED'];
                    });
                }
            });
        }
        else {
            // do nothing
        }
    };
    TranlogComponent.prototype.search = function () {
        var _this = this;
        if (this.tranlog.refNbr) {
            var searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            searchCriteria.refNbr = this.tranlog.refNbr;
            this.appService.saveWithUrl('/service/order/tranlogs', searchCriteria)
                .subscribe(function (data) {
                console.log(data);
                _this.tranlogsDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data);
                _this.tranlogsDatasource.paginator = _this.paginator;
                _this.tranlogsDatasource.sort = _this.tranlogsSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get tranlogs complete'); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], TranlogComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], TranlogComponent.prototype, "tranlogsSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TranlogComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TranlogComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TranlogComponent.prototype, "store", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TranlogComponent.prototype, "tranlogSaveEvent", void 0);
    TranlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tranlog',
            templateUrl: './Tranlog.component.html',
            styleUrls: ['./Tranlog.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], TranlogComponent);
    return TranlogComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenReservationsComponent", function() { return OpenReservationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
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






var OpenReservationsComponent = /** @class */ (function (_super) {
    __extends(OpenReservationsComponent, _super);
    function OpenReservationsComponent(appService, router, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.router = router;
        _this.translate = translate;
        _this.messages = '';
        _this.reservations = [];
        return _this;
    }
    OpenReservationsComponent.prototype.ngOnInit = function () {
        if (!this.appService.tokenStorage.getUserId()) {
            console.log('navigating.. to signin');
            this.router.navigate(['/session/signin'], { queryParams: { fromPage: '/account/open-reservations' } });
        }
        else {
            this.getOpenReservations();
        }
    };
    OpenReservationsComponent.prototype.getOpenReservations = function () {
        var _this = this;
        this.messages = '';
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        // this.searchCriteria.statuses = [1, 2, 3, 4, 5];
        this.searchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/hospitality/reservationWithRooms', this.searchCriteria)
            .subscribe(function (data) {
            _this.reservations = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get Reservations complete'); });
    };
    OpenReservationsComponent.prototype.cancel = function () {
        this.router.navigate(['/checkout']);
    };
    OpenReservationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-reservations',
            templateUrl: './Open-reservations.component.html',
            styleUrls: ['./Open-reservations.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], OpenReservationsComponent);
    return OpenReservationsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelReservationsComponent", function() { return CancelReservationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
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






var CancelReservationsComponent = /** @class */ (function (_super) {
    __extends(CancelReservationsComponent, _super);
    function CancelReservationsComponent(appService, translate, activatedRoute) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.messages = '';
        _this.errors = '';
        _this.canEdit = false;
        _this.action = 'cancelling';
        _this.isAdmin = false;
        return _this;
    }
    CancelReservationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCancellationReasons();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdmin = (value && value.expectedRole && value.expectedRole[0] === 'Administrator');
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.getReservation(params.reservationId);
        });
    };
    CancelReservationsComponent.prototype.getReservation = function (id) {
        var _this = this;
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.searchCriteria.reservationId = id;
        this.searchCriteria.langId = this.appService.appInfoStorage.language.id;
        this.appService.saveWithUrl('/service/hospitality/reservationWithRooms', this.searchCriteria)
            .subscribe(function (data) {
            _this.reservation = data[0];
            if (data.length > 0) {
                console.log(_this.reservation);
            }
            else {
                _this.translate.get(['MESSAGE.NO_OPEN_ORDER', 'MESSAGE.NO_RESULT_FOUND']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.NO_OPEN_ORDER'];
                });
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get Reservation complete'); });
    };
    CancelReservationsComponent.prototype.getCancellationReasons = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.language.id = |langId|' + this.appService.appInfoStorage.language.id + '|Integer');
        this.appService.getAllByCriteria('CancellationReason', parameters)
            .subscribe(function (data) {
            _this.cancellationReasons = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all CancellationReasons complete'); });
    };
    CancelReservationsComponent.prototype.cancel = function () {
        var _this = this;
        this.messages = '';
        var reserv = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        reserv.id = this.reservation.reservationId;
        reserv.cancellationReason = this.cancellationReason;
        this.appService.saveWithUrl('/service/hospitality/cancelReservation/', reserv)
            .subscribe(function (data) {
            if (data.errors) {
                // there was an issue.
                _this.translate.get(['MESSAGE.' + data.errors[0]]).subscribe(function (res) {
                    _this.errors = res['MESSAGE.' + data.errors[0]];
                    if (data.errors[0] === 'RESERV_CANCELLED_NO_REFUND') {
                        _this.action = 'cancelled';
                    }
                });
            }
            else {
                _this.action = 'cancelled';
                _this.translate.get('MESSAGE.RESERV_CANCELLATION_SUCCESSFUL', { reserv_number: reserv.id }).subscribe(function (res) {
                    _this.messages = res;
                });
            }
        }, function (error) {
            console.log(error);
        }, function () { return console.log('Cancel reservation complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CancelReservationsComponent.prototype, "reviewType", void 0);
    CancelReservationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cancel-reservations',
            templateUrl: './Cancel-reservations.component.html',
            styleUrls: ['./Open-reservations.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CancelReservationsComponent);
    return CancelReservationsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerDeliveriesSummariesComponent", function() { return SellerDeliveriesSummariesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
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




var SellerDeliveriesSummariesComponent = /** @class */ (function (_super) {
    __extends(SellerDeliveriesSummariesComponent, _super);
    function SellerDeliveriesSummariesComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        return _this;
    }
    SellerDeliveriesSummariesComponent.prototype.ngOnInit = function () {
    };
    SellerDeliveriesSummariesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sellerdeliveries-summaries',
            templateUrl: './SellerDeliveriesSummaries.component.html',
            styleUrls: ['./SellerDeliveriesSummaries.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SellerDeliveriesSummariesComponent);
    return SellerDeliveriesSummariesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletsComponent", function() { return WalletsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
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





var WalletsComponent = /** @class */ (function (_super) {
    __extends(WalletsComponent, _super);
    function WalletsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.wallets = [];
        _this.messages = '';
        _this.fromAdmin = false;
        _this.step = 1;
        return _this;
    }
    WalletsComponent.prototype.ngOnInit = function () {
        if (this.userId === undefined) {
            this.userId = Number(this.appService.tokenStorage.getUserId());
        }
        else {
            this.fromAdmin = true;
        }
        this.getWallets();
    };
    WalletsComponent.prototype.ngAfterViewInit = function () {
    };
    WalletsComponent.prototype.getWallets = function () {
        var _this = this;
        var parameters = [];
        parameters.push('e.status = |walletStatus|1|Integer');
        parameters.push('e.user.id = |userId|' + this.appService.tokenStorage.getUserId() + '|Integer');
        this.appService.getAllByCriteria('Wallet', parameters)
            .subscribe(function (data) {
            _this.wallets = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all wallet complete'); });
    };
    WalletsComponent.prototype.addCash = function (wallet) {
        this.messages = '';
        wallet.modBy = +this.appService.tokenStorage.getUserId();
        this.walletTrans = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.walletTrans.currency = wallet.currency;
        this.walletTrans.wallet = wallet;
        this.walletTrans.walletTransType = 'CD';
    };
    WalletsComponent.prototype.addWallet = function () {
        this.messages = '';
        this.sWallet = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.sWallet.user = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.sWallet.user.id = +this.appService.tokenStorage.getUserId();
        this.sWallet.createBy = +this.appService.tokenStorage.getUserId();
        this.sWallet.modBy = +this.appService.tokenStorage.getUserId();
        this.walletTrans = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.walletTrans.wallet = this.sWallet;
        this.walletTrans.walletTransType = 'CD';
    };
    WalletsComponent.prototype.saveWalletTrans = function () {
        var _this = this;
        this.walletTrans.createBy = +this.appService.tokenStorage.getUserId();
        this.walletTrans.modBy = +this.appService.tokenStorage.getUserId();
        this.walletTrans.language = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.walletTrans.language = this.appService.appInfoStorage.language;
        this.appService.saveWithUrl('/service/finance/saveWalletTrans', this.walletTrans)
            .subscribe(function (data) {
            if (data.id && (data.errors === null || data.errors.length === 0)) {
                _this.hasError = false;
                _this.walletTrans = null;
                _this.messages = '';
                _this.getWallets();
            }
            else {
                _this.hasError = true;
                console.log(data);
                _this.translate.get(['MESSAGE.SAVE_UNSUCCESS', 'MESSAGE.SYSTEM_ERROR', 'MESSAGE.PAYMENT_DECLINED']).subscribe(function (res) {
                    _this.messages = res['MESSAGE.SAVE_UNSUCCESS'] + '\n' + (data.errors[0] === 'SYSTEM_ERROR'
                        ? res['MESSAGE.SYSTEM_ERROR'] :
                        (data.errors[0] === 'PAYMENT_DECLINED' ? res['MESSAGE.PAYMENT_DECLINED'] : data.errors[0]));
                });
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get purchase order products complete'); });
    };
    WalletsComponent.prototype.onTogglePmntMethodChange = function ($event) {
        var _this = this;
        this.step = 2;
        this.walletTrans.paymentMethodCode = $event.value;
        if ($event.value === 'CREDIT_CARD') {
            setTimeout(function () {
                _this.initPaymentMethod();
            }, 0);
        }
    };
    WalletsComponent.prototype.initPaymentMethod = function () {
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
    WalletsComponent.prototype.setupElements = function (data) {
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
    WalletsComponent.prototype.handleCardSave = function (event) {
        this.messages = '';
        this.hasError = false;
        if (!this.walletTrans.currency || !this.walletTrans.amount) {
            this.messages = 'Currency and Amount are required';
            this.hasError = true;
            return;
        }
        event.preventDefault();
        this.saveCard(this.data.stripe, this.data.card, this.data.clientSecret);
    };
    /*
    * Collect card details and pay for the order
    */
    WalletsComponent.prototype.saveCard = function (stripe, card, clientSecret) {
        var _this = this;
        this.errors = '';
        stripe
            .createPaymentMethod('card', card)
            .then(function (result) {
            if (result.error) {
                _this.translate.get(['MESSAGE.INVALID_CARD', 'COMMON.ERROR']).subscribe(function (res) {
                    _this.errors = res['MESSAGE.INVALID_CARD'];
                });
                _this.messages = result.error;
                _this.hasError = true;
            }
            else {
                _this.walletTrans.paymentMethodCode = 'CREDIT_CARD';
                _this.walletTrans.stripePaymentMethodId = result.paymentMethod.id;
                _this.saveWalletTrans();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalletsComponent.prototype, "userId", void 0);
    WalletsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallets',
            templateUrl: './Wallets.component.html',
            styleUrls: ['./Wallets.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], WalletsComponent);
    return WalletsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsComponent", function() { return RewardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Finances/DiscountCards/AdminDiscountCard.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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






var RewardsComponent = /** @class */ (function (_super) {
    __extends(RewardsComponent, _super);
    function RewardsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.discountCards = [];
        _this.messages = '';
        _this.fromAdmin = false;
        _this.step = 1;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        return _this;
    }
    RewardsComponent.prototype.ngOnInit = function () {
        if (this.userId === undefined) {
            this.userId = Number(this.appService.tokenStorage.getUserId());
        }
        else {
            this.fromAdmin = true;
        }
        this.getRewards();
    };
    RewardsComponent.prototype.ngAfterViewInit = function () {
        this.searchCriteria.userId = Number(this.appService.tokenStorage.getUserId());
    };
    RewardsComponent.prototype.clear = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    };
    RewardsComponent.prototype.getRewards = function () {
        var _this = this;
        this.searchCriteria.userId = Number(this.appService.tokenStorage.getUserId());
        this.appService.saveWithUrl('/service/finance/discountCards', this.searchCriteria)
            .subscribe(function (data) {
            _this.discountCards = data;
            console.log(_this.discountCards);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all discount card complete'); });
    };
    RewardsComponent.prototype.getDetails = function (discountCard) {
        this.discountCardComponent.discountCard = discountCard;
        this.discountCardComponent.getDiscountCardTransList(discountCard.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Finances/DiscountCards/AdminDiscountCard.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { static: false }),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/Finances/DiscountCards/AdminDiscountCard.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], RewardsComponent.prototype, "discountCardComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RewardsComponent.prototype, "userId", void 0);
    RewardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rewards',
            templateUrl: './Rewards.component.html',
            styleUrls: ['./Rewards.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], RewardsComponent);
    return RewardsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresRewardsComponent", function() { return StoresRewardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
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





var StoresRewardsComponent = /** @class */ (function (_super) {
    __extends(StoresRewardsComponent, _super);
    function StoresRewardsComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.sidenavOpen = true;
        return _this;
    }
    StoresRewardsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StoresRewardsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StoresRewardsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: false }),
        __metadata("design:type", Object)
    ], StoresRewardsComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper', { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
    ], StoresRewardsComponent.prototype, "stepper", void 0);
    StoresRewardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stores-rewards',
            templateUrl: './Stores-rewards.component.html',
            styleUrls: ['./Stores-rewards.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], StoresRewardsComponent);
    return StoresRewardsComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTransferComponent", function() { return ProductTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
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








var ProductTransferComponent = /** @class */ (function (_super) {
    __extends(ProductTransferComponent, _super);
    function ProductTransferComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.fromProductColumns = ['image', 'productName', 'qty', 'transferQty', 'actions'];
        _this.toProductColumns = ['image', 'productName', 'qty'];
        _this.productTransfer = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.productTransferEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.fromStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.toStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.savedProductStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.addNew = false;
        return _this;
    }
    ProductTransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.getStores();
    };
    ProductTransferComponent.prototype.ngAfterViewInit = function () {
        this.fromProductDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.fromProductDatasource.paginator = this.fromProductPaginator;
        this.toProductDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.toProductDatasource.paginator = this.toProductPaginator;
    };
    ProductTransferComponent.prototype.clear = function () {
        this.messages = '';
    };
    ProductTransferComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    ProductTransferComponent.prototype.getStoreEmployee = function () {
        var _this = this;
        if (+this.appService.tokenStorage.getUserId() > 0) {
            var parameters = [];
            parameters.push('e.employee.id = |userId|' + this.appService.tokenStorage.getUserId() + '|Integer');
            parameters.push('e.store.id = |storeId|' + this.fromStore.id + '|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters)
                .subscribe(function (data) {
                if (data && data.length > 0) {
                    _this.storeEmployee = data[0];
                    if (_this.storeEmployee.canTransfer === 0) {
                        _this.fromProductColumns = ['image', 'productName', 'qty'];
                    }
                    else {
                        _this.fromProductColumns = ['image', 'productName', 'qty', 'transferQty', 'actions'];
                    }
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Get store employee complete for storeId = ' + _this.fromStore.id + ' userId = '
                + _this.appService.tokenStorage.getUserId()); });
        }
    };
    ProductTransferComponent.prototype.getFromProductStoreList = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getStoreMenuUnassignedProductStores/', {
            storeId: this.fromStore.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.reinitializingDatasourceData(_this.fromProductDatasource, _this.fromProductPaginator, _this.fromProductSort, data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all from store products complete'); });
    };
    ProductTransferComponent.prototype.getToProductStoreList = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getStoreMenuUnassignedProductStores/', {
            storeId: this.toStore.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.reinitializingDatasourceData(_this.toProductDatasource, _this.toProductPaginator, _this.toProductSort, data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all to store products complete'); });
    };
    ProductTransferComponent.prototype.fromStoreSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getStoreEmployee();
            _this.getFromProductStoreList();
        }, 500);
    };
    ProductTransferComponent.prototype.toStoreSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getToProductStoreList();
        }, 500);
    };
    ProductTransferComponent.prototype.makeTransfer = function (fromPrdStore) {
        var _this = this;
        this.messages = '';
        this.productTransfer = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.productTransfer.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.productTransfer.productId = fromPrdStore.product.id;
        this.productTransfer.fromPtsId = fromPrdStore.id;
        this.productTransfer.toStoreId = this.toStore.id;
        this.productTransfer.quantity = fromPrdStore.transferQty;
        this.productTransfer.comment = this.comment;
        this.appService.saveWithUrl('/service/catalog/transferProduct/', this.productTransfer)
            .subscribe(function (data) {
            _this.processResult(data, _this.savedProductStore, null);
            _this.savedProductStore = data;
            if (_this.savedProductStore.id > 0) {
                _this.savedProductStore.productName = fromPrdStore.productName;
                _this.updateDatasourceData(_this.toProductDatasource, _this.toProductPaginator, _this.toProductSort, _this.savedProductStore);
                fromPrdStore.quantity -= fromPrdStore.transferQty;
                fromPrdStore.transferQty = undefined;
            }
            else {
                if (data.errors[0] === 'UNKNOWN_TRANSFER_PRODUCT') {
                    _this.translate.get(['VALIDATION.UNKNOWN_TRANSFER_PRODUCT']).subscribe(function (res) {
                        _this.messages = res['VALIDATION.UNKNOWN_TRANSFER_PRODUCT'];
                    });
                }
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Product Transfer complete'); });
    };
    ProductTransferComponent.prototype.setToggleValues = function () {
    };
    ProductTransferComponent.prototype.isEmpty = function (value) {
        '';
        var val = value !== null && value !== undefined ? value.trim() : '';
        return val.length === 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fromProductPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ProductTransferComponent.prototype, "fromProductPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ProductTransferComponent.prototype, "fromProductSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('toProductPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ProductTransferComponent.prototype, "toProductPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ProductTransferComponent.prototype, "toProductSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductTransferComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductTransferComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductTransferComponent.prototype, "productTransferEvent", void 0);
    ProductTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-transfer',
            templateUrl: './ProductTransfer.component.html',
            styleUrls: ['./Transfers.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ProductTransferComponent);
    return ProductTransferComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientTransferComponent", function() { return IngredientTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(438);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
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








var IngredientTransferComponent = /** @class */ (function (_super) {
    __extends(IngredientTransferComponent, _super);
    function IngredientTransferComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.fromIngredientColumns = ['image', 'ingredientName', 'qty', 'transferQty', 'actions'];
        _this.toIngredientColumns = ['image', 'ingredientName', 'qty'];
        _this.ingredientTransfer = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.isAdminPage = false;
        _this.canAcknowledge = false;
        _this.productTransferEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.fromStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.toStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.savedStoreIngredient = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.addNew = false;
        return _this;
    }
    IngredientTransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
        this.getStores();
    };
    IngredientTransferComponent.prototype.ngAfterViewInit = function () {
        this.fromIngredientDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.fromIngredientDatasource.paginator = this.fromIngredientPaginator;
        this.toIngredientDatasource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.toIngredientDatasource.paginator = this.toIngredientPaginator;
    };
    IngredientTransferComponent.prototype.clear = function () {
        this.messages = '';
    };
    IngredientTransferComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    IngredientTransferComponent.prototype.getStoreEmployee = function () {
        var _this = this;
        if (+this.appService.tokenStorage.getUserId() > 0) {
            var parameters = [];
            parameters.push('e.employee.id = |userId|' + this.appService.tokenStorage.getUserId() + '|Integer');
            parameters.push('e.store.id = |storeId|' + this.fromStore.id + '|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters)
                .subscribe(function (data) {
                if (data && data.length > 0) {
                    _this.storeEmployee = data[0];
                    if (_this.storeEmployee.canTransfer === 0) {
                        _this.fromIngredientColumns = ['image', 'ingredientName', 'qty'];
                    }
                    else {
                        _this.fromIngredientColumns = ['image', 'ingredientName', 'qty', 'transferQty', 'actions'];
                    }
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Get store employee complete for storeId = ' + _this.fromStore.id + ' userId = '
                + _this.appService.tokenStorage.getUserId()); });
        }
    };
    IngredientTransferComponent.prototype.getFromIngredientStoreList = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getStoreIngredients/', {
            storeId: this.fromStore.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.reinitializingDatasourceData(_this.fromIngredientDatasource, _this.fromIngredientPaginator, _this.fromIngredientSort, data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all from store ingredients complete'); });
    };
    IngredientTransferComponent.prototype.getToIngredientStoreList = function () {
        var _this = this;
        this.appService.saveWithUrl('/service/catalog/getStoreIngredients/', {
            storeId: this.toStore.id,
            languageId: this.appService.appInfoStorage.language.id
        })
            .subscribe(function (data) {
            _this.reinitializingDatasourceData(_this.toIngredientDatasource, _this.toIngredientPaginator, _this.toIngredientSort, data);
        }, function (error) { return console.log(error); }, function () { return console.log('Get all to store ingredients complete'); });
    };
    IngredientTransferComponent.prototype.fromStoreSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getStoreEmployee();
            _this.getFromIngredientStoreList();
        }, 500);
    };
    IngredientTransferComponent.prototype.toStoreSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getToIngredientStoreList();
        }, 500);
    };
    IngredientTransferComponent.prototype.makeTransfer = function (fromStoreIng) {
        var _this = this;
        this.messages = '';
        this.ingredientTransfer = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.ingredientTransfer.modifiedBy = +this.appService.tokenStorage.getUserId();
        this.ingredientTransfer.ingredientId = fromStoreIng.ingredient.id;
        this.ingredientTransfer.fromStIngId = fromStoreIng.id;
        this.ingredientTransfer.toStoreId = this.toStore.id;
        this.ingredientTransfer.quantity = fromStoreIng.transferQty;
        this.ingredientTransfer.comment = this.comment;
        this.appService.saveWithUrl('/service/catalog/transferIngredient/', this.ingredientTransfer)
            .subscribe(function (data) {
            _this.processResult(data, _this.savedStoreIngredient, null);
            _this.savedStoreIngredient = data;
            if (_this.savedStoreIngredient.id > 0) {
                _this.savedStoreIngredient.ingredientName = fromStoreIng.ingredientName;
                _this.updateDatasourceData(_this.toIngredientDatasource, _this.toIngredientPaginator, _this.toIngredientSort, _this.savedStoreIngredient);
                fromStoreIng.quantity -= fromStoreIng.transferQty;
                fromStoreIng.transferQty = undefined;
            }
            else {
                if (data.errors[0] === 'UNKNOWN_TRANSFER_INGREDIENT') {
                    _this.translate.get(['VALIDATION.UNKNOWN_TRANSFER_INGREDIENT']).subscribe(function (res) {
                        _this.messages = res['VALIDATION.UNKNOWN_TRANSFER_INGREDIENT'];
                    });
                }
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Ingredient Transfer complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fromIngredientPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], IngredientTransferComponent.prototype, "fromIngredientPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], IngredientTransferComponent.prototype, "fromIngredientSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('toIngredientPaginator', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], IngredientTransferComponent.prototype, "toIngredientPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], IngredientTransferComponent.prototype, "toIngredientSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IngredientTransferComponent.prototype, "isAdminPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IngredientTransferComponent.prototype, "canAcknowledge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], IngredientTransferComponent.prototype, "productTransferEvent", void 0);
    IngredientTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingredient-transfer',
            templateUrl: './IngredientTransfer.component.html',
            styleUrls: ['./Transfers.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], IngredientTransferComponent);
    return IngredientTransferComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrdTransferHistoriesComponent", function() { return PrdTransferHistoriesComponent; });
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











var PrdTransferHistoriesComponent = /** @class */ (function (_super) {
    __extends(PrdTransferHistoriesComponent, _super);
    function PrdTransferHistoriesComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.prdHistColumns = ['productName', 'quantity', 'createDate', 'fromStoreName', 'toStoreName', 'comment'];
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeEmployees = [];
        return _this;
    }
    PrdTransferHistoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.getStores();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    PrdTransferHistoriesComponent.prototype.ngAfterViewInit = function () {
    };
    PrdTransferHistoriesComponent.prototype.clear = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        var beginDate = new Date();
        var endDate = new Date();
        beginDate.setDate(beginDate.getDate() - 1);
        endDate.setDate(endDate.getDate() + 1);
        this.searchCriteria.beginDate = beginDate;
        this.searchCriteria.endDate = endDate;
        this.searchCriteria.userId = Number(this.appService.tokenStorage.getUserId());
    };
    PrdTransferHistoriesComponent.prototype.changeOrderType = function (event) {
    };
    PrdTransferHistoriesComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores && _this.stores.length > 0) {
                _this.selectedStore = _this.stores[0];
                _this.storeSelected(_this.selectedStore);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    PrdTransferHistoriesComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.searchCriteria.storeId) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.searchCriteria.storeId + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    PrdTransferHistoriesComponent.prototype.search = function () {
        var _this = this;
        var diff = Math.ceil((this.searchCriteria.endDate.getTime() - this.searchCriteria.beginDate.getTime()) / (1000 * 3600 * 24));
        console.log(diff);
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else if (!(diff >= 0 && diff <= 30)) {
            this.translate.get(['VALIDATION.INVALID_DATE_RANGE', 'COMMON.ERROR']).subscribe(function (res) {
                _this.messages = res['VALIDATION.INVALID_DATE_RANGE'];
            });
        }
        else {
            this.searchCriteria.storeId = this.selectedStore.id;
            // console.log(this.searchCriteria);
            this.appService.saveWithUrl('/service/catalog/getProductHistories', this.searchCriteria)
                .subscribe(function (data) {
                _this.prdHistDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.prdHistDatasource.paginator = _this.prdHistPaginator;
                _this.prdHistDatasource.sort = _this.prdHistSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get prd histories complete'); });
        }
    };
    PrdTransferHistoriesComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
            _this.getMyStoreEmployees();
        }, 500);
    };
    PrdTransferHistoriesComponent.prototype.compareObjects = function (o1, o2) {
        return o1 && o2 ? (o1.id === o2.id) : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginator', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], PrdTransferHistoriesComponent.prototype, "prdHistPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PrdTransferHistoriesComponent.prototype, "prdHistSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PrdTransferHistoriesComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrdTransferHistoriesComponent.prototype, "isAdminPage", void 0);
    PrdTransferHistoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prdtransfer-histories',
            templateUrl: './PrdTransferHistories.component.html',
            styleUrls: ['./TransferHistories.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], PrdTransferHistoriesComponent);
    return PrdTransferHistoriesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngTransferHistoriesComponent", function() { return IngTransferHistoriesComponent; });
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











var IngTransferHistoriesComponent = /** @class */ (function (_super) {
    __extends(IngTransferHistoriesComponent, _super);
    function IngTransferHistoriesComponent(appService, translate, activatedRoute, location) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.activatedRoute = activatedRoute;
        _this.location = location;
        _this.ingHistColumns = ['ingredientName', 'quantity', 'createDate', 'fromStoreName', 'toStoreName'];
        _this.button = 'filter';
        _this.isAdminPage = false;
        _this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.storeSearchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.stores = [];
        _this.colors = ['primary', 'secondary'];
        _this.allStore = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        _this.storeEmployees = [];
        return _this;
    }
    IngTransferHistoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.getStores();
        this.activatedRoute.data.subscribe(function (value) {
            _this.isAdminPage = (value && value.expectedRole && value.expectedRole[0] === 'Administrator')
                && (_this.location.path().startsWith('/admin/'));
        });
    };
    IngTransferHistoriesComponent.prototype.ngAfterViewInit = function () {
    };
    IngTransferHistoriesComponent.prototype.clear = function () {
        this.searchCriteria = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        var beginDate = new Date();
        var endDate = new Date();
        beginDate.setDate(beginDate.getDate() - 1);
        endDate.setDate(endDate.getDate() + 1);
        this.searchCriteria.beginDate = beginDate;
        this.searchCriteria.endDate = endDate;
        this.searchCriteria.userId = Number(this.appService.tokenStorage.getUserId());
    };
    IngTransferHistoriesComponent.prototype.changeOrderType = function (event) {
    };
    IngTransferHistoriesComponent.prototype.getStores = function () {
        var _this = this;
        this.storeSearchCriteria.status = 1;
        this.storeSearchCriteria.userId = +this.appService.tokenStorage.getUserId();
        this.appService.saveWithUrl('/service/catalog/stores', this.storeSearchCriteria)
            .subscribe(function (data) {
            _this.stores = data;
            if (_this.stores && _this.stores.length > 0) {
                _this.selectedStore = _this.stores[0];
                _this.storeSelected(_this.selectedStore);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Stores complete'); });
    };
    IngTransferHistoriesComponent.prototype.getMyStoreEmployees = function () {
        var _this = this;
        if (this.searchCriteria.storeId) {
            var parameters = [];
            parameters.push('e.store.id = |sId|' + this.searchCriteria.storeId + '|Integer');
            parameters.push('e.store.status = |storeStatus|1|Integer');
            parameters.push('e.status = |employeeStatus|1|Integer');
            this.appService.getAllByCriteria('StoreEmployee', parameters, ' ')
                .subscribe(function (data) {
                _this.storeEmployees = data;
            }, function (error) { return console.log(error); }, function () { return console.log('Get all StoreEmployees complete'); });
        }
    };
    IngTransferHistoriesComponent.prototype.search = function () {
        var _this = this;
        var diff = Math.ceil((this.searchCriteria.endDate.getTime() - this.searchCriteria.beginDate.getTime()) / (1000 * 3600 * 24));
        console.log(diff);
        if (this.button.endsWith('clear')) {
            this.clear();
        }
        else if (!(diff >= 0 && diff <= 30)) {
            this.translate.get(['VALIDATION.INVALID_DATE_RANGE', 'COMMON.ERROR']).subscribe(function (res) {
                _this.messages = res['VALIDATION.INVALID_DATE_RANGE'];
            });
        }
        else {
            this.searchCriteria.storeId = this.selectedStore.id;
            this.appService.saveWithUrl('/service/catalog/getStoreIngInventories', this.searchCriteria)
                .subscribe(function (data) {
                _this.ingHistDatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.ingHistDatasource.paginator = _this.ingHistPaginator;
                _this.ingHistDatasource.sort = _this.ingHistSort;
            }, function (error) { return console.log(error); }, function () { return console.log('Get store ing inventories complete'); });
        }
    };
    IngTransferHistoriesComponent.prototype.storeSelected = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.searchCriteria.storeId = _this.selectedStore.id;
            _this.search();
            _this.getMyStoreEmployees();
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('MatPaginator', { static: true }),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], IngTransferHistoriesComponent.prototype, "ingHistPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], IngTransferHistoriesComponent.prototype, "ingHistSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], IngTransferHistoriesComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IngTransferHistoriesComponent.prototype, "isAdminPage", void 0);
    IngTransferHistoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingtransfer-histories',
            templateUrl: './IngTransferHistories.component.html',
            styleUrls: ['./TransferHistories.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], IngTransferHistoriesComponent);
    return IngTransferHistoriesComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ }),

/***/ 2235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
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






var WalletComponent = /** @class */ (function (_super) {
    __extends(WalletComponent, _super);
    function WalletComponent(appService, translate) {
        var _this = _super.call(this, translate) || this;
        _this.appService = appService;
        _this.translate = translate;
        _this.wltCols = ['date', 'type', 'amount', 'store'];
        _this.wallet = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        _this.messages = '';
        _this.fromAdmin = false;
        _this.step = 1;
        return _this;
    }
    WalletComponent.prototype.ngOnInit = function () {
        if (this.userId === undefined) {
            this.userId = Number(this.appService.tokenStorage.getUserId());
        }
        else {
            this.fromAdmin = true;
        }
    };
    WalletComponent.prototype.ngAfterViewInit = function () {
    };
    WalletComponent.prototype.getWalletTransList = function (walletId) {
        var _this = this;
        this.appService.saveWithUrl('/service/finance/getWalletTransList/', {
            walletId: walletId
        })
            .subscribe(function (data) {
            var i = 0;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var wl = data_1[_i];
                _this.wltDS = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.wltDS.paginator = _this.wltPaginator;
                _this.wltDS.sort = _this.wltSort;
                i++;
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get wallet trans list complete'); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        __metadata("design:type", Object)
    ], WalletComponent.prototype, "wltPaginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        __metadata("design:type", Object)
    ], WalletComponent.prototype, "wltSort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", !(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/app.models'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ], WalletComponent.prototype, "wallet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalletComponent.prototype, "userId", void 0);
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            templateUrl: './Wallet.component.html',
            styleUrls: ['./Wallets.component.scss']
        }),
        __metadata("design:paramtypes", [!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/Services/app.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], WalletComponent);
    return WalletComponent;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'src/app/AdminPanel/baseComponent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ })

};;