import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    role: String
})

const Employee = mongoose.model('employeesDb', employeeSchema);

export default Employee;