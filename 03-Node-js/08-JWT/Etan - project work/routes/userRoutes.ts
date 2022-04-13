import express = require("express");
const router = express.Router();

import {addUser,login, renderUser, renderPage, updateUser} from "../controller/userCont"
import {requireAuth} from "../middleware/authMiddleware"

router

.post('/add-user', addUser)
.post('/log-in', login)
.get(`/logged-in-user`,requireAuth, renderUser)
.post('/nav', requireAuth ,renderPage)
.patch('/settings',requireAuth, updateUser)
// .post('/passwordCheck', passwordCheck)
export default router;
