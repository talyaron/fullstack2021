import express from 'express';
import mongoose from 'mongoose';


const app = express()
const port = process.env.PORT || 4001;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI
 
const IceCreamSchema = new mongoose.Schema({

  flavorType:String,
  flavor:String,
  img:String

})
const IceCreams = mongoose.model("flavors", IceCreamSchema);

mongoose.connect(
    mongodb_uri
  ).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.error(err.message)
  });

  app.use(express.json())
  app.use(express.static('client/build'))

app.get('/', (req, res) => {
  res.send({text:'Hello World!'})
})

app.get('/api/iceCreamData',async(req,res)=>{
  try{
    const flavors = await IceCreams.find({})
    res.send({flavors,ok:true})
  }
  catch(error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
})
// app.get('/iceCreamDataOne',async(req,res)=>{
//   try{
//     const {IceCreamId}=req.params;
//     const flavor = await IceCreams.findOne({IceCreamId})
//     res.send({flavor,ok:true})
//   }
//   catch(error) {
//     console.log(error.error);
//     res.send({ error: error.message });
//   }
// })
app.get('/api/iceCreamCFlavor',async(req,res)=>{
  try{
    const {flavorType} = req.query;
    
    
    const flavorsTypec = await IceCreams.find({flavorType:"Chocolate"})
console.log(flavorsTypec);
    res.send({flavorsTypec,ok:true})
  }
  catch(error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
})
app.get('/api/iceCreamVFlavor',async(req,res)=>{
  try{
    const {flavorType} = req.query;
    
    
    const flavorsTypev = await IceCreams.find({flavorType:"Vanilla"})
console.log(flavorsTypev);
    res.send({flavorsTypev,ok:true})
  }
  catch(error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
})
app.get('/api/:IceCreamId', async(req,res)=>{
  try{
    const {IceCreamId}=req.params;
    console.log(IceCreamId);
    
    const flavorsId = await IceCreams.findById(IceCreamId)
    console.log(flavorsId);
    
    res.send({flavorsId,ok:true})
  }
  catch(error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
