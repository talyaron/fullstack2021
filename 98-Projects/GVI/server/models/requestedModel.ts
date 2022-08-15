import mongoose from "mongoose";
import { UserSchema } from "./userModel";

const requestsUserSchema = new mongoose.Schema({
  userSendingRequestId: {
    type: String,
    required: true,
  },
  userSendingRequestDetails: {
    email: String,
    name: {
      first: String,
      last: String,
    },
    image: String,
  },
  userRecievingRequestId: {
    type: String,
    required: true,
  },
  userRecievingRequestDetails: {
    email: String,
    name: {
      first: String,
      last: String,
    },
    image: String,
  },
  requestText:{
    type: String,
  },
  sendingTheRequest: Boolean,
  recievigTheRequest: Boolean,
});

const requestsUsersModel = mongoose.model("requested-users", requestsUserSchema);

export default requestsUsersModel;
