"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
var jwt_simple_1 = require("jwt-simple");
function isAdmin(req, res, next) {
    try {
        var userInfo = req.cookies.userInfo;
        if (!userInfo)
            throw new Error('"userInfo" cookie is missing in client request');
        var secret = process.env.JWT_SECRET;
        if (!secret)
            throw new Error("No secert in server");
        var decoded = jwt_simple_1["default"].decode(userInfo, secret);
        if (decoded.role === 'admin') {
            req.role = 'admin';
            req.id = decoded.id;
            next();
        }
        else {
            res.status(403).send({ error: 'User is not authorized for this path' });
        }
    }
    catch (error) {
        console.log("error in isAdmin", error.message);
        res.send({ error: error.message });
    }
}
exports.isAdmin = isAdmin;
