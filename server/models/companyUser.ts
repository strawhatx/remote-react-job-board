import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * ICompanyUser interface
 */
export interface ICompanyUser {
    _id: string,
    userId:string,
    companyId: string,
}

/**
 * Company User schema
 */
class CompanyUserSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<ICompanyUser> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                userId: { type: String, trim: true, required: [true, "user id is required"] },
                companyId: { type: String, trim: true, required: [true, "company id is required"] },
            }
        );


        return schema
    }

}

const CompanyUser = model<ICompanyUser>("companieUsers", CompanyUserSchema.schema);


// Export Mongoose model
export default CompanyUser;