import express, { json } from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://andrewLSHFY:s3Hz4045sYvAzjRn@cluster0.cybvt.mongodb.net/FS2021?retryWrites=true&w=majority');
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('users', UserSchema);

app.post('/add-user', async (req, res) => {
    let{ username, password } = req.body;
    const newUser = new User({username,password})
    const result = await newUser.save()

})


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
