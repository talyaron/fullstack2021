import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://rasheedj966:rashj050880@cluster0.vtqmf.mongodb.net/Books?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
  });
const BooksSchema = new mongoose.Schema({
  coverImg: String,
  firstPageImg: String,
  firstPageChapter: String,
  firstPageHeadLine: String,
  firstPageContent: String,
  secendPageImg: String,
  secendPageChapter: String,
  secendPageHeadLine: String,
  secendPageContent: String,
  thirdPageImg: String,
  thirdPageChapter: String,
  thirdPageHeadLine: String,
  thirdPageContent: String,
  fourthPageImg: String,
  fourthPageChapter: String,
  fourthPageHeadLine: String,
  fourthPageContent: String,
  backCoverImg: String,
});
const Book = mongoose.model("BookStore", BooksSchema);

app.get("/get-books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
