import {Request, Response} from "express";
import * as reportRepository from '../repository/ReportRepository';
import {Report} from "../../domain/Report";
import logger from '../../util/logger';

class ReportResource {

    static findAll = async (req: Request, res: Response) => {
        reportRepository.default.find({}, (err, reports) => {
            if (err) {
                logger.error(err);
            } else {
                res.send(reports);
            }
        });
    };

    static create = async (req: Request, res: Response) => {
        logger.debug("saving report..." + req.body.toString());
        reportRepository.default
            .create(req.body)
            .then(() => {
                res.send('""');
                res.status(201).end();
            })
            .catch((err) => {
                logger.error(err);
                res.send(err);
            });
    };

    static update = async (req: Request, res: Response) => {
        ReportResource.updateReport(req, res, "updating report...", {archived: true});
    };

    static archive = async (req: Request, res: Response) => {
        ReportResource.updateReport(req, res, "archiving report...", {archived: true});
    };

    private static updateReport(req: Request, res: Response, msg: string, body: any) {
        logger.debug(msg + req.body.toString());
        const report: Report = req.body;
        reportRepository.default.findOneAndUpdate({_id: report._id}, {$set: body}, {new: false}, (err, updatedReport) => {
            if (err) {
                logger.error(err);
                res.send(err);
            }
            res.send(updatedReport);
            res.status(200).end();
        });

    }

}

export default ReportResource;
