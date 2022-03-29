import express = require("express");
const router = express.Router();

import {addUser,login} from "../controller/userCont"

router
.post('/add-user', addUser)
.post('/log-in', login)


export default router;