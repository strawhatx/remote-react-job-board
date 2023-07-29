import { model, Schema } from "mongoose"
import validator from 'validator';

/**
 * IMessage interface
 */
export interface IMessage {
    _id: string,
    userId: string,
    from:string,
    text: string,
}

/**
 * Message schema
 */
class MessageSchema {
    /**
     * Gets schema
     */
    static get schema() {
        var schema: Schema<IMessage> = new Schema(
            {
                _id: { type: String, trim: true, required: [true, "id is required"] },
                userId: { type: String, trim: true, required: [true, "users id is required"] },

                from: {
                    type: String,
                    required: [true, "street is required"],
                    trim: true,
                },
                text: {
                    type: String,
                    required: [true, "city is required"],
                    trim: true,
                },
            },
            { timestamps: true }
        );


        return schema
    }

}

const Message = model<IMessage>("messages", MessageSchema.schema);


// Export Mongoose model
export default Message;