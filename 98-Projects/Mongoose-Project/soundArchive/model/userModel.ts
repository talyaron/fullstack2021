import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    role: String
})

const user = mongoose.model('user', UserSchema)

export default user;
