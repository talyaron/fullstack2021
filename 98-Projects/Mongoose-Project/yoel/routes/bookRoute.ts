import express from 'express'
const router = express.Router();
 
import {handleGetAllBooks , handleAddBook , handleUpdateBook , handleDelete }
from '../controller/booksController'

router
.get('/get-books' ,handleGetAllBooks )
.post('/add-book' , handleAddBook)
.patch('/update-book' , handleUpdateBook)
.delete('delete-book' , handleDelete)
// .get('/delete-everything' , deleteEverything)



export default router;