"use strict";
exports.__esModule = true;
exports.hasFunds = void 0;
var jwt_simple_1 = require("jwt-simple");
function hasFunds(req, res, next) {
    var secret = process.env.JWT_SECRET;
    var price = req.body.price;
    var userInfo = req.cookies.userInfo;
    userInfo = jwt_simple_1["default"].decode(userInfo, secret);
    console.log("userFUnds:" + userInfo.funds + " price:" + price);
    if (userInfo.funds >= price) {
        console.log("buy");
        next();
    }
    else
        res.send("no funds");
}
exports.hasFunds = hasFunds;
