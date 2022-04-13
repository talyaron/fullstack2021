import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());



mongoose.connect('mongodb+srv://chaim14:82148214cc@cluster0.ar8tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connect('mongodb+srv://chaim14:82148214cc@cluster0.ar8tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log("conected to database"))
  .catch(err => console.log(err.message))

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const User = mongoose.model("users", UserSchema);
app.post('/add-users', async (req, res) => {

  try {
    // let { username, password } = req.body; אתה שולח מהקליינט name
    let { name, password } = req.body;

    console.log(name, password) //כאן זה לוודא שאתה מקבל משתנים נכונים
    const newUser = new User({ username: name, password });
    const result = await newUser.save();

    res.send({ result });
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
});

app.get('/get-users', async (req, res) => {
  try {
    // if (!req.body) throw new Error('no req'); //אין צורך הבדיקה הזאת
    const users = await User.find({})
    // if (!req.body) throw new Error('no req');
    res.send({ ok: true, users });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
});


// app.patch("/delete-user", async (req, res) => {
//   try {
//     const { userId } = req.body;
//     if (userId) {
//       const users = await User.deleteOne({_id:userId})
//       res.send({ ok: true, users });
//     } else {
//       throw new Error("userId or role is missing");
//     }
//   } catch (error) {
//     console.log(error.error);
//     res.send({ error: error.message });
//   }
// });


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
})
>>>>>>> main
