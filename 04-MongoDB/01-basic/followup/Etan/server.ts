import express from "express";
import mongoose from "mongoose";
const app = express();
const port:any = process.env.PORT ||3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://EtanHey:Sjg1mUp0viKZJN4r@cluster0.gedel.mongodb.net/EtansUserDB?retryWrites=true&w=majority"
);

//create a schema (interface)
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthDate: String,
  role: String,
  username: String,
  password: String,
});
//create a collection
const User = mongoose.model("userList", UserSchema);

app.get("/get-users", async function (req, res) {
    try {
      const {logInUsername} = req.query;
      const {logInPassword} = req.query;

      console.log({logInUsername, logInPassword});
      
        console.log('hi');
      const userList = await User.find({username: logInUsername, password: logInPassword});
      res.send({ ok: true, userList });
    } catch (error) {
      console.error(error);
      res.send({ error: error.message });
    }
  });






app.post("/add-user", async (req, res) => {
  try {
    let admin = "EtanHey";
    let { firstName, lastName, birthDate, role, username, password } = req.body;
    console.log(birthDate);
    console.log(role);

    if (role === admin) {
      role = "admin";
    } else {
      role = "public";
    }
    const newUser = new User({
      firstName,
      lastName,
      birthDate,
      role,
      username,
      password,
    });
    const result = await newUser.save();

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

function logIn(logInUsername, logInPassword) {}