"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var loginMiddleware_1 = require("../middlewares/loginMiddleware");
var userCont_1 = require("../controllers/userCont");
var reqMessageCont_1 = require("../controllers/reqMessageCont");
router
    .post('/add-user', userCont_1.addUser)
    .post('/login', userCont_1.login)
    .get('/get-filter', userCont_1.getFilter)
    .post('/get-users', userCont_1.getUsers)
    .post('/get-all-recipients', userCont_1.getAllRecipients)
    .get('/get-user', userCont_1.getUser)
    .post('/get-search', userCont_1.getSearch)
    .post('/selected-users', userCont_1.selectUser)
    .post('/requested-users', userCont_1.requestUser)
    .post('/requested-messages', reqMessageCont_1.requestMessage)
    .post('/requested-answered', userCont_1.requestAnsUser)
    .get('/get-selecteing-user', userCont_1.getSelectingUser)
    .post('/get-LoggedIn-Profile', userCont_1.getLoggedInProfile)
    .get('/admin-getAllUsers', loginMiddleware_1.isAdmin, userCont_1.adminGetAllUsers)
    .post('/get-selected-users', userCont_1.getSelectedUser)
    .post('/get-sent-request-users', userCont_1.getRequestedUser)
    .post('/get-sent-ans-users', userCont_1.getAnsReqUser)
    .post('/get-mentee-mentor-requests', userCont_1.mentee_mentor_users_req)
    .post('/get-menteeMentor-requests', userCont_1.getRequestUsers)
    //.post ('/request-answer',requestAnsUser )
    .post('/get-userById', userCont_1.getUserProfile)
    .post('/updateUserDetails', userCont_1.updateUserDetails)
    .post('/flags', userCont_1.addFlags);
// .post('/changeProfileImage',changeProfileImage)
exports["default"] = router;
