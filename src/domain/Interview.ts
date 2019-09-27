import {QuestionAnswer} from "./QuestionAnswer";

export class Interview {

    constructor(
        public questionsAnswers: Array<QuestionAnswer>,
        public observation: string
    ) {
    }
}
