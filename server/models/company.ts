import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * ICompany interface
 */
export interface ICompany {
    _id: string,
    addressId:string,
    name: string,
    phone: string,
    logo: string,
    website:string,
    bio: string,
}

/**
 * Company schema
 */
class CompanySchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<ICompany> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                addressId: { type: String, trim: true, required: [true, "id is required"] },
                name: {
                    type: String,
                    required: false,
                    trim: true,
                },
                phone: {
                    type: String,
                    required: false,
                    trim: true,
                },
                logo: {
                    type: String,
                    required: false,
                    max: 255,
                },
                website: {
                    type: String,
                    required: false,
                    trim: true,
                },
                bio: {
                    type: String,
                    required: false,
                    max: 255,
                },
            },
            { timestamps: true }
        );


        return schema
    }

}

const Company = model<ICompany>("companies", CompanySchema.schema);


// Export Mongoose model
export default Company;