import express from 'express';
import mongoose from "mongoose";
import color from "colors";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://alexroz:Rmd3yuY2HtsotTxD@cluster0.x62d1.mongodb.net/spotifyApp?retryWrites=true&w=majority')

const UserSchema = new mongoose.Schema({
  searches: String,
  topGenres: String,
  
  })
const spotifyApi = new mongoose.Schema({
  // method: 'GET',
  // url: 'https://spotify23.p.rapidapi.com/search/',
  // params: {
  //   q: 'arcade fire',
  //   type: 'multi',
  //   offset: '0',
  //   limit: '10',
  //   numberOfTopResults: '5'
  // },
  // headers: {
  //   'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
  //   'X-RapidAPI-Key': 'bfca630f50msh9fbc18f37cdf463p18b09bjsn7f35bfc71860'
  // }
  
  })


const User = mongoose.model('userdata', UserSchema)
const spotify = mongoose.model('spotifydata', spotifyApi)






app.get('/get-music', async (req,res)=>{
const musicArchive = await spotify.find({});
res.send({ok:true, musicArchive})
});




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(color.bgYellow.black(`Express is listening at http://localhost:${port}`));
});
