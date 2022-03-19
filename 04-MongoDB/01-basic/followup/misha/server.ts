import express from "express";
import mongoose from 'mongoose';
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//create a schema (interface)
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  phone: String,
})
//create a collection
const Guitar = mongoose.model('myGuitars', UserSchema);

app.post("/add-user", async (req, res) => {
  try {
    let { username, password, role } = req.body;

    const newGuitar = new Guitar({ username, password, role })
    const result = await newGuitar.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});


app.get("/get-users", async (req, res) => {
  try {

    const guitars = await User.find({})
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
      const users = await User.updateOne({ _id: guitarId }, { price: price })
    }
    else {
      throw new Error("guitarId or role is missing");
    }
  } catch (error) {
    res.send({ error: error.massage });
  }
  
})

app.delete("/delete-guitar", async (req, res) => {
  console.log(req.body)
  try {
    const { userId } = req.body
    if (userId) {
      const users = await User.deleteOne({ _id: userId })
      res.send({ ok: true, users })
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
