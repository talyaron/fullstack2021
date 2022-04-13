import exp from 'constants';
import { Router } from 'express'
const router = Router();
import { handleAddBook, handleGetAllBooks , handleSort ,handleDelete , handleUpdateBook } from '../controller/booksController'
router
    .get('/get-books', handleGetAllBooks)
    .post('/add-book', handleAddBook)
    .post('/sort-books',handleSort)
    .patch('/update-book' , handleUpdateBook )// to write
    .delete('/delete-book', handleDelete)
 
    export default router;