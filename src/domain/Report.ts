import {Client} from "./Client";
import {Score} from "./Score";
import {Interview} from "./Interview";
import {Project} from "./Project";

export class Report {

    constructor(
        public date: Date,
        public consultant: string,
        public client: Client,
        public score: Score,
        public project: Project,
        public interview: Array<Interview>
    ) {
    }


}
