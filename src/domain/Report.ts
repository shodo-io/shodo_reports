import {Client} from "./Client";
import {Score} from "./Score";
import {Project} from "./Project";
import {Interview} from "./Interview";
import {Schema} from "mongoose";

export class Report {

    constructor(
        public _id: Schema.Types.ObjectId,
        public date: Date,
        public consultant: string,
        public client: Client,
        public score: Score,
        public project: Project,
        public interview: Interview,
        public archived: boolean
    ) {
    }


}
