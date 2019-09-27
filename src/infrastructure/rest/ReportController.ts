import {Request, Response} from "express";
// import { getRepository } from "typeorm";
// import { validate } from "class-validator";
import * as reportRepository from '../repository/ReportRepository';
import {Report} from "../../domain/Report";
import logger from '../../util/logger';

class ReportController {

    static findAll = async (req: Request, res: Response) => {
        reportRepository.default.find({}, (err, reports) => {
            if (err) {
                logger.error(err);
            } else {
                res.send(reports);
            }
        });
    };

    static save = async (req: Request, res: Response) => {
        reportRepository.default
            .create(req.body)
            .then(() => {
                res.send('""');
                res.status(201).end();
            })
            .catch((err) => {
                logger.error(err);
            });
    };


}

export default ReportController;
