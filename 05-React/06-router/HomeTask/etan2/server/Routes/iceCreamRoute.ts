import express = require("express");
const router = express.Router();

import {searchImage} from '../Controllers/iceCreamCont'

router
.post('/final-form', searchImage)

export default router;