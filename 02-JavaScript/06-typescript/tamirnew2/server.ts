import express from 'express';
import mongoose from 'mongoose'; 
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// החיבור לבסיס הנתונים 
mongoose.connect("mongodb+srv://tamirdadon:NipajRxgNw7Lb5M2@cluster0.ldffz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

// הסכמה שלפיה יהיה בנוי האובייקט
const UserSchema = new mongoose.Schema({
    username: String,
    age: String
})

// מפנה את המידע לזיכרון לפי השם של הזיכרון והסכמה
const User = mongoose.model('users', UserSchema)


let data = [
    { name: 'tamir', age: 22, id: uid() }
]

app.get('/get-data', (req, res) => {
    res.send(data);
});

app.post('/register', async (req, res) => {
    try {
        let { username, age } = req.body;
        const newUser = new User({ username, age })
        const results = await newUser.save()
        res.send({ results })
    } catch (error) {

    }
})

app.delete("/delete-data", (req, res) => {
    const { id } = req.body;
    if (id) {
        data = data.filter((data) => data.id !== id)
    }
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
