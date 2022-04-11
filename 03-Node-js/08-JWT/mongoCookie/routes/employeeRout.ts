import express from 'express'
const router = express.Router()

import {addEmployee, getEmployees, getDecodedEmp} from '../conts/employeeConts'

router
.post('/add-employees', addEmployee)
.post('/get-employees', getEmployees)
.post('/get-employee-decode', getDecodedEmp)

export default router;