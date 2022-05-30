import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: String,
    password: String,
})

const Employee = mongoose.model('Employee', EmployeeSchema)

export default Employee