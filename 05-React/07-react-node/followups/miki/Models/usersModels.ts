import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema ({
    name: String,
    password: String,
    role: String,
})

const User = mongoose.model('users', usersSchema)

export default User;