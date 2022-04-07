"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var employeeConts_1 = require("../conts/employeeConts");
router
    .post('/add-employees', employeeConts_1.addEmployee)
    .post('/get-employees', employeeConts_1.getEmployees)
    .post('/get-employee-decode', employeeConts_1.getDecodedEmp);
exports["default"] = router;
