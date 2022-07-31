import mongoose from "mongoose";
import { UserSchema } from "./userModel";

export enum requestDirectionSchema {
    RECIEVED = 'recieved',
    SENT = 'sent'
}

export enum statusSchema {
    PENDING = 'pending',
    ANSWERED = 'answered'
}

const requestModel = new mongoose.Schema({
    //   selectingUserId: {
    //     type: String,
    //     required: true,
    //   },
    //   selectedUser: {
    //     email: String,
    //     name: {
    //       first: String,
    //       last: String,
    //     },
    //     image: String,
    //   },
    //   selected: Boolean,

    status: {
        type: String,
        enum: statusSchema,
        default: statusSchema.PENDING,
    },

    // sentTo: UserSchema,
    // sentFrom: UserSchema,


});



const requestSchema = mongoose.model("request", requestModel);

export default requestSchema;