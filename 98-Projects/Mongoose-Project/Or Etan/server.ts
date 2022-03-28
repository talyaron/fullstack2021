import express from "express";
import mongoose from "mongoose";
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;
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
  gender: String,
});

const user = mongoose.model("users", UserSchema);

app.post("/add-user", async (req, res) => {
  console.log(req.body)
  try {
    let { firstName, lastName, email, password, role, gender } = req.body
if(firstName && lastName && email && password && role && gender) {
    const newUser = new user({ firstName, lastName, email, password, role, gender })
    console.log(newUser)
    const result = await newUser.save();
    res.send({ result });
    console.log(result)}
    else throw new Error(`You've missed something`)
  } catch (error) {

    console.error(error);
    res.send({ error: error.message });
    
  }
});

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  urgency: String,
  location: String,
  date: Date,
});

const task = mongoose.model("tasks", TaskSchema)

app.post("/log-in", async (req, res) => {
  let { email, password } = req.body;
  
  try {
    const users = await user.find({email: email}).collation({locale: 'en_US',strength:1})
    const verifiedUser = await user.find({email: email, password: password}).collation({locale: 'en_US',strength:1})
    
    if(users.length > 0) {
      if(verifiedUser.length === 1){
        res.send({ok:true, users, verifiedUser})

      
        return
      }
      res.send({aUser: true})
      }else{res.send({ok:false})}
      // const logingUser =  new User({email, password});
      
      
    } catch (error) {
      res.send({ error: error.message });
    }
    
  });

  app.post('/show-user'), async (req, res) => {
    
  }
  
  app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });
  export default router;
