"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var drawCont_1 = require("../controllers/drawCont");
router
    .post('/add-drawing', drawCont_1.addDrawing)
    .get('/get-user-avatars', drawCont_1.getUserDrawings)
    .get('/get-room-drawings', drawCont_1.getRoomDrawings)
    .patch('/set-user-avatar', drawCont_1.setUserAvatar)["delete"]('/delete-user-avatar', drawCont_1.deleteAvatar);
exports["default"] = router;
