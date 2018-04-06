webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./editors/editors.module": [
		"./src/app/pages/editors/editors.module.ts",
		"common",
		"editors.module"
	],
	"./tables/tables.module": [
		"./src/app/pages/tables/tables.module.ts",
		"common",
		"tables.module"
	],
	"app/pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__ = __webpack_require__("./src/app/@theme/components/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_security__ = __webpack_require__("./node_modules/@nebular/security/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_import_guard__ = __webpack_require__("./src/app/@core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_data_module__ = __webpack_require__("./src/app/@core/data/data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var socialLinks = [];
var NB_CORE_PROVIDERS = __WEBPACK_IMPORTED_MODULE_6__data_data_module__["a" /* DataModule */].forRoot().providers.concat(__WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["b" /* NbAuthModule */].forRoot({
    providers: {
        email: {
            service: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["c" /* NbDummyAuthProvider */],
            config: {
                delay: 3000,
                login: {
                    rememberMe: true,
                },
            },
        },
    },
    forms: {
        login: {
            socialLinks: socialLinks,
        },
        register: {
            socialLinks: socialLinks,
        },
    },
}).providers, [
    __WEBPACK_IMPORTED_MODULE_3__nebular_security__["b" /* NbSecurityModule */].forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: __WEBPACK_IMPORTED_MODULE_3__nebular_security__["a" /* NbRoleProvider */],
        useValue: {
            getRole: function () {
                return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])('guest'); // here you could provide any role based on any auth flow
            },
        },
    },
    __WEBPACK_IMPORTED_MODULE_7__utils_analytics_service__["a" /* AnalyticsService */],
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_5__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["b" /* NbAuthModule */],
            ],
            declarations: [],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_service__ = __webpack_require__("./src/app/@core/data/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__smart_table_service__ = __webpack_require__("./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_service__ = __webpack_require__("./src/app/@core/data/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__electricity_service__ = __webpack_require__("./src/app/@core/data/electricity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_3__services_dashboard_service__["a" /* DashboardService */],
    __WEBPACK_IMPORTED_MODULE_4__state_service__["a" /* StateService */],
    __WEBPACK_IMPORTED_MODULE_5__smart_table_service__["a" /* SmartTableService */],
    __WEBPACK_IMPORTED_MODULE_6__player_service__["a" /* PlayerService */],
    __WEBPACK_IMPORTED_MODULE_7__electricity_service__["a" /* ElectricityService */]
];
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule_1 = DataModule;
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule_1,
            providers: SERVICES.slice(),
        };
    };
    DataModule = DataModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            ],
            providers: SERVICES.slice(),
        })
    ], DataModule);
    return DataModule;
    var DataModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/electricity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectricityService = /** @class */ (function () {
    function ElectricityService() {
        this.data = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
    }
    // TODO: observables
    ElectricityService.prototype.getData = function () {
        return this.data;
    };
    ElectricityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ElectricityService);
    return ElectricityService;
}());



/***/ }),

/***/ "./src/app/@core/data/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Track */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());

var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    PlayerService.prototype.random = function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    PlayerService.prototype.next = function () {
        return this.getNextTrack();
    };
    PlayerService.prototype.prev = function () {
        return this.getPrevTrack();
    };
    PlayerService.prototype.getNextTrack = function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    PlayerService.prototype.getPrevTrack = function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/@core/data/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.data = [];
    }
    /** GET hero by id. Will 404 if id not found */
    DashboardService.prototype.getMonthlyTrends = function () {
        var _this = this;
        this.region = localStorage.getItem('region');
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "MonthlyTrends/" + this.region;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched Monthly Trends"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("Monthly Trends Error")));
    };
    DashboardService.prototype.fetchEvidenceCount = function () {
        var _this = this;
        //return this.http.get<any>(`${environment.baseUrl}EvidenceCount`)
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "EvidenceCount").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched Evidence Count"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("Evidence Count Error")));
    };
    DashboardService.prototype.fetchEvidenceDayWise = function () {
        var _this = this;
        //return this.http.get<any>(`${environment.baseUrl}EvidenceCount`)
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "EvidenceByDays").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched Evidence Day wise"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("Evidence Day wise Error")));
    };
    /** GET hero by id. Will 404 if id not found */
    DashboardService.prototype.getErrorByCategory = function () {
        var _this = this;
        this.region = localStorage.getItem('region');
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "ErrorByCategory/" + this.region;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched ErrorByCategory"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("Monthly ErrorByCategory")));
    };
    DashboardService.prototype.fetchEvidenceMonthWise = function () {
        var _this = this;
        //return this.http.get<any>(`${environment.baseUrl}EvidenceCount`)
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "EvidenceByMonth").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched Evidence Month wise"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("Evidence Month wise Error")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DashboardService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    DashboardService.prototype.log = function (message) {
        console.log(message);
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/@core/data/smart-table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SmartTableService = /** @class */ (function () {
    function SmartTableService() {
        this.data = [];
    }
    SmartTableService.prototype.getData = function () {
        return this.data;
    };
    SmartTableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SmartTableService);
    return SmartTableService;
}());



/***/ }),

/***/ "./src/app/@core/data/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StateService = /** @class */ (function () {
    function StateService() {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Left Sidebar',
                icon: 'nb-layout-sidebar-left',
                id: 'left',
                selected: true,
            },
            {
                name: 'Right Sidebar',
                icon: 'nb-layout-sidebar-right',
                id: 'right',
            },
        ];
        this.layoutState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.layouts[0]);
        this.sidebarState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.sidebars[0]);
    }
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    StateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/@core/data/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var counter = 0;
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = {
            chocks: { name: 'Chockalingam Padmavathi' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        // this.userArray = Object.values(this.users);
    }
    UserService.prototype.getUsers = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this.users);
    };
    UserService.prototype.getUserArray = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this.userArray);
    };
    UserService.prototype.getUser = function () {
        counter = (counter + 1) % this.userArray.length;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this.userArray[counter]);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/@core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/@core/utils/analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["a" /* filter */].call(this.router.events, function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nbAuthServiceFactory */
/* unused harmony export nbOptionsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dummy_auth_provider__ = __webpack_require__("./src/app/@theme/components/auth/providers/dummy-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_email_pass_auth_provider__ = __webpack_require__("./src/app/@theme/components/auth/providers/email-pass-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_token_token_service__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_token_token__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_token_token_storage__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_auth_component__ = __webpack_require__("./src/app/@theme/components/auth/components/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_auth_block_auth_block_component__ = __webpack_require__("./src/app/@theme/components/auth/components/auth-block/auth-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__("./src/app/@theme/components/auth/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__("./src/app/@theme/components/auth/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_logout_logout_component__ = __webpack_require__("./src/app/@theme/components/auth/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_request_password_request_password_component__ = __webpack_require__("./src/app/@theme/components/auth/components/request-password/request-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_reset_password_reset_password_component__ = __webpack_require__("./src/app/@theme/components/auth/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_routes__ = __webpack_require__("./src/app/@theme/components/auth/auth.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function nbAuthServiceFactory(config, tokenService, injector) {
    var providers = config.providers || {};
    for (var key in providers) {
        if (providers.hasOwnProperty(key)) {
            var provider = providers[key];
            var object = injector.get(provider.service);
            object.setConfig(provider.config || {});
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* NbAuthService */](tokenService, injector, providers);
}
function nbOptionsFactory(options) {
    return Object(__WEBPACK_IMPORTED_MODULE_21__helpers__["a" /* deepExtend */])(__WEBPACK_IMPORTED_MODULE_12__auth_options__["f" /* defaultSettings */], options);
}
var NbAuthModule = /** @class */ (function () {
    function NbAuthModule() {
    }
    NbAuthModule_1 = NbAuthModule;
    NbAuthModule.forRoot = function (nbAuthOptions) {
        return {
            ngModule: NbAuthModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_12__auth_options__["e" /* NB_AUTH_USER_OPTIONS */], useValue: nbAuthOptions },
                { provide: __WEBPACK_IMPORTED_MODULE_12__auth_options__["b" /* NB_AUTH_OPTIONS */], useFactory: nbOptionsFactory, deps: [__WEBPACK_IMPORTED_MODULE_12__auth_options__["e" /* NB_AUTH_USER_OPTIONS */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__auth_options__["c" /* NB_AUTH_PROVIDERS */], useValue: {} },
                { provide: __WEBPACK_IMPORTED_MODULE_12__auth_options__["d" /* NB_AUTH_TOKEN_CLASS */], useValue: __WEBPACK_IMPORTED_MODULE_10__services_token_token__["a" /* NbAuthSimpleToken */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__auth_options__["a" /* NB_AUTH_INTERCEPTOR_HEADER */], useValue: 'Authorization' },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* NbAuthService */],
                    useFactory: nbAuthServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_12__auth_options__["b" /* NB_AUTH_OPTIONS */], __WEBPACK_IMPORTED_MODULE_9__services_token_token_service__["a" /* NbTokenService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]],
                },
                { provide: __WEBPACK_IMPORTED_MODULE_11__services_token_token_storage__["b" /* NbTokenStorage */], useClass: __WEBPACK_IMPORTED_MODULE_11__services_token_token_storage__["a" /* NbTokenLocalStorage */] },
                __WEBPACK_IMPORTED_MODULE_9__services_token_token_service__["a" /* NbTokenService */],
                __WEBPACK_IMPORTED_MODULE_7__providers_dummy_auth_provider__["a" /* NbDummyAuthProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_email_pass_auth_provider__["a" /* NbEmailPassAuthProvider */],
            ],
        };
    };
    NbAuthModule = NbAuthModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__nebular_theme__["e" /* NbLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__nebular_theme__["b" /* NbCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__nebular_theme__["c" /* NbCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_20__auth_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__components_auth_component__["a" /* NbAuthComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_auth_block_auth_block_component__["a" /* NbAuthBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* NbLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* NbRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_request_password_request_password_component__["a" /* NbRequestPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_reset_password_reset_password_component__["a" /* NbResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_logout_logout_component__["a" /* NbLogoutComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__components_auth_component__["a" /* NbAuthComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_auth_block_auth_block_component__["a" /* NbAuthBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* NbLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* NbRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_request_password_request_password_component__["a" /* NbRequestPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_reset_password_reset_password_component__["a" /* NbResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_logout_logout_component__["a" /* NbLogoutComponent */],
            ],
        })
    ], NbAuthModule);
    return NbAuthModule;
    var NbAuthModule_1;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/auth.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NB_AUTH_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NB_AUTH_USER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NB_AUTH_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NB_AUTH_TOKEN_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NB_AUTH_INTERCEPTOR_HEADER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var socialLinks = [];
var defaultSettings = {
    forms: {
        login: {
            redirectDelay: 500,
            provider: 'email',
            rememberMe: true,
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        register: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },
        requestPassword: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        resetPassword: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        logout: {
            redirectDelay: 500,
            provider: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
    },
};
var NB_AUTH_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular Auth Options');
var NB_AUTH_USER_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular User Auth Options');
var NB_AUTH_PROVIDERS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular Auth Providers');
var NB_AUTH_TOKEN_CLASS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular Token Class');
var NB_AUTH_INTERCEPTOR_HEADER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Nebular Simple Interceptor Header');


/***/ }),

/***/ "./src/app/@theme/components/auth/auth.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_auth_component__ = __webpack_require__("./src/app/@theme/components/auth/components/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("./src/app/@theme/components/auth/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("./src/app/@theme/components/auth/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_logout_logout_component__ = __webpack_require__("./src/app/@theme/components/auth/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_request_password_request_password_component__ = __webpack_require__("./src/app/@theme/components/auth/components/request-password/request-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_reset_password_reset_password_component__ = __webpack_require__("./src/app/@theme/components/auth/components/reset-password/reset-password.component.ts");






var routes = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_0__components_auth_component__["a" /* NbAuthComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* NbLoginComponent */],
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* NbLoginComponent */],
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* NbRegisterComponent */],
            },
            {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_3__components_logout_logout_component__["a" /* NbLogoutComponent */],
            },
            {
                path: 'request-password',
                component: __WEBPACK_IMPORTED_MODULE_4__components_request_password_request_password_component__["a" /* NbRequestPasswordComponent */],
            },
            {
                path: 'reset-password',
                component: __WEBPACK_IMPORTED_MODULE_5__components_reset_password_reset_password_component__["a" /* NbResetPasswordComponent */],
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/@theme/components/auth/components/auth-block/auth-block.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n@media (max-width: 550px) {\n  :host /deep/ .accept-group {\n    font-size: 12px;\n    padding: 0; } }\n:host /deep/ form {\n  width: 100%; }\n:host /deep/ .alert {\n  text-align: center; }\n:host /deep/ .title {\n  margin-bottom: 0.75rem;\n  text-align: center; }\n:host /deep/ .sub-title {\n  margin-bottom: 2rem;\n  text-align: center; }\n:host /deep/ .checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n  font-weight: normal; }\n:host /deep/ .form-group.accept-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 2rem 0; }\n:host /deep/ .form-group.accept-group .forgot-password {\n    line-height: 2; }\n:host /deep/ .links {\n  text-align: center;\n  margin-top: 1.75rem; }\n:host /deep/ .links .socials {\n    margin: 1.5rem 0 2.5rem; }\n:host /deep/ .links .socials a {\n    margin: 0 1rem;\n    text-decoration: none;\n    font-size: 1rem;\n    vertical-align: middle; }\n:host /deep/ .links .socials a.with-icon {\n      font-size: 2rem; }\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/components/auth-block/auth-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbAuthBlockComponent = /** @class */ (function () {
    function NbAuthBlockComponent() {
    }
    NbAuthBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nb-auth-block',
            styles: [__webpack_require__("./src/app/@theme/components/auth/components/auth-block/auth-block.component.scss")],
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NbAuthBlockComponent);
    return NbAuthBlockComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/components/auth.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem; }\n\n:host /deep/ nb-card {\n  height: calc(100vh - 2 * 2.5rem); }\n\n:host /deep/ nb-card {\n  margin: 0; }\n\n:host /deep/ .flex-centered {\n  margin: auto; }\n\n:host /deep/ nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n@media (max-width: 550px) {\n  :host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n    padding: 0; }\n  :host /deep/ nb-card {\n    border-radius: 0;\n    height: 100vh; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/components/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var NbAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function NbAuthComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.alive = true;
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_takeWhile__["a" /* takeWhile */])(function () { return _this.alive; }))
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    NbAuthComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbAuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nb-auth',
            styles: [__webpack_require__("./src/app/@theme/components/auth/components/auth.component.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-body>\n            <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n              <router-outlet></router-outlet>\n            </div>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* NbAuthService */]])
    ], NbAuthComponent);
    return NbAuthComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_component__ = __webpack_require__("./src/app/@theme/components/auth/components/auth.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_block_auth_block_component__ = __webpack_require__("./src/app/@theme/components/auth/components/auth-block/auth-block.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/@theme/components/auth/components/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__("./src/app/@theme/components/auth/components/logout/logout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("./src/app/@theme/components/auth/components/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_password_request_password_component__ = __webpack_require__("./src/app/@theme/components/auth/components/request-password/request-password.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__request_password_request_password_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__ = __webpack_require__("./src/app/@theme/components/auth/components/reset-password/reset-password.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__["a"]; });









/***/ }),

/***/ "./src/app/@theme/components/auth/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbLoginComponent = /** @class */ (function () {
    function NbLoginComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    NbLoginComponent.prototype.login = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.authenticate(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbLoginComponent.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    NbLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nb-login',
            template: "'\n    <nb-auth-block>\n      <h2 class=\"title\">Sign In</h2>\n      <small class=\"form-text sub-title\">Hello! Sign in with your username or email</small>\n\n      <form (ngSubmit)=\"login()\" #form=\"ngForm\" autocomplete=\"nope\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" pattern=\".+@.+..+\"\n                 class=\"form-control\" placeholder=\"Email address\" #email=\"ngModel\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\" autofocus\n                 [required]=\"getConfigValue('forms.validation.email.required')\">\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{ getConfigValue('forms.validation.password.minLength') }}\n            to {{ getConfigValue('forms.validation.password.maxLength') }}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group accept-group col-sm-12\">\n          <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\">Remember me</nb-checkbox>\n          <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a>\n        </div>\n\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n                [class.btn-pulse]=\"submitted\">\n          Sign In\n        </button>\n      </form>\n\n      <div class=\"links\">\n\n        <ng-container *ngIf=\"socialLinks && socialLinks.length > 0\">\n          <small class=\"form-text\">Or connect with:</small>\n\n          <div class=\"socials\">\n            <ng-container *ngFor=\"let socialLink of socialLinks\">\n              <a *ngIf=\"socialLink.link\"\n                 [routerLink]=\"socialLink.link\"\n                 [attr.target]=\"socialLink.target\"\n                 [attr.class]=\"socialLink.icon\"\n                 [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n              <a *ngIf=\"socialLink.url\"\n                 [attr.href]=\"socialLink.url\"\n                 [attr.target]=\"socialLink.target\"\n                 [attr.class]=\"socialLink.icon\"\n                 [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n            </ng-container>\n          </div>\n        </ng-container>\n\n       \n      </div>\n    </nb-auth-block>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["b" /* NB_AUTH_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* NbAuthService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NbLoginComponent);
    return NbLoginComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbLogoutComponent = /** @class */ (function () {
    function NbLogoutComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.provider = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.provider = this.getConfigValue('forms.logout.provider');
    }
    NbLogoutComponent.prototype.ngOnInit = function () {
        this.logout(this.provider);
    };
    NbLogoutComponent.prototype.logout = function (provider) {
        var _this = this;
        this.service.logout(provider).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbLogoutComponent.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    NbLogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nb-logout',
            template: "\n    <div>Logging out, please wait...</div>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["b" /* NB_AUTH_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* NbAuthService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NbLogoutComponent);
    return NbLogoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/components/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .title {\n  margin-bottom: 2rem; }\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbRegisterComponent = /** @class */ (function () {
    function NbRegisterComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.provider = this.getConfigValue('forms.register.provider');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    NbRegisterComponent.prototype.register = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbRegisterComponent.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    NbRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nb-register',
            styles: [__webpack_require__("./src/app/@theme/components/auth/components/register/register.component.scss")],
            template: "\n    <nb-auth-block>\n      <h2 class=\"title\">Sign Up</h2>\n      <form (ngSubmit)=\"register()\" #form=\"ngForm\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-name\" class=\"sr-only\">Full name</label>\n          <input name=\"fullName\" [(ngModel)]=\"user.fullName\" id=\"input-name\" #fullName=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Full name\"\n                 [class.form-control-danger]=\"fullName.invalid && fullName.touched\"\n                 [required]=\"getConfigValue('forms.validation.fullName.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"fullName.invalid && fullName.touched && fullName.errors?.required\">\n            Full name is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"fullName.invalid && fullName.touched && (fullName.errors?.minlength || fullName.errors?.maxlength)\">\n            Full name should contains\n            from {{getConfigValue('forms.validation.password.minLength')}}\n            to {{getConfigValue('forms.validation.password.maxLength')}}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" #email=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Email address\" pattern=\".+@.+..+\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\"\n                 [required]=\"getConfigValue('forms.validation.email.required')\">\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{ getConfigValue('forms.validation.password.minLength') }}\n            to {{ getConfigValue('forms.validation.password.maxLength') }}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-re-password\" class=\"sr-only\">Repeat password</label>\n          <input\n            name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\"\n            class=\"form-control\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n            [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n            [required]=\"getConfigValue('forms.validation.password.required')\">\n          <small class=\"form-text error\"\n                 *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\n            Password confirmation is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\n            Password does not match the confirm password.\n          </small>\n        </div>\n\n        <div class=\"form-group accept-group col-sm-12\" *ngIf=\"getConfigValue('forms.register.terms')\">\n          <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n            Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n          </nb-checkbox>\n        </div>\n\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-success\"\n                [class.btn-pulse]=\"submitted\">\n          Register\n        </button>\n      </form>\n\n      <div class=\"links\">\n\n        <ng-container *ngIf=\"socialLinks && socialLinks.length > 0\">\n          <small class=\"form-text\">Or connect with:</small>\n\n          <div class=\"socials\">\n            <ng-container *ngFor=\"let socialLink of socialLinks\">\n              <a *ngIf=\"socialLink.link\"\n                 [routerLink]=\"socialLink.link\"\n                 [attr.target]=\"socialLink.target\"\n                 [attr.class]=\"socialLink.icon\"\n                 [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n              <a *ngIf=\"socialLink.url\"\n                 [attr.href]=\"socialLink.url\"\n                 [attr.target]=\"socialLink.target\"\n                 [attr.class]=\"socialLink.icon\"\n                 [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a>\n            </ng-container>\n          </div>\n        </ng-container>\n\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign in</strong></a>\n        </small>\n      </div>\n    </nb-auth-block>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["b" /* NB_AUTH_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* NbAuthService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NbRegisterComponent);
    return NbRegisterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/components/request-password/request-password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host .form-group:last-of-type {\n  margin-bottom: 3rem; }\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/components/request-password/request-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbRequestPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbRequestPasswordComponent = /** @class */ (function () {
    function NbRequestPasswordComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.requestPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
        this.provider = this.getConfigValue('forms.requestPassword.provider');
    }
    NbRequestPasswordComponent.prototype.requestPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.requestPassword(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbRequestPasswordComponent.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    NbRequestPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nb-request-password-page',
            styles: [__webpack_require__("./src/app/@theme/components/auth/components/request-password/request-password.component.scss")],
            template: "\n    <nb-auth-block>\n      <h2 class=\"title\">Forgot Password</h2>\n      <small class=\"form-text sub-title\">Enter your email adress and we\u2019ll send a link to reset your password</small>\n      <form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Enter your email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" #email=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Email address\" pattern=\".+@.+..+\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\"\n                 [required]=\"getConfigValue('forms.validation.email.required')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <button [disabled]=\"submitted || !requestPassForm.form.valid\" class=\"btn btn-hero-success btn-block\"\n                [class.btn-pulse]=\"submitted\">\n          Request password\n        </button>\n      </form>\n\n      <div class=\"links col-sm-12\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign In</strong></a>\n        </small>\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n    </nb-auth-block>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["b" /* NB_AUTH_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* NbAuthService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NbRequestPasswordComponent);
    return NbRequestPasswordComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/components/reset-password/reset-password.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host .form-group:last-of-type {\n  margin-bottom: 3rem; }\n"

/***/ }),

/***/ "./src/app/@theme/components/auth/components/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NbResetPasswordComponent = /** @class */ (function () {
    function NbResetPasswordComponent(service, config, router) {
        if (config === void 0) { config = {}; }
        this.service = service;
        this.config = config;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
        this.provider = this.getConfigValue('forms.resetPassword.provider');
    }
    NbResetPasswordComponent.prototype.resetPass = function () {
        var _this = this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.resetPassword(this.provider, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            }
            else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbResetPasswordComponent.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    NbResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nb-reset-password-page',
            styles: [__webpack_require__("./src/app/@theme/components/auth/components/reset-password/reset-password.component.scss")],
            template: "\n    <nb-auth-block>\n      <h2 class=\"title\">Change password</h2>\n      <small class=\"form-text sub-title\">Please enter a new password</small>\n      <form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\">\n\n        <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">New Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control form-control-lg first\" placeholder=\"New Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{getConfigValue('forms.validation.password.minLength')}}\n            to {{getConfigValue('forms.validation.password.maxLength')}}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-re-password\" class=\"sr-only\">Confirm Password</label>\n          <input\n            name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\"\n            class=\"form-control form-control-lg last\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n            [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n            [required]=\"getConfigValue('forms.validation.password.required')\">\n          <small class=\"form-text error\"\n                 *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\n            Password confirmation is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\n            Password does not match the confirm password.\n          </small>\n        </div>\n\n        <button [disabled]=\"submitted || !resetPassForm.form.valid\" class=\"btn btn-hero-success btn-block\"\n                [class.btn-pulse]=\"submitted\">\n          Change password\n        </button>\n      </form>\n\n      <div class=\"links col-sm-12\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign In</strong></a>\n        </small>\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n    </nb-auth-block>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_options__["b" /* NB_AUTH_OPTIONS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* NbAuthService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NbResetPasswordComponent);
    return NbResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepExtend; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getDeepFromObject;
/* harmony export (immutable) */ __webpack_exports__["c"] = urlBase64Decode;
/* unused harmony export b64decode */
/* unused harmony export b64DecodeUnicode */
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
                // custom cloning and overwrite for specific objects
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
function isSpecificValue(val) {
    return (val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('cloneSpecificValue: Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    var clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object || {});
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
        else {
            level = undefined;
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function urlBase64Decode(str) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: {
            break;
        }
        case 2: {
            output += '==';
            break;
        }
        case 3: {
            output += '=';
            break;
        }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}
function b64decode(str) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    str = String(str).replace(/=+$/, '');
    if (str.length % 4 === 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
    // initialize result and counters
    var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
    // get next character
    buffer = str.charAt(idx++); 
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}


/***/ }),

/***/ "./src/app/@theme/components/auth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__("./src/app/@theme/components/auth/auth.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("./src/app/@theme/components/auth/components/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/@theme/components/auth/services/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__("./src/app/@theme/components/auth/providers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__providers__["a"]; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/@theme/components/auth/providers/abstract-auth.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAbstractAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");


var NbAbstractAuthProvider = /** @class */ (function () {
    function NbAbstractAuthProvider() {
        this.defaultConfig = {};
        this.config = {};
    }
    NbAbstractAuthProvider.prototype.setConfig = function (config) {
        this.config = Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* deepExtend */])({}, this.defaultConfig, config);
    };
    NbAbstractAuthProvider.prototype.getConfigValue = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* getDeepFromObject */])(this.config, key, null);
    };
    NbAbstractAuthProvider.prototype.createFailResponse = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ body: {}, status: 401 });
    };
    NbAbstractAuthProvider.prototype.createSuccessResponse = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ body: {}, status: 200 });
    };
    NbAbstractAuthProvider.prototype.getJsonSafe = function (res) {
        return res.body;
    };
    return NbAbstractAuthProvider;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/providers/dummy-auth.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbDummyAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_auth_provider__ = __webpack_require__("./src/app/@theme/components/auth/providers/abstract-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_result__ = __webpack_require__("./src/app/@theme/components/auth/services/auth-result.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NbDummyAuthProvider = /** @class */ (function (_super) {
    __extends(NbDummyAuthProvider, _super);
    function NbDummyAuthProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultConfig = {
            delay: 500,
        };
        return _this;
    }
    NbDummyAuthProvider.prototype.authenticate = function (data) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.createDummyResult(data))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_delay__["a" /* delay */])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.register = function (data) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.createDummyResult(data))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_delay__["a" /* delay */])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.requestPassword = function (data) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.createDummyResult(data))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_delay__["a" /* delay */])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.resetPassword = function (data) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.createDummyResult(data))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_delay__["a" /* delay */])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.logout = function (data) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.createDummyResult(data))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_delay__["a" /* delay */])(this.getConfigValue('delay')));
    };
    NbDummyAuthProvider.prototype.createDummyResult = function (data) {
        if (this.getConfigValue('alwaysFail')) {
            // TODO we dont call tokenService clear during logout in case result is not success
            return new __WEBPACK_IMPORTED_MODULE_4__services_auth_result__["a" /* NbAuthResult */](false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        // TODO is it missed messages here, is it token should be defined
        return new __WEBPACK_IMPORTED_MODULE_4__services_auth_result__["a" /* NbAuthResult */](true, this.createSuccessResponse(data), 'pages', ['Successfully logged in.']);
    };
    NbDummyAuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], NbDummyAuthProvider);
    return NbDummyAuthProvider;
}(__WEBPACK_IMPORTED_MODULE_3__abstract_auth_provider__["a" /* NbAbstractAuthProvider */]));



/***/ }),

/***/ "./src/app/@theme/components/auth/providers/email-pass-auth.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbEmailPassAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_catchError__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/catchError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_result__ = __webpack_require__("./src/app/@theme/components/auth/services/auth-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__abstract_auth_provider__ = __webpack_require__("./src/app/@theme/components/auth/providers/abstract-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */










/**
 * The most common authentication provider for email/password strategy.
 *
 *
 * @example
 *
 * Default settings object:
 *
 * ```
 * {
 *  baseEndpoint: '',
 *  login: {
 *    alwaysFail: false,
 *    rememberMe: true,
 *    endpoint: '/api/auth/login',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  },
 *  register: {
 *    alwaysFail: false,
 *    rememberMe: true,
 *    endpoint: '/api/auth/register',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  },
 *  logout: {
 *    alwaysFail: false,
 *    endpoint: '/api/auth/logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  },
 *  requestPass: {
 *    endpoint: '/api/auth/request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  },
 *  resetPass: {
 *    endpoint: '/api/auth/reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  },
 *  token: {
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
 *      this.getConfigValue('token.key')),
 *  },
 *  errors: {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse) => getDeepFromObject(res.error,
 *      this.getConfigValue('errors.key'),
 *      this.getConfigValue(`${module}.defaultErrors`)),
 *  },
 *  messages: {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
 *      this.getConfigValue('messages.key'),
 *      this.getConfigValue(`${module}.defaultMessages`)),
 *  },
 *}
 *
 * // Note, there is no need to copy over the whole object to change the settings you need.
 * // Also, this.getConfigValue call won't work outside ofthe default config declaration
 * // (which is inside of the `NbEmailPassAuthProvider` class), so you have to replace it with a custom helper function
 * // if you need it.
 * ```
 */
var NbEmailPassAuthProvider = /** @class */ (function (_super) {
    __extends(NbEmailPassAuthProvider, _super);
    function NbEmailPassAuthProvider(http, route) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.route = route;
        _this.defaultConfig = {
            baseEndpoint: '/api/auth/',
            login: {
                alwaysFail: false,
                rememberMe: true,
                endpoint: 'login',
                method: 'post',
                redirect: {
                    success: 'pages',
                    failure: null,
                },
                defaultErrors: ['Login/Email combination is not correct, please try again.'],
                defaultMessages: ['You have been successfully logged in.'],
            },
            register: {
                alwaysFail: false,
                rememberMe: true,
                endpoint: 'register',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully registered.'],
            },
            logout: {
                alwaysFail: false,
                endpoint: 'logout',
                method: 'delete',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully logged out.'],
            },
            requestPass: {
                endpoint: 'request-pass',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Reset password instructions have been sent to your email.'],
            },
            resetPass: {
                endpoint: 'reset-pass',
                method: 'put',
                redirect: {
                    success: '/',
                    failure: null,
                },
                resetPasswordTokenKey: 'reset_password_token',
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Your password has been successfully changed.'],
            },
            token: {
                key: 'data.token',
                getter: function (module, res) { return Object(__WEBPACK_IMPORTED_MODULE_9__helpers__["b" /* getDeepFromObject */])(res.body, _this.getConfigValue('token.key')); },
            },
            errors: {
                key: 'data.errors',
                getter: function (module, res) { return Object(__WEBPACK_IMPORTED_MODULE_9__helpers__["b" /* getDeepFromObject */])(res.error, _this.getConfigValue('errors.key'), _this.getConfigValue(module + ".defaultErrors")); },
            },
            messages: {
                key: 'data.messages',
                getter: function (module, res) { return Object(__WEBPACK_IMPORTED_MODULE_9__helpers__["b" /* getDeepFromObject */])(res.body, _this.getConfigValue('messages.key'), _this.getConfigValue(module + ".defaultMessages")); },
            },
        };
        return _this;
    }
    NbEmailPassAuthProvider.prototype.authenticate = function (data) {
        var _this = this;
        var method = this.getConfigValue('login.method');
        var url = this.getActionEndpoint('login');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            if (_this.getConfigValue('login.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), this.validateToken('login'), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](true, res, _this.getConfigValue('login.redirect.success'), [], _this.getConfigValue('messages.getter')('login', res), _this.getConfigValue('token.getter')('login', res));
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_catchError__["a" /* catchError */])(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errors = _this.getConfigValue('errors.getter')('login', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](false, res, _this.getConfigValue('login.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.register = function (data) {
        var _this = this;
        var method = this.getConfigValue('register.method');
        var url = this.getActionEndpoint('register');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            if (_this.getConfigValue('register.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        }), this.validateToken('register'), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](true, res, _this.getConfigValue('register.redirect.success'), [], _this.getConfigValue('messages.getter')('register', res), _this.getConfigValue('token.getter')('register', res));
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_catchError__["a" /* catchError */])(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errors = _this.getConfigValue('errors.getter')('register', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](false, res, _this.getConfigValue('register.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.requestPassword = function (data) {
        var _this = this;
        var method = this.getConfigValue('requestPass.method');
        var url = this.getActionEndpoint('requestPass');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            if (_this.getConfigValue('requestPass.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](true, res, _this.getConfigValue('requestPass.redirect.success'), [], _this.getConfigValue('messages.getter')('requestPass', res));
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_catchError__["a" /* catchError */])(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errors = _this.getConfigValue('errors.getter')('requestPass', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](false, res, _this.getConfigValue('requestPass.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.resetPassword = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var tokenKey = this.getConfigValue('resetPass.resetPasswordTokenKey');
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        var method = this.getConfigValue('resetPass.method');
        var url = this.getActionEndpoint('resetPass');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            if (_this.getConfigValue('resetPass.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](true, res, _this.getConfigValue('resetPass.redirect.success'), [], _this.getConfigValue('messages.getter')('resetPass', res));
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_catchError__["a" /* catchError */])(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errors = _this.getConfigValue('errors.getter')('resetPass', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](false, res, _this.getConfigValue('resetPass.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.logout = function () {
        var _this = this;
        var method = this.getConfigValue('logout.method');
        var url = this.getActionEndpoint('logout');
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({})
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_switchMap__["a" /* switchMap */])(function (res) {
            if (!url) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(res);
            }
            return _this.http.request(method, url, { observe: 'response' });
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            if (_this.getConfigValue('logout.alwaysFail')) {
                throw _this.createFailResponse();
            }
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](true, res, _this.getConfigValue('logout.redirect.success'), [], _this.getConfigValue('messages.getter')('logout', res));
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_catchError__["a" /* catchError */])(function (res) {
            var errors = [];
            if (res instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
                errors = _this.getConfigValue('errors.getter')('logout', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_7__services_auth_result__["a" /* NbAuthResult */](false, res, _this.getConfigValue('logout.redirect.failure'), errors));
        }));
    };
    NbEmailPassAuthProvider.prototype.validateToken = function (module) {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) {
            var token = _this.getConfigValue('token.getter')(module, res);
            if (!token) {
                var key = _this.getConfigValue('token.key');
                console.warn("NbEmailPassAuthProvider:\n                          Token is not provided under '" + key + "' key\n                          with getter '" + _this.getConfigValue('token.getter') + "', check your auth configuration.");
                throw new Error('Could not extract token from the response.');
            }
            return res;
        });
    };
    NbEmailPassAuthProvider.prototype.getActionEndpoint = function (action) {
        var actionEndpoint = this.getConfigValue(action + ".endpoint");
        var baseEndpoint = this.getConfigValue('baseEndpoint');
        return baseEndpoint + actionEndpoint;
    };
    NbEmailPassAuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NbEmailPassAuthProvider);
    return NbEmailPassAuthProvider;
}(__WEBPACK_IMPORTED_MODULE_8__abstract_auth_provider__["a" /* NbAbstractAuthProvider */]));



/***/ }),

/***/ "./src/app/@theme/components/auth/providers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_auth_provider__ = __webpack_require__("./src/app/@theme/components/auth/providers/abstract-auth.provider.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dummy_auth_provider__ = __webpack_require__("./src/app/@theme/components/auth/providers/dummy-auth.provider.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__dummy_auth_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_pass_auth_provider__ = __webpack_require__("./src/app/@theme/components/auth/providers/email-pass-auth.provider.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "./src/app/@theme/components/auth/services/auth-result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthResult; });
var NbAuthResult = /** @class */ (function () {
    function NbAuthResult(success, response, redirect, errors, messages, rawToken) {
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        this.rawToken = rawToken;
    }
    NbAuthResult.prototype.setToken = function (token) {
        this.token = token;
        this.rawToken = token.toString();
    };
    NbAuthResult.prototype.getResponse = function () {
        return this.response;
    };
    NbAuthResult.prototype.getRawToken = function () {
        return this.rawToken;
    };
    NbAuthResult.prototype.getToken = function () {
        return this.token;
    };
    NbAuthResult.prototype.getRedirect = function () {
        return this.redirect;
    };
    NbAuthResult.prototype.getErrors = function () {
        return this.errors.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.getMessages = function () {
        return this.messages.filter(function (val) { return !!val; });
    };
    NbAuthResult.prototype.isSuccess = function () {
        return this.success;
    };
    NbAuthResult.prototype.isFailure = function () {
        return !this.success;
    };
    return NbAuthResult;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token_service__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */






/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Providers.
 */
var NbAuthService = /** @class */ (function () {
    function NbAuthService(tokenService, injector, providers) {
        if (providers === void 0) { providers = {}; }
        this.tokenService = tokenService;
        this.injector = injector;
        this.providers = providers;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.getToken = function () {
        return this.tokenService.get();
    };
    /**
     * Returns true if auth token is presented in the token storage
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.isAuthenticated = function () {
        return this.getToken()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (token) { return token.isValid(); }));
    };
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    NbAuthService.prototype.onTokenChange = function () {
        return this.tokenService.tokenChange();
    };
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.onAuthenticationChange = function () {
        return this.onTokenChange()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (token) { return token.isValid(); }));
    };
    /**
     * Authenticates with the selected provider
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.authenticate = function (provider, data) {
        var _this = this;
        return this.getProvider(provider).authenticate(data)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__["a" /* switchMap */])(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Registers with the selected provider
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.register = function (provider, data) {
        var _this = this;
        return this.getProvider(provider).register(data)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__["a" /* switchMap */])(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Sign outs with the selected provider
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param provider
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.logout = function (provider) {
        var _this = this;
        return this.getProvider(provider).logout()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__["a" /* switchMap */])(function (result) {
            if (result.isSuccess()) {
                _this.tokenService.clear()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function () { return result; }));
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        }));
    };
    /**
     * Sends forgot password request to the selected provider
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.requestPassword = function (provider, data) {
        return this.getProvider(provider).requestPassword(data);
    };
    /**
     * Tries to reset password with the selected provider
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.resetPassword = function (provider, data) {
        return this.getProvider(provider).resetPassword(data);
    };
    NbAuthService.prototype.processResultToken = function (result) {
        var _this = this;
        if (result.isSuccess() && result.getRawToken()) {
            return this.tokenService.setRaw(result.getRawToken())
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__["a" /* switchMap */])(function () { return _this.tokenService.get(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (token) {
                result.setToken(token);
                return result;
            }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
    };
    NbAuthService.prototype.getProvider = function (provider) {
        if (!this.providers[provider]) {
            throw new TypeError("Nb auth provider '" + provider + "' is not registered");
        }
        return this.injector.get(this.providers[provider].service);
    };
    NbAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__auth_options__["c" /* NB_AUTH_PROVIDERS */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__token_token_service__["a" /* NbTokenService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], Object])
    ], NbAuthService);
    return NbAuthService;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_result__ = __webpack_require__("./src/app/@theme/components/auth/services/auth-result.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interceptors_jwt_interceptor__ = __webpack_require__("./src/app/@theme/components/auth/services/interceptors/jwt-interceptor.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_simple_interceptor__ = __webpack_require__("./src/app/@theme/components/auth/services/interceptors/simple-interceptor.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token_token__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token_storage__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token-storage.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token_token_service__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token.service.ts");
/* unused harmony namespace reexport */









/***/ }),

/***/ "./src/app/@theme/components/auth/services/interceptors/jwt-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NbAuthJWTInterceptor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NbAuthJWTInterceptor = /** @class */ (function () {
    function NbAuthJWTInterceptor(injector) {
        this.injector = injector;
    }
    NbAuthJWTInterceptor.prototype.intercept = function (req, next) {
        return this.authService.getToken()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__["a" /* switchMap */])(function (token) {
            if (token.isValid()) {
                var JWT = "Bearer " + token.getValue();
                req = req.clone({
                    setHeaders: {
                        Authorization: JWT,
                    },
                });
            }
            return next.handle(req);
        }));
    };
    Object.defineProperty(NbAuthJWTInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* NbAuthService */]);
        },
        enumerable: true,
        configurable: true
    });
    NbAuthJWTInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], NbAuthJWTInterceptor);
    return NbAuthJWTInterceptor;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/services/interceptors/simple-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NbAuthSimpleInterceptor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/@theme/components/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NbAuthSimpleInterceptor = /** @class */ (function () {
    function NbAuthSimpleInterceptor(injector, headerName) {
        if (headerName === void 0) { headerName = 'Authorization'; }
        this.injector = injector;
        this.headerName = headerName;
    }
    NbAuthSimpleInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.authService.getToken()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_switchMap__["a" /* switchMap */])(function (token) {
            if (token && token.getValue()) {
                req = req.clone({
                    setHeaders: (_a = {},
                        _a[_this.headerName] = token.getValue(),
                        _a),
                });
            }
            return next.handle(req);
            var _a;
        }));
    };
    Object.defineProperty(NbAuthSimpleInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* NbAuthService */]);
        },
        enumerable: true,
        configurable: true
    });
    NbAuthSimpleInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__auth_options__["a" /* NB_AUTH_INTERCEPTOR_HEADER */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], String])
    ], NbAuthSimpleInterceptor);
    return NbAuthSimpleInterceptor;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/services/token/token-storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NbTokenStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbTokenLocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_options__ = __webpack_require__("./src/app/@theme/components/auth/auth.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NbTokenStorage = /** @class */ (function () {
    function NbTokenStorage() {
    }
    return NbTokenStorage;
}());

/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
var NbTokenLocalStorage = /** @class */ (function () {
    function NbTokenLocalStorage(tokenClass) {
        this.tokenClass = tokenClass;
        this.key = 'auth_app_token';
    }
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    NbTokenLocalStorage.prototype.get = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2__token__["b" /* nbCreateToken */])(this.tokenClass, localStorage.getItem(this.key));
    };
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    NbTokenLocalStorage.prototype.set = function (token) {
        localStorage.setItem(this.key, token.toString());
    };
    /**
     * Sets raw (string) token to localStorage
     * @param {string} token
     */
    NbTokenLocalStorage.prototype.setRaw = function (token) {
        localStorage.setItem(this.key, token);
    };
    /**
     * Clears token from localStorage
     */
    NbTokenLocalStorage.prototype.clear = function () {
        localStorage.removeItem(this.key);
    };
    NbTokenLocalStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__auth_options__["d" /* NB_AUTH_TOKEN_CLASS */])),
        __metadata("design:paramtypes", [Object])
    ], NbTokenLocalStorage);
    return NbTokenLocalStorage;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/services/token/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbTokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_share__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_storage__ = __webpack_require__("./src/app/@theme/components/auth/services/token/token-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
var NbTokenService = /** @class */ (function () {
    function NbTokenService(tokenStorage) {
        this.tokenStorage = tokenStorage;
        this.token$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.publishStoredToken();
    }
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.tokenChange = function () {
        return this.token$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(function (value) { return !!value; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_share__["a" /* share */])());
    };
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.set = function (token) {
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(null);
    };
    /**
     * Sets a raw token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {string} token
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.setRaw = function (token) {
        this.tokenStorage.setRaw(token);
        this.publishStoredToken();
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(null);
    };
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.get = function () {
        var token = this.tokenStorage.get();
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(token);
    };
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.clear = function () {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(null);
    };
    NbTokenService.prototype.publishStoredToken = function () {
        this.token$.next(this.tokenStorage.get());
    };
    NbTokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__token_storage__["b" /* NbTokenStorage */]])
    ], NbTokenService);
    return NbTokenService;
}());



/***/ }),

/***/ "./src/app/@theme/components/auth/services/token/token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nbCreateToken;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NbAuthSimpleToken; });
/* unused harmony export NbAuthJWTToken */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__("./src/app/@theme/components/auth/helpers.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function nbCreateToken(tokenClass, token) {
    return new tokenClass(token);
}
/**
 * Wrapper for simple (text) token
 */
var NbAuthSimpleToken = /** @class */ (function () {
    function NbAuthSimpleToken(token) {
        this.token = token;
    }
    /**
     * Returns the token value
     * @returns string
     */
    NbAuthSimpleToken.prototype.getValue = function () {
        return this.token;
    };
    /**
     * Is non empty and valid
     * @returns {boolean}
     */
    NbAuthSimpleToken.prototype.isValid = function () {
        return !!this.token;
    };
    /**
     * Validate value and convert to string, if value is not valid return empty string
     * @returns {string}
     */
    NbAuthSimpleToken.prototype.toString = function () {
        return !!this.token ? this.token : '';
    };
    return NbAuthSimpleToken;
}());

/**
 * Wrapper for JWT token with additional methods.
 */
var NbAuthJWTToken = /** @class */ (function (_super) {
    __extends(NbAuthJWTToken, _super);
    function NbAuthJWTToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns payload object
     * @returns any
     */
    NbAuthJWTToken.prototype.getPayload = function () {
        if (!this.token) {
            throw new Error('Cannot extract payload from an empty token.');
        }
        var parts = this.token.split('.');
        if (parts.length !== 3) {
            throw new Error("The token " + this.token + " is not valid JWT token and must consist of three parts.");
        }
        var decoded;
        try {
            decoded = Object(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* urlBase64Decode */])(parts[1]);
        }
        catch (e) {
            throw new Error("The token " + this.token + " is not valid JWT token and cannot be parsed.");
        }
        if (!decoded) {
            throw new Error("The token " + this.token + " is not valid JWT token and cannot be decoded.");
        }
        return JSON.parse(decoded);
    };
    /**
     * Returns expiration date
     * @returns Date
     */
    NbAuthJWTToken.prototype.getTokenExpDate = function () {
        var decoded = this.getPayload();
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    /**
     * Is data expired
     * @returns {boolean}
     */
    NbAuthJWTToken.prototype.isValid = function () {
        return _super.prototype.isValid.call(this) && (!this.getTokenExpDate() || new Date() < this.getTokenExpDate());
    };
    return NbAuthJWTToken;
}(NbAuthSimpleToken));



/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n:host-context(.nb-theme-default) .socials {\n    font-size: 2rem; }\n:host-context(.nb-theme-default) .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n:host-context(.nb-theme-default) .socials a:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .socials {\n      font-size: 1.5rem; } }\n:host-context(.nb-theme-cosmic) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n:host-context(.nb-theme-cosmic) .socials {\n    font-size: 2rem; }\n:host-context(.nb-theme-cosmic) .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n:host-context(.nb-theme-cosmic) .socials a:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .socials {\n      font-size: 1.5rem; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-footer',
            styles: [__webpack_require__("./src/app/@theme/components/footer/footer.component.scss")],
            template: "\n    <span class=\"created-by\"><b>&copy;SGGSC</b> 2018</span>\n  ",
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\"\r\n     [class.left]=\"position === 'normal'\"\r\n     [class.right]=\"position === 'inverse'\">\r\n  <div class=\"logo-containter\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\r\n    <div class=\"logo\" (click)=\"goToHome()\"><img src=\"assets/images/sg.png\" height=\"30%\" width=\"30%\"><span>   BLINK</span></div>\r\n  </div>\r\n  <!-- <ngx-theme-switcher></ngx-theme-switcher> -->\r\n \r\n</div>\r\n\r\n<nb-actions\r\n  size=\"medium\"\r\n  class=\"header-container\"\r\n  [class.right]=\"position === 'normal'\"\r\n  [class.left]=\"position === 'inverse'\">\r\n  \r\n  <nb-action *nbIsGranted=\"['view', 'user']\" >\r\n    <nb-user [nbContextMenu]=\"userMenu\" [name]=\"user?.name\" [picture]=\"user?.picture\"></nb-user>\r\n  </nb-action>\r\n  <nb-action > \r\n    <a (click)=\"onLanguageChange('en')\"> EN</a>\r\n    \r\n    <!-- {{'THEME_HEADER_CHOOSE_LANGUAGE' | translate }} -->\r\n      <a (click)=\"onLanguageChange('fr')\"> / FR</a>\r\n </nb-action>\r\n \r\n  <nb-action >\r\n    <nb-search type=\"rotate-layout\" (click)=\"startSearch()\" ></nb-search>\r\n  </nb-action>\r\n  \r\n  \r\n\r\n</nb-actions>\r\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n:host-context(.nb-theme-default) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n:host-context(.nb-theme-default) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n:host-context(.nb-theme-default) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host-context(.nb-theme-default) .control-item {\n    display: block; }\n:host-context(.nb-theme-default) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n:host-context(.nb-theme-default) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n:host-context(.nb-theme-default) .header-container .navigation i {\n        display: block; }\n:host-context(.nb-theme-default) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #333333;\n      white-space: nowrap; }\n:host-context(.nb-theme-default) .header-container .logo span {\n        font-weight: 400; }\n:host-context(.nb-theme-default) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n:host-context(.nb-theme-default) .toggle-layout /deep/ a i {\n      color: #EC1A3A;\n      font-size: 2.25rem; }\n@media (max-width: 991.98px) {\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-default) .control-item {\n      display: none; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      padding: 0; } }\n@media (max-width: 767.98px) {\n    :host-context(.nb-theme-default) nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-default) .right /deep/ {\n      display: none; } }\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n:host-context(.nb-theme-cosmic) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n:host-context(.nb-theme-cosmic) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n:host-context(.nb-theme-cosmic) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host-context(.nb-theme-cosmic) .control-item {\n    display: block; }\n:host-context(.nb-theme-cosmic) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n:host-context(.nb-theme-cosmic) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n:host-context(.nb-theme-cosmic) .header-container .navigation i {\n        display: block; }\n:host-context(.nb-theme-cosmic) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #342e73;\n      white-space: nowrap; }\n:host-context(.nb-theme-cosmic) .header-container .logo span {\n        font-weight: 400; }\n:host-context(.nb-theme-cosmic) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n:host-context(.nb-theme-cosmic) .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem; }\n@media (max-width: 991.98px) {\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-cosmic) .control-item {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      padding: 0; } }\n@media (max-width: 767.98px) {\n    :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-cosmic) .right /deep/ {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_users_service__ = __webpack_require__("./src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_route, translate, sidebarService, menuService, userService, analyticsService, router, searchService) {
        this._route = _route;
        this.translate = translate;
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.router = router;
        this.searchService = searchService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    HeaderComponent.prototype.onLanguageChange = function (ln) {
        this.translate.use(ln);
        localStorage.setItem('lang', ln);
        //window.location.reload();
        this.onRefresh();
        // var url =this._route.snapshot.url;
        // this.router.navigate(["pages/editors/control-new/fr"]);
    };
    HeaderComponent.prototype.onRefresh = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        var currentUrl = this.router.url + '?';
        this.router.navigateByUrl(currentUrl)
            .then(function () {
            _this.router.navigated = false;
            _this.router.navigate([_this.router.url]);
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.use(localStorage.getItem('lang'));
        this.userService.getUsers()
            .subscribe(function (users) {
            console.log(_this.getInitials(users.chocks.name));
            _this.user = users.chocks;
        });
        // this.searchService.
        this.searchService.onSearchSubmit().subscribe(function (data) {
            // this.router.navigate(["pages/tables/details/"+data.term+'?']);
            localStorage.setItem('transactionreference', data.term);
            _this.router.navigate(["pages/tables/details"]);
            if (_this.router.url.includes("pages/tables/details"))
                _this.onRefresh();
        });
    };
    HeaderComponent.prototype.getInitials = function (name) {
        if (name) {
            var names = name.split(' ');
            return names.map(function (n) { return n.charAt(0); }).splice(0, 2).join('').toUpperCase();
        }
        return '';
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        //this.router.navigate(["pages/tables/details/"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'ngx-header',
            styles: [__webpack_require__("./src/app/@theme/components/header/header.component.scss")],
            template: __webpack_require__("./src/app/@theme/components/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__nebular_theme__["n" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_0__nebular_theme__["h" /* NbMenuService */],
            __WEBPACK_IMPORTED_MODULE_1__core_data_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__nebular_theme__["l" /* NbSearchService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("./src/app/@theme/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("./src/app/@theme/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_input_search_input_component__ = __webpack_require__("./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__search_input_search_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiny_mce_tiny_mce_component__ = __webpack_require__("./src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__tiny_mce_tiny_mce_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_settings_theme_settings_component__ = __webpack_require__("./src/app/@theme/components/theme-settings/theme-settings.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__theme_settings_theme_settings_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_switcher_theme_switcher_component__ = __webpack_require__("./src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__theme_switcher_theme_switcher_component__["a"]; });








/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: none;\n    outline: none;\n    margin-left: 1rem;\n    width: 15rem;\n    -webkit-transition: width 0.2s ease;\n    transition: width 0.2s ease; }\n  :host input.hidden {\n      width: 0;\n      margin: 0; }\n  :host /deep/ search-input input {\n    background: transparent; }\n"

/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SearchInputComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-search-input',
            styles: [__webpack_require__("./src/app/@theme/components/search-input/search-input.component.scss")],
            template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) h6 {\n  margin-bottom: 0.5rem; }\n:host-context(.nb-theme-default) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n:host-context(.nb-theme-default) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a4abb3; }\n:host-context(.nb-theme-default) .settings-row a.selected {\n      color: #EC1A3A; }\n:host-context(.nb-theme-cosmic) h6 {\n  margin-bottom: 0.5rem; }\n:host-context(.nb-theme-cosmic) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n:host-context(.nb-theme-cosmic) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00d977; }\n:host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00f9a6; }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(stateService) {
        var _this = this;
        this.stateService = stateService;
        this.layouts = [];
        this.sidebars = [];
        this.stateService.getLayoutStates()
            .subscribe(function (layouts) { return _this.layouts = layouts; });
        this.stateService.getSidebarStates()
            .subscribe(function (sidebars) { return _this.sidebars = sidebars; });
    }
    ThemeSettingsComponent.prototype.layoutSelect = function (layout) {
        this.layouts = this.layouts.map(function (l) {
            l.selected = false;
            return l;
        });
        layout.selected = true;
        this.stateService.setLayoutState(layout);
        return false;
    };
    ThemeSettingsComponent.prototype.sidebarSelect = function (sidebars) {
        this.sidebars = this.sidebars.map(function (s) {
            s.selected = false;
            return s;
        });
        sidebars.selected = true;
        this.stateService.setSidebarState(sidebars);
        return false;
    };
    ThemeSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-theme-settings',
            styles: [__webpack_require__("./src/app/@theme/components/theme-settings/theme-settings.component.scss")],
            template: "\n    <h6>LAYOUTS</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let layout of layouts\"\n         href=\"#\"\n         [class.selected]=\"layout.selected\"\n         [attr.title]=\"layout.name\"\n         (click)=\"layoutSelect(layout)\">\n        <i [attr.class]=\"layout.icon\"></i>\n      </a>\n    </div>\n    <h6>SIDEBAR</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let sidebar of sidebars\"\n         href=\"#\"\n         [class.selected]=\"sidebar.selected\"\n         [attr.title]=\"sidebar.name\"\n         (click)=\"sidebarSelect(sidebar)\">\n        <i [attr.class]=\"sidebar.icon\"></i>\n      </a>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_state_service__["a" /* StateService */]])
    ], ThemeSettingsComponent);
    return ThemeSettingsComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n:host-context(.nb-theme-default) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n:host-context(.nb-theme-default) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      -webkit-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease; }\n:host-context(.nb-theme-default) .theme-switch > span.light {\n        color: #4b4b4b;\n        padding-right: 10px; }\n:host-context(.nb-theme-default) .theme-switch > span.cosmic {\n        color: #a4abb3;\n        padding-left: 10px; }\n:host-context(.nb-theme-default) .theme-switch > span:active {\n        opacity: 0.78; }\n:host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n:host-context(.nb-theme-default) .switch input {\n      display: none; }\n:host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n:host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #333333; }\n:host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #EC1A3A;\n      -webkit-transition: 0.2s;\n      transition: 0.2s;\n      -webkit-box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4);\n              box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n:host-context(.nb-theme-cosmic) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n:host-context(.nb-theme-cosmic) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      -webkit-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #d1d1ff;\n        padding-right: 10px; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #a1a1e5;\n        padding-left: 10px; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #ffffff; }\n:host-context(.nb-theme-cosmic) .theme-switch > span:active {\n        opacity: 0.78; }\n:host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n:host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n:host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n:host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n:host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #00d977;\n      -webkit-transition: 0.2s;\n      transition: 0.2s;\n      -webkit-box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n              box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: -webkit-gradient(linear, left top, right top, from(#ad59ff), to(#7659ff));\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSwitcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService.getJsTheme()
            .subscribe(function (theme) { return _this.theme = theme; });
    };
    ThemeSwitcherComponent.prototype.toggleTheme = function (theme) {
        var boolTheme = this.boolToTheme(theme);
        this.themeService.changeTheme(boolTheme);
        this.analyticsService.trackEvent('switchTheme');
    };
    ThemeSwitcherComponent.prototype.currentBoolTheme = function () {
        return this.themeToBool(this.theme);
    };
    ThemeSwitcherComponent.prototype.themeToBool = function (theme) {
        return theme.name != 'cosmic';
    };
    ThemeSwitcherComponent.prototype.boolToTheme = function (theme) {
        return theme ? 'cosmic' : 'default';
    };
    ThemeSwitcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-theme-switcher',
            styles: [__webpack_require__("./src/app/@theme/components/theme-switcher/theme-switcher.component.scss")],
            template: "\n    <label class=\"theme-switch\">\n      <span class=\"light\">Light</span>\n      <div class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"currentBoolTheme()\" (change)=\"toggleTheme(theme.checked)\" #theme>\n        <span class=\"slider\"></span>\n      </div>\n      <span class=\"cosmic\">Cosmic</span>\n    </label>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["q" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */]])
    ], ThemeSwitcherComponent);
    return ThemeSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyMCEComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TinyMCEComponent.prototype, "editorKeyup", void 0);
    TinyMCEComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tiny-mce',
            template: '',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], TinyMCEComponent);
    return TinyMCEComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__ = __webpack_require__("./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__ = __webpack_require__("./src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__ = __webpack_require__("./src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_sample_layout__ = __webpack_require__("./src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__sample_sample_layout__["a"]; });






/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0;\n      height: 1px; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 5rem !important;\n        padding: 2.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #252525;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 5rem !important; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0;\n      height: 1px; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 5rem !important;\n        padding: 2.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 5rem !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneColumnLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent() {
    }
    OneColumnLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-one-column-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/one-column/one-column.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n     \n    </nb-layout>\n  ",
        })
    ], OneColumnLayoutComponent);
    return OneColumnLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0;\n      height: 1px; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 5rem !important;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #252525;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 5rem !important; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0;\n      height: 1px; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 5rem !important;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 5rem !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    SampleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-sample-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/sample/sample.layout.scss")],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'left' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [right]=\"sidebar.id === 'right'\">\n      \n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column left class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column right class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n     \n\n      \n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["h" /* NbMenuService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["q" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbSidebarService */]])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #252525;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeColumnsLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var ThreeColumnsLayoutComponent = /** @class */ (function () {
    function ThreeColumnsLayoutComponent() {
    }
    ThreeColumnsLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-three-columns-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/three-columns/three-columns.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        })
    ], ThreeColumnsLayoutComponent);
    return ThreeColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #252525;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoColumnsLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = /** @class */ (function () {
    function TwoColumnsLayoutComponent() {
    }
    TwoColumnsLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-two-columns-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/two-columns/two-columns.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
        })
    ], TwoColumnsLayoutComponent);
    return TwoColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__ = __webpack_require__("./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plural_pipe__ = __webpack_require__("./src/app/@theme/pipes/plural.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__plural_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__round_pipe__ = __webpack_require__("./src/app/@theme/pipes/round.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__round_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timing_pipe__ = __webpack_require__("./src/app/@theme/pipes/timing.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__timing_pipe__["a"]; });






/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#F05837',
            gradientRight: '#720017',
            shadowColor: '#333333',
            radius: ['80%', '90%'],
            valueColor: '#ffffff',
            unshadeColor: '#333333'
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_auth_auth_module__ = __webpack_require__("./src/app/@theme/components/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auth_providers_email_pass_auth_provider__ = __webpack_require__("./src/app/@theme/components/auth/providers/email-pass-auth.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nebular_security__ = __webpack_require__("./node_modules/@nebular/security/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__("./src/app/@theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes__ = __webpack_require__("./src/app/@theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts__ = __webpack_require__("./src/app/@theme/layouts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_theme_default__ = __webpack_require__("./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styles_theme_cosmic__ = __webpack_require__("./src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var BASE_MODULES = [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]];
var NB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["b" /* NbCardModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["e" /* NbLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["o" /* NbTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["j" /* NbRouteTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["g" /* NbMenuModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["r" /* NbUserModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["a" /* NbActionsModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["k" /* NbSearchModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["m" /* NbSidebarModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["c" /* NbCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["i" /* NbPopoverModule */],
    __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["d" /* NbContextMenuModule */],
    __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
    __WEBPACK_IMPORTED_MODULE_7__nebular_security__["b" /* NbSecurityModule */],
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_8__components__["e" /* ThemeSwitcherComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components__["b" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components__["c" /* SearchInputComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components__["d" /* ThemeSettingsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components__["f" /* TinyMCEComponent */],
    __WEBPACK_IMPORTED_MODULE_10__layouts__["a" /* OneColumnLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_10__layouts__["b" /* SampleLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_10__layouts__["c" /* ThreeColumnsLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_10__layouts__["d" /* TwoColumnsLayoutComponent */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_9__pipes__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_9__pipes__["b" /* PluralPipe */],
    __WEBPACK_IMPORTED_MODULE_9__pipes__["c" /* RoundPipe */],
    __WEBPACK_IMPORTED_MODULE_9__pipes__["d" /* TimingPipe */],
];
var NB_THEME_PROVIDERS = __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["p" /* NbThemeModule */].forRoot({
    name: 'default',
}, [__WEBPACK_IMPORTED_MODULE_11__styles_theme_default__["a" /* DEFAULT_THEME */], __WEBPACK_IMPORTED_MODULE_12__styles_theme_cosmic__["a" /* COSMIC_THEME */]]).providers.concat(__WEBPACK_IMPORTED_MODULE_6__nebular_theme__["m" /* NbSidebarModule */].forRoot().providers, __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["g" /* NbMenuModule */].forRoot().providers);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.concat([__WEBPACK_IMPORTED_MODULE_4__components_auth_auth_module__["a" /* NbAuthModule */].forRoot({ providers: { email: { service: __WEBPACK_IMPORTED_MODULE_5__components_auth_providers_email_pass_auth_provider__["a" /* NbEmailPassAuthProvider */], config: {}, } } }).providers,]),
        };
    };
    ThemeModule = ThemeModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: BASE_MODULES.concat(NB_MODULES, [__WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({ loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClient */]],
                    } }),]),
            exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES),
            declarations: COMPONENTS.concat(PIPES),
        })
    ], ThemeModule);
    return ThemeModule;
    var ThemeModule_1;
}());

// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__ = __webpack_require__("./src/app/@theme/components/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["a" /* NbAuthComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["d" /* NbLoginComponent */],
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["d" /* NbLoginComponent */],
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["f" /* NbRegisterComponent */],
            },
            {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["e" /* NbLogoutComponent */],
            },
            {
                path: 'request-password',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["g" /* NbRequestPasswordComponent */],
            },
            {
                path: 'reset-password',
                component: __WEBPACK_IMPORTED_MODULE_2__theme_components_auth__["h" /* NbResetPasswordComponent */],
            },
        ],
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, config)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */



var AppComponent = /** @class */ (function () {
    function AppComponent(analytics, translate) {
        this.analytics = analytics;
        this.translate = translate;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.trackPageViews();
        this.translate.addLangs(['en', 'fr']);
        this.translate.setDefaultLang('en');
        this.translate.use(this.translate.getBrowserLang());
        if (localStorage.getItem('lang') == null)
            localStorage.setItem('lang  ', 'en');
        if (localStorage.getItem('region') == null)
            localStorage.setItem('region', 'Asia');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-app',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/@core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mousetrap__ = __webpack_require__("./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mousetrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_mousetrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_modal_gallery__ = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_slideshow__ = __webpack_require__("./node_modules/ngx-slideshow/ngx-slideshow.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */











// ********************** angular-modal-gallery *****************************
 // <------ mandatory dependency for angular-modal-gallery
 // <------ mandatory dependency for angular-modal-gallery
 // <----------------- angular-modal-gallery library import




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__theme_theme_module__["a" /* ThemeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ngx_slideshow__["a" /* NgxSlideshowModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_angular_modal_gallery__["c" /* ModalGalleryModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["b" /* TranslateModule */].forRoot({ loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]],
                    } }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["APP_BASE_HREF"], useValue: '/' },
            ],
        })
    ], AppModule);
    return AppModule;
}());

// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:50659/api/v1/EvidenseService/',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map