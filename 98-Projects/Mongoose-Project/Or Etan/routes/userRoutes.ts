import express = require("express");
const router = express.Router();

import {addUser,login, renderUser} from "../controller/userCont"

router
.post('/add-user', addUser)
.post('/log-in', login)
.get(`/logged-in-user`, renderUser)

export default router;