import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT: (string | number) = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

try {
    mongoose.connect(`mongodb+srv://artur121255:Ay211296@cluster0.vbho2.mongodb.net/test`, () => {
        console.log((`DATA CONNECTED`))
    })
} catch (err) {
    console.log(err)
}

const index = require('./routes/index')

app.use('/', index)

try {
    app.listen(PORT, () => {
        console.log((`Server listen on http://localhost:${PORT}`))
    })
} catch (err) {
    console.log(err)
}