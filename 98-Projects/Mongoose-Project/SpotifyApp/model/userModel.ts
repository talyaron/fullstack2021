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

  const User = mongoose.model('songsUser', UserSchema)

  export default User;
