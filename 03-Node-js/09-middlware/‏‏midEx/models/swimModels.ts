import mongoose from "mongoose";


const swimSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    role: String,
});

const Swimer = mongoose.model('swimMember', swimSchema)

export default Swimer;


