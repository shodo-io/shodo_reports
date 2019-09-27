import {Client} from "./Client";
import {Score} from "./Score";
import {QuestionAnswer} from "./QuestionAnswer";
import {Project} from "./Project";
import {Interview} from "./Interview";

export class Report {

    constructor(
        public date: Date,
        public consultant: string,
        public client: Client,
        public score: Score,
        public project: Project,
        public interview: Interview
    ) {
    }


}
