import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    }
})

  const user = mongoose.model('user', UserSchema)

  export default user;
