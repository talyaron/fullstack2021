"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
var jwt_simple_1 = require("jwt-simple");
function isAdmin(req, res, next) {
    try {
        console.log('is Admin?');
        var swimers = req.cookies.swimers;
        if (!swimers)
            throw new Error("swimers cookies is missing");
        var secret = process.env.JWT_SECRET;
        var decoded = jwt_simple_1["default"].decode(swimers, secret);
        if (decoded.role === 'admin') {
            // req.role === 'admin'
            //req.id === decoded.id
            next();
        }
        else {
            res.status(403).send({ error: 'Swimer is not Auth' });
            next();
        }
    }
    catch (error) {
        console.log('error in isAdmin', error.message);
        res.send({ error: error.message });
    }
}
exports.isAdmin = isAdmin;
