webpackJsonp(["editors.module"],{

/***/ "./node_modules/angular2-datetimepicker/datepicker.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATEPICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");


var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DatePicker; }),
    multi: true
};
var DatePicker = /** @class */ (function () {
    function DatePicker() {
        this.onDateSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.popover = false;
        this.cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.timeViewDate = new Date(this.date);
        this.hourValue = 0;
        this.minValue = 0;
        this.timeViewMeridian = "";
        this.timeView = false;
        this.yearView = false;
        this.yearsList = [];
        this.monthDays = [];
        this.monthsView = false;
        this.today = new Date();
        this.defaultSettings = {
            defaultOpen: false,
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy hh:mm a',
            cal_days_labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            cal_full_days_lables: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            cal_months_labels: ['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'],
            cal_months_labels_short: ['JAN', 'FEB', 'MAR', 'APR',
                'MAY', 'JUN', 'JUL', 'AUG', 'SEP',
                'OCT', 'NOV', 'DEC'],
            closeOnSelect: true
        };
    }
    DatePicker.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.defaultOpen) {
            this.popover = true;
        }
    };
    DatePicker.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.initDate(value);
        }
        else {
            this.date = new Date();
        }
        this.generateDays();
    };
    DatePicker.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePicker.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatePicker.prototype.initDate = function (val) {
        this.date = new Date(val);
        if (this.date.getHours() <= 11) {
            this.hourValue = this.date.getHours();
            this.timeViewMeridian = "AM";
        }
        else {
            this.hourValue = this.date.getHours() - 12;
            this.timeViewMeridian = "PM";
        }
        if (this.date.getHours() == 0 || this.date.getHours() == 12) {
            this.hourValue = 12;
        }
        this.minValue = this.date.getMinutes();
    };
    DatePicker.prototype.generateDays = function () {
        this.monthDays = [];
        var year = this.date.getFullYear(), month = this.date.getMonth(), current_day = this.date.getDate(), today = new Date();
        var firstDay = new Date(year, month, 1);
        var startingDay = firstDay.getDay();
        var monthLength = this.getMonthLength(month, year);
        var day = 1;
        var dateArr = [];
        var dateRow = [];
        // this loop is for is weeks (rows)
        for (var i = 0; i < 9; i++) {
            // this loop is for weekdays (cells)
            dateRow = [];
            for (var j = 0; j <= 6; j++) {
                var dateCell = null;
                if (day <= monthLength && (i > 0 || j >= startingDay)) {
                    dateCell = day;
                    if (day == current_day) {
                        // dateCell.classList.add('selected-day');
                    }
                    if (day == this.today.getDate() && this.date.getMonth() == today.getMonth() && this.date.getFullYear() == today.getFullYear()) {
                        // dateCell.classList.add('today');
                    }
                    day++;
                }
                dateRow.push(dateCell);
            }
            // stop making rows if we've run out of days
            if (day > monthLength) {
                dateArr.push(dateRow);
                break;
            }
            else {
                dateArr.push(dateRow);
            }
        }
        this.monthDays = dateArr;
    };
    DatePicker.prototype.generateYearList = function (param) {
        var startYear = null;
        var currentYear = null;
        if (param == "next") {
            startYear = this.yearsList[8] + 1;
            currentYear = this.date.getFullYear();
        }
        else if (param == "prev") {
            startYear = this.yearsList[0] - 9;
            currentYear = this.date.getFullYear();
        }
        else {
            currentYear = this.date.getFullYear();
            startYear = currentYear - 4;
            this.yearView = !this.yearView;
            this.monthsView = false;
        }
        for (var k = 0; k < 9; k++) {
            this.yearsList[k] = startYear + k;
        }
    };
    DatePicker.prototype.getMonthLength = function (month, year) {
        var monthLength = this.cal_days_in_month[month];
        // compensate for leap year
        if (month == 1) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                monthLength = 29;
            }
        }
        return monthLength;
    };
    DatePicker.prototype.toggleMonthView = function () {
        this.yearView = false;
        this.monthsView = !this.monthsView;
    };
    DatePicker.prototype.toggleMeridian = function (val) {
        this.timeViewMeridian = val;
    };
    DatePicker.prototype.setTimeView = function () {
        if (this.timeViewMeridian == "AM") {
            if (this.hourValue == 12) {
                this.date.setHours(0);
            }
            else {
                this.date.setHours(this.hourValue);
            }
            this.date.setMinutes(this.minValue);
        }
        else {
            if (this.hourValue == 12) {
                this.date.setHours(this.hourValue);
            }
            else {
                this.date.setHours(this.hourValue + 12);
            }
            this.date.setMinutes(this.minValue);
        }
        this.date = new Date(this.date);
        this.timeView = !this.timeView;
    };
    DatePicker.prototype.setDay = function (evt) {
        if (evt.target.innerHTML) {
            var selectedDay = parseInt(evt.target.innerHTML);
            this.date = new Date(this.date.setDate(selectedDay));
            console.log(this.date);
            this.onChangeCallback(this.date.toString());
            if (this.settings.closeOnSelect) {
                this.popover = false;
                this.onDateSelect.emit(this.date);
            }
        }
    };
    DatePicker.prototype.setYear = function (evt) {
        console.log(evt.target);
        var selectedYear = parseInt(evt.target.getAttribute('id'));
        this.date = new Date(this.date.setFullYear(selectedYear));
        this.yearView = !this.yearView;
        this.generateDays();
    };
    DatePicker.prototype.setMonth = function (evt) {
        if (evt.target.getAttribute('id')) {
            var selectedMonth = this.settings.cal_months_labels_short.indexOf(evt.target.getAttribute('id'));
            this.date = new Date(this.date.setMonth(selectedMonth));
            this.monthsView = !this.monthsView;
            this.generateDays();
        }
    };
    DatePicker.prototype.prevMonth = function (e) {
        e.stopPropagation();
        var self = this;
        if (this.date.getMonth() == 0) {
            this.date.setMonth(11);
            this.date.setFullYear(this.date.getFullYear() - 1);
        }
        else {
            var prevmonthLength = this.getMonthLength(this.date.getMonth() - 1, this.date.getFullYear());
            var currentDate = this.date.getDate();
            if (currentDate > prevmonthLength) {
                this.date.setDate(prevmonthLength);
            }
            this.date.setMonth(this.date.getMonth() - 1);
        }
        this.date = new Date(this.date);
        this.generateDays();
    };
    DatePicker.prototype.nextMonth = function (e) {
        e.stopPropagation();
        var self = this;
        if (this.date.getMonth() == 11) {
            this.date.setMonth(0);
            this.date.setFullYear(this.date.getFullYear() + 1);
        }
        else {
            var nextmonthLength = this.getMonthLength(this.date.getMonth() + 1, this.date.getFullYear());
            var currentDate = this.date.getDate();
            if (currentDate > nextmonthLength) {
                this.date.setDate(nextmonthLength);
            }
            this.date.setMonth(this.date.getMonth() + 1);
        }
        this.date = new Date(this.date);
        this.generateDays();
    };
    DatePicker.prototype.onChange = function (evt) {
        console.log(evt);
    };
    DatePicker.prototype.incHour = function () {
        if (this.hourValue < 12) {
            this.hourValue += 1;
            console.log(this.hourValue);
        }
    };
    DatePicker.prototype.decHour = function () {
        if (this.hourValue > 1) {
            this.hourValue -= 1;
            console.log(this.hourValue);
        }
    };
    DatePicker.prototype.incMinutes = function () {
        if (this.minValue < 59) {
            this.minValue += 1;
            console.log(this.minValue);
        }
    };
    DatePicker.prototype.decMinutes = function () {
        if (this.minValue > 0) {
            this.minValue -= 1;
            console.log(this.minValue);
        }
    };
    DatePicker.prototype.done = function () {
        this.onChangeCallback(this.date.toString());
        this.popover = false;
        this.onDateSelect.emit(this.date);
    };
    DatePicker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'angular2-date-picker',
                    template: "\n      <div class=\"winkel-calendar\">\n          <input type=\"hidden\" class=\"wc-input\" value=\"{{date}}\">\n          <div class=\"wc-date-container\" (click)=\"popover = !popover\">\n              <span>{{date | date: settings.format}}</span>\n              <i class=\"fa fa-calendar\"></i>\n          </div>\n          <div class=\"wc-date-popover\" [ngClass]=\"{'banner-true': settings.bigBanner == true}\" [hidden]=\"!popover\">\n              <div class=\"wc-banner\" *ngIf=\"settings.bigBanner\">\n                  <div class=\"wc-day-row\">{{date | date: 'EEEE'}}</div>\n                  <div class=\"wc-date-row\">{{date | date: 'dd'}}</div>\n                  <div class=\"wc-my-sec\">\n                      <div class=\"wc-month-row\">\n                          <div>{{date | date: 'MMMM'}}</div>\n                      </div>\n                      <div class=\"wc-year-row\">\n                          <div>{{date | date: 'yyyy'}}</div>\n                      </div>\n                  </div>\n                  <div class=\"wc-time-sec ng-scope\" ng-click=\"toggleTimeView()\">\n                                      <div *ngIf=\"settings.timePicker\" class=\"time\" (click)=\"timeView = !timeView\">\n                                          {{date | date: 'hh'}} : {{date | date: 'mm'}} {{date | date: 'a'}} <span class=\"fa fa-clock-o\"></span>\n                                      </div>\n                                  </div>\n\n              </div>\n              <div class=\"wc-details\">\n                  <i class=\"wc-prev fa fa-angle-left\" (click)=\"prevMonth($event)\"></i>\n                  <div class=\"month-year\" *ngIf=\"settings.bigBanner\" (click)=\"toggleMonthView()\">{{date | date: 'MMMM'}}\n                      <!-- <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\"></i>\n                                       <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\"></i> -->\n                  </div>\n                  <div class=\"month-year\" *ngIf=\"!settings.bigBanner\" (click)=\"toggleMonthView()\">\n                      {{date | date: 'MMMM'}}\n                      <!--    <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\" (click)=\"toggleMonthView()\"></i>\n                                          <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\" (click)=\"toggleMonthView()\"></i>  -->\n\n                  </div>\n                  <i class=\"wc-next fa fa-angle-right\" (click)=\"nextMonth($event)\"></i>\n              </div>\n              <div class=\"year-title\">\n                  <div class=\"year-dropdown\" (click)=\"generateYearList('current')\">\n                      {{date | date: 'yyyy'}}\n                      <i *ngIf=\"!yearView\" class=\"fa fa-angle-down\"></i>\n                      <i *ngIf=\"yearView\" class=\"fa fa-angle-up\"></i>\n                  </div>\n              </div>\n              <table class=\"calendar-header\" [hidden]=\"yearView == true || monthsView == true\">\n                  <tr>\n                      <td class=\"calendar-header-day\">Su</td>\n                      <td class=\"calendar-header-day\">Mo</td>\n                      <td class=\"calendar-header-day\">Tu</td>\n                      <td class=\"calendar-header-day\">We</td>\n                      <td class=\"calendar-header-day\">Th</td>\n                      <td class=\"calendar-header-day\">Fr</td>\n                      <td class=\"calendar-header-day\">Sa</td>\n                  </tr>\n              </table>\n             <div class=\"months-view\" [hidden]=\"!monthsView\" (click)=\"setMonth($event)\">\n                  <span *ngFor=\"let month of settings.cal_months_labels_short\" [ngClass]=\"{'current-month': month == settings.cal_months_labels_short[date.getMonth()]}\" id=\"{{month}}\">{{month}}</span>\n              </div>\n              <div class=\"years-view\" *ngIf=\"yearView\">\n                  <div class=\"fa fa-angle-left prev\" (click)=\"generateYearList('prev')\"></div>\n                  <div class=\"fa fa-angle-right next\" (click)=\"generateYearList('next')\"></div>\n                  <div class=\"years-list-view\" (click)=\"setYear($event)\">\n                      <span *ngFor=\"let year of yearsList\" [ngClass]=\"{'current-year': year == date.getFullYear()}\" id=\"{{year}}\">{{year}}</span>\n                  </div>\n              </div>\n             <div class=\"time-view\" [hidden]=\"!timeView\">\n                  <div class=\"time\">\n                      <div class=\"hour\">\n                          <span class=\"fa fa-plus inc-btn\" (click)=\"incHour()\"></span>\n                          <input type=\"number\" value=\"{{hourValue}}\" [(ngModel)] = \"hourValue\" autofocus/>\n                          <span class=\"fa fa-minus dec-btn\" (click)=\"decHour()\"></span>\n                      </div>\n                      <div class=\"time-divider\">:</div>\n                      <div class=\"minutes\">\n                          <span class=\"fa fa-plus inc-btn\" (click)=\"incMinutes()\"></span>                    \n                          <input type=\"number\" value=\"{{minValue}}\" [(ngModel)] = \"minValue\"/>\n                          <span class=\"fa fa-minus dec-btn\" (click)=\"decMinutes()\"></span>\n                      </div>\n                  </div>\n                  <div class=\"meridian\">\n                      <div class=\"cuppa-btn-group\">\n                          <button [ngClass]=\"{'active': timeViewMeridian == 'AM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('AM')\">AM</button>\n                          <button [ngClass]=\"{'active': timeViewMeridian == 'PM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('PM')\">PM</button>\n                      </div>\n                  </div>\n                  <div class=\"time-view-btn\">\n                      <button class=\"button\" (click)=\"setTimeView()\">Set Time</button>\n                  </div>\n              </div>\n              <table class=\"calendar-days\" (click)=\"setDay($event);\" [hidden]=\"monthsView || yearView\">\n                  <tr *ngFor=\"let week of monthDays\">\n                      <td [ngClass]=\"{'calendar-day': day != null,'today': day == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear(),'selected-day': day == date.getDate()}\"\n                          *ngFor=\"let day of week\">\n                          <span>{{day}}</span>\n                      </td>\n\n                  </tr>\n              </table>\n              <!-- <div ng-if=\"!bigBanner\">\n                  <i class=\"fa fa-clock-o\" aria-hidden=\"true\" (click)=\"toggleTimeView()\"></i>\n              </div>-->\n              <div class=\"cal-util\">\n                  <div class=\"ok\" (click)=\"done()\"><i class=\"fa fa-check\"></i>Done\n                  </div>\n              </div>\n          </div>\n      </div>\n    ",
                    styles: ["\n      @import url(\"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700\");body{font-family:'Roboto',sans-serif}*{box-sizing:border-box}#cuppaDatePickerContainer,#cuppaDatePicker{width:250px;text-align:center;margin:0px auto;font-family:'Roboto','Arial',sans-serif}.year-dropdown{text-align:center}.calendar-header{color:#333;background:#fff}.wc-date-container{float:left;width:100%;height:30px;border:1px solid #1565c0;margin-bottom:1px;font-size:16px;padding:5px;text-align:left;cursor:pointer;background:#fff;line-height:20px}.wc-date-container>span{color:#1565c0}.wc-date-container>i{float:right;font-size:20px;color:#1565c0}.winkel-calendar{position:relative;font-family:'Roboto','Arial',sans-serif}.wc-date-popover{font-size:14px;box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.4);margin:0px auto;perspective:1000px;float:left;background:#fff;background:#fff;position:fixed;width:90%;top:5%;left:50%;z-index:9999999;overflow:hidden;height:90%;max-width:320px;transition:all .5s linear;transform:translateX(-50%)}.wc-banner{float:left;width:100%;font-size:54px;background:#1565c0}.wc-day-row{padding:5px 0px;color:#fff;width:100%;float:left;font-size:3vh;text-align:center}.wc-date-row{display:inline-block;font-size:25vw;color:#fff;padding:5px;width:50%;float:left;text-align:right;font-weight:200}.wc-month-row{padding:25px 0px 0px 0px;font-size:8vw;color:#fff;width:100%;float:left}.wc-month-row>i,.wc-year-row>i{float:right;font-size:12px;padding:10px 6px;cursor:pointer}.wc-month-row>i:hover,.wc-year-row>i:hover{color:rgba(255,255,255,0.63)}.wc-year-row{text-align:left;color:#fff;font-size:7vw;float:left;width:100%;padding:2px 0px 0px 0px}.timepicker-true .wc-year-row{font-size:20px;padding:5px 0px 0px 12px}.timestate>.active{color:#fff}.timestate span{cursor:pointer}.wc-my-sec{display:inline-block;padding:5px 10px;float:left;width:50%;font-weight:300}.timepicker-true .wc-my-sec{width:20%}.time i{font-size:21px;display:block;text-align:center;cursor:pointer}.time i:hover{color:rgba(255,255,255,0.65)}.time>.hour,.time>.minutes{float:left;width:48%;text-align:center}.wc-month-row>div:nth-child(1),.wc-year-row>div:nth-child(1){float:left;text-align:left}.wc-time-sec{color:#fff;text-align:center;padding:0px 10px 10px;float:left;width:100%}.wc-time-sec>.time{font-size:38px;font-weight:300;width:100%;text-align:center;float:left}.time-divider{width:4%;float:left;text-align:center;padding:0px 10px}.time-view{position:absolute;background:#fff;width:100%;z-index:1;top:40px;padding:35px;border-top:1px solid #1565c0}.time-view-btn{text-align:center}.meridian{text-align:center;padding:15px 0px}.button{width:100%;padding:10px;background:#1565c0;color:#fff;margin:0px auto;border:1px solid #1565c0;border-radius:3px}.button-sm{width:50%}.time-view .time{font-size:36px;width:100%;margin:0px auto;display:inline-block;padding:5px 0px 0px 0px;color:#1565c0;font-weight:300}.time-view .time-divider{padding:16px 0}.wc-time-sec .time input,.time-view .time input{display:inline-block;width:100%;background:none;border:none;text-align:center;cursor:pointer;font-family:inherit;font-size:32px;font-weight:300;padding:0px 10px;text-align:center;color:#1565c0}.inc-btn,.dec-btn{font-size:14px;display:block;color:#8e8e8e}.wc-time-sec>.time>.timestate{float:left;padding:0px 10px}.show-time-picker .wc-date-row{width:33% !important}.show-time-picker .wc-my-sec{width:22% !important}.wc-month-controls>.fa:hover,.wc-year-controls>.fa:hover{color:#fff}.wc-details>.fa:hover{color:#ccc}.wc-month-controls{padding:5px;font-size:16px;color:rgba(255,255,255,0.71);float:right}.wc-year-controls{padding:2px 5px 0px 5px;font-size:16px;color:rgba(255,255,255,0.71);float:right}.wc-year-controls>.fa,.wc-month-controls>.fa{cursor:pointer;padding:0px 4px}.wc-details{float:left;width:65%;padding:10px 0px 10px;color:#fff;background:#1565c0}.banner-true>.wc-details{padding:10px 0px 10px}.wc-prev{float:left;width:25%;text-align:left;padding:0px 15px;cursor:pointer;font-size:35px}.month-year{float:left;width:50%;font-size:18px;line-height:35px;text-align:center}.wc-next{float:right;width:25%;text-align:right;padding:0px 15px;cursor:pointer;font-size:35px}.calendar-days{color:#07c;background:#fff}.cal-util{width:100%;float:left;cursor:pointer;position:absolute;bottom:0;background:#fff}.cal-util>.ok{width:100%;padding:15px;border-bottom:1px solid #d1d1d1;float:left;color:#1565c0;font-size:18px;border-top:1px solid #d1d1d1;text-align:center}.ok>i{margin-right:5px}.cal-util>.cancel{width:50%;float:left;padding:10px;color:#1565c0;font-size:20px}.cal-util>.ok:hover,.cal-util>.cancel:hover{box-shadow:inset 0px 0px 20px #ccc}.today>span{border:1px solid #1565c0;background:none}.selected-day>span{background:#1565c0;color:#fff}.calendar-days td{cursor:pointer}.calendar-day:hover>span{background:#1565c0;color:#fff}.winkel-calendar table{width:100%;text-align:center;font-size:18px;border-collapse:collapse}.winkel-calendar table td{padding:0px 0px;width:calc((100%)/7);text-align:center;transition:all .1s linear}.winkel-calendar table td span{display:block;padding:7px;margin:0px;line-height:32px}.calendar-header td{padding:5px 0px !important}.months-view,.years-view{background:#fff;width:100%;top:210px;width:100%;height:calc(100% - 210px);bottom:0;text-align:center}.years-list-view{float:left;width:calc(100% - 60px);height:100%}.months-view>span,.years-list-view>span{display:inline-block;width:25%;padding:25px 0px;cursor:pointer;font-size:16px}.years-list-view>span{width:33.3333%}.years-view>.prev,.years-view>.next{float:left;width:30px;padding:85px 0px;cursor:pointer;font-size:52px}.years-view>.prev:hover,.years-view>.next:hover{color:#ccc}.years-view>.next{float:right}.current-month,.current-year{color:#1565c0}.years-view>span{width:33.3333%}.months-view>span:hover,.years-list-view>span:hover{color:#1565c0}.banner-true{padding-top:0px !important}.banner-true>.wc-banner{margin-bottom:0px !important}.banner-true>.time-view{height:calc(100% - 124px);top:142px}.methods{clear:left;padding:50px 0px;text-align:center}.month-year i{cursor:pointer;font-size:10px}.timepicker-true .wc-month-row{font-size:28px;padding:5px 0px 5px 15px}.timepicker-true .wc-month-row>i,.wc-year-row>i{padding:8px 6px}.timepicker-true .wc-my-sec{padding:16px 2px}.timepicker-true .wc-time-sec{width:48%;padding:25px 0px;margin:0px;cursor:pointer}.timepicker-true .wc-time-sec:hover{color:rgba(255,255,255,0.65)}.timepicker-true .wc-time-sec>.time{width:75%;cursor:pointer}.timepicker-true .time i{display:none}.timepicker-true .time-divider{padding:0px}.timepicker-true .timestate{padding:0px;width:auto;padding-top:7px;font-size:20px;font-weight:300}.year-title{width:35%;float:left;line-height:55px;font-size:18px;color:#fff;background:#1565c0}.year-title i{float:right;padding:13px 10px 7px 0px;font-size:28px}@media (min-width: 365px) and (max-width: 767px){.timepicker-true .wc-date-row{width:54%;padding:20px 5px 10px}.timepicker-true .wc-my-sec{padding:33px 2px 10px;width:46%}.timepicker-true .wc-time-sec{width:100%;padding:0px 0px 15px 0px}.timepicker-true .wc-time-sec>.time{width:35%;float:none;margin:0px auto;font-size:42px}.timepicker-true .wc-month-row{font-size:42px;padding:5px 0px 5px 5px}.timepicker-true .wc-year-row{font-size:24px;padding:15px 0px 0px 5px}.timepicker-true .timestate{font-size:22px;font-weight:100}.months-view,.years-view{top:297px}.banner-true>.time-view{top:240px}.time-view .time{font-size:62px}.cuppa-btn-group{font-size:22px;font-weight:300}.angular-range-slider{height:5px;margin:20px auto 25px auto}.angular-range-slider div.handle{width:45px;height:45px;top:-20px;font-size:26px}.time-view-btn{padding:25px 0px}.button-sm{width:80%;padding:10px;font-size:16px}.cuppa-btn-group>.button{padding:5px 15px !important}}@media (min-width: 768px){.wc-date-popover{width:250px;position:absolute;top:31px;height:auto;left:0;transform:translateX(0)}.wc-day-row{padding:5px 0px;font-size:0.25em}.wc-date-row{font-size:1em;padding:5px}.wc-my-sec{padding:5px 0px}.timepicker-true .wc-my-sec{padding:15px 3px}.wc-month-row{padding:10px 0px 0px 0px;font-size:0.4em}.wc-year-row{font-size:0.3em;padding:0px}.month-year{font-size:14px;line-height:20px;cursor:pointer}.wc-prev,.wc-next{font-size:18px}.wc-details{padding:10px 0px 10px}.year-title{line-height:40px;font-size:16px}.year-title i{padding:11px 10px 10px 0px;font-size:18px}.calendar-header td{padding:5px 0px !important}.winkel-calendar table{font-size:14px}.winkel-calendar table td span{line-height:24px;width:35px;height:35px}.months-view,.years-view{top:40px;width:100%;height:calc(100%)}.banner-true .months-view,.banner-true .years-view{top:165px;height:calc(100% - 128px)}.winkel-calendar table td span{padding:6px}.cal-util>.ok{font-size:14px;padding:10px}.wc-time-sec>.time{font-size:0.35em}.time i{font-size:10px}.wc-time-sec>.timestate{font-size:16px}.wc-month-row>div:nth-child(1),.wc-year-row>div:nth-child(1){min-width:35px}.wc-month-row>i,.wc-year-row>i{font-size:8px}.cal-util{position:relative}.banner-true>.time-view{top:159px}.timepicker-true .wc-month-row{padding:6px 0px 0px 0px;font-size:18px}.timepicker-true .wc-year-row{padding:0px 0px 0px 0px;font-size:16px}}.time-view h5{text-align:left;width:80%;margin:0px auto;padding:5px 0px;font-weight:400}.cuppa-btn-group{display:inline-flex}.cuppa-btn-group>.active{background:#1565c0 !important;color:#fff !important}.cuppa-btn-group>.button{border:1px solid #1565c0;background:#fff;border-radius:3px;float:left;margin:0px;align-items:initial;color:#1565c0;width:auto;padding:5px 10px}.cuppa-btn-group>.button:first-child{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.cuppa-btn-group>.button:last-child{border-top-left-radius:0px;border-bottom-left-radius:0px}.slider{width:200px;height:5px;background:#ccc;border-radius:5px;margin:12px auto;position:relative}.slider>.circle{width:20px;height:20px;background:#fff;position:absolute;top:-8px;border-radius:20px;left:60px;box-shadow:0px 0px 5px #ccc;cursor:pointer}input[type='number']{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}\n    "],
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    DatePicker.ctorParameters = function () { return []; };
    DatePicker.propDecorators = {
        'settings': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onDateSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return DatePicker;
}());

//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "./node_modules/angular2-datetimepicker/datepicker.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularDateTimePickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_component__ = __webpack_require__("./node_modules/angular2-datetimepicker/datepicker.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");




var AngularDateTimePickerModule = /** @class */ (function () {
    function AngularDateTimePickerModule() {
    }
    AngularDateTimePickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__datepicker_component__["a" /* DatePicker */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__datepicker_component__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]]
                },] },
    ];
    /** @nocollapse */
    AngularDateTimePickerModule.ctorParameters = function () { return []; };
    return AngularDateTimePickerModule;
}());

//# sourceMappingURL=datepicker.module.js.map

/***/ }),

/***/ "./node_modules/angular2-datetimepicker/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_component__ = __webpack_require__("./node_modules/angular2-datetimepicker/datepicker.component.js");
/* unused harmony reexport DatePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_module__ = __webpack_require__("./node_modules/angular2-datetimepicker/datepicker.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__datepicker_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/angular2-toaster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_toast_component__ = __webpack_require__("./node_modules/angular2-toaster/src/toast.component.js");
/* unused harmony reexport ToastComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_toaster_container_component__ = __webpack_require__("./node_modules/angular2-toaster/src/toaster-container.component.js");
/* unused harmony reexport ToasterContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__ = __webpack_require__("./node_modules/angular2-toaster/src/toaster.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__ = __webpack_require__("./node_modules/angular2-toaster/src/toaster-config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__ = __webpack_require__("./node_modules/angular2-toaster/src/bodyOutputType.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__ = __webpack_require__("./node_modules/angular2-toaster/src/toaster.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__["a"]; });






//# sourceMappingURL=angular2-toaster.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/bodyOutputType.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyOutputType; });
var BodyOutputType;
(function (BodyOutputType) {
    BodyOutputType[BodyOutputType["Default"] = 0] = "Default";
    BodyOutputType[BodyOutputType["TrustedHtml"] = 1] = "TrustedHtml";
    BodyOutputType[BodyOutputType["Component"] = 2] = "Component";
})(BodyOutputType || (BodyOutputType = {}));
//# sourceMappingURL=bodyOutputType.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toast.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__ = __webpack_require__("./node_modules/angular2-toaster/src/bodyOutputType.js");



var ToastComponent = (function () {
    function ToastComponent(sanitizer, componentFactoryResolver, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.bodyOutputType = __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__["a" /* BodyOutputType */];
        this.clickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToastComponent.prototype.ngOnInit = function () {
        if (this.toast.closeHtml) {
            this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
        }
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            var component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            var componentInstance = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
    };
    ToastComponent.prototype.click = function (event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({
            value: { toast: toast, isCloseButton: true }
        });
    };
    return ToastComponent;
}());

ToastComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[toastComp]',
                template: "\n        <i class=\"toaster-icon\" [ngClass]=\"iconClass\"></i>\n        <div class=\"toast-content\">\n            <div [ngClass]=\"toast.toasterConfig?.titleClass\">{{toast.title}}</div>\n            <div [ngClass]=\"toast.toasterConfig?.messageClass\" [ngSwitch]=\"toast.bodyOutputType\">\n                <div *ngSwitchCase=\"bodyOutputType.Component\" #componentBody></div>\n                <div *ngSwitchCase=\"bodyOutputType.TrustedHtml\" [innerHTML]=\"toast.body\"></div>\n                <div *ngSwitchCase=\"bodyOutputType.Default\">{{toast.body}}</div>\n            </div>\n        </div>\n        <div class=\"toast-close-button\" *ngIf=\"toast.showCloseButton\" (click)=\"click($event, toast)\"\n            [innerHTML]=\"safeCloseHtml\">\n        </div>"
            },] },
];
/** @nocollapse */
ToastComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
ToastComponent.propDecorators = {
    'toast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'componentBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['componentBody', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
    'clickEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__ = __webpack_require__("./node_modules/angular2-toaster/src/bodyOutputType.js");

var ToasterConfig = (function () {
    function ToasterConfig(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<button class="toast-close-button" type="button">&times;</button>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || {
            error: 'toast-error',
            info: 'toast-info',
            wait: 'toast-wait',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        this.iconClasses = configOverrides.iconClasses || {
            error: 'icon-error',
            info: 'icon-info',
            wait: 'icon-wait',
            success: 'icon-success',
            warning: 'icon-warning'
        };
        this.bodyOutputType = configOverrides.bodyOutputType || __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__["a" /* BodyOutputType */].Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultTypeClass = configOverrides.defaultTypeClass || 'toast-info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.animation = configOverrides.animation || '';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
    return ToasterConfig;
}());

//# sourceMappingURL=toaster-config.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toaster_config__ = __webpack_require__("./node_modules/angular2-toaster/src/toaster-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_service__ = __webpack_require__("./node_modules/angular2-toaster/src/toaster.service.js");




var ToasterContainerComponent = (function () {
    function ToasterContainerComponent(toasterService, ref, ngZone) {
        this.ref = ref;
        this.ngZone = ngZone;
        this.toasts = [];
        this.toasterService = toasterService;
    }
    ToasterContainerComponent.prototype.ngOnInit = function () {
        this.registerSubscribers();
        if (this.toasterconfig === null || typeof this.toasterconfig === 'undefined') {
            this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_2__toaster_config__["a" /* ToasterConfig */]();
        }
    };
    // event handlers
    ToasterContainerComponent.prototype.click = function (toast, isCloseButton) {
        if (this.toasterconfig.tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            var removeToast = true;
            if (toast.clickHandler) {
                if (typeof toast.clickHandler === 'function') {
                    removeToast = toast.clickHandler(toast, isCloseButton);
                }
                else {
                    console.log('The toast click handler is not a callable function.');
                    return false;
                }
            }
            if (removeToast) {
                this.removeToast(toast);
            }
        }
    };
    ToasterContainerComponent.prototype.childClick = function ($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    };
    ToasterContainerComponent.prototype.stopTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (toast.timeoutId) {
                window.clearTimeout(toast.timeoutId);
                toast.timeoutId = null;
            }
        }
    };
    ToasterContainerComponent.prototype.restartTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!toast.timeoutId) {
                this.configureTimer(toast);
            }
        }
        else if (toast.timeoutId === null) {
            this.removeToast(toast);
        }
    };
    // private functions
    ToasterContainerComponent.prototype.registerSubscribers = function () {
        var _this = this;
        this.addToastSubscriber = this.toasterService.addToast.subscribe(function (toast) {
            _this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe(function (clearWrapper) {
            _this.clearToasts(clearWrapper);
        });
    };
    ToasterContainerComponent.prototype.addToast = function (toast) {
        toast.toasterConfig = this.toasterconfig;
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId) {
            return;
        }
        ;
        if (!toast.type) {
            toast.type = this.toasterconfig.defaultTypeClass;
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(function (t) { return t.toastId === toast.toastId; })) {
                return;
            }
            else if (this.toasts.some(function (t) { return t.body === toast.body; })) {
                return;
            }
        }
        if (toast.showCloseButton === null || typeof toast.showCloseButton === 'undefined') {
            if (typeof this.toasterconfig.showCloseButton === 'object') {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === 'boolean') {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        this.configureTimer(toast);
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    };
    ToasterContainerComponent.prototype.configureTimer = function (toast) {
        var _this = this;
        var timeout = (typeof toast.timeout === 'number')
            ? toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === 'object') {
            timeout = timeout[toast.type];
        }
        ;
        if (timeout > 0) {
            this.ngZone.runOutsideAngular(function () {
                toast.timeoutId = window.setTimeout(function () {
                    _this.ngZone.run(function () {
                        _this.ref.markForCheck();
                        _this.removeToast(toast);
                    });
                }, timeout);
            });
        }
    };
    ToasterContainerComponent.prototype.isLimitExceeded = function () {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    };
    ToasterContainerComponent.prototype.removeToast = function (toast) {
        var index = this.toasts.indexOf(toast);
        if (index < 0) {
            return;
        }
        ;
        this.toasts.splice(index, 1);
        if (toast.timeoutId) {
            window.clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        if (toast.onHideCallback) {
            toast.onHideCallback(toast);
        }
        this.toasterService._removeToastSubject.next({ toastId: toast.toastId, toastContainerId: toast.toastContainerId });
    };
    ToasterContainerComponent.prototype.removeAllToasts = function () {
        for (var i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    };
    ToasterContainerComponent.prototype.clearToasts = function (clearWrapper) {
        var toastId = clearWrapper.toastId;
        var toastContainerId = clearWrapper.toastContainerId;
        if (toastContainerId === null || typeof toastContainerId === 'undefined') {
            this.clearToastsAction(toastId);
        }
        else if (toastContainerId === this.toasterconfig.toastContainerId) {
            this.clearToastsAction(toastId);
        }
    };
    ToasterContainerComponent.prototype.clearToastsAction = function (toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(function (t) { return t.toastId === toastId; })[0]);
        }
        else {
            this.removeAllToasts();
        }
    };
    ToasterContainerComponent.prototype.ngOnDestroy = function () {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    };
    return ToasterContainerComponent;
}());

ToasterContainerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'toaster-container',
                template: "\n        <div id=\"toast-container\" [ngClass]=\"[toasterconfig.positionClass]\">\n            <div toastComp *ngFor=\"let toast of toasts\" class=\"toast\" [toast]=\"toast\"\n                [@toastState]=\"toasterconfig.animation\"\n                [iconClass]=\"toasterconfig.iconClasses[toast.type]\"\n                [ngClass]=\"toasterconfig.typeClasses[toast.type]\"\n                (click)=\"click(toast)\" (clickEvent)=\"childClick($event)\"\n                (mouseover)=\"stopTimer(toast)\" (mouseout)=\"restartTimer(toast)\">\n            </div>\n        </div>\n        ",
                // TODO: use styleUrls once Angular 2 supports the use of relative paths
                // https://github.com/angular/angular/issues/2383
                // styleUrls: ['./toaster.css']
                animations: [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('toastState', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('flyRight, flyLeft, slideDown, slideUp, fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translate(0,0)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => flyRight', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0, transform: 'translateX(100%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.25s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('flyRight => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.25s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0, transform: 'translateX(100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => flyLeft', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.25s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('flyLeft => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.25s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => slideDown', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('slideDown => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0, transform: 'translateY(200%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => slideUp', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0, transform: 'translateY(200%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('slideUp => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('fade => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                                opacity: 0,
                            }))
                        ])
                    ]),
                ]
            },] },
];
/** @nocollapse */
ToasterContainerComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__toaster_service__["a" /* ToasterService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
ToasterContainerComponent.propDecorators = {
    'toasterconfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=toaster-container.component.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__("./node_modules/angular2-toaster/src/toast.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__ = __webpack_require__("./node_modules/angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_service__ = __webpack_require__("./node_modules/angular2-toaster/src/toaster.service.js");





var ToasterModule = (function () {
    function ToasterModule() {
    }
    return ToasterModule;
}());

ToasterModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */],
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_4__toaster_service__["a" /* ToasterService */]],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */],
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]
                ]
            },] },
];
/** @nocollapse */
ToasterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=toaster.module.js.map

/***/ }),

/***/ "./node_modules/angular2-toaster/src/toaster.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");




var ToasterService = (function () {
    /**
     * Creates an instance of ToasterService.
     */
    function ToasterService() {
        var _this = this;
        this.addToast = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) { return _this._addToast = observer; }).share();
        this.clearToasts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) { return _this._clearToasts = observer; }).share();
        this._removeToastSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.removeToast = this._removeToastSubject.share();
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    ToasterService.prototype.pop = function (type, title, body) {
        var toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        toast.toastId = Guid.newGuid();
        if (!this._addToast) {
            throw new Error('No Toaster Containers have been initialized to receive toasts.');
        }
        this._addToast.next(toast);
        return toast;
    };
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    ToasterService.prototype.popAsync = function (type, title, body) {
        var _this = this;
        setTimeout(function () {
            _this.pop(type, title, body);
        }, 0);
        return this.addToast;
    };
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    ToasterService.prototype.clear = function (toastId, toastContainerId) {
        var clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts.next(clearWrapper);
    };
    return ToasterService;
}());

ToasterService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ToasterService.ctorParameters = function () { return []; };
// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
//# sourceMappingURL=toaster.service.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ckeditor_module_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js");
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js");
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=ng2-ckeditor.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = /** @class */ (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            }
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error("Attribute 'name' is required on <ckbutton>");
        if (!this.command)
            throw new Error("Attribute 'command' is required on <ckbutton>");
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKButtonDirective.prototype, "click", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "command", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "toolbar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = __decorate([
        core_1.Directive({
            selector: 'ckbutton'
        })
    ], CKButtonDirective);
    return CKButtonDirective;
}());
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ckbutton_directive_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.zone = zone;
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this._value = '';
    }
    CKEditorComponent_1 = CKEditorComponent;
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * On component view checked
     */
    CKEditorComponent.prototype.ngAfterViewChecked = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // Check textarea exists
            if (this.instance || !document.contains(this.host.nativeElement)) {
                return;
            }
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function () {
                _this.onTouched();
                var value = _this.instance.getData();
                // Debounce update
                if (_this.debounce) {
                    if (_this.debounceTimeout)
                        clearTimeout(_this.debounceTimeout);
                    _this.debounceTimeout = setTimeout(function () {
                        _this.updateValue(value);
                        _this.debounceTimeout = null;
                    }, parseInt(_this.debounce));
                    // Live update
                }
                else {
                    _this.updateValue(value);
                }
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CKEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CKEditorComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKEditorComponent.prototype, "debounce", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "ready", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "blur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "focus", void 0);
    __decorate([
        core_1.ViewChild('host'),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "host", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarButtons", void 0);
    __decorate([
        core_1.ContentChildren(ckgroup_directive_1.CKGroupDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarGroups", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = __decorate([
        core_1.Component({
            selector: 'ckeditor',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CKEditorComponent_1; }),
                    multi: true
                }
            ],
            template: "<textarea #host></textarea>",
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], CKEditorComponent);
    return CKEditorComponent;
    var CKEditorComponent_1;
}());
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var ckeditor_component_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js");
var ckbutton_directive_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
/**
 * CKEditorModule
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                ckeditor_component_1.CKEditorComponent,
                ckbutton_directive_1.CKButtonDirective,
                ckgroup_directive_1.CKGroupDirective
            ],
            exports: [
                ckeditor_component_1.CKEditorComponent,
                ckbutton_directive_1.CKButtonDirective,
                ckgroup_directive_1.CKGroupDirective
            ]
        })
    ], CKEditorModule);
    return CKEditorModule;
}());
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ckbutton_directive_1 = __webpack_require__("./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = /** @class */ (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return button.toolbar = _this.name; });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKGroupDirective.prototype, "previous", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "subgroupOf", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = __decorate([
        core_1.Directive({
            selector: 'ckgroup'
        })
    ], CKGroupDirective);
    return CKGroupDirective;
}());
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/share.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/share.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_share PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.share = __WEBPACK_IMPORTED_MODULE_1__operator_share__["a" /* share */];
//# sourceMappingURL=share.js.map 


/***/ }),

/***/ "./src/app/@core/data/entities/control-report.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlReport; });
/* unused harmony export ControlReportListing */
var ControlReport = /** @class */ (function () {
    function ControlReport() {
    }
    return ControlReport;
}());

var ControlReportListing = /** @class */ (function () {
    function ControlReportListing() {
    }
    return ControlReportListing;
}());



/***/ }),

/***/ "./src/app/@core/data/entities/searchCriteria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchCriteria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterColumns; });
/* unused harmony export SortColumns */
var SearchCriteria = /** @class */ (function () {
    function SearchCriteria() {
    }
    return SearchCriteria;
}());

var FilterColumns = /** @class */ (function () {
    function FilterColumns() {
    }
    return FilterColumns;
}());

var SortColumns = /** @class */ (function () {
    function SortColumns() {
    }
    return SortColumns;
}());



/***/ }),

/***/ "./src/app/@core/data/services/control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlService; });
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





//import { MessageService } from './message.service';
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ControlService = /** @class */ (function () {
    function ControlService(http) {
        this.http = http;
    }
    ControlService.prototype.SaveControlReport = function (control) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "SaveControlReport", control, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (test) { return _this.log("Saving Control Report"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('ControlReport')));
    };
    ControlService.prototype.FetchControlReports = function (searchCriteria) {
        var _this = this;
        var x;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "ControlReports", searchCriteria, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (test) { return _this.log("fetching Control Reports"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('Fetching control reports')));
    };
    ControlService.prototype.UpdateControlReport = function (control) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "UpdateControlReport", control, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (test) { return _this.log("Updating Control Report"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('ControlReport')));
    };
    ControlService.prototype.DeleteControlReport = function (id) {
        var _this = this;
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "DeleteControlReport/" + id, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (test) { return _this.log("Deleting Control Report"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('ControlReport')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ControlService.prototype.handleError = function (operation, result) {
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
    ControlService.prototype.log = function (message) {
        console.log(message);
    };
    ControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ControlService);
    return ControlService;
}());



/***/ }),

/***/ "./src/app/pages/editors/control-report-create/control-report-create.component.html":
/***/ (function(module, exports) {

module.exports = "\n     \n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n          \n          <div class=\"col-sm-12 input-group\">\n        {{'CREATE_CONTROL_REPORT_TITLE' | translate}} </div>\n        <div class=\"col-sm-12 input-group\">\n        <angular2-date-picker [ngModel]=\"reportcreationdate\" (ngModelChange)=\"onChange($event)\" [settings]=\"dateSettings\"></angular2-date-picker>\n      </div>\n      \n      </nb-card-header>\n      <toaster-container [toasterconfig]=\"config\"></toaster-container>\n      <nb-card-body>\n        \n         \n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n        <div class=\"row full-name-inputs\">\n            <div class=\"col-sm-2 input-group\">\n                <input type=\"text\"   class=\"form-control\" id=\"transactionreferenceno\" formControlName=\"transactionreferenceno\"\n                placeholder=\"{{'TRANSACTION_REFERENCE_NO' | translate}}\"   [(ngModel)]=\"transactionreferenceno\"  (blur)=\"fnFetch()\"/>\n            </div>\n          \n            <div class=\"col-sm-2 input-group\">\n                <input type=\"text\" class=\"form-control\" id=\"entity\" formControlName=\"entity\"  \n                placeholder=\"{{'ENTITY' | translate}}\"  [(ngModel)]=\"controlreport.entity\" />\n            </div>\n            <div class=\"col-sm-2 input-group\">\n              <input type=\"text\" class=\"form-control\" id=\"operator\" formControlName=\"operator\"\n              placeholder=\"{{'OPERATOR' | translate}}\"  [(ngModel)]=\"controlreport.operator\" />\n            </div>\n            <!-- <div class=\"col-sm-1 input-group\">\n                <label style=\"padding-top: 5% ; padding-left: 5%\" > {{'REGION' | translate}}</label>\n            </div> -->\n            <div class=\"col-sm-2 input-group\">\n                <select class=\"form-control\" id=\"region\" formControlName=\"region\"   [(ngModel)]=\"controlreport.region\" style=\"width:160px;\">\n                  <option *ngIf=\"isEnglish\">Select Region</option>\n                  <option *ngIf=\"!isEnglish\">Sélectionnez Région</option>\n                    <option>Asia</option>\n                    <option>Paris</option>\n                   </select>\n              </div>\n              <div class=\"col-sm-2 input-group\">\n                  <select class=\"form-control\" [(ngModel)]=\"controlreport.qualitycheck\"  id=\"qualitycheck\" formControlName=\"qualitycheck\" style=\"width:160px;\">\n                      <option *ngIf=\"isEnglish\">Select Pass/Fail</option>\n                      <option *ngIf=\"!isEnglish\">Sélectionnez Succès/Échec</option>\n                      <option>{{'PASS' |translate}}</option>\n                      <option>{{'FAIL' |translate}}</option>\n                     </select>\n              </div>\n              <div class=\"col-sm-2 input-group\"  *ngIf=\"controlreport.qualitycheck=='Fail'  || controlreport.qualitycheck=='Échec' \">\n                  <select class=\"form-control\" id=\"qualitycheckfailcategory\" formControlName=\"qualitycheckfailcategory\" >\n                      <option *ngIf=\"isEnglish\">Select</option>\n                      <option *ngIf=\"!isEnglish\">Sélectionnez</option>\n                      <option>{{'RELEASED_AT_L1' | translate}}</option>\n                      <option>{{'RELEASED_FROM_PENDING' | translate}}</option>\n                      <option>{{'RELEASED_INSTEAD_OF_PENDING' | translate}}</option>\n                      <option>{{'REJECTED_INSTEAD_OF_PENDING' | translate}}</option> \n                      <option>{{'RESPONSIBILITY_MISS' | translate}}</option>\n                      <option>{{'INCORRECT_COMMENT' | translate}}</option>\n                      <option>{{'NO_SCREENSHOT' | translate}}</option>\n                     </select>\n              </div>\n          </div>       \n\n      \n      \n           <div class=\"row full-name-inputs\">\n           <div class=\"col-sm-4 input-group\">\n              <textarea \n              placeholder=\"{{'COMMENTS' | translate}}\" class=\"form-control\" id=\"comments\"  formControlName=\"comments\" [(ngModel)]=\"controlreport.comments\" ></textarea>\n            </div>\n         \n              <div class=\"col-sm-2 input-group\" style=\"height: 50%; align-self: center;\">\n                  <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"form.invalid\">{{'SAVE' | translate}}</button>\n                </div>\n        </div>\n\n   \n\n        <div>\n          \n          </div>\n          </div>\n        </form>\n      </nb-card-body>\n\n\n\n\n\n    </nb-card>   \n\n   \n    \n  </div>\n\n  <div class=\"col-lg-12\">\n\n    <div *ngFor=\"let eviedence of evidenceList\">\n    <nb-card>\n     \n<div *ngIf=\"eviedence\">\n\n    <div class=\"row\">\n     \n        <div class=\"col-lg-6\">\n         <nb-card>\n           <nb-card-body>\n\n        \n                <div class=\"row full-name-inputs\">\n                    <div class=\"col-sm-6 input-group\">\n                        {{'TRANSACTION_REFERENCE_NO' | translate}}\n                      </div>\n\n                      <div class=\"col-sm-6 input-group\">\n                          {{eviedence.transactionReferenceNo}}\n                        </div>\n\n                        \n                </div>\n                <div class=\"row full-name-inputs\">\n                    <div class=\"col-sm-6 input-group\">\n                       User\n                      </div>\n\n                      <div class=\"col-sm-6 input-group\">\n                          {{eviedence.userId}}\n                        </div>\n                </div>\n                <div class=\"row full-name-inputs\">\n                    <div class=\"col-sm-6 input-group\">\n                      Date\n                      </div>\n\n                      <div class=\"col-sm-6 input-group\">\n                          {{eviedence.capturedDateTime}}\n                        </div>\n\n                       \n                </div>\n              </nb-card-body>\n            </nb-card>\n          \n          </div>\n          <div class=\"col-lg-6\">\n           \n            \n                  <div *ngIf=\"eviedence.images\">\n      \n                      <ks-modal-gallery [modalImages]=\"eviedence.images\" \n                      [plainGalleryConfig]=\"plainGalleryRow\"></ks-modal-gallery>\n      \n                    </div>\n            \n                      \n             \n              </div>\n       \n      </div>\n       \n      </div>\n    \n\n   \n    </nb-card>    \n  </div>\n<!-- <nb-card>\n  <div *ngIf=\"!validTrasactionReferenceNo\">\n  <nb-card-body>\n   {{'NO_RESULTS_FOUND' | translate}}\n  </nb-card-body>\n</div>\n</nb-card> -->\n</div>\n</div>\n\n<div class=\"row\">\n \n      <control-report-edit [data]=\"reportcreationdate\"></control-report-edit>\n  \n</div>\n\n\n\n<style>\n  .table-success, .table-success > th, .table-success > td {\n    background-color: #40dc7e !important;\n}\n  /* .table-success  th\n  {\n    background-color: #40dc7e !important;\n  } */\n</style>\n"

/***/ }),

/***/ "./src/app/pages/editors/control-report-create/control-report-create.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Serif;\n  font-weight: 500;\n  color: #ffffff; }\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n:host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n:host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #EC1A3A; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Serif;\n  font-weight: 500;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n"

/***/ }),

/***/ "./src/app/pages/editors/control-report-create/control-report-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlReportCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_entities_evidence__ = __webpack_require__("./src/app/@core/data/entities/evidence.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_services_evidence_service__ = __webpack_require__("./src/app/@core/data/services/evidence.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_entities_control_report__ = __webpack_require__("./src/app/@core/data/entities/control-report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_services_control_service__ = __webpack_require__("./src/app/@core/data/services/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_modal_gallery__ = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ControlReportCreateComponent = /** @class */ (function () {
    function ControlReportCreateComponent(_route, translate, toasterService, evidenceService, controlService, fb, router) {
        this._route = _route;
        this.translate = translate;
        this.toasterService = toasterService;
        this.evidenceService = evidenceService;
        this.controlService = controlService;
        this.fb = fb;
        this.router = router;
        this.isEnglish = true;
        this.clear = false;
        this.controlreport = new __WEBPACK_IMPORTED_MODULE_3__core_data_entities_control_report__["a" /* ControlReport */]();
        this.validTrasactionReferenceNo = false;
        this.reportcreationdate = new Date();
        this.dateSettings = {
            bigBanner: true,
            timePicker: false,
            format: 'MM-dd-yyyy',
            defaultOpen: false
        };
        this.position = 'toast-top-right';
        this.animationType = 'fade';
        this.timeout = 2000;
        this.toastsLimit = 5;
        this.type = 'default';
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = false;
        this.plainGalleryRow = {
            strategy: __WEBPACK_IMPORTED_MODULE_6_angular_modal_gallery__["d" /* PlainGalleryStrategy */].ROW,
            layout: new __WEBPACK_IMPORTED_MODULE_6_angular_modal_gallery__["b" /* LineLayout */]({ width: '80px', height: '80px' }, { length: 10, wrap: true }, 'flex-start')
        };
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        this.createForm();
    }
    ControlReportCreateComponent.prototype.ngOnInit = function () {
        var lang = localStorage.getItem('lang');
        this.translate.use(lang);
        if (lang === 'en') {
            this.isEnglish = true;
            this.controlreport.region = "Select Region";
            this.controlreport.qualitycheck = "Select Pass/Fail";
            this.controlreport.qualitycheckfailcategory = "Select";
        }
        else {
            this.isEnglish = false;
            this.controlreport.region = "Sélectionnez Région";
            this.controlreport.qualitycheck = "Sélectionnez Succès/Échec";
            this.controlreport.qualitycheckfailcategory = "Sélectionnez";
        }
    };
    ControlReportCreateComponent.prototype.onChange = function (event) {
        this.reportcreationdate = event;
    };
    ControlReportCreateComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            transactionreferenceno: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required],
            entity: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required],
            operator: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required],
            region: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required],
            qualitycheck: ['', __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required],
            qualitycheckfailcategory: null,
            comments: null
        });
    };
    ControlReportCreateComponent.prototype.fnFetch = function () {
        var _this = this;
        if (this.transactionreferenceno !== undefined) {
            if (this.transactionreferenceno !== "") {
                this.evidenceService.getEvidence(this.transactionreferenceno).subscribe(function (x) {
                    console.log(x);
                    _this.evidenceList = x;
                    if (x.length > 0)
                        _this.validTrasactionReferenceNo = true;
                    else
                        _this.validTrasactionReferenceNo = false;
                    _this.evidenceList.forEach(function (o) {
                        var tempImages = [];
                        var count = 0;
                        o.screenshots.forEach(function (obj) {
                            var img = new __WEBPACK_IMPORTED_MODULE_6_angular_modal_gallery__["a" /* Image */](count++, {
                                img: 'data:image/png;base64,' + obj,
                            });
                            tempImages.push(img);
                        });
                        o.images = tempImages;
                    });
                });
            }
        }
    };
    ControlReportCreateComponent.prototype.changeValuestoEnglish = function () {
        if (this.form.value.qualitycheck === "Échec")
            this.form.value.qualitycheck = "Fail";
        else if (this.form.value.qualitycheck === "Succès")
            this.form.value.qualitycheck = "Pass";
        if (this.form.value.qualitycheckfailcategory === "Mal libéré à L1")
            this.form.value.qualitycheckfailcategory = "Wrongly released at L1";
        else if (this.form.value.qualitycheckfailcategory === "Mal libéré d' en attente")
            this.form.value.qualitycheckfailcategory = "Wrongly released from Pending";
        else if (this.form.value.qualitycheckfailcategory === "Mal libéré au lieu d' en attente")
            this.form.value.qualitycheckfailcategory = "Wrongly released instead of Pending";
        else if (this.form.value.qualitycheckfailcategory === "Mal rejeté  au lieu d' en attente")
            this.form.value.qualitycheckfailcategory = "Wrongly rejected instead of Pending";
        else if (this.form.value.qualitycheckfailcategory === "Responsabilité échec")
            this.form.value.qualitycheckfailcategory = "Responsibility Miss";
        else if (this.form.value.qualitycheckfailcategory === "Commentaire incorrect")
            this.form.value.qualitycheckfailcategory = "Incorrect Comment";
        else if (this.form.value.qualitycheckfailcategory === "Captures d'ecran n'ont pas capturé")
            this.form.value.qualitycheckfailcategory = "Screenshot not captured";
    };
    ControlReportCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.form.value;
        if (localStorage.getItem('lang') === "fr")
            this.changeValuestoEnglish();
        var temp = this.reportcreationdate;
        this.controlreport.transactionreferenceno = this.form.value.transactionreferenceno;
        this.controlreport.createddate = new Date(this.reportcreationdate).toISOString();
        this.controlreport.region = this.form.value.region;
        this.controlreport.qualitycheck = this.form.value.qualitycheck;
        this.controlreport.entity = this.form.value.entity;
        this.controlreport.operator = this.form.value.operator;
        this.controlreport.comments = this.form.value.comments;
        if (this.controlreport.qualitycheck === "Fail")
            this.controlreport.qualitycheckfailcategory = this.form.value.qualitycheckfailcategory;
        console.log(this.controlreport);
        this.controlService.SaveControlReport(this.controlreport)
            .subscribe(function (x) {
            console.log(x);
            _this.makeToast('success', 'Data saved Successfully!');
            //clear values after save!
            _this.transactionreferenceno = '';
            _this.controlreport = new __WEBPACK_IMPORTED_MODULE_3__core_data_entities_control_report__["a" /* ControlReport */]();
            _this.evidenceList = [];
            _this.onRefresh();
        });
    };
    ControlReportCreateComponent.prototype.makeToast = function (type, message) {
        this.showToast(type, '', message);
    };
    ControlReportCreateComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    ControlReportCreateComponent.prototype.clearToasts = function () {
        this.toasterService.clear();
    };
    ControlReportCreateComponent.prototype.onRefresh = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        var currentUrl = this.router.url + '?';
        this.router.navigateByUrl(currentUrl)
            .then(function () {
            _this.router.navigated = false;
            _this.router.navigate([_this.router.url]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_data_entities_evidence__["a" /* Evidence */])
    ], ControlReportCreateComponent.prototype, "eviedence", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ControlReportCreateComponent.prototype, "transactionreferenceno", void 0);
    ControlReportCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-smart-table2',
            template: __webpack_require__("./src/app/pages/editors/control-report-create/control-report-create.component.html"),
            styles: [__webpack_require__("./src/app/pages/editors/control-report-create/control-report-create.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__core_data_services_evidence_service__["a" /* EvidenceService */],
            __WEBPACK_IMPORTED_MODULE_5__core_data_services_control_service__["a" /* ControlService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */]])
    ], ControlReportCreateComponent);
    return ControlReportCreateComponent;
}());



/***/ }),

/***/ "./src/app/pages/editors/control-report-download/control-report-download.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<nb-card>\n  <nb-card-header>\n\n      <div class=\"row demo-checkboxes-radio\">\n          <div class=\"demo-checkboxes col-sm-4\">\n              <label class=\"custom-control custom-radio\">\n                  {{'START_DATE' | translate}}(MM-dd-yyy)\n                  </label>\n                  <label class=\"custom-control custom-radio\">\n                      <angular2-date-picker [(ngModel)]=\"startDate\" [settings]=\"dateSettings\"></angular2-date-picker>\n                  </label>\n                 \n          </div>\n          <div class=\"demo-radio col-sm-4\">\n            <label class=\"custom-control custom-radio\">\n                {{'END_DATE' | translate}}(MM-dd-yyy)\n            </label>\n            <label class=\"custom-control custom-radio\">\n                <angular2-date-picker [(ngModel)]=\"endDate\" [settings]=\"dateSettings\"></angular2-date-picker>\n            </label>\n           \n          </div>\n          <div class=\"demo-radio col-sm-4\" style=\"padding-top:2%\">\n            <label class=\"custom-control custom-radio\">\n              <td>\n                  <!-- <button  (click)=\"onSearch()\" class=\"btn btn-success btn-tn\">Search </button> -->\n              </td>\n              <td style=\"padding-left:10%\">\n                  <button  (click)=\"onDownload()\" class=\"btn btn-success btn-tn\">{{'DOWNLOAD' | translate}}</button>\n              </td>\n                \n             \n            </label>\n          </div>\n          </div>\n  </nb-card-header>\n\n  <!-- <nb-card-body>\n    \n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"  (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\" >\n    </ng2-smart-table>\n    <!-- <div  style=\"float: right;padding-bottom: 2%;\"> \n      <tr>\n        Total Records: {{totalRecords}}\n      </tr>\n        <button  (click)=\"onDownload()\" class=\"btn btn-success btn-tn\">Download</button>\n      </div> -->\n  <!-- </nb-card-body> --> \n \n</nb-card>\n\n\n<!-- <div *ngIf=\"eviedence\">\n  <ngx-security-cameras [childMessage]=\"eviedence\" ></ngx-security-cameras>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/pages/editors/control-report-download/control-report-download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlReportDownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__ = __webpack_require__("./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_entities_evidence__ = __webpack_require__("./src/app/@core/data/entities/evidence.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_services_control_service__ = __webpack_require__("./src/app/@core/data/services/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_entities_searchCriteria__ = __webpack_require__("./src/app/@core/data/entities/searchCriteria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ControlReportDownloadComponent = /** @class */ (function () {
    function ControlReportDownloadComponent(translate, service, controlService) {
        this.translate = translate;
        this.service = service;
        this.controlService = controlService;
        this.targetData = [];
        this.endDate = new Date();
        //to generate weekly report by default
        this.startDate = new Date(this.endDate.getTime() - (7 * 24 * 60 * 60 * 1000));
        this.dateSettings = {
            bigBanner: true,
            timePicker: false,
            format: 'MM-dd-yyyy',
            defaultOpen: false
        };
        this.settings = {
            add: {
                hide: true,
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="nb-trash"></i>',
            },
            edit: {
                confirmSave: true,
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            columns: {
                transactionReferenceNo: {
                    title: this.translate,
                    type: 'string',
                },
                entity: {
                    title: 'Entity',
                    type: 'string',
                },
                createdDate: {
                    title: 'Created Date',
                    type: 'string',
                },
                operator: {
                    title: 'Operator',
                    type: 'string',
                },
                qualityCheck: {
                    title: 'Quality Check',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [
                                { value: 'Pass', title: 'Pass' },
                                { value: 'Fail', title: 'Fail' }
                            ]
                        }
                    }
                },
                comments: {
                    title: 'Comments',
                    type: 'string',
                },
                qualityCheckFailCategory: {
                    title: 'Fail Category',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [
                                { value: 'Wrongly released at L1', title: 'Wrongly released at L1' },
                                { value: 'Wrongly released from Pending', title: 'Wrongly released from Pending' },
                                { value: 'Wrongly released instead of Pending', title: 'Wrongly released instead of Pending' },
                                { value: 'Wrongly rejected instead of Pending', title: 'Wrongly rejected instead of Pending' },
                                { value: 'Responsibility Miss', title: 'Responsibility Miss' },
                                { value: 'Incorrect Comment', title: 'Incorrect Comment' },
                                { value: 'Screenshot not captured', title: 'Screenshot not captured' }
                            ]
                        }
                    }
                }
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        // const data = this.service.getData();
        // this.source.load(data);
        this.FetchControlReports();
    }
    ControlReportDownloadComponent.prototype.ngOnInit = function () {
        this.translate.use(localStorage.getItem('lang'));
    };
    ControlReportDownloadComponent.prototype.FetchControlReports = function () {
        var _this = this;
        var search = this.searchCriteria();
        this.controlService.FetchControlReports(search)
            .subscribe(function (x) {
            console.log(x);
            _this.totalRecords = x.items.length;
            _this.source.load(x.items);
            _this.targetData = x.items;
        });
    };
    ControlReportDownloadComponent.prototype.onDownload = function () {
        var _this = this;
        var search = this.searchCriteria();
        this.controlService.FetchControlReports(search)
            .subscribe(function (x) {
            console.log(x);
            _this.totalRecords = x.items.length;
            _this.source.load(x.items);
            _this.targetData = x.items;
            var fileName = "controlreport";
            if (_this.targetData.constructor != Array) {
                console.error('Can not export error type data to excel.');
                return;
            }
            var mystyle = {
                headers: true,
                column: {
                    style: 'font-size:20px;background:Green;border:1px black solid'
                },
                columns: [
                    { columnid: 'region', title: 'Region', width: 100 },
                    { columnid: 'transactionReferenceNo', title: 'Transaction reference no', width: 200 },
                    { columnid: 'createdDate', title: 'PS Created Date', width: 100 },
                    { columnid: 'entity', title: 'Entity', width: 100 },
                    { columnid: 'operator', title: 'Operator', width: 100 },
                    { columnid: 'qualityCheck', title: 'Pass/Fail', width: 100 },
                    { columnid: 'qualityCheckFailCategory', title: 'Error Category', width: 200 },
                    { columnid: 'comments', title: 'Comments', width: 300 },
                    { columnid: 'audit', title: 'Audit', width: 300 },
                ],
                row: {
                    style: function (sheet, row, rowidx) {
                        //return 'background:'+(rowidx%2?'Silver':'White');
                    }
                },
                cell: {
                    style: function (event) {
                        return ('border:1px black solid');
                    }
                }
                // rows: {
                //   4:{cell:{style:'background:blue'}}
                // },
                // cells: {
                //   2:{
                //     2:{
                //       style: 'font-size:45px;background:pink',
                //       value: function(value){return value.substr(1,3);}
                //     }
                //   }
                // }
            };
            alasql('SELECT * INTO XLS("control-report.xls",?) FROM ?', [mystyle, _this.targetData]);
        });
    };
    ControlReportDownloadComponent.prototype.onSearch = function () {
        var _this = this;
        var search = this.searchCriteria();
        this.controlService.FetchControlReports(search)
            .subscribe(function (x) {
            console.log(x);
            _this.totalRecords = x.items.length;
            _this.source.load(x.items);
            _this.targetData = x.items;
        });
    };
    ControlReportDownloadComponent.prototype.searchCriteria = function () {
        var search = new __WEBPACK_IMPORTED_MODULE_5__core_data_entities_searchCriteria__["b" /* SearchCriteria */]();
        search.filterColumns = [];
        var filter = new __WEBPACK_IMPORTED_MODULE_5__core_data_entities_searchCriteria__["a" /* FilterColumns */]();
        filter.columnName = 'startdate';
        //filter.value=this.ConvertDateFormat(this.startDate);
        filter.value = new Date(this.startDate).toISOString();
        search.filterColumns.push(filter);
        filter = new __WEBPACK_IMPORTED_MODULE_5__core_data_entities_searchCriteria__["a" /* FilterColumns */]();
        filter.columnName = 'enddate';
        filter.value = new Date(this.endDate).toISOString();
        search.filterColumns.push(filter);
        return search;
    };
    ControlReportDownloadComponent.prototype.ConvertDateFormat = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    };
    ControlReportDownloadComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    ControlReportDownloadComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
            this.controlReport = event.newData;
            this.controlReport.createddate = new Date(event.newData.createdDate).toISOString();
            this.controlService.UpdateControlReport(this.controlReport)
                .subscribe(function (x) {
                console.log(x);
            });
        }
        else {
            event.confirm.reject();
        }
    };
    ControlReportDownloadComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
        //this.notification.makeToast();
    };
    ControlReportDownloadComponent.prototype.onCustom = function (event) {
        // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_data_entities_evidence__["a" /* Evidence */])
    ], ControlReportDownloadComponent.prototype, "eviedence", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ControlReportDownloadComponent.prototype, "value", void 0);
    ControlReportDownloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-smart-table',
            template: __webpack_require__("./src/app/pages/editors/control-report-download/control-report-download.component.html"),
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_services_control_service__["a" /* ControlService */]])
    ], ControlReportDownloadComponent);
    return ControlReportDownloadComponent;
}());



/***/ }),

/***/ "./src/app/pages/editors/control-report-edit/control-report-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<nb-card>\n \n\n  <nb-card-body>\n    \n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"  (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\" >\n    </ng2-smart-table>\n    <!-- <div  style=\"float: right;padding-bottom: 2%;\"> \n      <tr>\n        Total Records: {{totalRecords}}\n      </tr>\n        <button  (click)=\"onDownload()\" class=\"btn btn-success btn-tn\">Download</button>\n      </div> -->\n  </nb-card-body>\n \n</nb-card>\n\n\n<!-- <div *ngIf=\"eviedence\">\n  <ngx-security-cameras [childMessage]=\"eviedence\" ></ngx-security-cameras>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/pages/editors/control-report-edit/control-report-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlReportEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__ = __webpack_require__("./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_entities_evidence__ = __webpack_require__("./src/app/@core/data/entities/evidence.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_services_control_service__ = __webpack_require__("./src/app/@core/data/services/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_data_entities_searchCriteria__ = __webpack_require__("./src/app/@core/data/entities/searchCriteria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ControlReportEditComponent = /** @class */ (function () {
    function ControlReportEditComponent(translate, service, controlService) {
        this.translate = translate;
        this.service = service;
        this.controlService = controlService;
        this.translation = {};
        this.targetData = [];
        this.dateSettings = {
            bigBanner: true,
            timePicker: false,
            format: 'MM-dd-yyyy',
            defaultOpen: false
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        // const data = this.service.getData();
        // this.source.load(data);
        this.LoadTranslation();
    }
    ControlReportEditComponent.prototype.ngOnInit = function () {
        this.translate.use(localStorage.getItem('lang'));
    };
    ControlReportEditComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes.data.currentValue);
        this.reportCreationDate = new Date(changes.data.currentValue).toISOString();
        this.FetchControlReports();
    };
    ControlReportEditComponent.prototype.LoadTranslation = function () {
        var _this = this;
        this.translate.getTranslation(localStorage.getItem('lang')).subscribe(function (res) {
            _this.translation = res;
            // console.log(res);
            _this.settings = {
                delete: {
                    confirmDelete: true,
                    deleteButtonContent: '<i class="nb-trash"></i>',
                },
                edit: {
                    confirmSave: true,
                    editButtonContent: '<i class="nb-edit"></i>',
                    saveButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                },
                add: {
                    addButtonContent: '<i class="nb-plus"></i>',
                    createButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>'
                },
                columns: {
                    transactionReferenceNo: {
                        title: _this.translation.TRANSACTION_REFERENCE_NO,
                        type: 'string',
                    },
                    entity: {
                        title: _this.translation.ENTITY,
                        type: 'string',
                    },
                    // createdDate: {
                    //   title: 'Created Date',
                    //   type: 'string',
                    // },
                    operator: {
                        title: _this.translation.OPERATOR,
                        type: 'string',
                    },
                    qualityCheck: {
                        title: _this.translation.PASS + '/' + _this.translation.FAIL,
                        type: 'html',
                        editor: {
                            type: 'list',
                            config: {
                                list: [
                                    { value: 'Pass', title: 'Pass' },
                                    { value: 'Fail', title: 'Fail' }
                                ]
                            }
                        }
                    },
                    qualityCheckFailCategory: {
                        title: _this.translation.QUALITY_CHECK_FAIL_CATEGORY,
                        type: 'html',
                        editor: {
                            type: 'list',
                            config: {
                                list: [
                                    { value: 'Wrongly released at L1', title: 'Wrongly released at L1' },
                                    { value: 'Wrongly released from Pending', title: 'Wrongly released from Pending' },
                                    { value: 'Wrongly released instead of Pending', title: 'Wrongly released instead of Pending' },
                                    { value: 'Wrongly rejected instead of Pending', title: 'Wrongly rejected instead of Pending' },
                                    { value: 'Responsibility Miss', title: 'Responsibility Miss' },
                                    { value: 'Incorrect Comment', title: 'Incorrect Comment' },
                                    { value: 'Screenshot not captured', title: 'Screenshot not captured' }
                                    // { value: 'Wrongly released at L1', title: this.translation.WRONGLY_RELEASED_AT_L1 },
                                    // { value: 'Wrongly released from Pending', title: this.translation.WRONGLY_RELEASED_FROM_PENDING  },
                                    // { value: 'Wrongly released instead of Pending',title: this.translation.WRONGLY_RELEASED_INSTEAD_OF_PENDING },
                                    // { value: 'Wrongly rejected instead of Pending',title: this.translation.WRONGLY_REJECTED_INSTEAD_OF_PENDING},
                                    // { value: 'Responsibility Miss',title: this.translation.RESPONSIBILITY_MISS },
                                    // { value: 'Incorrect Comment',title: this.translation.INCORRECT_COMMENT },
                                    // { value: 'Screenshot not captured',title: this.translation.SCREENSHOT_NOT_CAPTURED }
                                ]
                            }
                        }
                    },
                    comments: {
                        title: _this.translation.COMMENTS,
                        type: 'string',
                    }
                },
            };
        });
    };
    ControlReportEditComponent.prototype.FetchControlReports = function () {
        var _this = this;
        var search = this.searchCriteria();
        this.controlService.FetchControlReports(search)
            .subscribe(function (x) {
            console.log(x);
            _this.totalRecords = x.items.length;
            _this.source.load(x.items);
            _this.targetData = x.items;
        });
    };
    ControlReportEditComponent.prototype.onDownload = function () {
        var _this = this;
        var search = this.searchCriteria();
        this.controlService.FetchControlReports(search)
            .subscribe(function (x) {
            console.log(x);
            _this.totalRecords = x.items.length;
            _this.source.load(x.items);
            _this.targetData = x.items;
            var fileName = "controlreport";
            if (_this.targetData.constructor != Array) {
                console.error('Can not export error type data to excel.');
                return;
            }
            alasql('SELECT * INTO XLSX("' + fileName + '.xlsx",{headers:true}) FROM ?', [_this.targetData]);
        });
    };
    ControlReportEditComponent.prototype.onSearch = function () {
        var _this = this;
        var search = this.searchCriteria();
        this.controlService.FetchControlReports(search)
            .subscribe(function (x) {
            console.log(x);
            _this.totalRecords = x.items.length;
            _this.source.load(x.items);
            _this.targetData = x.items;
        });
    };
    ControlReportEditComponent.prototype.searchCriteria = function () {
        var search = new __WEBPACK_IMPORTED_MODULE_5__core_data_entities_searchCriteria__["b" /* SearchCriteria */]();
        search.filterColumns = [];
        var filter = new __WEBPACK_IMPORTED_MODULE_5__core_data_entities_searchCriteria__["a" /* FilterColumns */]();
        filter.columnName = 'startdate';
        //filter.value=this.ConvertDateFormat(this.startDate);
        filter.value = this.reportCreationDate;
        search.filterColumns.push(filter);
        filter = new __WEBPACK_IMPORTED_MODULE_5__core_data_entities_searchCriteria__["a" /* FilterColumns */]();
        filter.columnName = 'enddate';
        filter.value = this.reportCreationDate;
        search.filterColumns.push(filter);
        return search;
    };
    ControlReportEditComponent.prototype.ConvertDateFormat = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    };
    ControlReportEditComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            console.log(event.data.id);
            this.controlService.DeleteControlReport(event.data.id)
                .subscribe(function (x) {
                console.log(x);
            });
        }
        else {
            event.confirm.reject();
        }
    };
    ControlReportEditComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
            this.controlReport = event.newData;
            //this.controlReport.createddate = new Date(event.newData.createdDate).toISOString();
            this.controlService.UpdateControlReport(this.controlReport)
                .subscribe(function (x) {
                console.log(x);
            });
        }
        else {
            event.confirm.reject();
        }
    };
    ControlReportEditComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
        //this.notification.makeToast();
    };
    ControlReportEditComponent.prototype.onCustom = function (event) {
        // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ControlReportEditComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_data_entities_evidence__["a" /* Evidence */])
    ], ControlReportEditComponent.prototype, "eviedence", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ControlReportEditComponent.prototype, "value", void 0);
    ControlReportEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'control-report-edit',
            template: __webpack_require__("./src/app/pages/editors/control-report-edit/control-report-edit.component.html"),
            styles: ["\n    :host /deep/ ng2-smart-table table tr td  { background-color: #252525; }  \n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */],
            __WEBPACK_IMPORTED_MODULE_4__core_data_services_control_service__["a" /* ControlService */]])
    ], ControlReportEditComponent);
    return ControlReportEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/editors/editors-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editors_component__ = __webpack_require__("./src/app/pages/editors/editors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__control_report_download_control_report_download_component__ = __webpack_require__("./src/app/pages/editors/control-report-download/control-report-download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__control_report_create_control_report_create_component__ = __webpack_require__("./src/app/pages/editors/control-report-create/control-report-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_evidence_upload_evidence_component__ = __webpack_require__("./src/app/pages/editors/upload-evidence/upload-evidence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__control_report_edit_control_report_edit_component__ = __webpack_require__("./src/app/pages/editors/control-report-edit/control-report-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__editors_component__["a" /* EditorsComponent */],
        children: [{
                path: 'control-report-download',
                component: __WEBPACK_IMPORTED_MODULE_3__control_report_download_control_report_download_component__["a" /* ControlReportDownloadComponent */],
            }, {
                path: 'control-report-create',
                component: __WEBPACK_IMPORTED_MODULE_4__control_report_create_control_report_create_component__["a" /* ControlReportCreateComponent */],
            },
            {
                path: 'upload-evidence',
                component: __WEBPACK_IMPORTED_MODULE_5__upload_evidence_upload_evidence_component__["a" /* UploadEvidenceComponent */],
            }
        ],
    }];
var EditorsRoutingModule = /** @class */ (function () {
    function EditorsRoutingModule() {
    }
    EditorsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], EditorsRoutingModule);
    return EditorsRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__editors_component__["a" /* EditorsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__control_report_create_control_report_create_component__["a" /* ControlReportCreateComponent */],
    __WEBPACK_IMPORTED_MODULE_3__control_report_download_control_report_download_component__["a" /* ControlReportDownloadComponent */],
    __WEBPACK_IMPORTED_MODULE_5__upload_evidence_upload_evidence_component__["a" /* UploadEvidenceComponent */],
    __WEBPACK_IMPORTED_MODULE_6__control_report_edit_control_report_edit_component__["a" /* ControlReportEditComponent */]
];


/***/ }),

/***/ "./src/app/pages/editors/editors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EditorsComponent = /** @class */ (function () {
    function EditorsComponent() {
    }
    EditorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-editors',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], EditorsComponent);
    return EditorsComponent;
}());



/***/ }),

/***/ "./src/app/pages/editors/editors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsModule", function() { return EditorsModule; });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editors_routing_module__ = __webpack_require__("./src/app/pages/editors/editors-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datetimepicker__ = __webpack_require__("./node_modules/angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__ = __webpack_require__("./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_data_services_evidence_service__ = __webpack_require__("./src/app/@core/data/services/evidence.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_data_services_control_service__ = __webpack_require__("./src/app/@core/data/services/control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mousetrap__ = __webpack_require__("./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mousetrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_mousetrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_modal_gallery__ = __webpack_require__("./node_modules/angular-modal-gallery/angular-modal-gallery.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










 // <------ mandatory dependency for angular-modal-gallery
 // <------ mandatory dependency for angular-modal-gallery
 // 



// **************************************************************************
var EditorsModule = /** @class */ (function () {
    function EditorsModule() {
    }
    EditorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__editors_routing_module__["a" /* EditorsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular_modal_gallery__["c" /* ModalGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({ loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClient */]],
                    } })
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_3__editors_routing_module__["b" /* routedComponents */].slice(),
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__["a" /* SmartTableService */],
                __WEBPACK_IMPORTED_MODULE_8__core_data_services_evidence_service__["a" /* EvidenceService */],
                __WEBPACK_IMPORTED_MODULE_9__core_data_services_control_service__["a" /* ControlService */]
            ],
        })
    ], EditorsModule);
    return EditorsModule;
}());

// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}


/***/ }),

/***/ "./src/app/pages/editors/upload-evidence/upload-evidence.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n<nb-card-header>\n  Upload Evidence \n</nb-card-header>\n<nb-card-body>\n    <div class=\"col-lg-8\">\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n\n        <div class=\"row full-name-inputs\">\n            <div class=\"col-sm-6 input-group\">\n                <input type=\"text\" class=\"form-control\"  id=\"name\" placeholder=\"Transaction Reference No\" formControlName=\"transactionreferenceno\">\n            </div>\n            <div class=\"col-sm-6 input-group\">\n              <input type=\"text\" id=\"userid\" placeholder=\"User Id\" class=\"form-control\"  formControlName=\"userid\"/>\n            </div>\n           \n          </div>  \n\n        <div class=\"row full-name-inputs\">\n            <div class=\"col-sm-6 input-group\">\n                <input type=\"text\" id=\"machinename\" placeholder=\"Machine Name\" class=\"form-control\"  formControlName=\"machinename\"/>\n              </div>\n          \n          \n            <div class=\"col-sm-6 input-group\">\n                <angular2-date-picker [(ngModel)]=\"evidencecaptureddate\" [settings]=\"dateSettings\" formControlName=\"evidencecaptureddate\"></angular2-date-picker>\n            </div>\n          </div>\n         \n  \n    </div>\n    <div class=\"form-group\">\n      <label for=\"screenshot\">Screenshots</label>\n      <input type=\"file\" id=\"screenshot\" (change)=\"onFileChange($event)\" #fileInput>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n    </div>\n    <button type=\"submit\" [disabled]=\"form.invalid || loading\" class=\"btn btn-success\">Submit <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n  </form>\n  </div>\n\n</nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/editors/upload-evidence/upload-evidence.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Serif;\n  font-weight: 500;\n  color: #ffffff; }\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n:host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n:host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #EC1A3A; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Serif;\n  font-weight: 500;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n"

/***/ }),

/***/ "./src/app/pages/editors/upload-evidence/upload-evidence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadEvidenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_entities_evidence__ = __webpack_require__("./src/app/@core/data/entities/evidence.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_services_evidence_service__ = __webpack_require__("./src/app/@core/data/services/evidence.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadEvidenceComponent = /** @class */ (function () {
    function UploadEvidenceComponent(fb, evidenceService) {
        this.fb = fb;
        this.evidenceService = evidenceService;
        this.evidencecaptureddate = new Date();
        this.evidence = new __WEBPACK_IMPORTED_MODULE_2__core_data_entities_evidence__["a" /* Evidence */]();
        this.dateSettings = {
            bigBanner: true,
            timePicker: false,
            format: 'MM-dd-yyyy',
            defaultOpen: false
        };
        this.loading = false;
        this.createForm();
    }
    UploadEvidenceComponent.prototype.ngOnInit = function () { };
    UploadEvidenceComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            transactionreferenceno: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            userid: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            machinename: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            evidencecaptureddate: null,
            screenshot: null
        });
    };
    UploadEvidenceComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            console.log(file_1);
            console.log('upload');
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.form.get('screenshot').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    };
    UploadEvidenceComponent.prototype.onSubmit = function () {
        var formModel = this.form.value;
        this.loading = true;
        // this.http.post('apiUrl', formModel)
        this.evidence.transactionReferenceNo = this.form.value.transactionreferenceno;
        this.evidence.capturedDateTime = new Date(this.form.value.evidencecaptureddate).toISOString();
        this.evidence.userId = this.form.value.userid;
        this.evidence.machineName = this.form.value.machinename;
        this.evidence.screenshots.push(this.form.value.screenshot.value);
        this.evidence.noOfEvidences = 1;
        this.evidenceService.saveEvidence(this.evidence)
            .subscribe(function (x) {
            console.log(x);
            alert('saved');
        });
        // setTimeout(() => {
        //   console.log(this.evidence);
        //   this.loading = false;
        // }, 1000);
    };
    UploadEvidenceComponent.prototype.clearFile = function () {
        this.form.get('screenshot').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UploadEvidenceComponent.prototype, "fileInput", void 0);
    UploadEvidenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'upload-evidence',
            template: __webpack_require__("./src/app/pages/editors/upload-evidence/upload-evidence.component.html"),
            styles: [__webpack_require__("./src/app/pages/editors/upload-evidence/upload-evidence.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__core_data_services_evidence_service__["a" /* EvidenceService */]])
    ], UploadEvidenceComponent);
    return UploadEvidenceComponent;
}());



/***/ })

});
//# sourceMappingURL=editors.module.chunk.js.map