import mongoose, {Schema, Document, Types} from 'mongoose';
import {Client} from "../../domain/Client";
import {Score} from "../../domain/Score";
import {Project} from "../../domain/Project";
import {QuestionAnswer} from "../../domain/QuestionAnswer";

export interface IReport extends Document {
    date: Date,
    consultant: string,
    client: Client,
    score: Score,
    project: Project,
    interview: Array<QuestionAnswer>
}

const reportSchema: Schema = new Schema({
    _id: {type: Schema.Types.ObjectId},
    date: {type: Date, required: true, unique: true},
    consultant: {type: String, required: true},
    client: {
        type: {
            name: String,
            description: String,
            interlocutors: [{
                type: {
                    firstName: String,
                    lastName: String,
                    position: String,
                }}]
            ,
        }, required: true
    },
    score: {
        type: {
            note: Number,
            goodPoints: [{
                type: String
            }],
            negativePoints: [{
                type: String
            }]
        }
    },
    project: {
        technicalEnvironment: String,
        shortProjectDescription: String,
        longProjectDescription: String,
    },
    interview: {
        questionsAnswers: {
            type: [{
                question: String,
                answer: String,
            }]
        },
        observation: String,
        codingGame: String
    },
    archived: {type: String}
});

export default mongoose.model<IReport>('reports', reportSchema);
