import express = require("express");
const router = express.Router();

import {addUser, loginUser} from '../controller/userCont'

router
.post('/add-new-user', addUser)
.post('/login-user', loginUser)

export default router;