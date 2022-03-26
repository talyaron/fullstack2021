import express from 'express';
import mongoose from "mongoose";
import color from "colors";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://alexroz:KwBuns8lVDNUTHhq@cluster0.x62d1.mongodb.net/spotifyApp?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://leon93:ym965874632541@cluster0.umet4.mongodb.net/spotifyApp?retryWrites=true&w=majority')
const UserSchema = new mongoose.Schema({
  searches: String,
  topGenres: String,
  
  })
const spotifyApi = new mongoose.Schema({
  searches: String,
  topGenres: String,
  
  })
const User = mongoose.model('userdata', UserSchema)
const spotify = mongoose.model('spotifydata', spotifyApi)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(color.bgYellow.black(`Express is listening at http://localhost:${port}`));
});
