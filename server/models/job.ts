import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * IJobs interface
 */
export interface IJob {
    _id: string,
    companyId: string,
    position:string,
    salary:string,
    jobType: string,
    skillLevel: string,
    NumberApplied: number,
    description: string,
}

/**
 * Job schema
 */
class JobSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<IJob> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                companyId: { type: String, trim: true, required: [true, "companies id is required"] },
                position: {
                    type: String,
                    required: [true, "position is required"],
                    trim: true,
                },
                salary: {
                    type: String,
                    required: [true, "salary is required"],
                    trim: true,
                },
                jobType: {
                    type: String,
                    required: true,
                    trim: true,
                    enum: ['FULL-TIME', 'PART-TIME', 'CONTRACT'],
                },
                skillLevel: {
                    type: String,
                    required: true,
                    trim: true,
                    enum: ['BEGGINNER', 'PROFESSIONAL', 'EXPERT'],
                },
                NumberApplied: {
                    type: Number,
                    required: [true, "number applied is required"],
                    trim: true,
                },
                description: {
                    type: String,
                    required: [true, "description is required"],
                    trim: true,
                },
            },
            { timestamps: true }
        );


        return schema
    }

}

const Job = model<IJob>("jobs", JobSchema.schema);


// Export Mongoose model
export default Job;