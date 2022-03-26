import express from "express";
import mongoose from "mongoose";
const router = express.Router();
const app = express();
const port: number = 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://EtanHey:NI2nXMDwLdTiRScP@cluster0.gedel.mongodb.net/OrEtan?retryWrites=true&w=majority')

.then(()=>{console.log('connect to Mongoose')})
.catch(err=>{console.log(err.message)})

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
  firstName: String,
  lastName: String,
  img: String,
});

const User = mongoose.model("users", UserSchema);

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  urgency: String,
  location: String,
  date: Date,
});

const Task = mongoose.model("tasks", TaskSchema)

router.post("/log-in", async (req, res) => {
  let { email, password } = req.body;
  
  try {
    const users = await User.find({email: email, password: password}).collation({locale: 'en_US',strength:1})
    if(users.length > 0){
      res.send({ok:true, users})}
      else{res.send({ok:false})}
      // const logingUser =  new User({email, password});
      
      
    } catch (error) {
      res.send({ error: error.message });
    }
    
  });
  
  
  app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });
  export default router;