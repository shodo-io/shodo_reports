import {Report} from '../../src/domain/Report';
import {Schema} from "mongoose";

describe('Report instantiation', () => {

    const testReport = {
        date: new Date(2020, 8, 16),
        consultant: 'Mister perfect',
        client: {
            name: 'OneWealthPlace',
            description: 'OneWealthPlace est  un éditeur de logiciels. Ils commercialisent 4 logiciels : \n' +
                '    • AirWealth : Gestion de relation client  (CRM) + portail client avec gestion personnalisée de la clientèle\n' +
                '    • AirFund : Plateforme collaborative de gestion des données de fonds basée sur la Blockchain\n' +
                '    • AirDistrib : Application destinée aux sociétés de gestion de portefeuille → Industrialisation des processus liés à la distribution des fonds des sociétés.\n' +
                '    • AirPM : Gestion des ordres et des positions (OMS/PMS) dédié aux sociétés de gestion',
            interlocutors: [
                {
                    firstName: 'Tom',
                    lastName: 'HANKS',
                    position: 'PO'
                },
                {
                    firstName: 'Nathalie',
                    lastName: 'PORTMAN',
                    position: 'Lead Dev'
                },
                {
                    firstName: 'Angelina',
                    lastName: 'JOLIE',
                    position: 'Architecte technique'
                }
            ]
        },
        score: {
            note: 4,
            goodPoints: ['Technologies hétérogènes et stack technique moderne, méthodologie agile, conditions ' +
            'de travail confortables et besoin de mise en place de bonnes pratiques'],
            negativePoints: ['Equipe de dév très peu nombreuse et un seul architecte qui décide de l’archi des applications.']
        },
        project: {
            technicalEnvironment: 'Fullstack : \n' +
                '    • Kotlin et java, plusieurs autres langages tels que Go, Kotlin. Web Services Rest et GraphQL, Micro-services \n' +
                '    • NodeJS avec serverless\n' +
                '    • Solution Cloud interne (GCP et OnPremise + OVH)',
            shortProjectDescription: 'Gestion de la relation client et des ordres et positions dédiés aux sociétés ' +
                'gestion (B2B) avec une partie sur la personnalisation (étude clients)',
            longProjectDescription: '→ L’entretien a duré qu’une heure. Les recruteurs m’ont brièvement présenté les projet. \n' +
                '\n' +
                'Le projet a commencé il ya deux ans, en 2017. Au début, ils voulaient allez assez vite et ont fait appel ' +
                'à des prestataires pour délivrer rapidement. Après la commercialisation, ils ont recruté et se sont ' +
                'retrouvé qu’avec des personnes en interne. \n' +
                '\n' +
                'Maintenant, ils veulent investir dans les bonnes pratiques et diminuer la dette technique et font donc' +
                'appel à de la prestation pour intervenir en tant que dév sénior sur les projets. '
        },
        interview:
            {
                questionsAnswers: [
                    {
                        question: 'Qu’est ce que le BDD ?',
                        answer: 'approche favorisant la communication entre les différents ' +
                            'acteurs d’une equipe (Métier ↔ Techs). J’ai dit également qu’ils s’agissait de spécifications exécutables  ' +
                            'en expliquant que les dans « spécifications », on pouvait parler de com et de besoin et dans ' +
                            '« exécutables » on peut parler de code et de développement d’application.'
                    }
                ],
                observation: '',
                codingGame: ''
            },
        archived: false
    };

    it('should instantiate complete report', () => {
        const report = new Report(testReport.date, testReport.consultant, testReport.client,
            testReport.score, testReport.project, testReport.interview, false);

        expect(report.date).toStrictEqual(testReport.date);
        expect(report.consultant).toEqual(testReport.consultant);
        expect(report.client.name).toStrictEqual(testReport.client.name);
        expect(report.client.description).toStrictEqual(testReport.client.description);
        expect(report.client.interlocutors).toMatchSnapshot(testReport.client.interlocutors);
        expect(report.score.note).toStrictEqual(testReport.score.note);
        expect(report.score.goodPoints).toMatchSnapshot(testReport.score.goodPoints);
        expect(report.score.negativePoints).toMatchSnapshot(testReport.score.negativePoints);
        expect(report.project.technicalEnvironment).toStrictEqual(testReport.project.technicalEnvironment);
        expect(report.project.longProjectDescription).toStrictEqual(testReport.project.longProjectDescription);
        expect(report.project.shortProjectDescription).toStrictEqual(testReport.project.shortProjectDescription);
        expect(report.interview).toStrictEqual(testReport.interview);

    });
});



