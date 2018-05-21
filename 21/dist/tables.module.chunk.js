webpackJsonp(["tables.module"],{

/***/ "./src/app/pages/tables/evidence-table/evidence-table.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n\r\n  <nb-card-body>\r\n    <table class=\"table\" border=\"1\" style=\"border: 1px solid grey;\">\r\n      <thead>\r\n              <tr style=\"font: bold\">\r\n                <td>Country</td>\r\n                <td>Deal Number</td>\r\n                <td>Customer</td>\r\n                <td>Item</td>\r\n                <td>Item Profile</td>\r\n               \r\n                <td>Amount</td>\r\n              \r\n                <td>Datetime</td>\r\n           \r\n             \r\n                <td>Status</td>\r\n                <td>Step</td>\r\n                <td>Owner</td>\r\n                <td>Remaining time (HH:mm:ss)</td>\r\n                <td>Elapsed time (HH:mm:ss)</td>\r\n                <td>Post cutoff</td>\r\n              </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr  *ngFor=\"let item of data.danger\"  style=\"background: #E60028\">\r\n            <td>{{item.country}}</td>\r\n            <td>{{item.dealNumber}}</td>\r\n            <td>{{item.customerName}}</td>\r\n            <td>{{item.item}}</td>\r\n            <td>{{item.itemProfile}}</td>          \r\n            <td>{{item.amount}}</td>           \r\n            <td>{{item.datetime}}</td>    \r\n            <td>{{item.status}}</td>\r\n            <td>{{item.step}}</td>\r\n            <td>{{item.owner}}</td>\r\n            <td>{{item.remainingTime}}</td>\r\n            <td>{{item.elapsedTime}}</td>\r\n            <td>{{item.postCutOff}}</td>\r\n        </tr>\r\n        <tr  *ngFor=\"let item of data.warning\"  style=\"background: #FFA500\">\r\n            <td>{{item.country}}</td>\r\n            <td>{{item.dealNumber}}</td>\r\n            <td>{{item.customerName}}</td>\r\n            <td>{{item.item}}</td>\r\n            <td>{{item.itemProfile}}</td>          \r\n            <td>{{item.amount}}</td>           \r\n            <td>{{item.datetime}}</td>    \r\n            <td>{{item.status}}</td>\r\n            <td>{{item.step}}</td>\r\n            <td>{{item.owner}}</td>\r\n            <td>{{item.remainingTime}}</td>\r\n            <td>{{item.elapsedTime}}</td>\r\n            <td>{{item.postCutOff}}</td>\r\n        </tr>\r\n        <tr  *ngFor=\"let item of data.warning\"  >\r\n            <td>{{item.country}}</td>\r\n            <td>{{item.dealNumber}}</td>\r\n            <td>{{item.customerName}}</td>\r\n            <td>{{item.item}}</td>\r\n            <td>{{item.itemProfile}}</td>          \r\n            <td>{{item.amount}}</td>           \r\n            <td>{{item.datetime}}</td>    \r\n            <td>{{item.status}}</td>\r\n            <td>{{item.step}}</td>\r\n            <td>{{item.owner}}</td>\r\n            <td>{{item.remainingTime}}</td>\r\n            <td>{{item.elapsedTime}}</td>\r\n            <td>{{item.postCutOff}}</td>\r\n        </tr>\r\n      </tbody>\r\n      </table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tables/evidence-table/evidence-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_services_dashboard_service__ = __webpack_require__("./src/app/@core/data/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartTableComponent = /** @class */ (function () {
    function SmartTableComponent(eService, router) {
        this.eService = eService;
        this.router = router;
        this.data = {};
    }
    SmartTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshData();
        this.interval = setInterval(function () {
            _this.refreshData();
        }, 20000);
    };
    SmartTableComponent.prototype.refreshData = function () {
        var _this = this;
        this.eService.fetchDashboardLiveData().subscribe(function (x) {
            console.log(x);
            _this.data = x;
        });
    };
    SmartTableComponent.prototype.onRefresh = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        var currentUrl = this.router.url + '?';
        this.router.navigateByUrl(currentUrl)
            .then(function () {
            _this.router.navigated = false;
            _this.router.navigate([_this.router.url]);
        });
    };
    SmartTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-smart-table',
            template: __webpack_require__("./src/app/pages/tables/evidence-table/evidence-table.component.html"),
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], SmartTableComponent);
    return SmartTableComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tables_component__ = __webpack_require__("./src/app/pages/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evidence_table_evidence_table_component__ = __webpack_require__("./src/app/pages/tables/evidence-table/evidence-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__tables_component__["a" /* TablesComponent */],
        children: [{
                path: 'evidences',
                component: __WEBPACK_IMPORTED_MODULE_3__evidence_table_evidence_table_component__["a" /* SmartTableComponent */],
            },
            {
                path: 'details',
            },
        ],
    },
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__tables_component__["a" /* TablesComponent */],
    __WEBPACK_IMPORTED_MODULE_3__evidence_table_evidence_table_component__["a" /* SmartTableComponent */],
];


/***/ }),

/***/ "./src/app/pages/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tables',
            template: "<router-outlet></router-outlet>",
        })
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_routing_module__ = __webpack_require__("./src/app/pages/tables/tables-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__ = __webpack_require__("./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mousetrap__ = __webpack_require__("./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mousetrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mousetrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_modal_gallery__ = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 // <------ mandatory dependency for angular-modal-gallery
 // <------ mandatory dependency for angular-modal-gallery
 // 

var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__tables_routing_module__["a" /* TablesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_modal_gallery__["a" /* ModalGalleryModule */],
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__tables_routing_module__["b" /* routedComponents */].slice(),
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
            ],
        })
    ], TablesModule);
    return TablesModule;
}());

// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}


/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map