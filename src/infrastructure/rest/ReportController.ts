import {Request, Response} from "express";
// import { getRepository } from "typeorm";
// import { validate } from "class-validator";
import * as reportRepository from '../repository/ReportRepository';

class ReportController {

    static listAll = async (req: Request, res: Response) => {
        const reports = await reportRepository.default.find();
        res.send(reports);
    };
}

export default ReportController;
