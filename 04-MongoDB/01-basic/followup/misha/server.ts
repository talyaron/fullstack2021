import express from "express";
import mongoose from 'mongoose';
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//create a schema (interface)
const UserSchema = new mongoose.Schema({
  guitarname: String,
  price: String,
  brand: String,
})
//create a collection
const Guitar = mongoose.model('myGuitars', UserSchema);

app.post("/add-guitar", async (req, res) => {
  try {
    let { guitarname, price, brand } = req.body;
    const newGuitar = new Guitar({ guitarname, price, brand })
    const result = await newGuitar.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});


app.get("/get-guitars", async (req, res) => {
  try {

    const guitars = await Guitar.find({})
    res.send(guitars)

  }
  catch (error) {
    console.log(error.error);
    res.send({ error: error.message })
  }
})

app.patch("/update-guitar", async (req, res) => {
  try {

    const { guitarId, price } = req.body;
    if (guitarId && price) {
      const users = await Guitar.updateOne({ _id: guitarId }, { price: price })
    }
    else {
      throw new Error("guitarId or role is missing");
    }
  } catch (error) {
    res.send({ error: error.massage });
  }
  
})

app.delete("/delete-guitar", async (req, res) => {
  try {
    const { guitarId } = req.body
    if (guitarId) {
      const result = await Guitar.deleteOne({ _id: guitarId })
      res.send({ ok: true, result })
    } else{
      throw new Error("guitarId or role is missing");        
    }
  
  }catch (error){
    console.log(error.error)
    res.send({error: error.message})
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
