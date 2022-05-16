"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var booksController_1 = require("../controller/booksController");
router
    .get('/get-books', booksController_1.handleGetAllBooks)
    .post('/add-book', booksController_1.handleAddBook)
    .patch('/update-book', booksController_1.handleUpdateBook);
//.delete('/delete-book' , handleDelete)
// .get('/delete-everything' , deleteEverything)
exports["default"] = router;
