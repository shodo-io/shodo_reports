import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import mongo from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

//const MongoStore = mongo(session);

// Create Express server
const app = express();

// Connect to MongoDB
//const mongoUrl = MONGODB_URI;
//mongoose.Promise = bluebird;

/*mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true } ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined.  },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});
*/
// Express configuration
app.set("port", process.env.PORT || 3000);

/**
 * Primary app routes.
 */
//app.get("/", homeController.index);

export default app;
