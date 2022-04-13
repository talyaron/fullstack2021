import { Book } from "../models/bookModel";
export const handleGetAllBooks = async (req, res) => {
  const books = await Book.find({})
  res.send(books);
}
export const handleAddBook = async (req, res) => {
  try {
    let { book } = req.body;

    if (book) {
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

    }
    else {
      throw new Error("book is und")
    }
  } catch (error) {
    console.error(res.send(error.message))
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