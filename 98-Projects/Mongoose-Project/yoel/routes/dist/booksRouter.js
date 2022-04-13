"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var booksController_1 = require("../controller/booksController");
router
    .get('/get-books', booksController_1.handleGetAllBooks)
    .post('/add-book', booksController_1.handleAddBook)
    .post('/sort-books', booksController_1.handleSort)
    .patch('/update-book', booksController_1.handleUpdateBook) // to write
["delete"]('/delete-book', booksController_1.handleDelete);
exports["default"] = router;
