import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * Iuser interface
 */
export interface IUser {
    _id: string,
    addressId:string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    profileImage: string,
    bio: string,
    position: string,
    isSubscribed: boolean,
    role: string,
}

/**
 * User schema
 */
class UserSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<IUser> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                addressId: { type: String, trim: true, required: [true, "id is required"] },
                email: {
                    type: String,
                    //validate: [validator.isEmail, "Please provide a valid email address"],
                    required: [true, "email is required"],
                    unique: true,
                    trim: true,
                    lowercase: true
                },
                firstName: {
                    type: String,
                    required: false,
                    trim: true,
                },
                lastName: {
                    type: String,
                    required: false,
                    trim: true,
                },
                phone: {
                    type: String,
                    required: false,
                    trim: true,
                },
                position: {
                    type: String,
                    required: false,
                    trim: true,
                },
                profileImage: {
                    type: String,
                    required: false,
                    max: 255,
                },
                bio: {
                    type: String,
                    required: false,
                    max: 255,
                },
                isSubscribed: {
                    type: Boolean,
                    required: true,
                    default: false,
                },
                role: {
                    type: String,
                    required: true,
                    trim: true,
                    enum: ['DEVELOPER', 'COMPANY'],
                },
            },
            { timestamps: true }
        );


        return schema
    }

}

const User = model<IUser>("users", UserSchema.schema);


// Export Mongoose model
export default User;