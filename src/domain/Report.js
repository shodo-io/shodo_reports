"use strict";
exports.__esModule = true;
var Report = /** @class */ (function () {
    function Report(date, consultant, objectives) {
        this.date = date;
        this.consultant = consultant;
        this.objectives = objectives;
    }
    Report.prototype.addObjectives = function () {
        var objectives = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objectives[_i] = arguments[_i];
        }
        this.objectives = objectives;
    };
    return Report;
}());
exports.Report = Report;
//# sourceMappingURL=Report.js.map