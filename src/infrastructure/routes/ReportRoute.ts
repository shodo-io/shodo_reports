import { Router } from "express";
import ReportController from "../rest/ReportController";

const router = Router();

//Get all users
router.get("/", ReportController.listAll);


export default router;
