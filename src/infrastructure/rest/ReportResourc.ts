import {Request, Response} from "express";
import * as reportRepository from '../repository/ReportRepository';
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
        ReportResource.updateReport(req, res, "updating report...", req.body);
    };

    static archive = async (req: Request, res: Response) => {
        ReportResource.updateReport(req, res, "archiving report...", {$set: {archived: true}});
    };

    private static updateReport(req: Request, res: Response, msg: string, body: any) {
        logger.debug(msg + req.body.toString());
        reportRepository.default.findByIdAndUpdate(req.body._id, body, {new: true, upsert: false}).then((modifiedReport) => {
            res.send(modifiedReport);
            res.status(200).end();
        }).catch((err) => {
            logger.error(err);
            res.send(err);
        });
    }
}

export default ReportResource;
