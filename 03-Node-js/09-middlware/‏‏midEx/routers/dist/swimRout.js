"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var swimConts_1 = require("../conts/swimConts");
var swimerMid_1 = require("../middleWare/swimerMid");
router
    .post('/swimers', swimConts_1.addSwimer)
    .post('/login', swimerMid_1.isAdmin, swimConts_1.login)
    .post('/get-all-swimers', swimerMid_1.decodeAdmin, swimConts_1.getAllSwimers);
exports["default"] = router;
