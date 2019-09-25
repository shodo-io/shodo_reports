import {Report} from '../../src/domain/Report';


describe('Report instantiation', () => {
    const consultantName = 'Mister perfect';
    const date = new Date(2020, 8, 16);
    const objective1 = 'objective1';
    const objective2 = 'objective2';
    const objective3 = 'objective3';

    it('should instantiate a report with a date and the consultant name', () => {
        const report = new Report(date, consultantName, [objective1, objective2, objective3]);
        expect(report.date).toBeDefined();
        expect(report.date).toStrictEqual(date);
        expect(report.consultant).toBeDefined();
        expect(report.consultant).toEqual(consultantName);
        expect(report.objectives).toBeDefined();
        expect(report.objectives).toStrictEqual(['objective1', 'objective2', 'objective3']);
    });
});



