import mongoose from "mongoose";

// interface Article {
//   title: string,
//   articleText: string,
// }

export const articleSchema = new mongoose.Schema({
  article: [
    {
     title: String,
     articleText: String,             
    }
  ],
                         ///////////////// i need to change it to the array of ({text , articleText})
  // title:String, 
  // articleText:String,
  ownerId: String,
})
const Article = mongoose.model('article ', articleSchema);

export default Article;