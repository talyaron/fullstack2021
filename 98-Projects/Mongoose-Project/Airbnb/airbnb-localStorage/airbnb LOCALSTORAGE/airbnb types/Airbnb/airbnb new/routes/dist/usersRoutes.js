"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
// import { getUsers } from '../controler/usersCont'
var usersCont_1 = require("../controler/usersCont");
var usersCont_2 = require("../controler/usersCont");
// import { updateUser} from '../controler/usersCont'
// import { deleteUser} from '../controler/usersCont'
router
    // .get('/get-Users',getUsers)
    .post('/add-User', usersCont_1.registerUser)
    .post('/login', usersCont_2.login);
// .patch('/update-user',updateUser)
// .delete('/delete-user',deleteUser)
exports["default"] = router;
