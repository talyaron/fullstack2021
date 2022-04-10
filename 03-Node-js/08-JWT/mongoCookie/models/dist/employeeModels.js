"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var employeeSchema = new mongoose_1["default"].Schema({
    name: String,
    password: String,
    email: String,
    role: String
});
var Employee = mongoose_1["default"].model('employeesDb', employeeSchema);
exports["default"] = Employee;
