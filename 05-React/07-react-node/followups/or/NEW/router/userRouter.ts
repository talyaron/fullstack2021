import express from 'express'
const router = express.Router()
import {addUser, getUsers} from '../control/userCont'

router
.get("/getUser", getUsers)
.post("/addUser", addUser)


export default router
