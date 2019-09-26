import {Router, Request, Response} from "express";
import reportRoute from "./ReportRoute";

const routes = Router();

routes.use("/reports", reportRoute);

export default routes;
