import express from 'express';
import mongoose from "mongoose";
import color from "colors";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://alexroz:Uou8wsRDp2J0FImM@cluster0.x62d1.mongodb.net/songsApp?retryWrites=true&w=majority')

import userRoute from "./routes/userRoute";
app.use("/songsUser", userRoute);

// import songRoute from "./routes/songsRoute";
// app.use()

// const UserSchema = new mongoose.Schema({
//   searches: String,
//   topGenres: String,
  
//   })
// const spotifyApi = new mongoose.Schema({
  
//   })


// const User = mongoose.model('userdata', UserSchema)
// const spotify = mongoose.model('spotifydata', spotifyApi)






// app.get('/get-music', async (req,res)=>{
// const musicArchive = await songs.find({});
// res.send({ok:true, musicArchive})
// });




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(color.bgYellow.black(`Express is listening at http://localhost:${port}`));
});
