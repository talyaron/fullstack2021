import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://noachash:noach315323@cluster0.uvigw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})


const user = mongoose.model('users', UserSchema)

app.post('/add-user', async (req, res) => {
    let { username, password } = req.body;

    const newUser = new user({ username, password })
    const result = await newUser.save();

    res.send({ result })
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
