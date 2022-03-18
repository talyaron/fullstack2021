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
const User = mongoose.model('myUsers', UserSchema);

app.post("/add-user", async (req, res) => {
  try {
    let { username, password, role } = req.body;

    const newUser = new User({ username, password, role })
    const result = await newUser.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});


app.get("/get-users", async (req,res) => {

  try{

    const users = await User.find({role: 'admin'})
    res.send(users)

  }
  catch(error){
    console.log(error.error);
    res.send({error: error.message})
  }
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
