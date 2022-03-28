import express from 'express';
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://ohad2001:o2vQgwWe8chVrWAW@cluster0.q1pcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//create a schema (interface)
const UserSchema = new mongoose.Schema({
    pic: String,
    title:String,
    description:String,
    price:Number,
    category:String,
  })
  //create a collection
  const Product = mongoose.model('products', UserSchema);

app.post("/add-product", async (req, res) => {
    try {
      let { pic, title,description,price,category } = req.body;
      const newProduct = new Product({pic, title,description, price,category})
      const result = await newProduct.save()
      res.send({ result });
      
    } catch (error) {
      console.error(error);
      res.send({ error: error.message });
    }
  });


  app.get("/get-products", async (req, res) => {
    try {
  
      const products = await Product.find({})
      res.send({products});
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  });



  app.post("/add-cart", async (req, res) => {

    const {productId} = req.body;
     if(productId){
         const result = await Product.deleteOne({_id:productId});
         res.send({ok:true,result,})
     }

  });



  app.patch("/update-product", async (req, res) =>{
    try {
        const productId = req.body.gameId;
        const newImg = req.body.newImg;
        const newTitle= req.body.newTitle;
        if({productId}){
            const result = await Product.updateOne({_id:productId},{pic:newImg},{title:newTitle})
            const products = await Product.find({});
            res.send({ok: true, result, products});
        } else{
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
});

app.delete('/delete-product', async (req,res) => {
    try {
     const {productId} = req.body;
     if(productId){
         const result = await Product.deleteOne({_id:productId});
         const products = await Product.find({});
         res.send({ok:true,result,products})
     } else{
         throw new Error('product ID is missing')
     }
    } catch (error) {
        console.error(error);
        res.send({error: error.message})
    }
 });


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
