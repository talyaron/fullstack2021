import express from "express";
import mongoose from "mongoose";
import color from "colors";

const app = express();
const PORT: (string | number) = process.env.PORT || 3535;

app.use(express.static("public"));
app.use(express.json());



try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on http://localhost:${PORT}`))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}