<<<<<<< HEAD
import Book  from "../models/bookModel";
export const handleGetAllBooks = async (req, res) => {
  const books = await Book.find({})
  // console.log(books);

=======
import { Book } from "../models/bookModel";
export const handleGetAllBooks = async (req, res) => {
  const books = await Book.find({})
>>>>>>> 1ca405c86a6b7748f75a8892b490a58717beaf84
  res.send(books);
}
export const handleAddBook = async (req, res) => {
  try {
    let { book } = req.body;

    if (book) {
<<<<<<< HEAD

      const newBook = new Book(book);//missing something here
      try {
        await newBook.save();
        const books = await Book.find({})
        res.send(books);//N render it 
      } catch (error) {
        console.log(error.message)
      }

=======
      console.log('before', book);

      const newBook = new Book(book);//missing something here
      try {
        const result = await newBook.save();
        console.log('after')
        res.send({ result });//N render it 
      } catch (error) {
        console.log(error)
      }
      // const result = await newBook.save();
>>>>>>> 1ca405c86a6b7748f75a8892b490a58717beaf84

    }
    else {
      throw new Error("book is und")
    }
  } catch (error) {
    console.error(res.send(error.message))
    res.send(error.message)
  }
}
<<<<<<< HEAD
export const handleUpdateBook = async (req, res) => {
  try {
    let { book , bookId } = req.body;
 

    if (book && bookId) {
      const booki =  await Book.updateOne({ _id: bookId }, { name: book.name , year:book.year ,  author: book.author });// {who you want to change},{with what you want to change}
     
      const books = await Book.find({})
      
      res.send({ok: true , books});
    } else {  
      throw new Error('id or book is missing');
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message })
  }
}
export const handleDelete = async (req, res) => {
  try {
    const { bookId } = req.body;// not get nothing 
    
    console.log(bookId);
    
    const books = await Book.deleteOne({ _id: bookId });// it'll found the same id 

    console.log(books);
    
      res.send({ ok:true ,  books })

  } catch (error) {
    res.send(error.message)
  }
}
=======
>>>>>>> 1ca405c86a6b7748f75a8892b490a58717beaf84
export const handleSort = (req, res) => {//we need to do sort to the value from DB

  // try {
  //   let { value } = req.body;


  //   if (value) {

  //     if (value === "descent") {

  //       booksSite.sortDes();
  //       res.send({ ok: true, booksSite })
  //     }
  //     else {
  //       booksSite.sortAsc();
  //       res.send({ ok: true, booksSite })
  //     }
  //   }

  // } catch (error) {
  //   res.send({ error })
  // }

<<<<<<< HEAD
}
=======
}
>>>>>>> 1ca405c86a6b7748f75a8892b490a58717beaf84
