import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://chaim14:82148214cc@cluster0.ar8tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  phone: String,
});
const User = mongoose.model("users", UserSchema);

app.post("/add-user", async (req, res) => {
  try {
    let { username, password } = req.body;

    const newUser = new User({ username, password });
    const result = await newUser.save();

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.get("/get-users", async (req, res) => {
  try {

    const users = await User.find({})
    res.send({ ok: true, users });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
});

app.patch("/update-user", async (req, res) => {
  try {
    const { userId, role } = req.body;
    if (userId && role) {
      const users = await User.updateOne({_id:userId},{role: role})
      res.send({ ok: true, users });
    } else {
      throw new Error("userId or role is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
});

app.patch("/delete-user", async (req, res) => {
  try {
    const { userId } = req.body;
    if (userId) {
      const users = await User.deleteOne({_id:userId})
      res.send({ ok: true, users });
    } else {
      throw new Error("userId or role is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
});


app.delete("/delete-user", async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId)
    if (userId) {
      const users = await User.deleteOne({_id:userId})
      res.send({ ok: true, users });
    } else {
      throw new Error("userId or role is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
