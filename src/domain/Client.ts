import {Interlocutor} from "./Interlocutor";

export class Client {

    constructor(
        public name: string,
        public description: string,
        public interlocutors: Array<Interlocutor>,
    ) {
    }



}
