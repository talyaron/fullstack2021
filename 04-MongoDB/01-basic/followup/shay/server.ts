import express from "express";
import mongoose  from 'mongoose';
const app = express();
const port: number = 3000;
app.use(express.static("public"));
app.use(express.json());
mongoose.connect('mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

const UserSchema = new mongoose.Schema({
    song:String,
    singer:String,
    photo:String,
    year:Number,
    type:String
})
const Songs = mongoose.model('songs',UserSchema);


 app.get('/getSong', async(req,res)=>{
   try{
     const songs = await Songs.find({})
     res.send({ok:true, songs})
   }
   catch (error) {
    console.error(error);
    res.send({ error: 'error in app.get/getSong' })

 }}) 
app.post('/addSong',async (req,res)=>{
try{
    let {song, singer, type, photo, year}=req.body
    const newSong = new Songs({song, singer, type, photo, year})
    const result = await newSong.save();
    res.send({ok:true, result})
}
catch(error){
console.error(error)
res.send({error:error.massage})
}
})
app.get('/getSongByType', async(req, res)=>{
  try{
    // const rbnb = await Songs.find({type:"rbnb"})
    // const pop = await Songs.find({type:"pop"})
    // const soul = await Songs.find({type:"soul"})
    // const country = await Songs.find({type:"country"})
    // const oldies = await Songs.find({type:"oldies"})
    // const jazz = await Songs.find({type:"jazz"})
    // const all = await Songs.find({type:"all"})
  
  //   if(rbnb){

    
  //   res.send({ok:true, rbnb})
  // }
  // else if(pop){
  //   res.send({ok:true, pop})
  // }
  // else if(soul){
  //   res.send({ok:true, soul})
  // }
  // else if(country){
  // res.send({ok:true, country})
  // }
  // else if(oldies){
  //   res.send({ok:true, oldies})
  // }
  // else if(jazz){
  //   res.send({ok:true, jazz})
  // }
  // else{
  //   res.send({ok:true, all})
  // }
  let types = await Songs.find({})
  res.send({ok:true, types})
}
  catch(error){
    console.log(error.error);
    res.send({error:error.massage})
    
  }
})
app.patch('/updateSong', async(req, res)=>{
  try{
    const {songId, song}=req.body;
    if(songId && song){
    const users = await Songs.updateOne({_id:songId},{song:song})
    res.send({ok:true, users})
  }
  else{
    throw new Error("userId or song is missing");
    
  }
  }
  catch(error){
    console.log(error.error);
    res.send({error:error.massage})
    
  }
})
app.delete("/deleteSong", async(req, res)=>{
  try{
    const {songId} = req.body
    console.log(songId);
    if(songId){
      const users = await Songs.deleteOne({_id:songId})
      res.send({ok:true, users})
    }
    else{
      throw new Error("userId or song is missing");
    }
    
  }
  catch(error){
    console.log(error.error);
    res.send({error:error.massage})
    
  }
})
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });