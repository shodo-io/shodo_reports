export class Report {

    constructor(
        public date: Date,
        public consultant: string,
        public objectives: Array<string>,
    ) {
    }

    addObjectives(...objectives: string[]) {
        this.objectives = objectives;
    }
}
