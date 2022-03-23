import express from "express";
import mongoose from "mongoose";
import color from "colors";

const app = express();
const PORT: (string | number) = process.env.PORT || 3535;

app.use(express.static("public"));
app.use(express.json());

try {
    mongoose.connect(`mongodb+srv://KaKa:WO3sm2Hl7eXTMN0Y@cluster0.mfqlq.mongodb.net/fullStackOct2021`, () => {
        console.log(color.bgGreen.black(`DATA CONNECTED`))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}

const index = require('./routes/index')

app.use('/', index)

try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on http://localhost:${PORT}`))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}