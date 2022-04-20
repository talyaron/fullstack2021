import mongoose from "mongoose"

const usernameSchema = new mongoose.Schema({
    name: {
        typeof: String,
        require: true
    },
    password: {
        typeof: String,
        require: true
    }
})
const User = mongoose.model('users', usernameSchema)
export default User;