import express = require("express");
const router = express.Router();

import {addUser, loginUser, searchUsers} from '../controller/userCont'

router
.post('/add-new-user', addUser)
.post('/login-user', loginUser)
.post('/search-users', searchUsers)

export default router;