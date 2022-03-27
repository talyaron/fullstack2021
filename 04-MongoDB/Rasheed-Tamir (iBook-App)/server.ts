import express from 'express';
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());


mongoose.connect('mongodb+srv://rasheedj966:rashj050880@cluster0.vtqmf.mongodb.net/Books?retryWrites=true&w=majority');


const BooksSchema = new mongoose.Schema({
  coverImg: String,
  firstPageImg: String,
  firstPageChapter: String,
  firstPageHeadLine: String,
  firstPageContent:String,
  secendPageImg: String,
  secendPageChapter: String,
  secendPageHeadLine: String,
  secendPageContent:String,
  thirdPageImg: String,
  thirdPageChapter: String,
  thirdPageHeadLine: String,
  thirdPageContent:String,
  fourthPageImg: String,
  fourthPageChapter: String,
  fourthPageHeadLine: String,
  fourthPageContent:String,
  backCoverImg:String
  
});
const Book = mongoose.model('BookStore', BooksSchema);



// let books = [
//   {
     
//       coverImg: "https://kbimages1-a.akamaihd.net/93affabc-5161-421e-80d5-4477a07b8cee/1200/1200/False/harry-potter-and-the-philosopher-s-stone-3.jpg",
//       firstPageImg: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
//       firstPageChapter: "Chapter Two",
//       firstPageHeadLine: "The Vanishing Glass",
//       firstPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       secendPageImg: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4088/9781408845646.jpg",
//       secendPageChapter: "Chapter Two",
//       secendPageHeadLine: "The Vanishing Glass",
//       secendPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       thirdPageImg: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/20/1432157330734/3223f1e3-ed48-414f-b9f6-00c1470e33e9-1623x2040.jpeg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d679e69b7eb9826bd65caf6ac20e582c",
//       thirdPageChapter: "Chapter Two",
//       thirdPageHeadLine: "The Vanishing Glass",
//       thirdPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       fourthPageImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8J8TqNILqRSZC32ky2a6GXf4EhxYWziunw&usqp=CAU",
//       fourthPageChapter: "Chapter Two",
//       fourthPageHeadLine: "The Vanishing Glass",
//       fourthPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       backCoverImg: "https://fadutown.com/wp-content/uploads/2020/08/51kdIBI0MlL.jpg",  
//   },
//   {
     
//       coverImg: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg",
//       firstPageImg: "https://pictures.abebooks.com/isbn/9780747538486-fr.jpg",
//       firstPageChapter: "Chapter Two",
//       firstPageHeadLine: "The Vanishing Glass",
//       firstPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       secendPageImg: "https://images-na.ssl-images-amazon.com/images/I/51-gJbWc3qL._SX338_BO1,204,203,200_.jpg",
//       secendPageChapter: "Chapter Two",
//       secendPageHeadLine: "The Vanishing Glass",
//       secendPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       thirdPageImg: "https://pictures.abebooks.com/isbn/9780545582926-us.jpg",
//       thirdPageChapter: "Chapter Two",
//       thirdPageHeadLine: "The Vanishing Glass",
//       thirdPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       fourthPageImg: "https://images-na.ssl-images-amazon.com/images/I/51BtpajI9YL._SX498_BO1,204,203,200_.jpg",
//       fourthPageChapter: "Chapter Two",
//       fourthPageHeadLine: "The Vanishing Glass",
//       fourthPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",

//       backCoverImg: "https://m.media-amazon.com/images/I/5191isFAtRL._AC_SY1000_.jpg",  
//   },
//   {
      
//       coverImg: "https://img1.od-cdn.com/ImageType-100/3450-1/%7B93EF5C03-43F3-4050-A6DE-9E377FD107D9%7DImg100.jpg",
//       firstPageImg: "https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg",
//       firstPageChapter: "Chapter Two",
//       firstPageHeadLine: "The Vanishing Glass",
//       firstPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       secendPageImg: "https://static-01.daraz.com.np/p/e69c7318b213a3d8b7a2855431cece9e.jpg",
//       secendPageChapter: "Chapter Two",
//       secendPageHeadLine: "The Vanishing Glass",
//       secendPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       thirdPageImg: "https://cdna.artstation.com/p/assets/images/images/010/777/898/large/alan-vilalte-prisonerofazkaban.jpg?1526182197",
//       thirdPageChapter: "Chapter Two",
//       thirdPageHeadLine: "The Vanishing Glass",
//       thirdPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       fourthPageImg: "http://prodimage.images-bn.com/pimages/9781338299168_p0_v4_s1200x630.jpg",
//       fourthPageChapter: "Chapter Two",
//       fourthPageHeadLine: "The Vanishing Glass",
//       fourthPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       backCoverImg: "https://ae01.alicdn.com/kf/Ub9c6e192ad3249df824101dc585c140cz/HARRY-POTTER-3-PRISONER-BLOOMSBURY-3-7.jpg",  
//   },
//   {
      
//       coverImg: "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
//       firstPageImg: "https://m.media-amazon.com/images/I/51Vjb2qJwzL.jpg",
//       firstPageChapter: "Chapter Two",
//       firstPageHeadLine: "The Vanishing Glass",
//       firstPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       secendPageImg: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5455/9780545582957.jpg",
//       secendPageChapter: "Chapter Two",
//       secendPageHeadLine: "The Vanishing Glass",
//       secendPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       thirdPageImg: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5266/9781526610317.jpg",
//       thirdPageChapter: "Chapter Two",
//       thirdPageHeadLine: "The Vanishing Glass",
//       thirdPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       fourthPageImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554006152l/6.jpg",
//       fourthPageChapter: "Chapter Two",
//       fourthPageHeadLine: "The Vanishing Glass",
//       fourthPageContent: "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step but Privet Drive had hardly changed at all.The sun rose on the same tidy front gardens and lit up the brass numberfour on the Dursleys front door; it crept into their living room,which was almost exactly the same as it had been on the night whenMr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time hadpassed. Ten years ago there had been lots of pictures of whatlooked like a large pink beach ball wearing different-coloredbonnets  but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first",
//       backCoverImg: "https://m.media-amazon.com/images/I/519o4XzV0EL._AC_SY1000_.jpg",  
//   }
// ];



app.get("/get-books", async (req, res) => {
  const books = await Book.find({})

  res.send(books);
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
