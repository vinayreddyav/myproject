webpackJsonp(["tables.module"],{

/***/ "./src/app/pages/tables/evidence-details/evidence-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n\r\n\r\n      <div *ngFor=\"let eviedence of evidenceList\">\r\n          <nb-card>\r\n            <nb-card-header>\r\n        <div *ngIf=\"eviedence\">\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"table-success\" scope=\"col\">Transaction reference No</th>\r\n                <th class=\"table-success\" scope=\"col\">User Id</th>\r\n                <th class=\"table-success\" scope=\"col\">Machine Name</th>\r\n                <th class=\"table-success\" scope=\"col\">Captuered Datetime</th>\r\n                <th class=\"table-success\" scope=\"col\">No of Evidences</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th>{{eviedence.transactionReferenceNo}}</th>\r\n                <td>{{eviedence.userId}}</td>\r\n                <td>{{eviedence.machineName}}</td>\r\n                <td>{{eviedence.capturedDateTime}}</td>\r\n                <td>{{eviedence.noOfEvidences}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n            </div>\r\n          \r\n        \r\n            </nb-card-header>\r\n            <nb-card-body>\r\n              \r\n                     <div *ngIf=\"eviedence.images\">\r\n                      \r\n                      <ks-modal-gallery [modalImages]=\"eviedence.images\" \r\n                      [plainGalleryConfig]=\"plainGalleryRow\"></ks-modal-gallery>\r\n        \r\n                    </div>           \r\n                   \r\n             </nb-card-body>\r\n          </nb-card>    \r\n        </div>\r\n        \r\n    </div>\r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n<style>\r\n  .table-success, .table-success > th, .table-success > td {\r\n    background-color: #40dc7e !important;\r\n}\r\n</style>"

/***/ }),

/***/ "./src/app/pages/tables/evidence-details/evidence-details.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Serif;\n  font-weight: 500;\n  color: #ffffff; }\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n:host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n:host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #EC1A3A; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Serif;\n  font-weight: 500;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n"

/***/ }),

/***/ "./src/app/pages/tables/evidence-details/evidence-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_services_evidence_service__ = __webpack_require__("./src/app/@core/data/services/evidence.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_modal_gallery__ = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_route, evidenceService, router, searchService) {
        this._route = _route;
        this.evidenceService = evidenceService;
        this.router = router;
        this.searchService = searchService;
        this.evidenceList = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderValue = this.value;
        var id = localStorage.getItem('transactionreference');
        this.evidenceService.getEvidence(id).subscribe(function (x) {
            console.log(x);
            _this.evidenceList = x;
            _this.evidenceList.forEach(function (o) {
                var tempImages = [];
                var count = 0;
                o.screenshots.forEach(function (obj) {
                    var img = new __WEBPACK_IMPORTED_MODULE_3_angular_modal_gallery__["a" /* Image */](count++, {
                        img: 'data:image/png;base64,' + obj,
                    });
                    tempImages.push(img);
                });
                o.images = tempImages;
            });
        });
    };
    DetailsComponent.prototype.example = function () {
        alert(this.renderValue);
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'evidence-details',
            template: __webpack_require__("./src/app/pages/tables/evidence-details/evidence-details.component.html"),
            styles: [__webpack_require__("./src/app/pages/tables/evidence-details/evidence-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__core_data_services_evidence_service__["a" /* EvidenceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["l" /* NbSearchService */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/evidence-details/security-cameras/security-cameras.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nb-card size=\"xlarge\">\r\n  <nb-card-header>\r\n    <div class=\"cameras-card-header\">\r\n      <span class=\"cameras-card-title\">Screen Captures</span>\r\n      <span class=\"cameras-filter\">\r\n        <a [class.active]=\"isSingleView\" (click)=\"isSingleView = true\">\r\n          <i class=\"nb-square\"></i>\r\n        </a>\r\n        <a [class.active]=\"!isSingleView\" (click)=\"isSingleView = false\">\r\n          <i class=\"nb-grid-a\"></i>\r\n        </a>\r\n      </span>\r\n    </div>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"cameras single-view\" *ngIf=\"isSingleView\">\r\n      <div class=\"camera\" [style.background-image]=\"'url(' + selectedCamera.src + ')'\">\r\n        <span>{{ selectedCamera.title }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"cameras\" *ngIf=\"!isSingleView\">\r\n      <div class=\"camera col-sm-6\" *ngFor=\"let camera of evidencesScreenShots\" [style.background-image]=\"'url(' + camera.src + ')'\"\r\n           (click)=\"selectCamera(camera)\">\r\n        <span>{{ evidencesScreenShots.title }}</span>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n  \r\n"

/***/ }),

/***/ "./src/app/pages/tables/evidence-details/security-cameras/security-cameras.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  padding: 0;\n  border: none; }\n:host-context(.nb-theme-default) nb-card-body {\n  padding: 0;\n  position: relative; }\n:host-context(.nb-theme-default) nb-card-footer {\n  padding: 1rem 0;\n  border: none; }\n:host-context(.nb-theme-default) .cameras-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-default) .cameras-card-header .cameras-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n:host-context(.nb-theme-default) .cameras-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-default) .cameras-filter a {\n    font-size: 2.5rem;\n    padding: 0 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #a4abb3; }\n:host-context(.nb-theme-default) .cameras-filter a:first-child {\n    border-left: 1px solid #333333; }\n:host-context(.nb-theme-default) .cameras-filter a:last-child {\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) .cameras-filter a.active {\n    background-color: #000000;\n    color: #ffffff;\n    border: none; }\n:host-context(.nb-theme-default) .cameras {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%; }\n:host-context(.nb-theme-default) .cameras.single-view .camera {\n  height: 100%;\n  width: 100%; }\n:host-context(.nb-theme-default) .cameras.single-view .camera::before {\n    height: 100%; }\n:host-context(.nb-theme-default) .camera {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  height: 50%;\n  padding: 0; }\n:host-context(.nb-theme-default) .camera span {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    font-family: Serif;\n    font-weight: 500;\n    font-size: 1.25rem;\n    padding: 0.5rem 1rem; }\n:host-context(.nb-theme-default) .camera::before {\n    background-color: rgba(255, 255, 255, 0.1);\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n:host-context(.nb-theme-default) .camera:hover::before {\n    opacity: 0; }\n:host-context(.nb-theme-default) nb-action {\n  padding: 0 0.5rem 0 0; }\n:host-context(.nb-theme-default) nb-action i {\n    color: #a4abb3;\n    font-size: 3rem;\n    margin-right: 0.5rem; }\n:host-context(.nb-theme-default) nb-action span {\n    font-family: Serif;\n    font-weight: 600;\n    color: #ffffff;\n    text-transform: uppercase; }\n@media (max-width: 1199.98px) {\n  :host-context(.nb-theme-default) nb-action {\n    padding: 0; }\n    :host-context(.nb-theme-default) nb-action i {\n      margin: 0; }\n    :host-context(.nb-theme-default) nb-action span {\n      display: none; } }\n:host-context(.nb-theme-cosmic) nb-card-header {\n  padding: 0;\n  border: none; }\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding: 0;\n  position: relative; }\n:host-context(.nb-theme-cosmic) nb-card-footer {\n  padding: 1rem 0;\n  border: none; }\n:host-context(.nb-theme-cosmic) .cameras-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-cosmic) .cameras-card-header .cameras-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) .cameras-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-cosmic) .cameras-filter a {\n    font-size: 2.5rem;\n    padding: 0 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .cameras-filter a:first-child {\n    border-left: 1px solid #342e73; }\n:host-context(.nb-theme-cosmic) .cameras-filter a:last-child {\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) .cameras-filter a.active {\n    background-color: #494299;\n    color: #ffffff;\n    border: none; }\n:host-context(.nb-theme-cosmic) .cameras {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%; }\n:host-context(.nb-theme-cosmic) .cameras.single-view .camera {\n  height: 100%;\n  width: 100%; }\n:host-context(.nb-theme-cosmic) .cameras.single-view .camera::before {\n    height: 100%; }\n:host-context(.nb-theme-cosmic) .camera {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  height: 50%;\n  padding: 0; }\n:host-context(.nb-theme-cosmic) .camera span {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    font-family: Serif;\n    font-weight: 500;\n    font-size: 1.25rem;\n    padding: 0.5rem 1rem; }\n:host-context(.nb-theme-cosmic) .camera::before {\n    background-color: rgba(255, 255, 255, 0.1);\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n:host-context(.nb-theme-cosmic) .camera:hover::before {\n    opacity: 0; }\n:host-context(.nb-theme-cosmic) nb-action {\n  padding: 0 0.5rem 0 0; }\n:host-context(.nb-theme-cosmic) nb-action i {\n    color: #a1a1e5;\n    font-size: 3rem;\n    margin-right: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-action span {\n    font-family: Serif;\n    font-weight: 600;\n    color: #ffffff;\n    text-transform: uppercase; }\n:host-context(.nb-theme-cosmic) .cameras-filter a.active {\n  color: #00f9a6; }\n:host-context(.nb-theme-cosmic) .camera span {\n  background: rgba(88, 73, 184, 0.5); }\n:host-context(.nb-theme-cosmic) .camera::before {\n  background-color: rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-action span {\n  font-weight: 500; }\n@media (max-width: 1199.98px) {\n  :host-context(.nb-theme-cosmic) nb-action {\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) nb-action i {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) nb-action span {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/pages/tables/evidence-details/security-cameras/security-cameras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityCamerasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_entities_evidence__ = __webpack_require__("./src/app/@core/data/entities/evidence.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecurityCamerasComponent = /** @class */ (function () {
    function SecurityCamerasComponent() {
        this.evidencesScreenShots = [];
        this.selectedCamera = this.evidencesScreenShots[0];
        this.userMenu = [{
                title: 'Profile',
            }, {
                title: 'Log out',
            }];
        this.isSingleView = false;
    }
    SecurityCamerasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var src;
        this.childMessage.screenshots.forEach(function (obj) {
            var screenshot = new ScreenShot;
            screenshot.title = "Evidence";
            screenshot.src = 'data:image/png;base64,' + obj;
            _this.evidencesScreenShots.push(screenshot);
        });
    };
    SecurityCamerasComponent.prototype.selectCamera = function (camera) {
        this.selectedCamera = camera;
        this.isSingleView = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_data_entities_evidence__["a" /* Evidence */])
    ], SecurityCamerasComponent.prototype, "childMessage", void 0);
    SecurityCamerasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-security-cameras',
            styles: [__webpack_require__("./src/app/pages/tables/evidence-details/security-cameras/security-cameras.component.scss")],
            template: __webpack_require__("./src/app/pages/tables/evidence-details/security-cameras/security-cameras.component.html"),
        })
    ], SecurityCamerasComponent);
    return SecurityCamerasComponent;
}());

var ScreenShot = /** @class */ (function () {
    function ScreenShot() {
    }
    return ScreenShot;
}());


/***/ }),

/***/ "./src/app/pages/tables/evidence-table/button-render.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonViewComponent = /** @class */ (function () {
    function ButtonViewComponent(router) {
        this.router = router;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ButtonViewComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    ButtonViewComponent.prototype.onClick = function () {
        this.save.emit(this.rowData);
        this.router.navigate(["pages/tables/details/" + this.rowData.transactionReferenceNo]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonViewComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonViewComponent.prototype, "rowData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ButtonViewComponent.prototype, "save", void 0);
    ButtonViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'button-view',
            template: "\n    <button  (click)=\"onClick()\" class=\"btn btn-success btn-tn\">Details {{ renderValue }} </button>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ButtonViewComponent);
    return ButtonViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/evidence-table/evidence-table.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    Evidences\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/tables/evidence-table/evidence-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_render_component__ = __webpack_require__("./src/app/pages/tables/evidence-table/button-render.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_smart_table_service__ = __webpack_require__("./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_services_evidence_service__ = __webpack_require__("./src/app/@core/data/services/evidence.service.ts");
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
    function SmartTableComponent(service, evidenceService) {
        var _this = this;
        this.service = service;
        this.evidenceService = evidenceService;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            actions: false,
            columns: {
                transactionReferenceNo: {
                    title: 'Transaction reference No',
                    type: 'string',
                },
                userId: {
                    title: 'User Id',
                    type: 'string',
                },
                machineName: {
                    title: 'Machine Name',
                    type: 'string',
                },
                capturedDatetime: {
                    title: 'Capture Date(mm-dd-yyy)',
                    type: 'string',
                },
                noOfEvidences: {
                    title: 'No of Evidences',
                    type: 'string',
                },
                details: {
                    title: 'Details',
                    type: 'custom',
                    renderComponent: __WEBPACK_IMPORTED_MODULE_2__button_render_component__["a" /* ButtonViewComponent */],
                    filter: false,
                }
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        var data = this.service.getData();
        this.evidenceService.fetchEvidences({})
            .subscribe(function (x) {
            console.log(x);
            _this.source.load(x.items);
        });
        //console.log(this.evidences);
        //this.source.load(this.evidences);
    }
    SmartTableComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-smart-table',
            template: __webpack_require__("./src/app/pages/tables/evidence-table/evidence-table.component.html"),
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_data_smart_table_service__["a" /* SmartTableService */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_services_evidence_service__["a" /* EvidenceService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evidence_details_evidence_details_component__ = __webpack_require__("./src/app/pages/tables/evidence-details/evidence-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__evidence_table_evidence_table_component__ = __webpack_require__("./src/app/pages/tables/evidence-table/evidence-table.component.ts");
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
                component: __WEBPACK_IMPORTED_MODULE_4__evidence_table_evidence_table_component__["a" /* SmartTableComponent */],
            },
            {
                path: 'details',
                component: __WEBPACK_IMPORTED_MODULE_3__evidence_details_evidence_details_component__["a" /* DetailsComponent */],
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
    __WEBPACK_IMPORTED_MODULE_4__evidence_table_evidence_table_component__["a" /* SmartTableComponent */],
    __WEBPACK_IMPORTED_MODULE_3__evidence_details_evidence_details_component__["a" /* DetailsComponent */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_services_evidence_service__ = __webpack_require__("./src/app/@core/data/services/evidence.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__evidence_table_button_render_component__ = __webpack_require__("./src/app/pages/tables/evidence-table/button-render.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__evidence_details_security_cameras_security_cameras_component__ = __webpack_require__("./src/app/pages/tables/evidence-details/security-cameras/security-cameras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mousetrap__ = __webpack_require__("./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mousetrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mousetrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_modal_gallery__ = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
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
                __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_modal_gallery__["c" /* ModalGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({ loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClient */]],
                    } })
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__tables_routing_module__["b" /* routedComponents */].concat([
                __WEBPACK_IMPORTED_MODULE_6__evidence_table_button_render_component__["a" /* ButtonViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__evidence_details_security_cameras_security_cameras_component__["a" /* SecurityCamerasComponent */]
            ]),
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__evidence_table_button_render_component__["a" /* ButtonViewComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
                __WEBPACK_IMPORTED_MODULE_5__core_data_services_evidence_service__["a" /* EvidenceService */]
            ],
        })
    ], TablesModule);
    return TablesModule;
}());

// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}


/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map