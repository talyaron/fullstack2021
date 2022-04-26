"use strict";
exports.__esModule = true;
exports.getId = exports.isAdmin = void 0;
var jwt_simple_1 = require("jwt-simple"); //because we need to decode the cookies.
//first of all we need to "deconstacor" the cookies out //26/4/22
function isAdmin(req, res, next) {
    try {
        var userInfo = req.cookies.userInfo;
        var secret = process.env.JWT_SECRET; // if I want to use something in the .ENV I need to write "process.env.___"
        if (!secret)
            throw new Error('there is not secret in the server');
        if (!userInfo)
            throw new Error('userInfo cookie is missing'); // it's important to add that
        var decode = jwt_simple_1["default"].decode(userInfo, secret);
        if (decode.role === 'admin') { //?
            req.role = 'admin'; //if I want to use it in the following function 
            next();
        }
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.isAdmin = isAdmin;
function getId(req, res, next) {
    try {
        var userInfo = req.cookies.userInfo;
        var secret = process.env.JWT_SECRET;
        if (!secret)
            throw new Error(' secret  is missing'); // it's important to add that
        var decode = jwt_simple_1["default"].decode(userInfo, secret);
        var id = decode.id; // important!! I dont think I save it so it's only for Example 
        if (id) {
            req.id = id; // after that the next function can use it too
        }
        next(); //impotant!! beacuse only after that he can move on // without that he won't move on    
    }
    catch (error) {
        console.log(error.message);
        next(); // because we won't destroy everything if won't get the id // we don't have a problem if we not get it 
    }
}
exports.getId = getId;
