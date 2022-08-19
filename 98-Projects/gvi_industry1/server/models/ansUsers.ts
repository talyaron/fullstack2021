import mongoose from "mongoose";


const ansUserSchema = new mongoose.Schema({
  selectingUserId: {
    type: String,
    required: true,
  },
  selectedUser: {
    email: String,
    name: {
      first: String,
      last: String,
    },
    image: String,
  },
  selected: Boolean,
});

const ansUsersModel = mongoose.model("answers", ansUserSchema);

export default ansUsersModel;
