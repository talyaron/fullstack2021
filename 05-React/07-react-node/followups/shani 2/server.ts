import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 4000;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI

const IceCreamSchema= new mongoose.Schema({
  flavourType:String,
  name:String,
  img:String,

})
const IceCream = mongoose.model("flavors", IceCreamSchema);
mongoose.connect(
    mongodb_uri
  ).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.error(err.message)
  });

  app.use(express.json());
  app.use(express.static('client/build'));
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getIceCreams',async (req,res)=>{
  try {
    const flavors= await IceCream.find({})
    res.send({flavors,ok:true})
  
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})