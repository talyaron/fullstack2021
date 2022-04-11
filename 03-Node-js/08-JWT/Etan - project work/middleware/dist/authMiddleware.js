"use strict";
exports.__esModule = true;
exports.requireAuth = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var secret = process.env.JWT_SECRET;
exports.requireAuth = function (req, res, next) {
    var token = req.cookies.currentUsersInfo;
    try {
        if (token) {
            jsonwebtoken_1["default"].verify(token, secret, function (err, decodedToken) {
                if (err) {
                    console.log('were not here');
                    console.log(err.message);
                    res.redirect('/index.html');
                }
                else {
                    console.log('were here');
                    next();
                }
            });
        }
        else if (token === undefined) {
            console.log('were done');
            res.redirect('/');
        }
    }
    catch (error) {
        res.redirect("/");
        console.log(error);
        res.send({ error: error.message });
    }
};
