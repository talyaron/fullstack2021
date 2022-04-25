"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var roomCont_1 = require("../controllers/roomCont");
router
    .post('/add-room', roomCont_1.addRoom)
    .get('/join-room', roomCont_1.joinRoom)
    .get('check-lie', roomCont_1.checkLie)
    .patch('/start-game', roomCont_1.StartRoomGame)
    .patch('/add-lie', roomCont_1.addLie)
    .patch('/update-answer', roomCont_1.updateAnswer);
exports["default"] = router;
