import mongoose from "mongoose";
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
      console.log(books);
        res.send( books );//N render it 
      } catch (error) {
        console.log(error)
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
 
    // if(notAdmin){
    //   res.send({nAdmin:'you not admin'})
    // }

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
// export const handleDelete = async (req, res)=>{
//  try {
//    let {data} = req.body;

//    console.log(data);
   
   
//  } catch (error) {
//    res.send(error.message)
//  }
// }
// export const handleDelete = async (req, res) => {
//   try {
//     const { bookId } = req.body;// not get nothing 
//     const validID = bookId.replace(/\s+/g, '')
//     const isValid = mongoose.Types.ObjectId.isValid(validID)

//     console.log(bookId);
//     console.log(validID)
//     console.log(isValid)

//     if(isValid) {
//       await Book.findByIdAndDelete({"_id":validID},(err, docs)=>{
//         if (err){
//           console.log(err)
//       }
//       else{
//           console.log("Deleted : ", docs);
//         }
//       });
//     } else {
//       console.error('The id is not valid');
//     }
//   } catch (error) {
//     res.send(error.message)
//   }
// export const handleSort = (req, res) => {//we need to do sort to the value from DB

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

// }
// export const deleteEverything = async (req , res ) =>{
//   const books = await Book.deleteMany({name: 1 })
//   console.log(books);

//   res.send(books)
  
// }