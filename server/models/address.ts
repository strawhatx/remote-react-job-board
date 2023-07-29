import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * IAddress interface
 */
export interface IAddress {
    _id: string,
    type: string,
    street: string
    city: string,
    state: string,
    country: string,
    phone: string,
    zip: string
}

/**
 * Address schema
 */
class AddressSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<IAddress> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                type: {
                    type: String,
                    required: true,
                    trim: true,
                    enum: ['HOME', 'BILLING'],
                },
                street: {
                    type: String,
                    required: [true, "street is required"],
                    trim: true,
                },
                city: {
                    type: String,
                    required: [true, "city is required"],
                    trim: true,
                },
                state: {
                    type: String,
                    required: [true, "state is required"],
                    trim: true,
                },
                country: {
                    type: String,
                    required: [true, "country is required"],
                    trim: true,
                },
                zip: {
                    type: String,
                    required: [true, "zip code is required"],
                    trim: true,
                },

            },
            { timestamps: true }
        );


        return schema
    }

}

const Address = model<IAddress>("addresses", AddressSchema.schema);


// Export Mongoose model
export default Address;