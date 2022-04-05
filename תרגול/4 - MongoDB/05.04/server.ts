import express from 'express';
import mongoose from "mongoose";
import path from 'path';
const app = express();
const PORT: (string | number) = process.env.PORT || 4561;

//EJS
app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))
app.use(express.static(path.resolve(__dirname, 'public'))) //static folder
app.use(express.json())


//DATA CONNECT
try {
    mongoose.connect("mongodb+srv://KaKa:WO3sm2Hl7eXTMN0Y@cluster0.mfqlq.mongodb.net/fullStackOct2021", () => {
        console.log(`DATA CONNECTED`)
    })
} catch (err) {
    console.log(err)
}

app.get('/', (req, res) => {
    res.render('index', {
        name: "Shay"
    })
})

// app.use(/*....*/)
//LISTEN TO
app.listen(PORT, () => {
    return console.log(`Listening at http://localhost:${PORT}`);
});
