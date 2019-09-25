"use strict";
exports.__esModule = true;
var Report_1 = require("../../src/domain/Report");
describe('Report instantiation', function () {
    var consultantName = 'Mister perfect';
    var date = new Date(2020, 8, 16);
    var objective1 = 'objective1';
    var objective2 = 'objective2';
    var objective3 = 'objective3';
    it('should instantiate a report with a date and the consultant name', function () {
        var report = new Report_1.Report(date, consultantName, [objective1, objective2, objective3]);
        expect(report.date).toBeDefined();
        expect(report.date).toStrictEqual(date);
        expect(report.consultant).toBeDefined();
        expect(report.consultant).toEqual(consultantName);
        expect(report.objectives).toBeDefined();
        expect(report.objectives).toStrictEqual(['objective1', 'objective2', 'objective3']);
    });
});
//# sourceMappingURL=Report.test.js.map