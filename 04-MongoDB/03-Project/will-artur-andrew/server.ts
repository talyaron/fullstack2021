import express from "express";
import mongoose from "mongoose";

const app = express();
const port: (string | number) = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect(
    "mongodb+srv://Artur:Aya211296@cluster0.vbho2.mongodb.net/Learning?retryWrites=true&w=majority"
).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:')
    console.error(err.message)
});

const UsersSchema = new mongoose.Schema({
    userName: String,
    password: String,
    age: String
})
const User = mongoose.model("users",UsersSchema);

app.post('/login',  async(req, res) => {
    const {
        user,
        password
    } = req.body;
    console.log(user)
const userFound = await User.find({userName:user,password:password})

console.log(userFound);



    res.send(userFound);
});
app.post('/register',  async(req, res) => {
    const {
        user,
        password,
        age
    } = req.body;
    console.log(user)
const result = await User.create({userName:user,password:password,age:age})

console.log(result);



    res.send(result);
});











app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});