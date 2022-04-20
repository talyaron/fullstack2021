import Book  from "../models/bookModel";
export const handleGetAllBooks = async (req, res) => {
  const books = await Book.find({})
  // console.log(books);

  res.send(books);
}
export const handleAddBook = async (req, res) => {
  try {
    let { book } = req.body;

    if (book) {

      const newBook = new Book(book);//missing something here
      try {
        await newBook.save();
        const books = await Book.find({})
        res.send(books);//N render it 
      } catch (error) {
        console.log(error.message)
      }


    }
    else {
      throw new Error("book is und")
    }
  } catch (error) {
    console.error(res.send(error.message))
    res.send(error.message)
  }
}
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

}
