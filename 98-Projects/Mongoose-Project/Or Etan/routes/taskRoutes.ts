import express = require("express");
const router = express.Router();

import {renderPage, getUsersTasks} from "../controller/taskCont"


router
.post('/nav', renderPage)
.get('/getTasks', getUsersTasks)


export default router;