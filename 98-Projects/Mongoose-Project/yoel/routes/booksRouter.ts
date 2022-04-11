import exp from 'constants';
import { Router } from 'express'
const router = Router();
import { handleAddBook, handleGetAllBooks,handleSort } from '../controller/booksController'
router
    .get('/get-books', handleGetAllBooks)
    .post('/add-book', handleAddBook)
    .post('/sort-books',handleSort)
 
    export default router;