import express = require("express");
const router = express.Router();

import {addUser,login, renderUser, renderPage, updateUser} from "../controller/userCont"

router
.post('/add-user', addUser)
.post('/log-in', login)
.get(`/logged-in-user`, renderUser)
.post('/nav', renderPage)
.patch('/settings', updateUser)
// .post('/passwordCheck', passwordCheck)
export default router;