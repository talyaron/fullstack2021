import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

 import  mongoose from 'mongoose'
mongoose.connect('mongodb+srv://leon93:ym965874632541@cluster0.umet4.mongodb.net/LeonDB?retryWrites=true&w=majority');

app.use(express.static("public"));
app.use(express.json());

const UserSchema = new mongoose.Schema({
  name: String,
  password: String
})

const User = mongoose.model('usersDb', UserSchema)


app.post('/user', async (req, res) => {

  try {
      const {name, password} = req.body
      const newPrayer = new User({name, password})
      const data = await newPrayer.save()
      console.log(data);
      
      res.send(data)

      if (!name || !password) throw new Error("No name or password in app.post user");
      
  } catch (error) {
      console.error(error)
      res.send({error: error.message})
  }

});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
