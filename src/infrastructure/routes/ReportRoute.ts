import { Router } from "express";
import ReportResource from "../rest/ReportResourc";

const router = Router();

//Get all users
router.get("/", ReportResource.findAll);
router.post("/", ReportResource.create);
router.put("/", ReportResource.update);
router.put("/archive", ReportResource.archive);


export default router;
